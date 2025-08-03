'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ProductModal from './ProductModal';
import './Products.css';

export default function ProductsWithModal() {
  // Sample product data - in a real app, this would come from a database or API
  const products = [
    {
      id: 1,
      name: 'Premium Protein',
      description: 'High-quality protein supplement for muscle recovery and growth.',
      category: 'Protein',
      price: 49.99,
    },
    {
      id: 2,
      name: 'Vitamin Complex',
      description: 'Complete vitamin and mineral complex for daily nutritional support.',
      category: 'Vitamins',
      price: 29.99,
    },
    {
      id: 3,
      name: 'Omega-3 Supplements',
      description: 'Essential fatty acids for heart and brain health support.',
      category: 'Supplements',
      price: 34.99,
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const openProductModal = (product: typeof products[0]) => {
    setSelectedProduct(product);
    // This will trigger the body:has(.single-product-cover) selector in CSS
    document.body.style.overflow = 'hidden';
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-[var(--cl-acc-dark)]">Our Products (with Modal)</h1>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-[var(--cl-acc-light)] flex items-center justify-center">
                <p className="text-lg">Product Image</p>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <span className="text-lg font-bold text-[var(--cl-acc-dark)]">${product.price}</span>
                </div>
                <div className="description">
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <ul>
                    <li>• Premium quality ingredients</li>
                    <li>• Science-backed formula</li>
                    <li>• No artificial additives</li>
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="inline-block bg-[var(--cl-acc-superlight)] text-[var(--cl-acc-dark)] px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </span>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => openProductModal(product)}
                      className="bg-[var(--cl-acc-light)] text-[var(--cl-main-dark)] px-3 py-2 rounded-md hover:bg-[var(--cl-acc-superlight)] transition-colors text-sm"
                    >
                      Quick View
                    </button>
                    <button className="bg-[var(--cl-acc-dark)] text-white px-3 py-2 rounded-md hover:bg-[var(--cl-acc-light)] hover:text-[var(--cl-main-dark)] transition-colors text-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeProductModal} />
      )}
    </div>
  );
}