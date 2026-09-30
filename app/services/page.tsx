import Link from "next/link";
import { Wrench, Power, ShieldCheck, TestTube, Settings, ArrowRight, PhoneCall } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Installation",
      icon: <Wrench className="h-8 w-8 text-blue-600" />,
      description: "Professional, on-site installation of all water and wastewater treatment equipment by our expert engineering team, ensuring strict adherence to industry standards.",
    },
    {
      title: "Commissioning",
      icon: <Power className="h-8 w-8 text-blue-600" />,
      description: "Comprehensive testing and system start-up. We calibrate and verify all parameters so your plant operates at peak efficiency from day one.",
    },
    {
      title: "Annual Maintenance Contracts (AMC)",
      icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
      description: "Preventative maintenance programs designed to maximize the lifespan of your systems, reduce downtime, and ensure consistent water quality year-round.",
    },
    {
      title: "Repair & Maintenance",
      icon: <Settings className="h-8 w-8 text-blue-600" />,
      description: "Fast, reliable troubleshooting and repair services across Oman. We supply necessary spare parts and replace consumables like membranes and filters.",
    },
    {
      title: "Water Testing & Analysis",
      icon: <TestTube className="h-8 w-8 text-blue-600" />,
      description: "Detailed source water and treated water analysis to recommend the exact filtration or treatment solutions required for your specific application.",
    }
  ];

  return (
    <div className="flex flex-col w-full font-sans bg-white">
      
      {/* 1. Page Banner Section */}
      <section className="relative w-full h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://debnathnirmal.com/template/images/resources/banner1.jpg" 
            alt="Debnath Nirmal Water Treatment Services" 
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 pt-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Our Services</h1>
          <p className="text-lg md:text-xl text-blue-50 font-light max-w-2xl mx-auto">
            End-to-end engineering, installation, and after-sales support.
          </p>
        </div>
      </section>

      {/* 2. Services Grid Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Comprehensive Support in Oman
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We don't just supply equipment; we ensure it works perfectly. Our local team in Muscat is fully equipped to handle everything from initial water testing to lifetime system maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PhoneCall className="h-12 w-12 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need immediate service or an AMC quote?</h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Our technical support team is ready to assist you with your water treatment systems, regardless of the brand or original installer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              Contact Support <ArrowRight size={20} />
            </Link>
            <a 
              href="https://wa.me/96896961756" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-transparent border-2 border-white/40 hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-all flex items-center justify-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}