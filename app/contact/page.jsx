export const metadata = {
  title: "Contact - SourdoughCalc",
  description: "Get in touch with the SourdoughCalc team.",
};

export default function Contact() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="mb-6">Contact Us</h1>
      <p className="mb-6">
        Have questions, feedback, or a recipe suggestion? We would love to hear from you.
      </p>

      <div className="bg-white rounded-xl p-8 shadow-md">
        <p className="mb-4">
          <strong>Email:</strong> hello@sourdough-hydrationcalculator.com
        </p>
        <p className="mb-4">
          <strong>Response time:</strong> Within 2 business days
        </p>
        <p className="text-brand-muted text-sm">
          For business inquiries (affiliate partnerships, sponsorships), please mention "Business" in your subject line.
        </p>
      </div>
    </article>
  );
}
