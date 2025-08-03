import Head from 'next/head';
import Link from 'next/link';
import "./Home.css";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Rare Nutrition | Home</title>
        <meta
          name="description"
          content="Welcome to Rare Nutrition, where we offer unique formulations for unique individuals. Explore our personalized supplements and targeted product range made with the highest-quality natural ingredients."
        />
        <link rel="canonical" href="https://rarenutritions.netlify.app/" />
      </Head>
      <section className="hero">
        <div className="hero-bg">
          <div
            className="lazy-img hero-bg-wrapper"
            style={{
              backgroundImage: 'url("/images/rare pic only-small.png")',
            }}
          >
            <img
              loading="lazy"
              className="hero-bg-img"
              src="/images/hero-bg.png"
              alt="Background molecule image"
            />
          </div>
        </div>
        <div className="hero-content">
          <h1>
            RARE <br /> NUTRITION
          </h1>
          <p className="hero-description">
            Unique formulations for unique individuals. Personalised supplements
            and a targeted product range made with the highest-quality natural
            ingredients
          </p>
          <div className="buttons-group">
            <Link href="/products">
              <button className="black">Products</button>
            </Link>
            <Link href="#footer">
              <button className="light">Contact</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="double superlight">
        <div>
          <div
            className="lazy-img"
            style={{
              backgroundImage: "url(/images/Products display-small.png)",
            }}
          >
            <img
              loading="lazy"
              className="full-width"
              src="/images/Products display.png"
              alt="Products displayed on a podium."
            />
          </div>
        </div>
        <div>
          <h1>Products</h1>
          <p>
            Our supplements are carefully formulated to provide the
            micronutrients that are at risk when certain food groups are
            limited. Our products contain no offending metabolites and are
            sugar, carbohydrate, dairy, gluten, additive, and preservative-free.
          </p>
          <Link href="/products">
            <button className="btn-light light">Products</button>
          </Link>
        </div>
      </section>
      <section className="double light">
        <div className="img-square-container">
          <div
            className="lazy-img"
            style={{
              backgroundImage: "url(/images/Molecule-square-small.jpg)",
            }}
          >
            <img
              loading="lazy"
              id="square-img"
              className="square full-width"
              src="/images/Molecule-square.jpeg"
              alt="Rare nutrition logo pic"
            />
          </div>
        </div>
        <div>
          <h1>Who we are</h1>
          <p>
            Rare Nutrition is one of the first cutting-edge companies that
            started due to the increasing demand of specific vitamin and mineral
            requirements for unique therapeutic diets. Our goal is to provide
            mandatory supplements that support the needs of individuals who are
            on specialized diets.
          </p>
          <Link href="/about">
            <button className="black">Read more</button>
          </Link>
        </div>
      </section>
      <section className="superlight double">
        <div className="didyouknow">
          <h1>Did you know?</h1>
          <p>
            This page is dedicated to various facts about rare disorders,
            epilepsy and other disease specific conditions. Explore our articles
            covering the latest trends, recipes, benefits, and research on
            dietary treatment for rare diseases, as well as the role of
            vitamins, minerals, and other supplements used. Our expert insights
            and practical tips will help you navigate the world of supplements
            for rare disorders with confidence.
          </p>
          <Link href="/didyouknow">
            <button className="light">Read more</button>
          </Link>
        </div>
      </section>
    </main>
  );
}
