import './Card.css';
import { FC } from 'react';

type CardProps = {
  id: number;
  img: string;
  title: string;
  description: string;
  tags: string[];
};

const Card: FC<CardProps> = ({ id, img, title, description, tags }) => {
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
          backgroundImage:
            "url(" +
            img.slice(0, img.lastIndexOf(".")) +
            "-small" +
            img.slice(img.lastIndexOf(".")) +
            ")",
        }}
      >
        <img loading="lazy" src={img} alt={title + " image"} />
      </div>
      <h6>{title}</h6>
      <div className="description">{description}</div>
      {tags.length !== 0 ? (
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
      )}
    </div>
  );
};

export default Card;