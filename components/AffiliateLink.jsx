"use client";

export default function AffiliateLink({ href, productName, source, children, ...rest }) {
  const handleClick = () => {
    if (typeof window === "undefined") return;
    if (window.gtag) {
      window.gtag("event", "affiliate_click", {
        product: productName,
        source: source || "unknown",
        destination: "amazon.com",
        url: href
      });
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      onClick={handleClick}
      {...rest}
    >
      {children}
    </a>
  );
}
