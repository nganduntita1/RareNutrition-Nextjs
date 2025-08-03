'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import '../products/Products.css';

export default function Checkout() {
  // Sample cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Premium Protein',
      description: 'High-quality protein supplement for muscle recovery and growth.',
      category: 'Protein',
      price: 49.99,
      quantity: 2,
    },
    {
      id: 3,
      name: 'Omega-3 Supplements',
      description: 'Essential fatty acids for heart and brain health support.',
      category: 'Supplements',
      price: 34.99,
      quantity: 1,
    },
  ]);

  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="py-12 pb-24 relative"> {/* Added pb-24 to make room for the checkout bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-[var(--cl-acc-dark)]">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Your Items</h2>
            
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b border-gray-200 py-4">
                <div className="flex items-center">
                  <div className="h-16 w-16 bg-[var(--cl-acc-light)] flex items-center justify-center rounded-md mr-4">
                    <p className="text-xs">Product</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.category}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="quantity mr-8">
                    <button className="input">-</button>
                    <input type="number" className="qty-input" min="1" max="99" defaultValue={item.quantity} />
                    <button className="input">+</button>
                  </div>
                  <p className="price">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-1">
            <div className="order">
              <h6>Shipping Information</h6>
              
              <div className="input-container flex items-center border border-gray-300 rounded-md overflow-hidden">
                <input type="text" placeholder="Full Name" />
              </div>
              
              <div className="input-container flex items-center border border-gray-300 rounded-md overflow-hidden">
                <input type="text" placeholder="Address" />
              </div>
              
              <div className="input-container flex items-center border border-gray-300 rounded-md overflow-hidden">
                <input type="text" placeholder="City" />
              </div>
              
              <div className="input-container flex items-center border border-gray-300 rounded-md overflow-hidden">
                <input type="text" placeholder="Postal Code" />
              </div>
              
              <h6 className="mt-6">Payment Information</h6>
              
              <div className="input-container flex items-center border border-gray-300 rounded-md overflow-hidden">
                <input type="text" placeholder="Card Number" />
              </div>
              
              <div className="input-container flex items-center border border-gray-300 rounded-md overflow-hidden">
                <input type="text" placeholder="Name on Card" />
              </div>
              
              <div className="flex gap-4">
                <div className="input-container flex items-center border border-gray-300 rounded-md overflow-hidden w-1/2">
                  <input type="text" placeholder="Expiry Date" />
                </div>
                
                <div className="input-container flex items-center border border-gray-300 rounded-md overflow-hidden w-1/2">
                  <input type="text" placeholder="CVV" />
                </div>
              </div>
              
              <button className="submit-order bg-[var(--cl-acc-dark)] text-white px-4 py-2 rounded-md transition-colors mt-4">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Checkout Bar */}
      <div className="checkout-bar">
        <p className="items">{itemCount} items</p>
        <p className="cart-price price">${totalPrice.toFixed(2)}</p>
        <button className="checkout-btn bg-[var(--cl-acc-dark)] text-white px-4 py-2 rounded-md transition-colors">
          Complete Purchase
        </button>
      </div>
    </div>
  );
}