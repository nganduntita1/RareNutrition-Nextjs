import React from 'react';
import './CartItem.css';

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  onRemove: (id: string) => void;
  onQuantityChange: (id: string, quantity: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  quantity,
  image,
  onRemove,
  onQuantityChange
}) => {
  return (
    <div className="cart-item">
      <div className="left">
        <div className="img-container">
          <img src={image} alt={name} />
        </div>
      </div>
      
      <div className="middle">
        <h6>{name}</h6>
        <p className="description">R{price.toFixed(2)}</p>
      </div>
      
      <div className="right">
        <div className="quantity">
          <button 
            className="input" 
            onClick={() => onQuantityChange(id, Math.max(1, quantity - 1))}
          >
            -
          </button>
          <input 
            type="number" 
            className="qty-input" 
            value={quantity}
            min="1"
            onChange={(e) => onQuantityChange(id, parseInt(e.target.value) || 1)}
          />
          <button 
            className="input" 
            onClick={() => onQuantityChange(id, quantity + 1)}
          >
            +
          </button>
        </div>
        <p className="price">R{(price * quantity).toFixed(2)}</p>
      </div>
      
      <button 
        className="delete-cart-item" 
        onClick={() => onRemove(id)}
      >
        ×
      </button>
    </div>
  );
};