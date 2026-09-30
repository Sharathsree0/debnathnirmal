import Link from "next/link";
import { CheckCircle2, Target, Shield, Droplets, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full font-sans bg-white">
      
      {/* 1. Page Banner Section */}
      <section className="relative w-full h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://debnathnirmal.com/template/images/resources/banner.jpg" 
            alt="About Debnath Nirmal Water Treatment" 
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>

        {/* Banner Content */}
        <div className="relative z-10 text-center text-white px-4 pt-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">About Us</h1>
          <p className="text-lg md:text-xl text-blue-50 font-light max-w-2xl mx-auto">
            Specialists in Water Treatment & Filtration in Oman
          </p>
        </div>
      </section>

      {/* 2. Main About Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side: Text Content */}
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-4">
                <Droplets className="h-6 w-6 text-blue-600" />
                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider">Who We Are</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Debnath Nirmal & Partners Services LLC
              </h3>
              
              <div className="prose prose-lg text-slate-600 mb-8">
                <p className="mb-4 leading-relaxed">
                  Established in 2009, Debnath Nirmal & Partners Services LLC has grown to become a leading engineering and contracting company specializing in water and wastewater treatment solutions across the Sultanate of Oman.
                </p>
                <p className="leading-relaxed">
                  We provide comprehensive, end-to-end services ranging from design, engineering, and supply, to installation, commissioning, and after-sales support. Our local team in Muscat is dedicated to delivering high-performance systems tailored to the specific source water and application requirements of our industrial, commercial, and residential clients.
                </p>
              </div>

              {/* Core Pillars */}
              <div className="space-y-4 mb-10">
                {[
                  "Advanced Reverse Osmosis (RO) & Seawater Desalination (SWRO)",
                  "Sewage (STP) & Effluent (ETP) Treatment Plants",
                  "Comprehensive AMC and local maintenance support"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-md font-bold transition-all shadow-md hover:shadow-lg"
              >
                Get in touch with our team <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right Side: Image with Floating Element */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://debnathnirmal.com/template/images/about/new/6.jpg" 
                  alt="Industrial Water Treatment Facility" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Glassmorphism Floating Badge */}
              <div className="absolute -bottom-8 -left-8 md:bottom-8 md:-left-12 bg-white/80 backdrop-blur-xl border border-white/50 p-6 rounded-xl shadow-2xl max-w-[220px]">
                <div className="text-4xl font-extrabold text-blue-600 mb-1">15+</div>
                <div className="text-sm font-bold text-slate-800 leading-tight">
                  Years of Engineering Excellence in Oman
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="h-14 w-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide sustainable, high-quality, and cost-effective water and wastewater treatment solutions that meet the exact needs of our clients while preserving Oman's vital water resources for future generations.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="h-14 w-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted and preferred partner for industrial and municipal water treatment in the region, recognized for our engineering expertise, reliability, and exceptional after-sales support.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}