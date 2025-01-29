"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Conditionally apply the 'absolute' class only on the root path
  const footerClass = pathname === "/" ? "absolute" : "";

  return (
    <footer className={`${footerClass} bottom-0 w-full z-10 p-4`}>
      <div className="grid grid-cols-12 items-center gap-4">
        {/* Project Inquiries */}
       FOOTER
      </div>
    </footer>
  );
}
