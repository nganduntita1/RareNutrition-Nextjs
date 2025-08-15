import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Rare Nutrition - Specialists in Rare Disease Nutrition",
  description: "Learn about Rare Nutrition's mission to provide expert-formulated supplements for rare diseases, epilepsy, autism, and specialized therapeutic diets. Trusted by specialists worldwide since 2024.",
  keywords: [
    "about rare nutrition",
    "rare disease nutrition company",
    "specialized supplement company",
    "therapeutic diet specialists",
    "epilepsy nutrition experts",
    "autism supplement specialists",
    "inborn errors of metabolism",
    "ketogenic diet support",
    "rare disease nutrition south africa",
    "medical nutrition therapy",
    "specialized health supplements",
    "personalized nutrition company"
  ],
  alternates: {
    canonical: "https://www.rarenutrition.co.za/about",
  },
  openGraph: {
    title: "About Rare Nutrition - Specialists in Rare Disease Nutrition",
    description: "Discover Rare Nutrition's mission to provide expert-formulated supplements for rare diseases and specialized therapeutic diets. Trusted by specialists worldwide.",
    url: "https://www.rarenutrition.co.za/about",
    type: "website",
    images: ["https://rarenutritions.netlify.app/images/rare pic only.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}