"use client";

import Link from "next/link";
import React from "react";
import ImageHelper from "./helpers/imageHelper";
import { useNav } from "../context/navContext" // Import NavContext
import facebook from "../../../public/facebook-svgrepo-com-dark.svg";
import instagram from "../../../public/instagram-svgrepo-com-dark.svg";

type SiteInfoProps = {
  siteData: {
    address: string;
    email: string;
    phone: string;
    instagram: string;
    facebook: string;
  };
};

export default function Navigation({ siteData }: SiteInfoProps) {
  const { isNavOpen, toggleNav, closeNav } = useNav(); // Use NavContext

  // Navigation items array
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Functions", href: "#functions" },
    { name: "What's on", href: "#whats-on" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav>
      <div className="mix-blend-difference z-[5] lg:hidden absolute top-[17px] right-[20px]">
        <div className="">
          <button
            className={`my-nav-button relative ml-auto h-6 max-h-[15px] w-8 max-w-[40px] select-none rounded-lg text-center align-middle transition-all border-none p-2 ${isNavOpen ? "hidden" : ""}`}
            onClick={toggleNav}
            type="button"
          >
            <div className='menu-icon'>
              <div className={`menu-icon__cheeckbox`}>
                <div>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>     
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-dvh w-full site-bg text-dark transition-opacity duration-300 ease-in-out 
          ${isNavOpen ? "opacity-100 visible" : "opacity-0 delay-300 invisible"} lg:hidden z-50 flex flex-col justify-between overflow-y-auto z-[3]`}
      >
        {/* Centered Menu Items */}
        <div className="lg:hidden absolute top-[19px] right-[17px] z-[6]">
          <button
            className={`my-nav-button relative ml-auto h-6 max-h-[15px] w-8 max-w-[40px] select-none rounded-lg text-center align-middle transition-all border-none p-2 ${isNavOpen ? '' : "hidden"}`}
            onClick={closeNav}
            type="button"
          >
            <div className='menu-icon'>
              <div className={`menu-icon__cheeckbox open`}>
                <div>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>     
          </button>
        </div>
        <div className="flex flex-col items-center justify-center flex-grow text-lg">
          <ul className="flex flex-col gap-4 p-4">
            {navItems.map((item, index) => (
              <li key={index} className="flex items-center justify-center p-1 gap-x-2 border-none">
                <Link href={item.href} className="flex items-center justify-center" onClick={closeNav}>
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="flex items-center justify-center text-center">
              <a href={"#"} className="px-4 py-2 border w-[200px]" style={{ borderColor: 'var(--bg-primary)' }} onClick={closeNav}>
                Book
              </a>
            </li>
          </ul>
        </div>

        {/* Site Data (Pinned to Bottom) */}
        <div className="w-full flex flex-col items-center p-4">
          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <a href={siteData.instagram} target="_blank">
              <ImageHelper img={instagram} alt="Instagram" width={22} height={22} className="text-dark" />
            </a>
            <a href={siteData.facebook} target="_blank">
              <ImageHelper img={facebook} alt="Facebook" width={20} height={20} className="text-dark" />
            </a>
          </div>

          {/* Contact Information */}
          <div className="mt-4 text-center">
            <ul>
              <li>{siteData?.address}</li>
              <li>
                <a href={`mailto:${siteData?.email}`} className="hover:underline">
                  {siteData?.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteData?.phone}`} className="hover:underline">
                  {siteData?.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mix-blend-difference text-primary block w-full max-w-screen py-4 mx-auto sticky top-3 lg:px-4 z-[10]">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
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
      </div>
    </nav>
  );
}
