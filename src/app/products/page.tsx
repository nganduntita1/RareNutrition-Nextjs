'use client';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { products } from './productsData';
import Card from '../../components/Card';
import Popup from '../../components/Popup';
import './Products.css';

export default function Products() {
  const [singleProduct, setSingleProduct] = useState(products[0]);
  const [singleProductVisible, setSingleProductVisible] = useState(false);
  const [displayPopup, setDisplayPopup] = useState(false);

  function resetSingleProductCover() {
    setSingleProductVisible(false);
  }

  function showPopup() {
    setDisplayPopup(true);
    setTimeout(() => {
      setDisplayPopup(false);
    }, 2002);
  }

  return (
    <>
      <Head>
        <title>Rare Nutrition | Products</title>
        <meta
          name="description"
          content="Explore our range of health and wellness products designed to support your journey to better health."
        />
        <link
          rel="canonical"
          href="https://rarenutritions.netlify.app/products"
        />
      </Head>
      <main>
        <section className="left">
          <h2 className="page-heading">Our products</h2>

          <div
            className="card-container product-container"
            onClick={(e) => {
              if (e.target.closest(".card")) {
                setSingleProduct(
                  products[Number(e.target.closest(".card").dataset.id)]
                );
                setSingleProductVisible(true);
              }
            }}
          >
            {products.map((product) => {
              return (
                <Card
                  key={product.id}
                  id={product.id}
                  img={product.img}
                  title={product.title}
                  description={product.description}
                  tags={product.tags}
                  price={product.price}
                />
              );
            })}

            {displayPopup && <Popup text="Your order was placed successfully" />}
          </div>

          {singleProductVisible && (
            <div className="single-product-cover" onClick={() => resetSingleProductCover()}>
                <div className="outer" onClick={(e) => e.stopPropagation()}>
                  <div className="single-product">
                  <i
                    className="fa-solid fa-xmark close"
                    onClick={() => {
                      resetSingleProductCover();
                    }}
                  ></i>

                  <div className="left">
                    <div
                      className="lazy-img"
                      style={{
                        backgroundImage:
                          "url(" +
                          singleProduct.img.slice(
                            0,
                            singleProduct.img.lastIndexOf(".")
                          ) +
                          "-small" +
                          singleProduct.img.slice(
                            singleProduct.img.lastIndexOf(".")
                          ) +
                          ")",
                      }}
                    >
                      <img
                        loading="lazy"
                        src={singleProduct.img}
                        alt={singleProduct.title + " image"}
                      />
                    </div>
                  </div>

                  <div className="right">
                    <div className="details">
                      <h6>{singleProduct.title}</h6>
                      {singleProduct.description}
                      {singleProduct.tags.length !== 0 && (
                        <div className="tag-container">
                          {singleProduct.tags.map((tag, i) => (
                            <span className="tag" key={i}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="purchase-info">
                      <div className="row">
                        <span className="price">R{singleProduct.price}</span>
                      </div>
                      <div className="row">
                        {singleProduct.stripeUrl ? (
                          <button
                            className="buy-now-stripe dark"
                            onClick={() => {
                              window.open(singleProduct.stripeUrl, "_blank");
                            }}
                          >
                            Buy Now
                          </button>
                        ) : (
                          <button className="buy-now-stripe dark" disabled>
                            Not Available
                          </button>
                        )}
                      </div>
                      <div className="row">
                        <i className="fa-solid fa-truck"></i>
                        <span>Delivery in 8 - 10 working days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
}