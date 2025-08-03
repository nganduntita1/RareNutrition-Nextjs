import React from 'react';
import '../products/Products.css';

export default function Cart() {
  // Sample cart data
  const cartItems = [
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
  ];

  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-[var(--cl-acc-dark)]">Your Cart</h1>
        
        <section className="cart-section flex flex-col">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item flex flex-col md:flex-row justify-between items-start md:items-center py-4">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="h-24 w-24 bg-[var(--cl-acc-light)] flex items-center justify-center rounded-md">
                  <p className="text-sm">Product Image</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <span className="inline-block bg-[var(--cl-acc-superlight)] text-[var(--cl-acc-dark)] px-3 py-1 rounded-full text-sm font-semibold mt-2">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="right">
                <div className="quantity">
                  <button className="input">-</button>
                  <input type="number" className="qty-input" min="1" max="99" defaultValue={item.quantity} />
                  <button className="input">+</button>
                </div>
                <p className="price">${(item.price * item.quantity).toFixed(2)}</p>
                <button className="bg-[var(--cl-acc-dark)] text-white px-3 py-1 rounded-md hover:bg-[var(--cl-acc-light)] hover:text-[var(--cl-main-dark)] transition-colors">
                  Remove
                </button>
              </div>
            </div>
          ))}
          
          <hr />
          
          <div className="right mt-4">
            <p className="total-label">Total:</p>
            <p className="total-price">${totalPrice.toFixed(2)}</p>
          </div>
          
          <div className="order mt-8">
            <div className="shipping">
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
            </div>
            
            <div className="payment">
              <h6>Payment Information</h6>
              
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
        </section>
      </div>
    </div>
  );
}