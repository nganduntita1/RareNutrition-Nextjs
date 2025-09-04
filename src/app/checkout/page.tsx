'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import '../products/Products.css';
import ContactForm from '@/components/ContactForm';

export default function Checkout() {
  const { cartItems, updateQuantity, totalItems, totalPrice } = useCart();
  const router = useRouter();
  const [error, setError] = useState('');
  
  // Calculate final price including delivery if selected
  const [deliveryMethod, setDeliveryMethod] = useState('collection');
  const deliveryFee = deliveryMethod === 'delivery' ? 100 : 0;
  const finalTotal = totalPrice + deliveryFee;

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleDeliveryMethodChange = (method: string) => {
    setDeliveryMethod(method);
  };

  return (
    <div className="py-12 pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-6 text-[var(--cl-acc-dark)]">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Your Items</h2>
            
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b border-gray-200 py-4">
                  <div className="flex items-center">
                    <div className="h-16 w-16 bg-[var(--cl-acc-light)] flex items-center justify-center rounded-md mr-4">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="h-12 w-12 object-contain" />
                      ) : (
                        <p className="text-xs">Product</p>
                      )}
                    </div>
                    <div>
                      <h6 className="font-semibold">{item.name}</h6>
                      <p className="text-sm text-gray-600">Supplement</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="quantity mr-8">
                      <button 
                        className="input" 
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        className="qty-input" 
                        min="1" 
                        max="99" 
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                      />
                      <button 
                        className="input"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <p className="price">R{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">Your cart is empty</p>
                <Link href="/products" className="text-[var(--cl-acc-dark)] hover:underline mt-2 inline-block">
                  Browse Products
                </Link>
              </div>
            )}
          </div>
          
          <div className="lg:col-span-1">
            <div className="order">
              <h6 className="text-base font-semibold mb-4">Order Information</h6>
              
              {error && <p className="text-red-500 mb-4">{error}</p>}
              
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Subtotal</span>
                  <span>R{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Delivery Fee</span>
                  <span>R{deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg mt-4 pt-4 border-t">
                  <span>Total</span>
                  <span>R{finalTotal.toFixed(2)}</span>
                </div>
              </div>
              
              <ContactForm
                cartItems={cartItems}
                totalPrice={totalPrice}
                onDeliveryMethodChange={handleDeliveryMethodChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}