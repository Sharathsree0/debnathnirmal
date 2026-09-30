"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed inset-x-0 z-50 flex justify-center pointer-events-none transition-all duration-500 ${
        isScrolled ? "top-4 px-4 md:px-8" : "top-0 px-0"
      }`}
    >
      <nav 
        className={`pointer-events-auto flex items-center justify-between transition-all duration-500 w-full ${
          isScrolled 
            // GLASSMORPHISM STATE: semi-transparent white + heavy blur + light border
            ? "max-w-6xl rounded-full shadow-2xl border border-white/40 bg-white/40 backdrop-blur-xl py-3 px-6 h-16" 
            // SOLID TOP STATE: fixed height so the scaling logo doesn't stretch it
            : "max-w-full rounded-none border-b border-gray-200 bg-white py-0 px-6 lg:px-8 shadow-none h-20"
        }`}
      >
        <button 
          className="md:hidden text-gray-800 hover:text-blue-700 transition-colors shrink-0" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo Section */}
        <Link 
          href="/" 
          className={`flex items-center overflow-hidden transition-all duration-500 whitespace-nowrap shrink-0 ${
            isScrolled ? "max-w-0 opacity-0 mr-0" : "max-w-[800px] opacity-100 mr-8"
          }`}
        >
          {/* 
            REMOVED: scale-[2.00] origin-left (this was causing the cut-off)
            ADDED: w-64 md:w-80 h-auto (forces the image to physically be 256px to 320px wide)
          */}
          <img 
            src="/logo.png" 
            alt="Debnath Nirmal & Partners Services LLC Logo" 
            className="w-64 md:w-70 h-auto object-contain" 
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className={`hidden md:flex items-center space-x-8 text-sm font-bold transition-all duration-500 ${
          // Ensure text is highly legible on the glass background
          isScrolled ? "mx-auto text-slate-900" : "mx-auto text-gray-700"
        }`}>
          <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-blue-700 transition-colors">About</Link>
          
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-700 transition-colors py-6">
              Solutions <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute top-full left-0 w-56 bg-white/95 backdrop-blur-md rounded-xl border border-white/50 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-3">
              <Link href="/solutions/ro" className="px-5 py-2.5 hover:bg-blue-50/50 text-sm transition-colors text-slate-800">RO Systems</Link>
              <Link href="/solutions/swro" className="px-5 py-2.5 hover:bg-blue-50/50 text-sm transition-colors text-slate-800">SWRO / Desalination</Link>
              <Link href="/solutions/stp" className="px-5 py-2.5 hover:bg-blue-50/50 text-sm transition-colors text-slate-800">STP</Link>
              <Link href="/solutions/etp" className="px-5 py-2.5 hover:bg-blue-50/50 text-sm transition-colors text-slate-800">ETP</Link>
              <Link href="/solutions/filtration" className="px-5 py-2.5 hover:bg-blue-50/50 text-sm transition-colors text-slate-800">Filtration</Link>
            </div>
          </div>

          <Link href="/products" className="hover:text-blue-700 transition-colors">Products</Link>
          <Link href="/projects" className="hover:text-blue-700 transition-colors">Projects</Link>
          
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-700 transition-colors py-6">
              Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-md rounded-xl border border-white/50 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-3">
              <Link href="/services" className="px-5 py-2.5 hover:bg-blue-50/50 text-sm transition-colors text-slate-800">Installation</Link>
              <Link href="/services" className="px-5 py-2.5 hover:bg-blue-50/50 text-sm transition-colors text-slate-800">Commissioning</Link>
              <Link href="/services" className="px-5 py-2.5 hover:bg-blue-50/50 text-sm transition-colors text-slate-800">AMC & Maintenance</Link>
              <Link href="/services" className="px-5 py-2.5 hover:bg-blue-50/50 text-sm transition-colors text-slate-800">Water Testing</Link>
            </div>
          </div>

          <Link href="/contact" className="hover:text-blue-700 transition-colors">Contact</Link>
        </div>

        {/* Action Button */}
        <div className="flex items-center shrink-0">
          <Link 
            href="/contact" 
            className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-colors whitespace-nowrap shadow-md"
          >
            Request a quote
          </Link>
        </div>
      </nav>
    </div>
  );
}