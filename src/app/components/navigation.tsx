"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import ImageHelper from "./helpers/imageHelper";
import { client } from "@/sanity/lib/client";
import { GENERIC_QUERY } from "@/sanity/lib/queries";
import facebook from "../../../public/facebook-svgrepo-com-dark.svg";
import instagram from "../../../public/instagram-svgrepo-com-dark.svg";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [siteData, setSiteData] = useState<any>(null); // Store fetched data

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(GENERIC_QUERY);
      setSiteData(data);
    };

    fetchData();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigation items array
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Functions", href: "#functions" },
    { name: "What's on", href: "#whats-on" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div>
      <nav className="lg:mix-blend-difference text-primary block w-full max-w-screen py-4 mx-auto sticky top-3 lg:px-4 z-[10]">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="lg:hidden">
            <button
              className="mr-2 relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-none"
              onClick={toggleMobileMenu}
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 6h20M2 18h20"></path>
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 h-dvh w-full site-bg text-dark transform transition-transform duration-300 ease-in-out 
                        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden z-50 flex flex-col justify-between overflow-y-auto`}
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button onClick={toggleMobileMenu} className="border-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Centered Menu Items */}
            <div className="flex flex-col items-center justify-center flex-grow text-lg">
              <ul className="flex flex-col gap-4 p-4">
                {navItems.map((item, index) => (
                  <li key={index} className="flex items-center justify-center p-1 gap-x-2 border-none">
                    <Link href={item.href} className="flex items-center justify-center">
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li className="flex items-center justify-center text-center">
                    <a href={"#"} className="px-4 py-2 border w-[200px]" style={{ borderColor: 'var(--bg-primary)' }}>
                    Book
                    </a>
                </li>
              </ul>
            </div>

            {/* Site Data (Pinned to Bottom) */}
            
              <div className="w-full flex flex-col items-center p-4">
                {/* Social Media Links */}
                <div className="flex items-center gap-4">
                    <a href={'#'} target="_blank">
                    <ImageHelper img={instagram} alt="Instagram" width={22} height={22} className="text-dark" />
                    </a>
                    <a href={'#'} target="_blank">
                    <ImageHelper img={facebook} alt="Facebook" width={20} height={20} className="text-dark" />
                    </a>
                </div>

                {/* Contact Information */}
                <div className="mt-4 text-center">
                  <ul>
                    <li>10 BRIDGE ST. SYDNEY NSW 2000                    </li>
                    <li>
                      <a href={`a@b.com`} className="hover:underline">contact@ettesydney.com</a>
                    </li>
                    <li>
                      <a href={`tel:02324298766`} className="hover:underline">02324298766</a>
                    </li>
                  </ul>
                </div>
              </div>
            
          </div>


          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-3">
              {navItems.map((item, index) => (
                <li key={index} className="flex items-center p-1 gap-x-2 ">
                  <Link href={item.href} className="flex items-center">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="px-4 py-2 border w-[100px] text-center">
                <a href={"#"} target='_blank'>Book</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
