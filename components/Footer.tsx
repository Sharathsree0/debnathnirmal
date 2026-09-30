import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Brand Section */}
        <div className="lg:pr-4">
          <h3 className="text-white font-extrabold text-xl mb-4 tracking-wider">
            DEBNATH NIRMAL SPC
          </h3>
          <p className="text-sm leading-relaxed text-slate-400 mb-6">
            Specialists in Water & Wastewater Treatment Solutions. Engineering, supply, installation, and after-sales support across the Sultanate of Oman.
          </p>
        </div>
        
        {/* Solutions Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Solutions</h4>
          <ul className="space-y-3 text-sm">
            {[
              { name: 'RO Systems', path: '/solutions/ro' },
              { name: 'SWRO', path: '/solutions/swro' },
              { name: 'STP', path: '/solutions/stp' },
              { name: 'ETP', path: '/solutions/etp' },
              { name: 'Filtration', path: '/solutions/filtration' },
            ].map((link) => (
              <li key={link.name}>
                <Link href={link.path} className="flex items-center text-slate-400 hover:text-blue-400 transition-colors group">
                  <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-blue-500 mr-1" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
          <ul className="space-y-3 text-sm">
            {[
              { name: 'Installation', path: '/services' },
              { name: 'Commissioning', path: '/services' },
              { name: 'AMC & Maintenance', path: '/services' },
              { name: 'Water Testing', path: '/services' },
            ].map((link) => (
              <li key={link.name}>
                <Link href={link.path} className="flex items-center text-slate-400 hover:text-blue-400 transition-colors group">
                  <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-blue-500 mr-1" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3 text-slate-400">
              <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
              <span>Muscat, Sultanate of Oman</span>
            </li>
            <li className="flex items-center gap-3 text-slate-400">
              <Phone className="h-5 w-5 text-blue-500 shrink-0" />
              <a href="tel:+96896961756" className="hover:text-blue-400 transition-colors">+968 9696 1756</a>
            </li>
            <li className="flex items-center gap-3 text-slate-400">
              <MessageCircle className="h-5 w-5 text-green-500 shrink-0" />
              <a href="https://wa.me/96896961756" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                WhatsApp Chat
              </a>
            </li>
            <li className="flex items-center gap-3 text-slate-400">
              <Mail className="h-5 w-5 text-blue-500 shrink-0" />
              <a href="mailto:info@debnathnirmal.com" className="hover:text-blue-400 transition-colors">info@debnathnirmal.com</a>
            </li>
          </ul>
        </div>

      </div>
      
      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-sm text-center text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Debnath Nirmal SPC. All Rights Reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}