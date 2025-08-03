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
  title: "Rare Nutritions – Shop Supplements & Wellness Products",
  description: "Rare Nutrition is a platform that provides information and supplemental products for rare diseases and nutrition. Discover expert advice, personalized nutrition plans, and high-quality supplements to support your health journey.",
  keywords: "rare diseases, nutrition, rare nutrition, rare nutrition platform",
  authors: [{ name: "Rare Nutrition" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://www.rarenutrition.co.za/",
    title: "Rare Nutrition",
    description: "Rare Nutrition is a platform that provides information and supplemental products for rare diseases and nutrition. Discover expert advice, personalized nutrition plans, and high-quality supplements to support your health journey.",
    images: "https://www.rarenutrition.co.za/images/hero-bg.png",
    siteName: "Rare Nutrition",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rare Nutrition",
    description: "Rare Nutrition is a platform that provides information and supplemental products for rare diseases and nutrition. Discover expert advice, personalized nutrition plans, and high-quality supplements to support your health journey.",
    images: "https://www.rarenutrition.co.za/images/hero-bg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="RZrf67QO9aFFYtIE0yeMhqUwXigw1qdij3hdI2ottH4" />
        <meta name="author" content="Rare Nutrition" />
        <meta name="revisit-after" content="3 days" />
        <meta property="og:see_also" content="https://www.rarenutrition.co.za/" />
        <meta name="google-site-verification" content="hyreGTdaUnVPJ_UysV8Rpx-t-WmP5LTm7M0viNjYJ8Y" />
        <meta name="description" content="Explore premium nutrition supplements and health products. Fast delivery and great prices." data-rh="true" />
        <link rel="canonical" href="https://rarenutritions.netlify.app/" />
        <meta property="og:title" content="Rare Nutritions" />
        <meta property="og:description" content="Premium supplements and wellness products." />
        <meta property="og:url" content="https://rarenutritions.netlify.app/" />
        <meta property="og:image" content="https://rarenutritions.netlify.app/og-image.jpg" />
        <link rel="icon" type="image/svg+xml" href="./images/Icon/molecule-svgrepo-com_white.svg" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <script defer src="https://static.getbutton.io/widget/bundle.js?id=0qMYZ"></script>
        <script src="https://kit.fontawesome.com/4e56079c3d.js" crossOrigin="anonymous"></script>
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
        {/* <script async data-uid="626d19b17d" src="https://rarenutrition.kit.com/626d19b17d/index.js"></script> */}
      </body>
    </html>
  );
}
