import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-cream/95 backdrop-blur-sm border-b border-[#E8DDC8]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-bold text-brand-brown hover:no-underline">
          🥖 SourdoughCalc
        </Link>
        <nav className="flex gap-7">
          <Link href="/" className="text-brand-dark font-medium hover:text-brand-brown">
            Calculator
          </Link>
          <Link href="/blog/" className="text-brand-dark font-medium hover:text-brand-brown">
            Blog
          </Link>
          <Link href="/about/" className="text-brand-dark font-medium hover:text-brand-brown">
            About
          </Link>
          <Link href="/contact/" className="text-brand-dark font-medium hover:text-brand-brown">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
