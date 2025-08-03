import Didyouknow0 from "./didyouknows/Didyouknow0";
import Didyouknow1 from "./didyouknows/Didyouknow1";
import Didyouknow2 from "./didyouknows/Didyouknow2";
import { ReactNode } from 'react';

interface Didyouknow {
  id: string;
  img: string;
  title: string;
  description: string;
  bodyComponent: ReactNode;
  tags: string[];
  category?: string;
  content?: string;
  fullContent?: string;
  relatedFacts?: number[];
  sources?: {
    name: string;
    url: string;
  }[];
}

const imageDir = "/images/didyouknows/";

export const didyouknows: Didyouknow[] = [
  {
    id: "0",
    img: `${imageDir + "Didyouknow0.jpeg"}`,
    title: "What are Inborn Errors of Metabolism (IEM)?",
    description:
      "Inborn errors of metabolism (IEM) are genetic disorders that result in the inability of the body to properly metabolize nutrients. These diseases involve failure of the metabolic pathways involved in either the break-down or storage of carbohydrates, fatty acids, and proteins. Treatment for IEM varies depending on the specific disorder but may involve dietary changes, enzyme replacement therapy, or gene therapy.",
    bodyComponent: <Didyouknow0 />,
    tags: ["IEM"],
  },
  {
    id: "1",
    img: `${imageDir + "Didyouknow1.jpeg"}`,
    title: "What does it mean when a disorder is autosomal recessive?",
    description:
      "Autosomal recessive is one of several ways that a trait, disorder, or disease can be passed down through families. An autosomal recessive disorder means that two copies of an abnormal gene, one from each parent, must be present in a child for the disease or trait to develop...",
    bodyComponent: <Didyouknow1 />,
    tags: ["Autosomal recessive"],
  },
  {
    id: "2",
    img: `${imageDir + "Didyouknow2.png"}`,
    title: "What are ketogenic therapies?",
    description:
      "WHAT IS KDT: A high fat, restricted carbohydrate diet designed to mimic the fasting state and induce ketone metabolism",
    bodyComponent: <Didyouknow2 />,
    tags: ["Ketogenic therapies"],
  },
];