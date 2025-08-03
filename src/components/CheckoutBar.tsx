import React from 'react';
import Link from 'next/link';

interface CheckoutBarProps {
  itemCount: number;
  totalPrice: number;
}

const CheckoutBar: React.FC<CheckoutBarProps> = ({ itemCount, totalPrice }) => {
  return (
    <div className="checkout-bar">
      <p className="items">{itemCount} items</p>
      <p className="cart-price price">${totalPrice.toFixed(2)}</p>
      <Link href="/cart">
        <button className="checkout-btn bg-[var(--cl-acc-dark)] text-white px-4 py-2 rounded-md transition-colors">
          Checkout
        </button>
      </Link>
    </div>
  );
};

export default CheckoutBar;