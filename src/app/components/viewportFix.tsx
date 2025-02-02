"use client";
import { useEffect } from "react";

export default function ViewportFix() {
  useEffect(() => {
    const setViewportHeight = () => {
      requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--vh", `${window.innerHeight}px`);
      });
    };

    setViewportHeight(); // Initial setting
    window.addEventListener("resize", setViewportHeight);

    // Ensure images are loaded before final adjustment
    window.addEventListener("load", setViewportHeight);

    return () => {
      window.removeEventListener("resize", setViewportHeight);
      window.removeEventListener("load", setViewportHeight);
    };
  }, []);

  return null;
}
