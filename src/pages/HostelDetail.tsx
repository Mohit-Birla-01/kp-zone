"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {
  Star,
  IndianRupee,
  ArrowLeft,
  GraduationCap,
  MessageSquare,
  MapPin,
  CheckCircle,
  Phone,
  Clock,
  ShieldAlert,
} from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { mockHostels } from "@/data/mockHostel";
import { log } from "console";

/* ---------------- TYPES ---------------- */
interface GalleryItem {
  type: "image" | "video";
  url: string;
}

interface Amenity {
  name: string;
  icon?: React.ReactNode;
}

interface Review {
  user: string;
  comment: string;
  rating: number;
}

interface Hostel {

  id: number;
  slug : string;
  name: string;
  price: number;
  gallery?: GalleryItem[];
  amenities?: Amenity[];
  institutions?: string[];
  reviews?: Review[];
  location?: string;
  
  description?: string;
}

/* ---------------- COMPONENT ---------------- */
const HostelDetail: React.FC = () => {
  const params = useParams();
 
  const slug = params?.slug as string;

  const [activeTab, setActiveTab] = useState<string>("Overview");
  
  // Booking Form State
  const [formData, setFormData] = useState({ name: "", phone: "", sharing: "Single Occupancy" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const hostel = mockHostels.find((h) => h.slug === slug) as Hostel | undefined;
  

  if (!hostel) {
    return (
      <div className="container mx-auto px-6 max-w-7xl py-32 text-center">
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <ShieldAlert size={32} />
        </div>
        <h2 className="text-3xl font-heading font-bold text-text-primary mb-2">
          Hostel Not Found
        </h2>
        <p className="text-text-secondary mb-6">The property you are looking for might have been unlisted or removed.</p>
        <Link
          href="/explore"
          className="inline-flex items-center gap-2 bg-brand-primary text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-brand-primary/95 transition-all"
        >
          <ArrowLeft size={18} />
          Return to Explore
        </Link>
      </div>
    );
  }

  const tabs: string[] = ["Overview","Gallery",
 "Amenities", "Location", "Reviews"];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <div className="bg-bg-surface/30 min-h-screen pb-24">
      

      {/* Main Container */}
      <div>
          <div className="overflow-hidden shadow-lg bg-black relative group h-[300px] sm:h-[450px] lg:h-[520px]">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            className="h-full w-full DetailedSwiper"
          >
            {hostel.gallery && hostel.gallery.length > 0 ? (
              hostel.gallery.map((item, idx) => (
                <SwiperSlide key={idx} className="bg-zinc-900">
                  {item.type === "image" ? (
                    <img
                      src={item.url}
                      className="w-full h-full object-cover"
                      alt={`${hostel.name} view ${idx + 1}`}
                    />
                  ) : (
                    <div className="relative h-full w-full">
                      <video
                        muted
                        loop
                        autoPlay
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src={item.url} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                  )}
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <div className="w-full h-full flex items-center justify-center text-zinc-500 bg-zinc-800">
                  No images available
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-6">
        
        
        {/* Dynamic Media Slider */}
        

        {/* 2-Column Core Layout Structure */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Interactive Tabbed Content Wrapper */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border-light shadow-sm min-h-[480px] flex flex-col">
              
              {/* Tab Navigation Bars */}
              <div className="flex gap-2 sm:gap-6 border-b border-border-light overflow-x-auto no-scrollbar mb-8">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-sm sm:text-base font-semibold whitespace-nowrap pb-4 border-b-2 transition-all duration-200 relative ${
                      activeTab === tab
                        ? "border-brand-primary text-brand-primary"
                        : "border-transparent text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Dynamic Content Display State Router */}
              <div className="flex-1 flex flex-col justify-between">
                
                {/* 1. OVERVIEW VIEWPORT */}
                {activeTab === "Overview" && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <h1 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary mb-3">
                      {hostel.name}
                    </h1>
                    <div className="flex items-center gap-2 text-text-secondary mb-6 text-sm">
                      <MapPin size={16} className="text-brand-primary shrink-0" />
                      <span>{hostel.location || "Premium Location, Indore"}</span>
                    </div>

                    <p className="text-text-secondary text-sm sm:text-base mb-8 leading-relaxed">
                      {hostel.description || 
                        "Experience high-quality living spaces tailored meticulously to corporate professionals and university students. Features structural integrations with smart workspaces, active common community hubs, premium cleaning upkeep, and ultra high-speed fiber channels."}
                    </p>

                    <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                      <GraduationCap className="text-brand-primary" size={20} />
                      Nearby Educational Hubs
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {hostel.institutions?.map((inst) => (
                        <div
                          key={inst}
                          className="flex items-center gap-3 p-4 bg-bg-surface/60 rounded-xl border border-border-light"
                        >
                          <div className="w-2 h-2 rounded-full bg-brand-primary shrink-0" />
                          <span className="text-sm font-medium text-text-primary">{inst}</span>
                        </div>
                      )) || <p className="text-text-tertiary text-sm">No nearby colleges listed.</p>}
                    </div>
                  </div>
                )}

                {/* 2. AMENITIES VIEWPORT */}
                {activeTab === "Amenities" && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <h3 className="text-xl font-heading font-bold text-text-primary mb-2">Included Amenities</h3>
                    <p className="text-text-secondary text-sm mb-6">Premium living values built right into your standard monthly package parameters.</p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {hostel.amenities?.map((amenity) => (
                        <div
                          key={amenity.name}
                          className="flex flex-col items-start p-5 border border-border-light rounded-xl hover:border-brand-primary/40 hover:bg-brand-primary/[0.01] transition-all"
                        >
                          <div className="text-brand-primary mb-3 p-2 bg-brand-primary/5 rounded-lg shrink-0">
                            {amenity.icon || <CheckCircle size={20} />}
                          </div>
                          <span className="font-semibold text-text-primary text-sm sm:text-base">
                            {amenity.name}
                          </span>
                        </div>
                      )) || <p className="text-text-tertiary text-sm">No specific amenities configured.</p>}
                    </div>
                  </div>
                )}
              {/* 3. GALLERY VIEWPORT */}
{activeTab === "Gallery" && (
  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
    
    <div className="flex items-center justify-between mb-6">
      <div>
        <h3 className="text-xl font-heading font-bold text-text-primary">
          Hostel Gallery
        </h3>

        <p className="text-sm text-text-secondary mt-1">
          Explore all room photos, amenities, and property visuals.
        </p>
      </div>
    </div>

    {hostel.gallery && hostel.gallery.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {hostel.gallery.map((item, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-2xl border border-border-light bg-zinc-100 group"
          >
            {item.type === "image" ? (
              <img
                src={item.url}
                alt={`${hostel.name} gallery ${idx + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <video
                controls
                className="w-full h-64 object-cover"
              >
                <source src={item.url} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>
    ) : (
      <div className="text-sm text-text-tertiary">
        No gallery media available.
      </div>
    )}
  </div>
)}
                {/* 4. LOCATION VIEWPORT */}
                {activeTab === "Location" && (
  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-4">
    
    <h3 className="text-xl font-heading font-bold text-text-primary">
      Map & Proximity
    </h3>

    <div className="h-auto w-full bg-zinc-100 rounded-2xl border border-border-light flex flex-col items-center justify-center text-center">
      
      
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.7271410590643!2d77.49892889678955!3d28.457640600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc15e96160b51%3A0x41d7b05b0722757a!2sShree%20Sawaria%20House%20-%20Boys%20Hostel%20In%20Greater%20Noida!5e0!3m2!1sen!2sin!4v1779444238177!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-2xl w-full"
      />

      <p className="text-xs text-text-tertiary mt-3 max-w-sm">
        Google Maps dynamic embedding activates upon verified routing calls.
      </p>
    </div>
  </div>
)}

                {/* 4. REVIEWS VIEWPORT */}
                {activeTab === "Reviews" && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-6">
                    <div className="flex items-center justify-between border-b border-border-light pb-4">
                      <h3 className="text-xl font-heading font-bold text-text-primary">Resident Feedbacks</h3>
                      <div className="flex items-center gap-1.5 bg-amber-50 text-amber-700 py-1 px-2.5 rounded-lg text-sm font-bold">
                        <Star size={16} fill="currentColor" />
                        <span>4.8 / 5.0</span>
                      </div>
                    </div>

                    <div className="space-y-4 max-h-[360px] overflow-y-auto pr-2 no-scrollbar">
                      {hostel.reviews && hostel.reviews.length > 0 ? (
                        hostel.reviews.map((r, i) => (
                          <div key={i} className="p-5 border border-border-light rounded-xl bg-bg-surface/30">
                            <div className="flex gap-1 mb-2 text-amber-500">
                              {[...Array(r.rating)].map((_, ratingIdx) => (
                                <Star key={ratingIdx} size={14} fill="currentColor" stroke="none" />
                              ))}
                            </div>
                            <p className="text-text-primary text-sm italic leading-relaxed">"{r.comment}"</p>
                            <span className="text-xs font-bold text-text-secondary mt-3 block">— {r.user}</span>
                          </div>
                        ))
                      ) : (
                        <p className="text-text-tertiary text-sm italic">No user reviews submitted yet.</p>
                      )}
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: DYNAMIC DESKTOP/MOBILE STICKY ACTION PANEL */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              
              {/* Booking Input Execution Box */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border-light shadow-xl">
                {/* <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-text-tertiary block mb-1">Monthly Tariff</span>
                    <h3 className="text-3xl font-black text-brand-primary flex items-center tracking-tight">
                      <IndianRupee size={24} className="stroke-[2.5]" />
                      <span>{hostel.price}</span>
                      <span className="text-sm font-medium text-text-secondary tracking-normal ml-1">/mo</span>
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-zinc-100 text-zinc-600 px-2 py-1 rounded-md inline-block mb-1">Refundable</span>
                    <p className="text-xs text-text-secondary font-medium">Deposit: ₹5,000</p>
                  </div>
                </div> */}
                <div><h3 className="text-3xl font-black  flex items-center tracking-tight py-2">
                      <span>Contact Us</span>
                    </h3></div>

                {isSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-xl text-center animate-in zoom-in-95 duration-200">
                    <CheckCircle className="mx-auto text-emerald-600 mb-2" size={28} />
                    <h4 className="font-bold mb-1">Visit Scheduled!</h4>
                    <p className="text-xs text-emerald-700">An operator will connect with you via mobile shortly.</p>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleBookingSubmit}>
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3.5 bg-bg-surface border border-border-light text-text-primary text-sm rounded-xl focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Mobile Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3.5 bg-bg-surface border border-border-light text-text-primary text-sm rounded-xl focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <select 
                        value={formData.sharing}
                        onChange={(e) => setFormData({ ...formData, sharing: e.target.value })}
                        className="w-full p-3.5 bg-bg-surface border border-border-light text-text-primary text-sm rounded-xl focus:border-brand-primary outline-none transition-all"
                      >
                        <option>Single Occupancy</option>
                        <option>Double Sharing</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-primary hover:bg-brand-primary/95 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-primary/10 transition-all active:scale-[0.99]"
                    >
                      Schedule Free Visit
                    </button>

                    <div className="flex items-center gap-2 justify-center text-text-tertiary text-xs pt-1">
                      <Clock size={13} />
                      <span>Instant callback response within 15 mins</span>
                    </div>
                  </form>
                )}
              </div>

              {/* Direct Support Anchor Integration */}
              <div className="bg-gradient-to-br from-brand-primary to-blue-700 rounded-2xl sm:rounded-3xl p-6 text-white flex items-center justify-between overflow-hidden relative shadow-md group">
                <div className="z-10 max-w-[65%]">
                  <h4 className="font-bold text-base mb-0.5">Need Custom Help?</h4>
                  <p className="text-xs text-white/80 leading-snug">Connect directly with a dedicated property advisor.</p>
                </div>
                <a
                  href="https://wa.me/918103586712"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-brand-primary hover:bg-zinc-50 font-bold text-xs py-2.5 px-4 rounded-xl transition-transform active:scale-95 shadow-md z-10 shrink-0"
                >
                  WhatsApp
                </a>
                <div className="absolute -right-4 -bottom-4 bg-white/10 w-24 h-24 rounded-full pointer-events-none transition-transform duration-500 group-hover:scale-110" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HostelDetail;