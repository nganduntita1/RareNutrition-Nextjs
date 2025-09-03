import { NextRequest, NextResponse } from 'next/server';

const YOCO_SECRET_KEY = process.env.YOCO_SECRET_KEY;
const YOCO_API_URL = 'https://payments.yoco.com/api/checkouts';

// Check if we're using live keys (live keys start with 'sk_live_' or 'pk_live_')
const isUsingLiveKeys = YOCO_SECRET_KEY?.startsWith('sk_live_');

export async function POST(request: NextRequest) {
  try {
    const { amount, currency, idempotencyKey } = await request.json();

    if (!amount || !currency) {
      return NextResponse.json(
        { message: 'Amount and currency are required' },
        { status: 400 }
      );
    }

    // Call Yoco API to create a checkout session
    const response = await fetch(YOCO_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${YOCO_SECRET_KEY}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': idempotencyKey || `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`,
      },
      body: JSON.stringify({
        amount,
        currency,
        successUrl: isUsingLiveKeys 
          ? `${request.nextUrl.origin}/checkout/success`.replace('http://', 'https://')
          : `${request.nextUrl.origin}/checkout/success`,
        cancelUrl: isUsingLiveKeys 
          ? `${request.nextUrl.origin}/checkout/cancel`.replace('http://', 'https://')
          : `${request.nextUrl.origin}/checkout/cancel`,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Yoco API error:', errorData);
      return NextResponse.json(
        { message: 'Payment gateway error', details: errorData },
        { status: response.status }
      );
    }

    const checkoutSession = await response.json();
    return NextResponse.json(checkoutSession);
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { message: 'Internal server error', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}