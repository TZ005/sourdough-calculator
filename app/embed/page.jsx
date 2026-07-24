import Link from "next/link";
import Calculator from "@/components/Calculator";

export const metadata = {
  title: "Sourdough Hydration Calculator - Embed",
  robots: { index: false },
};

export default function Embed() {
  return (
    <>
      <style>{`
        header, footer, nav { display: none !important; }
        body { background: white !important; }
        main { padding: 0 !important; }
        .embed-banner { background: linear-gradient(to right, #f5ebe0, #d4a574); padding: 8px 16px; text-align: center; font-size: 14px; }
        .embed-banner a { color: #5C4033; font-weight: 600; text-decoration: none; }
        .embed-container { max-width: 600px; margin: 0 auto; padding: 16px; }
        .embed-title { font-size: 18px; font-weight: 700; color: #5C4033; text-align: center; margin-bottom: 12px; }
        .embed-footer { text-align: center; font-size: 12px; color: #5C4033; margin-top: 16px; padding-top: 12px; border-top: 1px solid #e5e5e5; }
        .embed-footer a { color: #5C4033; font-weight: 500; }
      `}</style>

      <div className="embed-banner">
        <a href="https://sourdough-hydrationcalculator.com/" target="_blank" rel="noreferrer">
          SourdoughCalc - Free Hydration Calculator →
        </a>
      </div>

      <div className="embed-container">
        <h1 className="embed-title">Sourdough Hydration Calculator</h1>
        <Calculator />
        <p className="embed-footer">
          <Link href="/" target="_blank" rel="noreferrer">
            Open SourdoughCalc (full site) →
          </Link>
        </p>
      </div>
    </>
  );
}
