import '../../Didyouknow.css';
import Image from "next/image";


export default function Didyouknow0() {
  return (
    <article>
      <h6>What are Inborn Errors of Metabolism (IEM)?</h6>
      <div
        className="lazy-img"
        style={{
          backgroundImage: "url(/images/didyouknows/Didyouknow0-small.jpeg)",
        }}
      >
        <Image
          src="/images/didyouknows/Didyouknow0.jpeg"
          alt="Inborn Errors of Metabolism poster"
          width={800}   // set the actual width of your image
          height={1200} // set the actual height of your image
          priority={false} // loads lazily by default, unless you set true
          quality={80}  // tweak for performance (default is 75)
          sizes="(max-width: 768px) 100vw, 
                (max-width: 1200px) 50vw, 
                33vw"
        />
      </div>
      <p>
        Inborn errors of metabolism (IEM) are genetic disorders that result in the inability of the body to properly metabolize nutrients. These diseases involve failure of the metabolic pathways involved in either the break-down or storage of carbohydrates, fatty acids, and proteins. Treatment for IEM varies depending on the specific disorder but may involve dietary changes, enzyme replacement therapy, or gene therapy.
      </p>
    </article>
  );
}