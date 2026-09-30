import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold text-xl mb-4">DEBNATH NIRMAL SPC</h3>
          <p className="text-sm leading-relaxed">
            Water & Wastewater Treatment Solutions.<br/>
            Engineering, supply, installation, and support across Oman.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/solutions/ro" className="hover:text-blue-400">RO Systems</Link></li>
            <li><Link href="/solutions/swro" className="hover:text-blue-400">SWRO</Link></li>
            <li><Link href="/solutions/stp" className="hover:text-blue-400">STP</Link></li>
            <li><Link href="/solutions/etp" className="hover:text-blue-400">ETP</Link></li>
            <li><Link href="/solutions/filtration" className="hover:text-blue-400">Filtration</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services/installation" className="hover:text-blue-400">Installation</Link></li>
            <li><Link href="/services/commissioning" className="hover:text-blue-400">Commissioning</Link></li>
            <li><Link href="/services/amc" className="hover:text-blue-400">AMC & Maintenance</Link></li>
            <li><Link href="/services/support" className="hover:text-blue-400">Technical Support</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Oman Address</li>
            <li>+968 1234 5678</li>
            <li>WhatsApp: +968 1234 5678</li>
            <li>info@debnathnirmal.com</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
        © 2026 Debnath Nirmal SPC. All Rights Reserved.
      </div>
    </footer>
  );
}