export const metadata = {
  title: "Privacy Policy - SourdoughCalc",
  description: "Privacy policy for SourdoughCalc - we do not track, collect, or sell your data.",
};

export default function Privacy() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="mb-6">Privacy Policy</h1>
      <p className="text-brand-muted mb-6">Last updated: 2026-07-21</p>

      <h2 className="mt-8 mb-3">Summary</h2>
      <p className="mb-4">
        SourdoughCalc is a privacy-friendly website. We do not use tracking cookies, do not collect personal
        information, and do not sell your data to third parties.
      </p>

      <h2 className="mt-8 mb-3">Information We Collect</h2>
      <p className="mb-4">
        <strong>None.</strong> Our calculator runs entirely in your browser. Your input values are not sent to any server.
      </p>

      <h2 className="mt-8 mb-3">Analytics</h2>
      <p className="mb-4">
        We use privacy-friendly analytics (Plausible) that do not use cookies and do not track individual users.
        We only see aggregate page views.
      </p>

      <h2 className="mt-8 mb-3">Affiliate Links</h2>
      <p className="mb-4">
        Some links on this site are affiliate links. If you click and make a purchase, we may earn a small
        commission at no extra cost to you.
      </p>

      <h2 className="mt-8 mb-3">Contact</h2>
      <p>
        Questions? Email us at hello@sourdough-hydrationcalculator.com
      </p>
    </article>
  );
}
