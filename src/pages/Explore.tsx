"use client";
import Filters from "@/components/Filter";
import HostelCard from "@/components/HostelCard";
import React, { useMemo, useState } from "react";

import {mockHostels} from "@/data/mockHostel"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

/* ---------------- TYPES ---------------- */

interface FiltersState {
  maxPrice: number;
  genders: string[];
  occupancies: string[];
  amenities: string[];
}

interface Amenity {
  name: string;
}

interface Hostel {
  id: number;
  price: number;
  gender: string;
  occupancy: string[];
  amenities: Amenity[];
}

/* ---------------- COMPONENT ---------------- */

const Explore: React.FC = () => {
  
  const [filters, setFilters] =
    useState<FiltersState>({
      maxPrice: 25000,
      genders: [],
      occupancies: [],
      amenities: [],
    });

  const filteredHostels =
    useMemo(() => {
      return (
        mockHostels as Hostel[]
      ).filter((hostel) => {
        
        // Price Filter
        if (
          hostel.price >
          filters.maxPrice
        ) {
          return false;
        }

        // Gender Filter
        if (
          filters.genders.length >
            0 &&
          !filters.genders.includes(
            hostel.gender
          )
        ) {
          return false;
        }

        // Occupancy Filter
        if (
          filters.occupancies
            .length > 0
        ) {
          const hasOccupancy =
            hostel.occupancy.some(
              (occ) =>
                filters.occupancies.includes(
                  occ
                )
            );

          if (!hasOccupancy) {
            return false;
          }
        }

        // Amenities Filter
        if (
          filters.amenities
            .length > 0
        ) {
          const hostelAmenities =
            hostel.amenities.map(
              (a) => a.name
            );

          const hasAllAmenities =
            filters.amenities.every(
              (amen) => {
                let dataAmenity =
                  amen;

                if (
                  amen ===
                  "Food Included"
                ) {
                  dataAmenity =
                    "Meals";
                }

                return hostelAmenities.includes(
                  dataAmenity
                );
              }
            );

          if (
            !hasAllAmenities
          ) {
            return false;
          }
        }

        return true;
      });
    }, [filters]);

  const clearFilters = (): void => {
    setFilters({
      maxPrice: 25000,
      genders: [],
      occupancies: [],
      amenities: [],
    });
  };

  return (
    <div className="container mx-auto px-6 max-w-7xl py-8">
      
      {/* Header */}
      <div className="mb-8">
        
        <h1 className="text-3xl font-heading font-semibold mb-2">
          Hostels Near By Greater Noida
        </h1>

        <p className="text-text-secondary">
          Showing{" "}
          {filteredHostels.length}{" "}
          properties
        </p>
      </div>

      <div className=" flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Sidebar */}
        <aside className=" w-full lg:w-75 shrink-0">
          
          <Filters
            filters={filters}
            setFilters={
              setFilters
            }
          />
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          
          {filteredHostels.length >
          0 ? (
            <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto">
              
              {filteredHostels.map(
                (hostel) => (
                  <HostelCard
                    key={
                      hostel.id
                    }
                    hostel={
                      hostel
                    }
                  />
                )
              )}
            </div>
            <div className="relative overflow-hidden w-full max-w-7xl mx-auto rounded-3xl border border-border-light bg-white p-8 sm:p-12 text-center shadow-xl">
      {/* Decorative Background Accents */}
      <div className="absolute -right-12 -top-12 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -left-12 -bottom-12 w-32 h-32 bg-brand-accent/5 rounded-full blur-2xl pointer-events-none" />

      {/* Modern Bouncing/Pulse Icon Indicator */}
      <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary ring-4 ring-brand-primary/5 animate-pulse">
        <Sparkles size={24} className="fill-brand-primary/10" />
      </div>

      {/* Typography Hierarchy */}
      <div className="max-w-md mx-auto mb-8">
        <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-text-primary tracking-tight mb-3">
          More Properties Coming Soon
        </h3>
        <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
          We are currently inspecting and verifying more luxury student living spaces around key campus zones. Drop your email to get notified first!
        </p>
      </div>

    </div>
            </div>
          ) : (
            
            <div className="text-center py-20 bg-bg-surface rounded-3xl border border-border-light">
              
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                No hostels found
              </h3>

              <p className="text-text-secondary">
                Try adjusting your
                filters to see
                more results.
              </p>

              <button
                onClick={
                  clearFilters
                }
                className="mt-4 text-brand-primary font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Explore;