"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ShieldCheck, Home as HomeIcon, BadgePercent, Star, Quote } from "lucide-react";

import Hero from "../components/Hero";
import HostelCard from "../components/HostelCard";
import { mockHostels } from "@/data/mockHostel";
import Link from "next/link";

const Home: React.FC = () => {
  const navigate = useRouter();


  // Display top 3 featured hostels
  const featuredHostels = mockHostels.slice(0, 3);

  // Mock Testimonials Data
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Student, IIT Indore",
      content: "Finding a hostel without brokerage used to be a nightmare. KP Zone made it seamless. Found a premium room within 2 days!",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Working Professional",
      content: "The properties are 100% verified. The amenities listed matched exactly with what I got. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col gap-24 bg-gradient-to-b from-bg-base to-bg-surface/30 pb-16">
      
      {/* Hero Section */}
      <Hero />

      {/* Featured Properties */}
      <section className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
          <div>
            <span className="text-brand-primary text-xs font-bold uppercase tracking-widest block mb-2">
              Handpicked for you
            </span>
            <h2 className="text-3xl md:text-4xl text-text-primary font-heading font-bold tracking-tight">
              Featured Properties
            </h2>
          </div>
          <Link href="/explore">  <button
            className="group flex items-center gap-2 bg-brand-primary/10 text-brand-primary font-semibold py-2.5 px-5 rounded-full transition-all duration-300 hover:bg-brand-primary hover:text-white"
          >
            View All Properties
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>  </Link>
          
        </div>

        {/* Hostel Cards Grid */}
        <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto">
          {featuredHostels.map((hostel) => (
            <div key={hostel.slug} className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rounded-2xl overflow-hidden">
              <HostelCard hostel={hostel} />
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20   relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-primary text-xs font-bold uppercase tracking-widest block mb-2">
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl text-text-primary font-heading font-bold">
              Why Choose KP Zone Hostels?
            </h2>
            <p className="text-text-secondary mt-4">
              We slice out the middleman and bring verified, premium living spaces straight to your screen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Premium Properties */}
            <div className="group bg-white p-8 text-center rounded-3xl border border-border-light shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-50 text-brand-primary flex items-center justify-center rounded-2xl transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-white">
                <HomeIcon size={28} />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                Premium Properties
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Handpicked accommodations optimized for dynamic student living and professional comfort.
              </p>
            </div>

            {/* Verified Listings */}
            <div className="group bg-white p-8 text-center rounded-3xl border border-border-light shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-50 text-green-600 flex items-center justify-center rounded-2xl transition-colors duration-300 group-hover:bg-green-600 group-hover:text-white">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                Verified Listings
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Every listing is physically checked by our team for safety, hygiene, and baseline standards.
              </p>
            </div>

            {/* No Brokerage */}
            <div className="group bg-white p-8 text-center rounded-3xl border border-border-light shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-50 text-purple-600 flex items-center justify-center rounded-2xl transition-colors duration-300 group-hover:bg-purple-600 group-hover:text-white">
                <BadgePercent size={28} />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                Zero Brokerage
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Connect directly with property managers. No hidden fees, no unnecessary cuts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-primary text-xs font-bold uppercase tracking-widest block mb-2">
            Reviews
          </span>
          <h2 className="text-3xl md:text-4xl text-text-primary font-heading font-bold">
            What Our Residents Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-bg-surface p-8 rounded-3xl border border-border-light relative shadow-sm">
              <Quote className="absolute top-6 right-8 text-brand-primary/10 w-12 h-12" />
              <div className="flex gap-1 mb-4 text-amber-500">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-text-primary text-base italic mb-6 leading-relaxed">
                "{t.content}"
              </p>
              <div>
                <h4 className="font-bold text-text-primary">{t.name}</h4>
                <p className="text-text-secondary text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modern CTA Banner */}
      <section className="container mx-auto px-6 max-w-7xl">
        <div className="bg-gradient-to-r from-brand-primary to-blue-700 text-white p-12 md:p-16 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-2xl relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 leading-tight">
              Ready to find your perfect stay?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Explore verified student and professional accommodations tailored to your budget.
            </p>
            <Link href="/explore"> <button
              
              className="inline-flex items-center gap-2 bg-white text-brand-primary font-bold py-3.5 px-8 rounded-xl shadow-md transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              Start Exploring Now
              <ArrowRight size={18} />
            </button> </Link>
            
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;