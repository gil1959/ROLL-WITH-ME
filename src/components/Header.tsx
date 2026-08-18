"use client";

import Link from "next/link";
import VintageButton from "./VintageButton";
import { useState } from "react";
import clsx from "clsx";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-3 px-6 sm:px-10 lg:px-16 flex items-center justify-between z-50 relative">
      {/* Brand / Logo Section - Centered Stacked Layout with Breathing Room */}
      <Link href="/" className="flex flex-col items-center text-center group focus:outline-none shrink-0 relative z-50">
        {/* Top Established Tag - Lifted slightly higher up */}
        <div className="flex items-center gap-1.5 text-[7.5px] md:text-[8.5px] text-[#4a382c] font-courier uppercase font-bold mb-1 opacity-90 transform -translate-y-[5px]">
          <span className="w-3.5 h-[0.9px] bg-[#4a382c] inline-block opacity-75" />
          <span className="tracking-tight">EST. 2018</span>
          <span className="w-3.5 h-[0.9px] bg-[#4a382c] inline-block opacity-75" />
        </div>

        {/* Brand Name: ROLL with ME */}
        <div className="flex items-baseline justify-center gap-0.5 text-[#4a382c] my-0.5">
          {/* ROLL: DM Serif Display font */}
          <span className="font-dm-serif font-normal text-base sm:text-lg md:text-xl lg:text-[1.35rem] tracking-wider uppercase leading-none transform scale-y-[1.45] origin-bottom text-[#4a382c]">
            ROLL
          </span>

          {/* with: Yellowtail font, moved higher up (-translate-y-[12px]) */}
          <span className="relative inline-flex flex-col items-center mx-0.5 transform -rotate-[9deg] -translate-y-[10px] sm:-translate-y-[12px] -translate-x-[2px]">
            <span className="font-yellowtail text-base sm:text-lg md:text-xl font-normal lowercase tracking-normal text-[#4a382c] leading-none">
              with
            </span>
            {/* Curved Upward Swash Underline Stroke */}
            <svg
              className="w-[24px] sm:w-[30px] h-[3.5px] sm:h-[4.5px] text-[#4a382c] mt-[0px] pointer-events-none overflow-visible"
              viewBox="0 0 32 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 2 3.8 C 11 1.5, 22 1.2, 30 2.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>

          {/* ME: DM Serif Display font */}
          <span className="font-dm-serif font-normal text-base sm:text-lg md:text-xl lg:text-[1.35rem] tracking-wider uppercase leading-none transform scale-y-[1.45] origin-bottom text-[#4a382c]">
            ME
          </span>
        </div>

        {/* Subtitle: PHOTOBOOTH CO. in Roboto font, bolder color, moved closer to ROLL with ME */}
        <span className="font-roboto font-bold text-[6.5px] sm:text-[7.5px] md:text-[8.5px] tracking-[0.38em] text-[#4a382c] uppercase -mt-[4px] sm:-mt-[5px] leading-none">
          PHOTOBOOTH CO.
        </span>
      </Link>

      {/* Right Header Controls: Nav links pushed close to Partner button */}
      <div className="flex items-center justify-end ml-auto gap-4 sm:gap-8 lg:gap-12 xl:gap-16">
        {/* Desktop Navigation Menu Links - Soft vintage typewriter sepia color */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 font-courier text-xs md:text-sm text-[#4a3a2f] tracking-wide font-semibold opacity-95">
          <Link href="#" className="hover:text-[#241912] hover:underline underline-offset-4 decoration-[#7a6655] transition-all duration-200">home</Link>
          <Link href="#" className="hover:text-[#241912] hover:underline underline-offset-4 decoration-[#7a6655] transition-all duration-200">booth locator</Link>
          <Link href="#" className="hover:text-[#241912] hover:underline underline-offset-4 decoration-[#7a6655] transition-all duration-200">our why</Link>
          <Link href="#" className="hover:text-[#241912] hover:underline underline-offset-4 decoration-[#7a6655] transition-all duration-200">faq</Link>
          <Link href="#" className="hover:text-[#241912] hover:underline underline-offset-4 decoration-[#7a6655] transition-all duration-200">contact us</Link>
        </nav>

        {/* Partner With Us Badge Button - Hidden on mobile (<640px) to give space, shown on sm+ */}
        <div className="hidden sm:block transform scale-[0.85] lg:scale-100 origin-right">
          <VintageButton>partner with us</VintageButton>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className={clsx('lg:hidden flex items-center justify-center p-2 focus:outline-none relative z-50 transition-colors', isMobileMenuOpen ? 'text-[#3e2e23]' : 'text-[#4a3a2f]')}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Glassmorphism Overlay (Background dimming) */}
      <div 
        className={clsx(
          "fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 transition-opacity duration-300 lg:hidden",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Glassmorphism Sidebar */}
      <div 
        className={clsx(
          "fixed top-0 right-0 h-full w-[70vw] sm:w-[50vw] max-w-sm z-40 flex flex-col pt-28 px-8 gap-10 lg:hidden",
          "bg-white/20 backdrop-blur-xl border-l border-white/40 shadow-[-10px_0_30px_rgba(0,0,0,0.15)]",
          "transition-transform duration-300 ease-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-start gap-8 font-courier text-lg sm:text-xl text-[#3e2e23] tracking-wider font-bold">
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-black hover:translate-x-2 transition-transform">home</Link>
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-black hover:translate-x-2 transition-transform">booth locator</Link>
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-black hover:translate-x-2 transition-transform">our why</Link>
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-black hover:translate-x-2 transition-transform">faq</Link>
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-black hover:translate-x-2 transition-transform">contact us</Link>
        </nav>
        
        {/* Partner with Us visible inside sidebar on extra small screens (<640px) */}
        <div className="mt-4 sm:hidden transform origin-left scale-90">
           <VintageButton>partner with us</VintageButton>
        </div>
      </div>
    </header>
  );
}
