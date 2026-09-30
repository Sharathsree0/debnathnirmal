"use client";
import Link from "next/link";
import { ArrowRight, CheckCircle2, PlayCircle, Droplet, FileText } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // 1. Canvas Scroll Refs & State
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [preloadedImages, setPreloadedImages] = useState<HTMLImageElement[]>([]);
  
  const frameCount = 50; 

  // 2. Preload Image Sequence for Canvas
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      
      // Matches: ezgif-frame-001.jpg up to ezgif-frame-050.jpg
      img.src = `/frames/ezgif-frame-${i.toString().padStart(3, '0')}.png`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === 1 && canvasRef.current) {
          const ctx = canvasRef.current.getContext("2d");
          if (ctx) ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
        }
      };
      images.push(img);
    }
    setPreloadedImages(images);
  }, []);

  // 3. Canvas Scroll-Scrubbing Logic
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollWrapperRef.current || !canvasRef.current || preloadedImages.length === 0) return;
      
      const wrapper = scrollWrapperRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      
      const rect = wrapper.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = windowHeight; 
      const end = -rect.height; 
      
      let progress = (start - rect.top) / (start - end);
      progress = Math.max(0, Math.min(1, progress));

      // Calculate the exact frame based on scroll progress
      const frameIndex = Math.min(frameCount - 1, Math.floor(progress * frameCount));
      const currentImage = preloadedImages[frameIndex];

      if (currentImage && currentImage.complete && ctx) {
        window.requestAnimationFrame(() => {
          ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.height);
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [preloadedImages]);

  // 4. Hero Video Autoplay Logic
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch((err) => console.log("Playback error:", err));
        }
      }, 10000);
    };

    video.addEventListener("ended", handleVideoEnd);

    const initialPlay = setTimeout(() => {
      video.play().catch((err) => console.log("Playback error:", err));
    }, 10000);

    return () => {
      video.removeEventListener("ended", handleVideoEnd);
      clearTimeout(initialPlay);
    };
  }, []);

  // 5. Sequential Fade-In Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-12');
        }
      });
    }, { 
      threshold: 0.1, 
      rootMargin: "0px 0px -50px 0px"
    });

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col w-full font-sans">
      {/* Hero Section */}
      <section className="relative text-white pt-24 pb-24 overflow-hidden flex items-center min-h-[70vh]">
        <video 
          ref={videoRef}
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left w-full">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 leading-tight">
            Complete Water & Wastewater <br className="hidden md:block" /> Treatment Solutions in Oman
          </h1>
          <p className="text-lg md:text-xl text-blue-50 font-light mb-4 tracking-wide">
            RO • SWRO • STP • ETP • Filtration • Industrial Water Treatment
          </p>
          <p className="max-w-2xl text-white/90 font-light text-base md:text-lg mb-10 mx-auto md:mx-0">
            Engineering, supply, installation and after-sales support for water-treatment applications across Oman.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded font-medium transition-all flex items-center justify-center gap-2 shadow-sm">
              Request a quote <ArrowRight size={18} />
            </Link>
            <a href="https://wa.me/96896961756" target="_blank" rel="noreferrer" className="bg-transparent border border-white/60 hover:bg-white hover:text-slate-900 text-white px-6 py-3 rounded font-medium transition-all flex items-center justify-center backdrop-blur-sm">
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

      {/* Process Train Bar */}
      <section className="bg-blue-800 text-white py-6 border-b-4 border-blue-600 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm md:text-base divide-x-0 md:divide-x divide-blue-700">
            <div className="flex flex-col md:pl-6 first:pl-0">
              <span className="font-bold text-blue-300 mb-1">Source water</span>
              <span>Borewell, tanker, seawater, wastewater</span>
            </div>
            <div className="flex flex-col md:pl-6">
              <span className="font-bold text-blue-300 mb-1">Pretreatment</span>
              <span>Multimedia, carbon, softener, cartridge</span>
            </div>
            <div className="flex flex-col md:pl-6">
              <span className="font-bold text-blue-300 mb-1">Treatment</span>
              <span>RO, SWRO, MBBR, MBR, SBR, DAF</span>
            </div>
            <div className="flex flex-col md:pl-6">
              <span className="font-bold text-blue-300 mb-1">Treated water</span>
              <span>Drinking, process, reuse</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- SCROLL-DRIVEN CANVAS WRAPPER --- */}
      <div ref={scrollWrapperRef} className="relative w-full bg-slate-900">
        
        {/* The Sticky Background Canvas */}
        <div className="absolute inset-0 z-0 h-full">
          <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
            
            <canvas 
              ref={canvasRef}
              width={1920} 
              height={1080}
              // 1. REMOVED opacity-70 so the images are 100% solid and clear
              className="w-full h-full object-cover"
            />
            
            {/* 2. REMOVED backdrop-blur so it's not fuzzy, and DECREASED opacity to 20% (bg-slate-900/20) */}
            <div className="absolute inset-0 bg-slate-900/20"></div>
            
          </div>
        </div>

        {/* Content Container (z-10 to stay above canvas) */}
        <div className="relative z-10 w-full pt-10 pb-20">
          
          {/* 1. Our Solutions */}
          <section className="py-24 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-white mb-16 text-center reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out">
                Our solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Reverse Osmosis", desc: "Commercial and industrial RO plants." },
                  { title: "Seawater Desalination", desc: "SWRO for high-TDS and marine sources." },
                  { title: "Sewage Treatment", desc: "MBBR, MBR, SBR and packaged STPs." },
                  { title: "Effluent Treatment", desc: "Industrial wastewater, DAF and sludge handling." },
                  { title: "Filtration", desc: "Multimedia, carbon, softeners and cartridges." },
                  { title: "Water Purification", desc: "Drinking-water systems for homes and buildings." }
                ].map((sol, i) => (
                  <div 
                    key={i} 
                    className="reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-xl hover:bg-white/20"
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    <Droplet className="text-blue-400 mb-4 h-8 w-8" />
                    <h3 className="text-xl font-bold text-white mb-3">{sol.title}</h3>
                    <p className="text-slate-300">{sol.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 2. Why Choose Debnath Nirmal */}
          <section className="py-24 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-white mb-16 text-center reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out">
                Why choose Debnath Nirmal
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Oman-based support", desc: "A local team in Muscat." },
                  { title: "Complete water solutions", desc: "Water supply treatment through to wastewater." },
                  { title: "Engineering support", desc: "Solutions sized to your source water and application." },
                  { title: "Installation & commissioning", desc: "Equipment installed and tested on site." },
                  { title: "After-sales service", desc: "Maintenance and AMC options." },
                  { title: "Experience", desc: "Working in the water industry since 2009." }
                ].map((reason, i) => (
                  <div 
                    key={i} 
                    className="reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out flex gap-4 items-start bg-white/5 p-6 rounded-xl backdrop-blur-md border border-white/10"
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    <CheckCircle2 className="text-green-400 shrink-0 h-6 w-6 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{reason.title}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. Industries We Serve */}
          <section className="py-24 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-12 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out">
                Industries we serve
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {["Hotels & Hospitality", "Industrial & Manufacturing", "Construction & Infrastructure", "Oil & Gas", "Commercial Buildings", "Labour Camps", "Healthcare", "Marine & Desalination", "Food & Beverage"].map((industry, i) => (
                  <span 
                    key={i} 
                    className="reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-lg"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* 4. Featured Projects */}
          <section className="py-24 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-end mb-16 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out">
                <h2 className="text-4xl font-bold text-white">Featured projects</h2>
                <Link href="/projects" className="text-blue-400 font-bold hover:text-blue-300 transition-colors hidden md:block">See all projects &rarr;</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {[1, 2, 3].map((_, i) => (
                  <div 
                    key={i} 
                    className="reveal-on-scroll opacity-0 translate-y-12 transition-all duration-700 ease-out bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden flex flex-col shadow-xl"
                    style={{ transitionDelay: `${i * 200}ms` }}
                  >
                    <div className="bg-slate-800/50 h-56 w-full flex items-center justify-center text-slate-400 text-sm font-medium">
                      [ Project Photo ]
                    </div>
                    <div className="p-8 flex-grow">
                      <h3 className="font-bold text-white text-xl mb-3">Confidential Industrial Client – Oman</h3>
                      <p className="text-sm text-slate-300">Application, capacity and system type — add real project details.</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/projects" className="text-blue-400 font-bold hover:underline md:hidden block text-center mt-8">See all projects &rarr;</Link>
            </div>
          </section>
        
        </div>
      </div>
      {/* --- SCROLL-DRIVEN CANVAS WRAPPER ENDS HERE --- */}

      {/* How We Work */}
      <section className="py-20 bg-slate-900 text-white relative z-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">How we work</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {["Water analysis", "Application assessment", "Treatment design", "Equipment selection", "Installation & commissioning", "After-sales support"].map((step, i) => (
              <div key={i} className="flex flex-col items-center relative">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 z-10 shadow-lg">
                  {i + 1}
                </div>
                <p className="font-medium text-sm text-slate-300">{step}</p>
                {i < 5 && <div className="hidden lg:block absolute top-6 left-[60%] w-[80%] h-[2px] bg-slate-700 -z-0"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-20 bg-slate-50 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Industrial RO installation" },
              { title: "Commercial RO commissioning" },
              { title: "Filter replacement & AMC" }
            ].map((video, i) => (
              <figure key={i} className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-slate-800 h-48 w-full flex items-center justify-center relative group cursor-pointer">
                  <PlayCircle className="text-white opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all h-12 w-12" />
                </div>
                <figcaption className="p-6">
                  <strong className="block text-slate-900 mb-2">{video.title}</strong>
                  <p className="text-sm text-slate-600">Add a short caption: what is shown, and the project or application.</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white text-center px-4 relative z-20">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <FileText className="h-12 w-12 mb-6 text-blue-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a water-treatment requirement?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl">
            Send your water analysis report and we will recommend a suitable system tailored to your exact specifications.
          </p>
          <Link href="/contact" className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg">
            Request a quote
          </Link>
        </div>
      </section>
    </div>
  );
}