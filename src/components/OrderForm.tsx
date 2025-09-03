import React, { useState } from 'react';

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    deliveryOption: 'collection',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          deliveryOption: formData.deliveryOption
        }),
      });

      if (response.ok) {
        setSuccessMessage('Order info sent!');
        setFormData({ name: '', email: '', phone: '', address: '', deliveryOption: 'collection' });
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || 'Failed to send order info.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="order-form">
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="deliveryOption">Delivery Option</label>
        <select
          id="deliveryOption"
          name="deliveryOption"
          value={formData.deliveryOption}
          onChange={handleChange}
        >
          <option value="collection">Collection</option>
          <option value="delivery">Delivery (8 to 10 days)</option>
        </select>
      </div>

      <button type="submit">Submit Order</button>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
}