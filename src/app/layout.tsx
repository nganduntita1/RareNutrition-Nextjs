import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, Dancing_Script } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Rare Nutrition - Premium Supplements for Rare Diseases & Specialized Diets",
    template: "%s | Rare Nutrition"
  },
  description: "Expert-formulated supplements for rare diseases, epilepsy, autism, and specialized therapeutic diets. Sugar-free, gluten-free, dairy-free supplements with personalized nutrition support. Trusted by specialists worldwide.",
  keywords: [
    "rare disease supplements",
    "ketogenic diet supplements",
    "epilepsy nutrition",
    "autism supplements",
    "inborn errors of metabolism",
    "specialized therapeutic diets",
    "sugar-free supplements",
    "gluten-free vitamins",
    "personalized nutrition",
    "rare nutrition south africa",
    "therapeutic diet supplements",
    "medical nutrition therapy",
    "specialized supplements",
    "preservative-free vitamins",
    "additive-free supplements"
  ],
  authors: [{ name: "Rare Nutrition Team", url: "https://www.rarenutrition.co.za/" }],
  creator: "Rare Nutrition",
  publisher: "Rare Nutrition",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://www.rarenutrition.co.za/",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.rarenutrition.co.za/",
    siteName: "Rare Nutrition",
    title: "Rare Nutrition - Premium Supplements for Rare Diseases",
    description: "Expert-formulated supplements for rare diseases and specialized therapeutic diets. Trusted by specialists worldwide.",
    images: [
      {
        url: "https://www.rarenutrition.co.za/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Rare Nutrition - Premium Supplements",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rare Nutrition - Premium Supplements for Rare Diseases",
    description: "Expert-formulated supplements for rare diseases and specialized therapeutic diets. Trusted by specialists worldwide.",
    images: ["https://www.rarenutrition.co.za/images/hero-bg.png"],
    creator: "@rarenutrition",
  },
  verification: {
    google: "RZrf67QO9aFFYtIE0yeMhqUwXigw1qdij3hdI2ottH4",
  },
  category: "health",
  classification: "Health & Medical",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="./images/Icon/molecule-svgrepo-com_white.svg" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <script async src="https://static.getbutton.io/widget/bundle.js?id=0qMYZ"></script>
        <script async src="https://kit.fontawesome.com/4e56079c3d.js" crossOrigin="anonymous"></script>
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "Rare Nutrition",
              "alternateName": "Rare Nutritions",
              "description": "Expert-formulated supplements for rare diseases, epilepsy, autism, and specialized therapeutic diets",
              "url": "https://www.rarenutrition.co.za/",
              "logo": "https://www.rarenutrition.co.za/images/hero-bg.png",
              "image": "https://www.rarenutrition.co.za/images/hero-bg.png",
              "telephone": "+27-21-123-4567",
              "email": "info@rarenutrition.co.za",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Cape Town",
                "addressLocality": "Cape Town",
                "addressRegion": "Western Cape",
                "postalCode": "8001",
                "addressCountry": "ZA"
              },
              "areaServed": ["South Africa", "International"],
              "medicalSpecialty": [
                "Clinical Nutrition",
                "Pediatric Nutrition",
                "Medical Nutrition Therapy"
              ],
              "serviceType": [
                "Personalized Supplements",
                "Specialized Therapeutic Diets",
                "Rare Disease Nutrition",
                "Ketogenic Diet Support",
                "Autism Nutrition",
                "Inborn Errors of Metabolism"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Rare Nutrition Products",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Personalized Supplements",
                      "description": "Custom-formulated supplements for rare diseases"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Therapeutic Diet Support",
                      "description": "Specialized nutrition for ketogenic and therapeutic diets"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://www.rarenutrition.co.za/",
                "https://www.rarenutrition.co.za/"
              ]
            })
          }}
        />
        <script dangerouslySetInnerHTML={{
          __html: `
            function setVH() {
              const vh = window.innerHeight * 0.01;
              document.documentElement.style.setProperty('--vh', vh + 'px');
            }
            setVH();
            window.addEventListener('resize', setVH);
          `
        }} />
      </head>
      <body
        className={`${dmSans.variable} ${dmSerifDisplay.variable} ${dancingScript.variable} antialiased`}
      >
        <NavBar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <script async data-uid="ad21b6ca0b" src="https://rarenutrition.kit.com/ad21b6ca0b/index.js"></script>
      </body>
    </html>
  );
}
