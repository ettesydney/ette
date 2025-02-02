"use client";
import { useEffect } from "react";

export default function ViewportFix() {
  useEffect(() => {
    const setViewportHeight = () => {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight}px`);
    };

    setViewportHeight();
    window.addEventListener("resize", setViewportHeight);

    return () => window.removeEventListener("resize", setViewportHeight);
  }, []);

  return null; // This component does not render anything, just runs the effect
}
