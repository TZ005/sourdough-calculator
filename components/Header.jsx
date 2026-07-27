"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Calculator" },
  { href: "/blog/", label: "Blog" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-brand-cream/95 backdrop-blur-sm border-b border-[#E8DDC8]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-bold text-brand-brown hover:no-underline">
          🥖 SourdoughCalc
        </Link>
        <nav className="flex gap-7">
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "relative pb-1 font-medium transition-colors " +
                  (active
                    ? "text-brand-brown after:absolute after:left-0 after:right-0 after:-bottom-[18px] after:h-[3px] after:bg-brand-brown after:rounded-full"
                    : "text-brand-dark hover:text-brand-brown")
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}