import "../css/Didyouknow.css";
import Image from "next/image";


export default function Didyouknow0() {
  return (
    <article>
      <div
        className="lazy-img"
        style={{
          backgroundImage: "url(./images/didyouknows/Didyouknow0-small.jpg)",
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
      <h6>What are Inborn Errors of Metabolism (IEM)?</h6>
      <p>
        Inborn errors of metabolism are a group of genetic disorders that result
        in the inability of the body to properly metabolize nutrients (cannot
        properly turn food into energy). These diseases involve failure of the
        metabolic pathways involved in either the break-down or storage of
        carbohydrates, fatty acids, and proteins. Examples include PKU,
        Propionic Acidaemia, Galactosemia, MCAD, GA-1 and -2, and many more.
      </p>
      <p>
        This leads to the accumulation of toxic substances in the body and can
        cause a variety of symptoms and health problems, including intellectual
        disability, seizures (epilepsy), and death. These disorders can be
        caused by mutations in genes that encode enzymes involved in metabolic
        pathways, leading to a deficiency or malfunction of these enzymes.
      </p>
      <p>
        Treatment for inborn errors of metabolism varies depending on the
        specific disorder but may involve dietary changes, enzyme replacement
        therapy, or gene therapy. All IEM&#39;s that target protein,
        carbohydrate or fat metabolism&#39;s primary treatment is diet, which is
        implemented by a specialized, experienced dietician, together with
        supplementation to meet the needs of the individual
      </p>
    </article>
  );
}
