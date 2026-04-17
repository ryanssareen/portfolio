"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const firstPath = useRef(pathname);

  useEffect(() => {
    if (pathname === firstPath.current) return;
    setVisible(false);
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, [pathname]);

  return (
    <div
      className={`transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </div>
  );
}
