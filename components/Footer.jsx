import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-[#E8DDC8] py-12 mt-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          <div>
            <h4 className="text-brand-wheat mb-3">SourdoughCalc</h4>
            <p className="text-[#B8A88A]">The free hydration calculator for sourdough bakers.</p>
          </div>
          <div>
            <h4 className="text-brand-wheat mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-brand-wheat hover:text-white">Calculator</Link></li>
              <li><Link href="/blog/" className="text-brand-wheat hover:text-white">Blog</Link></li>
              <li><Link href="/about/" className="text-brand-wheat hover:text-white">About</Link></li>
              <li><Link href="/contact/" className="text-brand-wheat hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-brand-wheat mb-3">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/blog/what-is-hydration/" className="text-brand-wheat hover:text-white">What is Hydration?</Link></li>
              <li><Link href="/blog/hydration-chart/" className="text-brand-wheat hover:text-white">Hydration Chart</Link></li>
              <li><Link href="/blog/how-to-calculate/" className="text-brand-wheat hover:text-white">How to Calculate</Link></li>
            </ul>
          </div>
        </div>
        <p className="text-center pt-6 border-t border-[#5C4033] text-brand-muted text-sm">
          © 2026 SourdoughCalc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
