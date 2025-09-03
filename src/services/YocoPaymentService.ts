'use client';

/**
 * Yoco Payment Service
 * Handles interactions with Yoco Payment Gateway
 */

const YOCO_PUBLIC_KEY = 'pk_test_7813b32f49KwGevf3cf4';
const YOCO_API_URL = 'https://payments.yoco.com/api/checkouts';

interface CheckoutResponse {
  id: string;
  redirectUrl: string;
}

interface PaymentResult {
  success: boolean;
  error?: string;
  checkoutId?: string;
  redirectUrl?: string;
}

/**
 * Creates a checkout session with Yoco
 * @param amount - The amount to charge in cents (ZAR)
 * @returns Promise with payment result
 */
export const createCheckoutSession = async (amount: number): Promise<PaymentResult> => {
  try {
    // Generate a unique idempotency key based on timestamp and random string
    const idempotencyKey = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
    
    const response = await fetch('/api/payment/create-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amount, // Already in cents
        currency: 'ZAR',
        idempotencyKey,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        error: errorData.message || 'Failed to create checkout session',
      };
    }

    const data = await response.json() as CheckoutResponse;
    return {
      success: true,
      checkoutId: data.id,
      redirectUrl: data.redirectUrl,
    };
  } catch (error) {
    console.error('Payment error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown payment error',
    };
  }
};

/**
 * Redirects to Yoco checkout page
 * @param redirectUrl - The URL provided by Yoco checkout session
 */
export const redirectToCheckout = (redirectUrl: string): void => {
  window.location.href = redirectUrl;
};

/**
 * Processes a payment directly
 * @param amount - The amount to charge
 * @returns Promise with payment result
 */
export const processPayment = async (amount: number): Promise<PaymentResult> => {
  const checkoutResult = await createCheckoutSession(amount);
  
  if (checkoutResult.success && checkoutResult.redirectUrl) {
    redirectToCheckout(checkoutResult.redirectUrl);
    return checkoutResult;
  }
  
  return checkoutResult;
};