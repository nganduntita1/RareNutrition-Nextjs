import "../css/Didyouknow.css";

export default function Didyouknow1() {
  return (
    <article>
      <div
        className="lazy-img"
        style={{
          backgroundImage: "url(./images/didyouknows/Didyouknow1-small.jpg)",
        }}
      >
        <img
          loading="lazy"
          src="./images/didyouknows/Didyouknow1.jpeg"
          alt="Autosomal recessive inheritance poster"
        />
      </div>
      <h6>What does it mean when a disorder is autosomal recessive?</h6>
      <p>
        What does it mean when a disorder is autosomal recessive? Autosomal
        recessive is one of several ways that a trait, disorder, or disease can
        be passed down through families. An autosomal recessive disorder means
        that two copies of an abnormal gene, one from each parent, must be
        present in a child for the disease or trait to develop. If an individual
        only has one copy of the gene, they are called carriers, but they do not
        present with the disorder. Autosomal recessive traits occur when two
        carrier parents have children and both pass on the same abnormal gene.
      </p>
    </article>
  );
}
