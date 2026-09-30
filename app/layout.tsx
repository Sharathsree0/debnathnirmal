import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// 1. Import your new component
import FloatingWhatsApp from "@/components/FloatingWhatsApp"; 

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat', 
});

export const metadata: Metadata = {
  title: "Debnath Nirmal SPC | Complete Water & Wastewater Treatment Solutions in Oman",
  description: "Engineering, supply, installation and after-sales support for water-treatment applications across Oman. Specializing in RO, SWRO, STP, ETP, and Filtration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${montserrat.variable}`}>
      <body className={`font-sans antialiased bg-slate-50 text-slate-900 font-montserrat relative`}>
        {/* Trust Strip */}
        <div className="bg-blue-900 text-white text-xs py-4 px-8 flex justify-between md:justify-center md:gap-8 items-center font-medium">
          <span>Since 2009</span>
          <span className="hidden md:inline">•</span>
          <span>Oman-Based</span>
          <span className="hidden md:inline">•</span>
          <span>Residential | Commercial | Industrial</span>
          <span className="hidden md:inline">•</span>
          <span>Installation & AMC</span>
        </div>
        
        <Navbar />
        <main className="min-h-screen">{children}</main>
        
        {/* 2. Add the Floating WhatsApp button here! */}
        <FloatingWhatsApp />
        
        <Footer />
      </body>
    </html>
  );
}