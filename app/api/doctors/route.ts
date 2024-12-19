import { NextRequest, NextResponse } from 'next/server';

const getApiUrl = (href: string) => href.replace('0/api', '4').replace('?id=', '/') + '/';

export async function GET(request: NextRequest) {
  const { searchParams, href } = await new URL(request.url);
  const id = searchParams.get('id') || '';

  try {
    const response = await fetch(getApiUrl(href));
    const data = await response.json();
    return NextResponse.json({ message: 'Success', data });
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const { href } = new URL(request.url);
  try {
    const body = await request.json();
    await fetch(getApiUrl(href), {
      method: request.method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    return NextResponse.json({ message: 'Success', data: body });
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const { href } = new URL(request.url);
  try {
    const body = await request.json();
    const response = await fetch(getApiUrl(href) + body.id, {
      method: request.method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    return NextResponse.json({ message: 'Success', data: body });
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const { href } = new URL(request.url);
  try {
    const body = await request.json();
    await fetch(getApiUrl(href) + body.id, {
      method: request.method,
    });

    const response = await fetch(getApiUrl(href));
    const data = await response.json();
    return NextResponse.json({ message: 'Success', data });
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
