#!/bin/bash
export VERCEL_APP_URL="https://swarm-viewer-d5c10e77o-spokbee-1739s-projects.vercel.app/api/messages"

echo "Starting Claude Swarm and piping telemetry to $VERCEL_APP_URL"
echo "Note: If Vercel SSO protection is enabled, telemetry might be blocked."
echo "You can view the UI at: https://swarm-viewer-d5c10e77o-spokbee-1739s-projects.vercel.app"

claude -p "$1" | python3 swarm_telemetry.py "$VERCEL_APP_URL" "Claude Swarm"
