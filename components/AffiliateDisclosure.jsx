"use client";

// Shared FTC/Amazon disclosure, required wherever affiliate links appear.
// Usage:
//   <AffiliateDisclosure />                        // centered, like homepage
//   <AffiliateDisclosure variant="inline" />       // compact, for blog callouts
export default function AffiliateDisclosure({ variant = "centered", className = "" }) {
  const base =
    "As an Amazon Associate, we earn from qualifying purchases. Prices stay the same for you.";
  if (variant === "inline") {
    return (
      <p className={"text-xs text-brand-muted italic mb-3 " + className}>
        {base}
      </p>
    );
  }
  return (
    <p
      className={
        "text-center text-[#5C4033] mb-8 max-w-2xl mx-auto " + className
      }
    >
      {base}
    </p>
  );
}