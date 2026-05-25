"use client";
import React from "react";
import Link from "next/link";
import { MapPin, Star, IndianRupee, ArrowRight, ShieldCheck } from "lucide-react";

interface Amenity {
  name: string;
}

interface Hostel {
  id: string | number;
  slug : string;
  image: string;
  name: string;
  location: string;
  gender: string;
  rating: number;
  price: number;
  description : string
  amenities: Amenity[];
}

interface HostelCardProps {
  hostel: Hostel;
}

const HostelCard: React.FC<HostelCardProps> = ({ hostel }) => {
  console.log(hostel);
  
  return (
    <div
      // href={`/hostel/${hostel.id}`}
      className="group flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden border border-border-light shadow-sm transition duration-300  w-full"
    >
      {/* 1. Media Asset Block */}
      <div className="relative w-full md:w-[32%] lg:w-[28%] h-48 sm:h-56 md:h-auto min-h-[200px] overflow-hidden bg-zinc-100 shrink-0">
       <Link href={`/hostel/${hostel.slug}`}>
        <img 
        
          src={hostel.image}
          alt={hostel.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
        />
        </Link>
        {/* Gender / Category Tags over image */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-text-primary shadow-sm tracking-wide">
            {hostel.gender}
          </span>
        </div>
      </div>

      {/* 2. Core Information Metadata Block */}
      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between gap-6">
        
        {/* Top/Middle Segment Details */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-brand-primary bg-brand-primary/5 px-2.5 py-1 rounded-md">
              <ShieldCheck size={12} className="stroke-[2.5]" />
              Verified Stay
            </span>
            
            {/* Rating Display Badge */}
            <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 rounded-md text-xs font-bold">
              <Star size={12} fill="currentColor" stroke="none" />
              <span>{hostel.rating.toFixed(1)}</span>
            </div>
          </div>

          <div>
                <Link href={`/hostel/${hostel.slug}`}>
            <h3 className="text-xl font-heading font-bold text-text-primary group-hover:text-brand-primary transition-colors duration-200">
              {hostel.name}
            </h3>
            </Link>
            <p className="text-xs sm:text-sm text-text-secondary mt-1 flex items-center gap-1">
              <MapPin size={14} className="text-text-tertiary shrink-0" />
              <span className="truncate">{hostel.location}</span>
            </p>
          </div>

          {/* Inline Trimmed Amenities Chips */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {hostel.amenities.slice(0, 3).map((amenity, index) => (
              <span
                key={index}
                className="bg-bg-surface text-text-secondary border border-border-light px-2.5 py-1 rounded-md text-xs font-medium"
              >
                {amenity.name}
              </span>
            ))}

            {hostel.amenities.length > 3 && (
              <span className="bg-bg-surface text-text-tertiary border border-border-light border-dashed px-2 py-1 rounded-md text-xs font-medium">
                +{hostel.amenities.length - 3} more
              </span>
            )}
          </div>
          <div className="text-xs sm:text-sm text-text-secondary mt-1 flex items-center gap-1">
            {hostel.description}
          </div>
        </div>

        {/* 3. Pricing Metrics & Dynamic Call-To-Action Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-border-light">
          <div>
            {/* <span className="text-[10px] uppercase font-bold tracking-wider text-text-tertiary block mb-0.5">Monthly Tariff</span>
            <div className="flex items-baseline text-brand-primary">
              <IndianRupee size={20} className="stroke-[2.5] self-center -mr-0.5" />
              <span className="text-2xl font-black tracking-tight">
                {hostel.price.toLocaleString("en-IN")}
              </span>
              <span className="text-xs font-semibold text-text-secondary ml-0.5">/mo onwards</span>
            </div> */}
          </div>
          <div className="flex gap-3">
          <Link href="/contact">
<div className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-400 hover:bg-green-500 text-white font-bold text-sm py-3 px-5 rounded-xl transition-all duration-200 shadow-md shadow-brand-primary/5 active:scale-[0.98]">
            <span>Enquiry Now</span>
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </div></Link>
          <Link href={`/hostel/${hostel.slug}`}>
          
          <div className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-primary group-hover:bg-brand-primary/95 text-white font-bold text-sm py-3 px-5 rounded-xl transition-all duration-200 shadow-md shadow-brand-primary/5 active:scale-[0.98]">
            <span>View Details</span>
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </div>
         </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HostelCard;