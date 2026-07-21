import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sourdough Hydration Calculator - Free Tool (2026) | SourdoughCalc",
  description: "Free sourdough hydration calculator. Input flour weight, get water, salt & starter ratios instantly. Includes hydration chart for 50%–100%.",
  keywords: ["sourdough hydration calculator", "sourdough hydration", "hydration calculator", "sourdough recipe calculator"],
  openGraph: {
    title: "Sourdough Hydration Calculator - Free Tool",
    description: "Calculate water, salt, and starter ratios for any sourdough recipe instantly.",
    type: "website",
    url: "https://sourdoughhydrationcalculator.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-brand-cream text-brand-dark">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
