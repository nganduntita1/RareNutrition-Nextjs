'use client';

import './CartItem.css';
import { FC } from 'react';

type CartItemProps = {
  product: {
    cartItemIndex: number;
    img: string;
    title: string;
    description: string;
    price: number;
    quantity: number;
  };
  deleteProduct: (index: number) => void;
  editQuantity: (index: number, quantity: number) => void;
};

const CartItem: FC<CartItemProps> = ({ product, deleteProduct, editQuantity }) => {
  return (
    <div className="cart-item">
      <i
        className="fa-solid fa-xmark delete-cart-item"
        onClick={() => {
          deleteProduct(product.cartItemIndex);
        }}
      ></i>
      <div className="left">
        <div className="img-container">
          <img src={product.img} alt={`${product.title} image`} />
        </div>
      </div>
      <div className="mid">
        <h4>{product.title}</h4>
        <div className="description">{product.description}</div>
      </div>
      <div className="right">
        <span className="price">
          R<span>{product.price * product.quantity}</span>
        </span>
        <div className="quantity">
          <button
            className="input qty decrease-qty"
            onClick={() => {
              editQuantity(product.cartItemIndex, product.quantity - 1);
            }}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <div className="input-container">
            <input
              className="qty-input"
              type="number"
              placeholder="QTY"
              max={999}
              min={1}
              value={product.quantity}
              onChange={(e) => {
                editQuantity(product.cartItemIndex, Number(e.target.value));
              }}
              pattern="[0-9]"
            />
          </div>
          <button
            className="input qty increase-qty"
            onClick={() => {
              editQuantity(product.cartItemIndex, product.quantity + 1);
            }}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;