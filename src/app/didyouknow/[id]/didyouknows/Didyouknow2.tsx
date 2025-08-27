import '../../Didyouknow.css';
import Image from "next/image";

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
          <Image
            src="/images/didyouknows/Didyouknow2.png"
            alt="Ketogenic therapies poster"
            width={800}    // replace with actual image width
            height={1200}  // replace with actual image height
            priority={false} // lazy loads by default
            quality={80}
            sizes="(max-width: 768px) 100vw, 
                  (max-width: 1200px) 50vw, 
                  33vw"
          />
        </a>
      </div>
      <p>
        WHAT IS KDT: A high fat, restricted carbohydrate diet designed to mimic the fasting state and induce ketone metabolism.
      </p>
    </article>
  );
}