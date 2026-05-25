"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Search, MapPin, Menu, Phone, X, Compass, Mail } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border-light glass bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-[4.5rem] flex items-center justify-between gap-4 max-w-7xl">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="bg-gradient-to-br from-brand-primary to-brand-accent text-white w-8 h-8 flex items-center justify-center rounded-lg font-heading font-extrabold text-xl">
              KP
            </span>
            <span className="font-heading font-bold text-xl text-text-primary">
              KP<span className="text-brand-primary">Zone</span> Stays
            </span>
          </Link>

          {/* Desktop Search Bar */}
          {/* <div className="hidden md:flex flex-1 max-w-[400px] items-center bg-bg-surface border border-border-light rounded-full p-1 pl-4 shadow-sm transition-all duration-300 focus-within:border-brand-primary focus-within:ring-2 focus-within:ring-brand-primary/20">
            <MapPin size={18} className="text-text-tertiary" />
            <input
              type="text"
              placeholder="Search by city, locality or college..."
              className="flex-1 border-none bg-transparent p-2 font-body outline-none text-text-primary placeholder:text-text-tertiary text-sm"
            />
            <button className="bg-brand-primary text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-150 hover:bg-brand-primary-hover shrink-0">
              <Search size={18} />
            </button>
          </div> */}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="font-medium text-text-secondary transition-colors duration-150 hover:text-brand-primary"
            >
              Home
            </Link>
            <Link
              href="/explore"
              className="font-medium text-text-secondary transition-colors duration-150 hover:text-brand-primary"
            >
              Explore
            </Link>
            <Link
              href="/contact"
              className="font-medium text-text-secondary transition-colors duration-150 hover:text-brand-primary"
            >
              Contact Us
            </Link>
            <a 
              href="tel:+918103586712" 
              className="btn-secondary inline-flex items-center gap-2 bg-bg-surface border border-border-light py-2 px-4 rounded-full font-medium text-text-primary transition-all duration-150 hover:bg-border-light"
            >
              <Phone size={16} className="text-brand-primary" />
              <span>+91 8103586712</span>
            </a>
          </nav>

          {/* Mobile Menu Trigger Icon */}
          <button 
            className="block md:hidden text-text-secondary p-1 hover:text-brand-primary transition-colors duration-150 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* MOBILE DRAWER OVERLAY & SIDEBAR */}
      {/* ========================================================================= */}
      
      {/* Backdrop Backdrop blur */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Sidebar Drawer Container */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-[320px] bg-white z-50 shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between pb-6 border-b border-border-light mb-6">
            <div className="flex items-center gap-2">
              <span className="bg-brand-primary text-white w-7 h-7 flex items-center justify-center rounded-md font-heading font-bold text-sm">
                KP
              </span>
              <span className="font-heading font-bold text-lg text-text-primary">
                KP<span className="text-brand-primary">Zone</span> Menu
              </span>
            </div>
            <button 
              className="text-text-secondary p-1 rounded-full hover:bg-bg-surface transition-colors duration-150"
              onClick={toggleMenu}
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Inline Search Bar */}
          <div className="flex items-center bg-bg-surface border border-border-light rounded-xl p-2 pl-3 mb-6 shadow-sm focus-within:border-brand-primary">
            <Search size={16} className="text-text-tertiary" />
            <input
              type="text"
              placeholder="Search properties..."
              className="flex-1 border-none bg-transparent pl-2 font-body text-sm outline-none text-text-primary placeholder:text-text-tertiary"
            />
          </div>

          {/* Mobile Links */}
          <nav className="flex flex-col gap-4">
            <Link
              href="/explore"
              onClick={toggleMenu}
              className="flex items-center gap-3 font-semibold text-text-primary py-3 px-4 rounded-xl hover:bg-brand-primary/5 hover:text-brand-primary transition-all duration-150"
            >
              <Compass size={18} />
              Explore Hostels
            </Link>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="flex items-center gap-3 font-semibold text-text-primary py-3 px-4 rounded-xl hover:bg-brand-primary/5 hover:text-brand-primary transition-all duration-150"
            >
              <Mail size={18} />
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Mobile Sidebar Footer/Action Details */}
        <div className="pt-6 border-t border-border-light">
          <p className="text-xs text-text-tertiary font-medium mb-3">NEED ASSISTANCE?</p>
          <a
            href="tel:+918103586712"
            className="flex items-center justify-center gap-2 bg-brand-primary text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all duration-150 hover:bg-brand-primary-hover active:scale-[0.98]"
          >
            <Phone size={16} />
            <span>Call +91 8103586712</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;