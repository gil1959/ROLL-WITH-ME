"use client";

import React from "react";

interface VintageButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function VintageButton({ children, className = "", ...props }: VintageButtonProps) {
  return (
    <button
      {...props}
      className={`relative inline-flex items-center justify-center font-courier text-xs md:text-sm text-[#ede5d8] cursor-pointer group transition-transform duration-200 hover:-translate-y-[1px] active:translate-y-0 select-none min-h-[50px] ${className}`}
      style={{ padding: "14px 28px" }}
    >
      {/* SVG Background Layer for Subtle Concave Bracket Plaque */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_2px_8px_rgba(35,23,15,0.3)] transition-all duration-200 group-hover:drop-shadow-[0_4px_14px_rgba(35,23,15,0.4)]"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Fill & Bronze Border with Smaller Delicate Concave Notch (Radius 6) */}
        <path
          d="M 10 2 
             L 190 2 
             L 190 5 
             A 6 6 0 0 0 195 10 
             L 198 10 
             L 198 50 
             L 195 50 
             A 6 6 0 0 0 190 55 
             L 190 58 
             L 10 58 
             L 10 55 
             A 6 6 0 0 0 5 50 
             L 2 50 
             L 2 10 
             L 5 10 
             A 6 6 0 0 0 10 5 
             Z"
          fill="#34261d"
          stroke="#7a6655"
          strokeWidth="1.5"
          className="transition-colors duration-200 group-hover:fill-[#241912]"
        />
        {/* Inner Cream Fine Line matching Smaller Concave Notch (Radius 4.5) */}
        <path
          d="M 12 6 
             L 188 6 
             L 188 8.5 
             A 4.5 4.5 0 0 0 191.5 12 
             L 194 12 
             L 194 48 
             L 191.5 48 
             A 4.5 4.5 0 0 0 188 51.5 
             L 188 54 
             L 12 54 
             L 12 51.5 
             A 4.5 4.5 0 0 0 8.5 48 
             L 6 48 
             L 6 12 
             L 8.5 12 
             A 4.5 4.5 0 0 0 12 8.5 
             Z"
          fill="none"
          stroke="rgba(237, 229, 216, 0.55)"
          strokeWidth="1"
        />
      </svg>

      {/* Button Text Content */}
      <span className="relative z-10 font-courier tracking-wider leading-none text-[#ede5d8] font-semibold">
        {children}
      </span>
    </button>
  );
}
