// Shared Article JSON-LD for blog posts. Single source of truth so
// publisher.logo, site URL, and schema shape stay consistent across
// all posts. Edit here once -> 22 blog pages pick up the change.
import React from "react";

const SITE = "https://sourdough-hydrationcalculator.com";
const OG_IMG = "/sourdough-baking-tools.png";
const ORG = {
  "@type": "Organization",
  name: "SourdoughCalc",
  url: SITE + "/",
};

export interface ArticleSchemaProps {
  slug: string;
  title: string;
  description: string;
  image: string;            // relative path like /images/blog/<slug>.png
  datePublished: string;    // "YYYY-MM-DD"
  dateModified?: string;    // "YYYY-MM-DD" or "YYYY-MM-DDTHH:MM:SSZ"
  articleSection?: string;
}

export default function ArticleSchema({
  slug,
  title,
  description,
  image,
  datePublished,
  dateModified,
  articleSection = "Sourdough Baking",
}: ArticleSchemaProps): JSX.Element {
  const url = SITE + "/blog/" + slug + "/";
  const fullImage = image && image.startsWith("http") ? image : SITE + (image || "/images/blog/" + slug + ".png");

  const payload = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: fullImage,
    author: ORG,
    publisher: {
      ...ORG,
      logo: {
        "@type": "ImageObject",
        url: SITE + OG_IMG,
        width: 1200,
        height: 630,
      },
    },
    url: url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    articleSection: articleSection,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}