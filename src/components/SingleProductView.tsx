import React from 'react';

interface SingleProductViewProps {
  product: {
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
  };
  onClose: () => void;
}

const SingleProductView: React.FC<SingleProductViewProps> = ({ product, onClose }) => {
  return (
    <div className="single-product-cover">
      <div className="outer">
        <div className="single-product">
          <div className="left">
            <div className="lazy-img">
              <img 
                src="/images/products/product-placeholder.png" 
                alt={product.name}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/400x600?text=Product+Image';
                }}
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
            
            <div className="purchase-info">
              <div className="row">
                <p>Quantity:</p>
                <div className="quantity">
                  <button className="input">-</button>
                  <input type="number" className="qty-input" min="1" max="99" defaultValue="1" />
                  <button className="input">+</button>
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

export default SingleProductView;