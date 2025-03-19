'use client'
import { createContext, useContext, useState } from "react";

type NavContextType = {
  isNavOpen: boolean;
  toggleNav: () => void;
  openNav: () => void;
  closeNav: () => void;
};

// Create the context with an initial value of `null`
const NavContext = createContext<NavContextType | null>(null);

// Provider component
export const NavProvider = ({ children }: { children: React.ReactNode }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen((prev) => !prev);
  const openNav = () => setIsNavOpen(true);
  const closeNav = () => setIsNavOpen(false);

  return (
    <NavContext.Provider value={{ isNavOpen, toggleNav, openNav, closeNav }}>
      {children}
    </NavContext.Provider>
  );
};

// Custom hook for consuming NavContext
export const useNav = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNav must be used within a NavProvider");
  }
  return context;
};
