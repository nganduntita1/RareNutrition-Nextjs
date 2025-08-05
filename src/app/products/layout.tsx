import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Premium Supplements for Rare Diseases | Products",
  description: "Explore our comprehensive range of expert-formulated supplements for rare diseases, epilepsy, autism, and specialized therapeutic diets. Sugar-free, gluten-free, dairy-free options available.",
  keywords: [
    "rare disease supplements",
    "ketogenic diet products",
    "epilepsy supplements",
    "autism nutrition products",
    "inborn errors of metabolism supplements",
    "therapeutic diet products",
    "specialized health supplements",
    "sugar-free vitamins",
    "gluten-free supplements",
    "dairy-free nutrition",
    "personalized supplements",
    "medical nutrition products"
  ],
  alternates: {
    canonical: "https://rarenutritions.netlify.app/products",
  },
  openGraph: {
    title: "Premium Supplements for Rare Diseases | Rare Nutrition",
    description: "Expert-formulated supplements for rare diseases and specialized therapeutic diets. Personalized nutrition solutions with high-quality ingredients.",
    url: "https://rarenutritions.netlify.app/products",
    type: "website",
    images: ["https://rarenutritions.netlify.app/images/products display.png"],
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}