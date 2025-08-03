import '../../Didyouknow.css';

export default function Didyouknow2() {
  return (
    <article>
      <h6>What are ketogenic therapies?</h6>
      <div
        className="lazy-img"
        style={{
          backgroundImage: "url(/images/didyouknows/Didyouknow2-small.png)",
        }}
      >
        <a href="/images/didyouknows/Didyouknow2.pdf" target="_blank">
          <img
            loading="lazy"
            src="/images/didyouknows/Didyouknow2.png"
            alt="Ketogenic therapies poster"
          />
        </a>
      </div>
      <p>
        WHAT IS KDT: A high fat, restricted carbohydrate diet designed to mimic the fasting state and induce ketone metabolism.
      </p>
    </article>
  );
}