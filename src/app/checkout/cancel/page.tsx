'use client';

import React from 'react';
import Link from 'next/link';

export default function PaymentCancelled() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
        <div className="mb-6 text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        
        <h1 className="text-xl font-bold text-[var(--cl-acc-dark)] mb-4">Payment Cancelled</h1>
        
        <p className="text-sm text-gray-600 mb-6">
            Your payment was cancelled. Your cart items are still saved if you&apos;d like to try again.
          </p>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/checkout" className="bg-[var(--cl-acc-dark)] text-white px-6 py-3 rounded-md hover:bg-[var(--cl-acc-light)] hover:text-[var(--cl-main-dark)] transition-colors">
            Return to Checkout
          </Link>
          <Link href="/" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}