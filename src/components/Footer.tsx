"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ChevronDown,  } from "lucide-react";

const Footer: React.FC = () => {
  // Manage separate accordion states for mobile viewports
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-bg-surface border-t border-border-light pt-12 md:pt-16 mt-24">
      <div className="container mx-auto px-6 max-w-7xl mb-8 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1.2fr] gap-8 md:gap-12">
        
        {/* Brand Description Column */}
        <div className="space-y-4 pb-4 md:pb-0 border-b border-border-light md:border-none">
          <Link href="/" className="flex items-center gap-2">
            <span className="bg-gradient-to-br from-brand-primary to-brand-accent text-white w-8 h-8 flex items-center justify-center rounded-lg font-heading font-extrabold text-xl">
              KP
            </span>
            <span className="font-heading font-bold text-xl text-text-primary">
              KP<span className="text-brand-primary">Zone</span> Stays
            </span>
          </Link>
          <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
            Premium, verified student accommodation hubs tailored for modern living comfort, safety, and community productivity.
          </p>
          {/* Social Icons */}
          {/* <div className="flex items-center gap-4 pt-2 text-text-secondary">
            <a href="#" className="hover:text-brand-primary transition-colors"><Instagram size={18} /></a>
            <a href="#" className="hover:text-brand-primary transition-colors"><Twitter size={18} /></a>
            <a href="#" className="hover:text-brand-primary transition-colors"><Facebook size={18} /></a>
          </div> */}
        </div>

        {/* 1. Company Links (Accordion on Mobile) */}
        <div className="border-b border-border-light md:border-none pb-3 md:pb-0">
          <button 
            onClick={() => toggleSection("company")}
            className="w-full md:pointer-events-none flex items-center justify-between text-base font-bold text-text-primary mb-0 md:mb-5 focus:outline-none py-2 md:py-0"
          >
            <span>Company</span>
            <ChevronDown 
              size={16} 
              className={`text-text-secondary transition-transform duration-200 md:hidden ${openSection === "company" ? "rotate-180" : ""}`} 
            />
          </button>
          
          <ul className={`flex flex-col gap-3 list-none pt-2 md:pt-0 transition-all duration-300 overflow-hidden ${
            openSection === "company" ? "max-h-48 opacity-100 mb-4" : "max-h-0 md:max-h-full opacity-0 md:opacity-100"
          }`}>
            <li><Link href="/about" className="text-text-secondary text-sm hover:text-brand-primary transition-colors">About Us</Link></li>
            <li><Link href="/careers" className="text-text-secondary text-sm hover:text-brand-primary transition-colors">Careers</Link></li>
            <li><Link href="/blog" className="text-text-secondary text-sm hover:text-brand-primary transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="text-text-secondary text-sm hover:text-brand-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* 2. Support Links (Accordion on Mobile) */}
        <div className="border-b border-border-light md:border-none pb-3 md:pb-0">
          <button 
            onClick={() => toggleSection("support")}
            className="w-full md:pointer-events-none flex items-center justify-between text-base font-bold text-text-primary mb-0 md:mb-5 focus:outline-none py-2 md:py-0"
          >
            <span>Support</span>
            <ChevronDown 
              size={16} 
              className={`text-text-secondary transition-transform duration-200 md:hidden ${openSection === "support" ? "rotate-180" : ""}`} 
            />
          </button>
          
          <ul className={`flex flex-col gap-3 list-none pt-2 md:pt-0 transition-all duration-300 overflow-hidden ${
            openSection === "support" ? "max-h-48 opacity-100 mb-4" : "max-h-0 md:max-h-full opacity-0 md:opacity-100"
          }`}>
            <li><Link href="/help" className="text-text-secondary text-sm hover:text-brand-primary transition-colors">Help Center</Link></li>
            <li><Link href="/terms" className="text-text-secondary text-sm hover:text-brand-primary transition-colors">Terms of Service</Link></li>
            <li><Link href="/privacy" className="text-text-secondary text-sm hover:text-brand-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="/cancellation" className="text-text-secondary text-sm hover:text-brand-primary transition-colors">Cancellation Policy</Link></li>
          </ul>
        </div>

        {/* 3. Contact Info Column (Accordion on Mobile) */}
        <div className="pb-2 md:pb-0">
          <button 
            onClick={() => toggleSection("contact")}
            className="w-full md:pointer-events-none flex items-center justify-between text-base font-bold text-text-primary mb-0 md:mb-5 focus:outline-none py-2 md:py-0"
          >
            <span>Contact Us</span>
            <ChevronDown 
              size={16} 
              className={`text-text-secondary transition-transform duration-200 md:hidden ${openSection === "contact" ? "rotate-180" : ""}`} 
            />
          </button>
          
          <ul className={`flex flex-col gap-3.5 list-none pt-2 md:pt-0 transition-all duration-300 overflow-hidden ${
            openSection === "contact" ? "max-h-56 opacity-100 mb-4" : "max-h-0 md:max-h-full opacity-0 md:opacity-100"
          }`}>
            <li className="flex items-start gap-2.5 text-text-secondary text-sm">
              <Phone size={16} className="text-brand-primary mt-0.5 shrink-0" />
              <div className="flex flex-col gap-1">
                <a href="tel:+918103586712" className="hover:text-brand-primary transition-colors">+91 8103586712</a>
              </div>
            </li>
            <li className="flex items-center gap-2.5 text-text-secondary text-sm">
              <Mail size={16} className="text-brand-primary shrink-0" />
              <a href="mailto:support@kpzonestays.com" className="hover:text-brand-primary transition-colors">support@kpzonestays.com</a>
            </li>
            
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Area */}
      <div className="text-center py-6 border-t border-border-light text-text-tertiary text-xs sm:text-sm bg-bg-surface/50">
        <p>
          &copy; {new Date().getFullYear()} KP Zone Stays. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;