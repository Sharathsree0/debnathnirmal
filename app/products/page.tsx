import Link from "next/link";
import { ArrowRight, ShoppingBag, PhoneCall } from "lucide-react";

export default function ProductsPage() {
  // Mapping your provided images to product data
  const products = [
    {
      id: 1,
      name: "Industrial RO Systems",
      description: "High-capacity Reverse Osmosis plants designed for industrial, commercial, and municipal water purification requirements.",
      image: "https://debnathnirmal.com/template/images/shop/1.jpg"
    },
    {
      id: 2,
      name: "Filter Cartridges",
      description: "Premium spun, wound, and carbon filter cartridges for effective pre-treatment and particulate removal.",
      image: "https://debnathnirmal.com/template/images/shop/6.jpg"
    },
    {
      id: 3,
      name: "Water Softeners",
      description: "Efficient ion-exchange systems to remove calcium and magnesium, preventing scale build-up in pipelines and equipment.",
      image: "https://debnathnirmal.com/template/images/shop/7.jpg"
    },
    {
      id: 4,
      name: "FRP Vessels & Filters",
      description: "Durable fiberglass reinforced plastic vessels ideal for multimedia, sand, and activated carbon filtration systems.",
      image: "https://debnathnirmal.com/template/images/shop/3.jpg"
    },
    {
      id: 5,
      name: "Chemical Dosing Pumps",
      description: "Precision chemical dosing pumps for chlorination, antiscalant injection, and pH adjustment applications.",
      image: "https://debnathnirmal.com/template/images/shop/9.jpg"
    },
    {
      id: 6,
      name: "Domestic RO Purifiers",
      description: "Multi-stage under-sink and wall-mounted water purifiers providing safe and clean drinking water for residential use.",
      image: "https://debnathnirmal.com/template/images/shop/8.jpg"
    },
    {
      id: 7,
      name: "UV Sterilization Systems",
      description: "Chemical-free ultraviolet disinfection systems engineered to eliminate bacteria, viruses, and harmful microorganisms.",
      image: "https://debnathnirmal.com/template/images/shop/5.jpg"
    }
  ];

  return (
    <div className="flex flex-col w-full font-sans bg-white">
      
      {/* 1. Page Banner Section */}
      <section className="relative w-full h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Reusing the banner image to keep the theme consistent */}
          <img 
            src="https://debnathnirmal.com/template/images/resources/banner.jpg" 
            alt="Debnath Nirmal Water Treatment Products" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 pt-16">
          <div className="flex justify-center mb-4">
            <ShoppingBag className="h-10 w-10 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Our Products</h1>
          <p className="text-lg md:text-xl text-blue-50 font-light max-w-2xl mx-auto">
            High-quality equipment, spares, and consumables for all your water treatment needs.
          </p>
        </div>
      </section>

      {/* 2. Products Grid Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Product Image Container */}
                <div className="h-64 w-full bg-white relative p-6 border-b border-slate-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Product Details */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{product.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {product.description}
                  </p>
                  
                  {/* Action Button */}
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center w-full gap-2 bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white border border-slate-200 hover:border-blue-600 px-4 py-3 rounded-lg font-semibold transition-all"
                  >
                    Enquire Now <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PhoneCall className="h-12 w-12 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Looking for a specific component?</h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            We carry a vast inventory of specialized water treatment components, membranes, chemicals, and spare parts. Contact our sales team for pricing and availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              Request a Quote <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}