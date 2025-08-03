'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import '../../products/Products.css';

export default function ProductDetail() {
  const params = useParams();
  const productId = Number(params.id);
  
  // Sample product data - in a real app, this would come from a database or API
  const product = {
    id: productId,
    name: 'Premium Protein',
    description: 'High-quality protein supplement for muscle recovery and growth. Our premium protein blend is designed to support muscle recovery and growth with a complete amino acid profile. Made with the highest quality ingredients and rigorously tested for purity.',
    category: 'Protein',
    price: 49.99,
    features: [
      'Complete amino acid profile',
      '25g protein per serving',
      'Low in sugar and fat',
      'Easy to mix formula',
      'Great taste in multiple flavors'
    ]
  };
  
  const [quantity, setQuantity] = useState(1);
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    if (quantity < 99) {
      setQuantity(quantity + 1);
    }
  };
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= 99) {
      setQuantity(value);
    }
  };
  
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/products" className="text-[var(--cl-acc-dark)] hover:underline">
            ← Back to Products
          </Link>
        </div>
        
        <div className="single-product bg-white rounded-lg shadow-md overflow-hidden">
          <div className="left">
            <div className="lazy-img">
              <img 
                src="https://via.placeholder.com/400x600?text=Product+Image" 
                alt={product.name}
              />
            </div>
          </div>
          
          <div className="right">
            <h6>{product.name}</h6>
            <p>{product.description}</p>
            
            <div className="tag-container">
              <p className="tag">{product.category}</p>
              <p className="tag">Bestseller</p>
              <p className="tag">Organic</p>
            </div>
            
            <div className="description">
              <h4 className="font-semibold mt-4 mb-2">Features:</h4>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="purchase-info">
              <div className="row">
                <p>Quantity:</p>
                <div className="quantity">
                  <button className="input" onClick={decreaseQuantity}>-</button>
                  <input 
                    type="number" 
                    className="qty-input" 
                    min="1" 
                    max="99" 
                    value={quantity}
                    onChange={handleQuantityChange}
                  />
                  <button className="input" onClick={increaseQuantity}>+</button>
                </div>
              </div>
              
              <div className="row">
                <p>Price:</p>
                <p className="price">${product.price.toFixed(2)}</p>
              </div>
              
              <div className="row">
                <button className="add-to-cart bg-[var(--cl-acc-dark)] text-white px-4 py-2 rounded-md transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}