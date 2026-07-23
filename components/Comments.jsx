"use client";

import { useEffect, useRef } from "react";

export default function Comments() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (containerRef.current.querySelector("script[data-repo]")) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", "TZ005/sourdough-calculator");
    script.setAttribute("data-repo-id", "R_kgDOTfU2_Q");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_kwDOTfU2_c4DByo5");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("data-lang", "en");

    containerRef.current.appendChild(script);

    return () => {
      const existing = containerRef.current?.querySelector("script[data-repo]");
      if (existing && existing.parentNode) {
        existing.parentNode.removeChild(existing);
      }
    };
  }, []);

  return (
    <div className="mt-12 pt-8 border-t border-brand-tan">
      <h3 className="text-xl font-semibold mb-4 text-brand-dark">Comments</h3>
      <p className="text-sm text-brand-muted mb-4">
        Sign in with GitHub to leave a comment. Powered by{" "}
        <a
          href="https://giscus.app"
          target="_blank"
          rel="noreferrer noopener"
          className="text-brand-brown underline"
        >
          giscus
        </a>
        .
      </p>
      <div ref={containerRef} />
    </div>
  );
}
