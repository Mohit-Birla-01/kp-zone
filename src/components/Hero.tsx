"use client";
import React from "react";
import { Search, MapPin, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Hero: React.FC = () => {
  const navigate = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/explore");
  };

  // Quick tags for a better mobile/desktop UX
  const quickFilters = [
    "Boys Hostel",
    "Girls Hostel",
    "Single Room",
    "Near Campus",
  ];

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-start overflow-hidden py-16 sm:py-24">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-20 transform scale-105 transition-transform duration-[10s]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=2000')",
        }}
      />

      {/* Modern Multi-stage Gradient Overlay for crisp text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent -z-10" />

      <div className="container mx-auto px-6 max-w-7xl w-full">
        <div className="max-w-[720px] w-full text-left">
          {/* Subtle Accent Tag */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full py-1.5 px-4 mb-6 text-xs sm:text-sm font-medium tracking-wide shadow-sm animate-fade-in">
            <Sparkles size={14} className="text-amber-400 fill-amber-400" />
            <span>Premium Student Living Spaces</span>
          </div>

          {/* Responsive Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
            Find Your Perfect{" "}
            <span className="bg-gradient-to-r from-blue-400 via-brand-primary to-brand-accent bg-clip-text text-transparent inline-block">
               Hostels In Greater Noida
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-200 mb-10 max-w-xl leading-relaxed">
            Discover premium hostels and luxury PGs loaded with top-tier
            amenities, situated directly around your university campus.
          </p>

          
          {/* <div className="bg-white/10 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-2xl sm:rounded-3xl shadow-2xl max-w-2xl">
            <form
              className="flex flex-col sm:flex-row gap-3 sm:gap-2"
              onSubmit={handleSearch}
            >
             
              <div className="flex-1 flex items-center bg-white px-4 py-3.5 rounded-xl sm:rounded-2xl border border-zinc-200 transition-all duration-200 focus-within:border-brand-primary focus-within:ring-4 focus-within:ring-brand-primary/10">
                <MapPin
                  className="text-brand-primary shrink-0 mr-3"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Enter city, locality or college..."
                  required
                  className="w-full border-none bg-transparent outline-none text-sm sm:text-base font-body text-zinc-800 placeholder:text-zinc-400"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold px-8 py-3.5 sm:py-auto text-sm sm:text-base rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.99] shadow-lg shadow-brand-primary/20 shrink-0"
              >
                <Search size={18} />
                <span>Search Rooms</span>
              </button>
            </form>
          </div> */}

          {/* Modern Interactive Quick Filter Badges */}
          <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mr-1">
              Popular:
            </span>
            {quickFilters.map((tag, idx) => (
              <Link
                key={idx}
                href={`/explore?filter=${tag.toLowerCase().replace(" ", "-")}`}
              >
                <button
                  type="button"
                  className="text-xs sm:text-sm bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 rounded-full py-1.5 px-3.5 transition-all duration-150"
                >
                  {tag}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
