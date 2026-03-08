import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

// Use the exact env vars provided by Vercel KV integration
const redis = process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
  ? new Redis({
      url: process.env.KV_REST_API_URL,
      token: process.env.KV_REST_API_TOKEN,
    })
  : null;

let mockMessages: any[] = [];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = {
      id: crypto.randomUUID(),
      agent: body.agent || 'System',
      role: body.role || 'user',
      content: body.content || '',
      timestamp: new Date().toISOString(),
    };

    if (redis) {
      await redis.lpush('swarm_messages', message);
      await redis.ltrim('swarm_messages', 0, 99);
    } else {
      mockMessages.unshift(message);
      if (mockMessages.length > 100) mockMessages.pop();
    }

    return NextResponse.json({ success: true, message });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to process message' }, { status: 400 });
  }
}

export async function GET() {
  try {
    if (redis) {
      const messages = await redis.lrange('swarm_messages', 0, 99);
      return NextResponse.json({ messages });
    } else {
      return NextResponse.json({ messages: mockMessages });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch messages' }, { status: 500 });
  }
}

export async function DELETE() {
  if (redis) {
    await redis.del('swarm_messages');
  } else {
    mockMessages = [];
  }
  return NextResponse.json({ success: true });
}
