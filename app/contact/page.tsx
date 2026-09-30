"use client";
import { MapPin, Phone, Mail, UploadCloud, Send, MessageCircle } from "lucide-react";
import React, { useState } from "react";

export default function ContactPage() {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Request a Quotation</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Share your water treatment requirements or upload a water analysis report. Our engineering team will review your application and recommend a tailored solution.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column - Contact Info */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
            
            <div className="space-y-6 text-slate-700">
              <div className="flex gap-4 items-start">
                <MapPin className="text-blue-600 shrink-0 h-6 w-6" />
                <div>
                  <strong className="block text-slate-900">Head Office</strong>
                  <p>P.O. Box 2301, Postal Code 133<br/>Al Khuwair, Sultanate of Oman</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone className="text-blue-600 shrink-0 h-6 w-6" />
                <div>
                  <strong className="block text-slate-900">Phone / WhatsApp</strong>
                  <a href="tel:+96896961756" className="hover:text-blue-600 transition-colors">+968 9696 1756</a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Mail className="text-blue-600 shrink-0 h-6 w-6" />
                <div>
                  <strong className="block text-slate-900">Email</strong>
                  <a href="mailto:info@debnathnirmal.com" className="hover:text-blue-600 transition-colors">info@debnathnirmal.com</a>
                </div>
              </div>
            </div>
            
            <hr className="my-8 border-slate-100" />
            
            <h3 className="text-lg font-bold text-slate-900 mb-4">Direct Support</h3>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/96896961756" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b958] text-white py-3 rounded-md font-medium transition-colors">
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
              <a href="tel:+96896961756" className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-md font-medium transition-colors">
                <Phone size={18} /> Call Us Now
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - The Form */}
        <div className="lg:col-span-2">
          <form className="bg-white p-8 md:p-10 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Project Details</h2>
            
            {/* Required Fields Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Name <span className="text-red-500">*</span></label>
                <input type="text" required className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Company <span className="text-red-500">*</span></label>
                <input type="text" required className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Company LLC" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Phone / WhatsApp <span className="text-red-500">*</span></label>
                <input type="tel" required className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="+968 ..." />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email <span className="text-red-500">*</span></label>
                <input type="email" required className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="john@company.com" />
              </div>
            </div>

            <hr className="my-8 border-slate-100" />
            <h2 className="text-xl font-bold text-slate-900 mb-6">Technical Specifications (Optional)</h2>

            {/* Technical Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Location / Site</label>
                <input type="text" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="e.g., Sohar Industrial Estate" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Application</label>
                <select className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                  <option value="">Select application...</option>
                  <option value="ro">Reverse Osmosis (RO)</option>
                  <option value="swro">Seawater Desalination (SWRO)</option>
                  <option value="stp">Sewage Treatment (STP)</option>
                  <option value="etp">Effluent Treatment (ETP)</option>
                  <option value="filtration">Filtration / Softening</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Required Capacity</label>
                <input type="text" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="e.g., 100 m3/day" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Water Source</label>
                <input type="text" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Borewell, Sea, Wastewater..." />
              </div>
            </div>

            {/* File Upload for Water Report */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-slate-700 mb-2">Upload Water Analysis Report</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-md bg-slate-50 hover:bg-slate-100 transition-colors relative">
                <div className="space-y-1 text-center">
                  <UploadCloud className="mx-auto h-12 w-12 text-slate-400" />
                  <div className="flex text-sm text-slate-600 justify-center">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-transparent rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-slate-500">PDF, PNG, JPG up to 10MB</p>
                  {fileName && <p className="text-sm font-bold text-blue-600 mt-2">Selected: {fileName}</p>}
                </div>
              </div>
            </div>

            {/* Message Area */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-slate-700 mb-2">Message / Additional Details</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Please provide any other specific requirements..."></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-md transition-colors text-lg">
              <Send size={20} />
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}