'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import '../products/Products.css';
import { processPayment } from '@/services/YocoPaymentService';

export default function Checkout() {
  const { cartItems, updateQuantity, totalItems, totalPrice } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    deliveryMethod: 'collection' // Default to collection (free)
  }); 
  
  // Calculate final price including delivery if selected
  const deliveryFee = formData.deliveryMethod === 'delivery' ? 100 : 0;
  const finalTotal = totalPrice + deliveryFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(itemId, newQuantity);
    }
  };

  const handlePayment = async () => {
    try {
      setLoading(true);
      setError('');
      
      // Validate form data
      if (!formData.fullName || !formData.phone || !formData.address || !formData.city || !formData.postalCode) {
        setError("Please fill in all shipping information");
        setLoading(false);
        return;
      }
      
      // Prepare order data for email
      const orderData = {
        customer: formData,
        items: cartItems,
        deliveryMethod: formData.deliveryMethod,
        deliveryFee: deliveryFee,
        subtotal: totalPrice,
        total: finalTotal
      };
      
      // Send order data to email endpoint
      try {
        await fetch('/api/send-order-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: 'rarenutritionshop@gmail.com',
            subject: 'New Order from ' + formData.fullName,
            orderData
          }),
        });
      } catch (emailErr) {
        console.error('Failed to send order email:', emailErr);
        // Continue with payment even if email fails
      }
      
      // Convert final total price to cents for Yoco (they expect amount in cents)
      const amountInCents = Math.round(finalTotal * 100);
      
      // Process payment with Yoco
      await processPayment(amountInCents);
      
      // Note: The redirect will be handled by the processPayment function
    } catch (err) {
      console.error('Payment error:', err);
      setError("Payment processing failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="py-12 pb-24 relative"> {/* Added pb-24 to make room for the checkout bar */}
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
              <h6 className="text-base font-semibold mb-4">Shipping Information</h6>
              
              {error && <p className="text-red-500 mb-4">{error}</p>}
              
              <div className="input-container flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                <input 
                  type="text" 
                  name="fullName"
                  placeholder="Full Name" 
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm"
                />
              </div>
              
              <div className="input-container flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm"
                />
              </div>
              
              <div className="input-container flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                <input 
                  type="text" 
                  name="address"
                  placeholder="Address" 
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm"
                />
              </div>
              
              <div className="input-container flex items-center border border-gray-300 rounded-md overflow-hidden mb-3">
                <input 
                  type="text" 
                  name="city"
                  placeholder="City" 
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm"
                />
              </div>
              
              <div className="input-container flex items-center border border-gray-300 rounded-md overflow-hidden mb-4">
                <input 
                  type="text" 
                  name="postalCode"
                  placeholder="Postal Code" 
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm"
                />
              </div>
              
              <div className="mt-4">
                <h6 className="mb-2 text-sm font-semibold">Delivery Method</h6>
                <div className="flex flex-col space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="collection"
                      checked={formData.deliveryMethod === 'collection'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Collection (Free)
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="delivery"
                      checked={formData.deliveryMethod === 'delivery'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Delivery (R100)
                  </label>
                </div>
              </div>
              
              <h6 className="mt-6 text-sm font-semibold">Payment Information</h6>
              <p className="text-xs text-gray-600 mb-4">
                You&apos;ll be redirected to Yoco&apos;s secure payment page to complete your purchase.
              </p>
              
              <button 
                className="submit-order bg-[var(--cl-acc-dark)] text-white px-4 py-2 rounded-md transition-colors mt-4 w-full"
                onClick={handlePayment}
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Proceed to Payment'}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Checkout Bar */}
      <div className="checkout-bar">
        <p className="items">{totalItems} items</p>
        <p className="cart-price price">R{finalTotal.toFixed(2)}</p>
        {formData.deliveryMethod === 'delivery' && (
          <p className="text-sm text-gray-600">(Includes R100 delivery fee)</p>
        )}
        <button 
          className="checkout-btn bg-[var(--cl-acc-dark)] text-white px-4 py-2 rounded-md transition-colors"
          onClick={handlePayment}
          disabled={loading || cartItems.length === 0}
        >
          {loading ? "Processing..." : `Pay R${finalTotal.toFixed(2)}`}
        </button>
      </div>
    </div>
  );
}