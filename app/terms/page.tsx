import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - SourdoughCalc",
  description: "Terms of service for SourdoughCalc, the free sourdough hydration calculator for home bakers.",
};

export default function Terms() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="mb-6">Terms of Service</h1>
      <p className="text-brand-muted mb-6">Last updated: 2026-08-01</p>

      <h2 className="mt-8 mb-3">Use of the Website</h2>
      <p className="mb-4">
        SourdoughCalc provides a free sourdough hydration calculator and baking guides for personal,
        non-commercial use. You may use the tools and read the content without creating an account.
      </p>

      <h2 className="mt-8 mb-3">Accuracy of Results</h2>
      <p className="mb-4">
        We work hard to keep the calculator and articles accurate, but baking results depend on your
        flour, starter, temperature, and equipment. The information on this website is provided
        without warranty and should not be treated as professional advice.
      </p>

      <h2 className="mt-8 mb-3">Affiliate Disclosure</h2>
      <p className="mb-4">
        Some links on this site are affiliate links. If you click one and make a purchase, we may
        earn a small commission at no extra cost to you.
      </p>

      <h2 className="mt-8 mb-3">Intellectual Property</h2>
      <p className="mb-4">
        The content, design, and tools on this website are owned by SourdoughCalc unless otherwise
        noted. You may share links to our pages, but do not republish our articles or tools without
        permission.
      </p>

      <h2 className="mt-8 mb-3">Contact</h2>
      <p>
        Questions about these terms? Email us at yanxi001studio@sourdough-hydrationcalculator.com
      </p>
    </article>
  );
}
