'use client';

import { useCart } from '@/context/CartContext';
import { CartItem } from '@/components/CartItem';
import Link from 'next/link';

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice
  } = useCart();

  if (totalItems === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <Link 
          href="/products" 
          className="px-4 py-2 text-white bg-[var(--cl-acc-dark)] rounded-md"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen p-4">
      <h1 className="mb-8 text-3xl font-bold">Your Cart</h1>
      
      <div className="grid gap-4 mb-8">
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            image={item.image}
            onRemove={removeFromCart}
            onQuantityChange={updateQuantity}
          />
        ))}
      </div>

  <div className="flex justify-between p-4 border-t border-gray-200">
    <button 
      onClick={clearCart}
      className="px-4 py-2 text-red-500 border border-red-500 rounded-md hover:bg-red-50"
    >
      Clear Cart
    </button>
    
    <div className="text-right">
      <p className="text-lg font-bold">Total: R{totalPrice.toFixed(2)}</p>
      <Link 
        href="/checkout" 
        className="inline-block px-4 py-2 mt-2 text-white bg-[var(--cl-acc-dark)] rounded-md"
      >
        Proceed to Checkout
      </Link>
    </div>
  </div>
</main>
  );
}