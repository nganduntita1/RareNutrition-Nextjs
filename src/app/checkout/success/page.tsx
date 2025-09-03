'use client';

import React, { useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function PaymentSuccess() {
  const { clearCart } = useCart();

  const handleClearCart = useCallback(() => {
    clearCart();
  }, [clearCart]);

  useEffect(() => {
    // Clear the cart after successful payment
    handleClearCart();
  }, [handleClearCart]);

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
        <div className="mb-6 text-green-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-xl font-bold text-[var(--cl-acc-dark)] mb-4">Payment Successful!</h1>
        
        <p className="text-sm text-gray-600 mb-6">
          Thank you for your purchase. Your order has been successfully processed.
        </p>
        
        <div className="mt-8">
          <Link href="/" className="bg-[var(--cl-acc-dark)] text-white px-6 py-3 rounded-md hover:bg-[var(--cl-acc-light)] hover:text-[var(--cl-main-dark)] transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}