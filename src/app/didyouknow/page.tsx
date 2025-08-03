'use client';

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Card from '@/components/Card';
import { didyouknows } from './[id]/didyouknowsObj';
import './Didyouknow.css';

export default function DidYouKnow() {
  const [singleDidyouknow, setSingleDidyouknow] = useState(didyouknows[0]);
  const [singleDidyouknowVisible, setSingleDidyouknowVisible] = useState(false);

  return !singleDidyouknowVisible ? (
    <main>
      <Head>
        <title>Rare Nutrition | Did You Know</title>
        <meta
          name="description"
          content="Explore fascinating facts about nutrition and health from Rare Nutrition."
        />
        <link rel="canonical" href="https://www.rarenutrition.com/didyouknow" />
      </Head>
      <section className="left">
        <h2 className="page-heading">Did you know</h2>
        <div
          className="card-container didyouknow-container"
          onClick={(e) => {
            const card = e.target.closest('.card');
            if (card) {
              const id = Number(card.dataset.id);
              setSingleDidyouknow(didyouknows[id]);
              setSingleDidyouknowVisible(true);
            }
          }}
        >
          {didyouknows.map((didyouknow, index) => (
            <Card
              key={didyouknow.id}
              id={index}
              img={didyouknow.img}
              title={didyouknow.title}
              description={didyouknow.description}
              tags={didyouknow.tags}
            />
          ))}
        </div>
      </section>
    </main>
  ) : (
    <main className="singleDidyouknow">
      <section className="superlight">
        <button
          className="back light"
          onClick={() => setSingleDidyouknowVisible(false)}
        >
          Back
        </button>
        {singleDidyouknow.bodyComponent}
      </section>
    </main>
  );
}