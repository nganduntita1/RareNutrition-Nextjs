'use client';

import React, { useState } from 'react';
import '../products/Products.css';

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
}

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
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
    <div className="single-product-cover">
      <div className="outer">
        <div className="single-product">
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
              {/* <p className="tag">{product.category}</p> */}
              <p className="tag">Bestseller</p>
              <p className="tag">Organic</p>
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
      <div className="close" onClick={onClose}>×</div>
    </div>
  );
};

export default ProductModal;