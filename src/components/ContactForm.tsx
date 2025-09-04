'use client';

import { useForm, ValidationError } from '@formspree/react';
import { processPayment } from '@/services/YocoPaymentService';
import { useState } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface ContactFormProps {
  cartItems: CartItem[];
  totalPrice: number;
  onDeliveryMethodChange: (method: string) => void;
}

export default function ContactForm({ cartItems, totalPrice, onDeliveryMethodChange }: ContactFormProps) {
  const [state, handleSubmit] = useForm('mpwjorlz');
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState('');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Add cart items and totals to form data
    const deliveryMethod = formData.get('deliveryOption') as string;
    setSelectedDeliveryMethod(deliveryMethod); // Store for payment step
    const deliveryFee = deliveryMethod === 'delivery' ? 100 : 0;
    const finalTotal = totalPrice + deliveryFee;
    
    formData.append('orderItems', JSON.stringify(cartItems));
    formData.append('subtotal', totalPrice.toString());
    formData.append('deliveryFee', deliveryFee.toString());
    formData.append('total', finalTotal.toString());

    try {
      // Submit form to Formspree
      await handleSubmit(e);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handlePayment = async () => {
    try {
      const deliveryFee = selectedDeliveryMethod === 'delivery' ? 100 : 0;
      const finalTotal = totalPrice + deliveryFee;
      const amountInCents = Math.round(finalTotal * 100);
      await processPayment(amountInCents);
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  if (state.succeeded) {
    return (
      <div className="space-y-4">
        <div className="text-center py-4 bg-green-50 rounded-md">
          <p className="text-green-600 font-semibold">Thank you for submitting your delivery information!</p>
          <p className="text-sm text-green-500 mt-1">Please proceed with payment to complete your order.</p>
        </div>
        <button
          onClick={handlePayment}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[var(--cl-acc-dark)] hover:bg-[var(--cl-acc-light)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--cl-acc-dark)]"
        >
          Pay Now
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 p-4 rounded-md mb-4">
        <h3 className="text-blue-800 font-medium">Delivery Information</h3>
        <p className="text-sm text-blue-600 mt-1">Please fill out this form so we know where to deliver your order. You'll be able to proceed with payment after submitting.</p>
      </div>

      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--cl-acc-dark)] focus:ring-[var(--cl-acc-dark)] sm:text-sm"
          />
          <ValidationError prefix="Full Name" field="fullName" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--cl-acc-dark)] focus:ring-[var(--cl-acc-dark)] sm:text-sm"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--cl-acc-dark)] focus:ring-[var(--cl-acc-dark)] sm:text-sm"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Delivery Address
          </label>
          <textarea
            id="address"
            name="address"
            rows={3}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--cl-acc-dark)] focus:ring-[var(--cl-acc-dark)] sm:text-sm"
          />
          <ValidationError prefix="Address" field="address" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="deliveryOption" className="block text-sm font-medium text-gray-700">
            Delivery Option
          </label>
          <select
            id="deliveryOption"
            name="deliveryOption"
            required
            onChange={(e) => {
              setSelectedDeliveryMethod(e.target.value);
              onDeliveryMethodChange(e.target.value);
            }}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--cl-acc-dark)] focus:ring-[var(--cl-acc-dark)] sm:text-sm"
          >
            <option value="">Select an option</option>
            <option value="collection">Collection (Free)</option>
            <option value="delivery">Delivery (R100)</option>
          </select>
          <ValidationError prefix="Delivery Option" field="deliveryOption" errors={state.errors} />
        </div>

        <div>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[var(--cl-acc-dark)] hover:bg-[var(--cl-acc-light)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--cl-acc-dark)]"
          >
            {state.submitting ? 'Submitting...' : 'Submit Delivery Information'}
          </button>
        </div>
      </form>
    </div>
  );
}