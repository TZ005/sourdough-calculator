"use client";

import { usePathname } from "next/navigation";
import Comments from "@/components/Comments";

export default function BlogLayout({ children }) {
  const pathname = usePathname();
  const isListPage = pathname === "/blog" || pathname === "/blog/";

  if (isListPage) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      <Comments />
    </>
  );
}