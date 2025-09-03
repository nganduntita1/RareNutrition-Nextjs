import './Card.css';
import { FC, useContext } from 'react';
import { CartContext } from '../context/CartContext';

type CardProps = {
  id: number;
  img: string;
  title: string;
  description: string;
  tags: string[];
  price?: number;
  showAddToCart?: boolean;
};

const Card: FC<CardProps> = ({ id, img, title, description, tags, price, showAddToCart = false }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div
      className="card"
      data-id={id}
      data-img={img}
      data-title={title}
      data-description={description}
      data-tags={tags}
    >
      <span className="info-icon">
        <i className="fa-solid fa-circle-info"></i>
      </span>
      <div
        className="lazy-img"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <img loading="lazy" src={img} alt={title + " image"} />
      </div>
      <h6>{title}</h6>
      <div className="description">{description}</div>
      {showAddToCart && (
        <button 
          className="add-to-cart" 
          onClick={(e) => {
            e.stopPropagation();
            addToCart({
              id,
              name: title,
              price: price ?? parseFloat(description.match(/R(\d+\.?\d*)/)?.[1] || '0'),
              image: img,
              quantity: 1
            });
          }}
        >
          Add to Cart
        </button>
      )}
      {/* {tags.length !== 0 ? (
        <div className="tag-container">
          {tags.map((tag, i) => {
            return (
              <span className="tag" key={i}>
                {tag}
              </span>
            );
          })}
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default Card;