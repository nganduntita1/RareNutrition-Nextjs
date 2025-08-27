import '../../Didyouknow.css';
import Image from "next/image";

export default function Didyouknow1() {
  return (
    <article>
      <div
        className="lazy-img"
        style={{
          backgroundImage: "url(/images/didyouknows/Didyouknow1-small.jpg)",
        }}
      >
       <Image
          src="/images/didyouknows/Didyouknow1.jpeg"
          alt="Autosomal recessive inheritance poster"
          width={800}   // replace with actual width of the image
          height={1200} // replace with actual height of the image
          priority={false} // lazy-loads by default unless true
          quality={80}
          sizes="(max-width: 768px) 100vw, 
                (max-width: 1200px) 50vw, 
                33vw"
        />
      </div>
      <h6>What does it mean when a disorder is autosomal recessive?</h6>
      <p>
        Autosomal recessive is one of several ways that a trait, disorder, or disease can be passed down through families. An autosomal recessive disorder means that two copies of an abnormal gene, one from each parent, must be present in a child for the disease or trait to develop. If an individual only has one copy of the gene, they are called carriers, but they do not present with the disorder. Autosomal recessive traits occur when two carrier parents have children and both pass on the same abnormal gene.
      </p>
    </article>
  );
}