import "./About.css";

export const metadata = {
  title: "Rare Nutrition | About",
  description:
    "About Rare Nutrition, a company dedicated to providing personalized supplements and targeted product ranges for unique dietary needs.",
  alternates: {
    canonical: "https://rarenutritions.netlify.app/about",
  },
};

export default function About() {
  return (
    <main className="about">
      <section className="left superlight">
        <h2>Who are we</h2>
        <article>
          <div className="image-container">
            <div
              className="lazy-img"
              style={{ backgroundImage: "url(/images/rare pic only-small.png)" }}
            >
              <img
                loading="lazy"
                src="./images/rare pic only.png"
                alt="Logo molecule"
              />
            </div>
          </div>
          <div className="text">
            <p>
              Rare Nutrition is one of the first cutting-edge companies that started due to the increasing demand for specific vitamin and mineral requirements for unique therapeutic diets.
            </p>
            <p>
              We provide personalised supplements, and a targeted product range made with the highest-quality natural ingredients, thereby supplying the missing pieces in distinct dietary lifestyles
            </p>
          </div>
        </article>
      </section>
      <section className="light">
        <article>
          <div className="image-container">
            <div
              className="lazy-img"
              style={{ backgroundImage: "url(/images/dna capsule brown-small.png)" }}
            >
              <img
                loading="lazy"
                src="./images/dna capsule brown.png"
                alt="Brown DNA capsule"
              />
            </div>
          </div>
          <div className="text">
            <p>
              Our goal is to provide mandatory supplements that support the needs of individuals who are on specialized diets to prevent additional complications.
            </p>
            <p>
              Currently, we joined hands with specialists who focus on the ketogenic diet for intractable epilepsy and brain tumours, Inborn Errors of Metabolism (rare inherited disorders in which the body cannot process certain foods into energy that could be fatal), autism, and other special needs cases.
            </p>
          </div>
        </article>
        <blockquote>
          “We strive to stay as objective as possible and present our information in great detail”.
        </blockquote>
      </section>
      <section className="superlight">
        <article>
          <div className="image-container">
            <div
              className="lazy-img"
              style={{ backgroundImage: "url(/images/kids-small.png)" }}
            >
              <img loading="lazy" src="./images/kids.png" alt="Kids playing" />
            </div>
          </div>
          <div>
            <p>
              We are integrated with a team of experts in nutrition, pharmacology, and food technology that scientifically backs the data of our ingredients for infants, children between the ages of 1-10 years old, and those older than 10 years. The supplements in the respective age groups are well-defined and color-coded for ease of use.
            </p>
          </div>
        </article>
      </section>
      <section>
        <article>
          <div className="image-container">
            <div
              className="lazy-img"
              style={{ backgroundImage: "url(/images/dna in capsule blue-small.jpg)" }}
            >
              <img
                loading="lazy"
                src="./images/dna in capsule blue.jpg"
                alt="DNA in blue capsule"
              />
            </div>
          </div>
          <div className="text">
            <p>
              These supplements are carefully formulated to provide the micronutrients that are at risk when certain food groups are limited. Our products contain no offending metabolites and are sugar, carbohydrate, dairy, gluten, additive, and preservative-free. We decided to use a powder with a scoop with a neutral flavor so that it can be mixed into food or beverages without the struggle of drinking a pill. Over time, we aim to broaden our range of products.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}