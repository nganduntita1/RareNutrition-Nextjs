import "../css/Didyouknow.css";

export default function Didyouknow2() {
  return (
    <article>
      <h6>What are ketogenic therapies?</h6>
      <div
        className="lazy-img"
        style={{
          backgroundImage: "url(./images/didyouknows/Didyouknow2-small.png)",
        }}
      >
        <a href="./images/didyouknows/Didyouknow2.pdf" target="_blank">
          <img
            loading="lazy"
            src="./images/didyouknows/Didyouknow2.png"
            alt="Ketogenic therapies poster"
          />
        </a>
      </div>
    </article>
  );
}
