import sys
import json
import urllib.request
import re
import select

API_URL = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:3000/api/messages'
AGENT_NAME = sys.argv[2] if len(sys.argv) > 2 else 'Claude Code Swarm'

def send_message(content):
    if not content.strip():
        return
    data = json.dumps({
        "agent": AGENT_NAME,
        "content": content
    }).encode('utf-8')
    req = urllib.request.Request(API_URL, data=data, headers={'Content-Type': 'application/json'})
    try:
        urllib.request.urlopen(req)
    except Exception as e:
        print(f"Failed to send telemetry: {e}", file=sys.stderr)

buffer = []
# Non-blocking read or line-by-line read
for line in sys.stdin:
    # Print to console as well
    sys.stdout.write(line)
    sys.stdout.flush()
    
    clean_line = re.sub(r'\x1B(?:[@-Z\\-_]|\[[0-?]*[ -/]*[@-~])', '', line)
    
    if clean_line.strip() == "":
        continue

    buffer.append(clean_line)
    
    # Send chunks
    if len(buffer) >= 5 or "Task completed" in clean_line:
        send_message("".join(buffer))
        buffer = []

if buffer:
    send_message("".join(buffer))
