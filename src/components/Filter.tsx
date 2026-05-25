"use client";

import { Filter } from "lucide-react";
import React from "react";

interface FiltersState {
  maxPrice: number;
  genders: string[];
  occupancies: string[];
  amenities: string[];
}

interface FiltersProps {
  filters?: FiltersState;
  setFilters: React.Dispatch<
    React.SetStateAction<FiltersState>
  >;
}

const defaultFilters: FiltersState = {
  maxPrice: 5000,
  genders: [],
  occupancies: [],
  amenities: [],
};

const Filters: React.FC<FiltersProps> = ({
  filters = defaultFilters,
  setFilters,
}) => {
  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilters((prev) => ({
      ...prev,
      maxPrice: parseInt(e.target.value),
    }));
  };

  const handleCheckboxChange = (
    category: keyof Omit<FiltersState, "maxPrice">,
    value: string
  ) => {
    setFilters((prev) => {
      const currentList = prev[category];
      const isSelected = currentList.includes(value);

      let newList: string[];

      if (isSelected) {
        newList = currentList.filter(
          (item) => item !== value
        );
      } else {
        newList = [...currentList, value];
      }

      return {
        ...prev,
        [category]: newList,
      };
    });
  };

  return (
    <div className="bg-bg-surface rounded-3xl p-6 border border-border-light shadow-sm sticky top-24">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border-light">
        <h3 className="text-xl font-semibold">
          Filters
        </h3>

        <Filter size={18} />
      </div>

      {/* Budget Filter */}
      {/* <div className="mb-6">
        <h4 className="text-base mb-3 text-text-primary font-semibold">
          Max Budget: ₹
          {filters.maxPrice.toLocaleString("en-IN")}
        </h4>

        <div className="flex flex-col gap-2">
          <input
            type="range"
            min="3000"
            max="25000"
            step="500"
            value={filters.maxPrice}
            onChange={handlePriceChange}
            className="w-full accent-brand-primary"
          />

          <div className="flex justify-between text-sm text-text-secondary">
            <span>₹3,000</span>
            <span>₹25,000+</span>
          </div>
        </div>
      </div> */}

      {/* Gender Filter */}
      <div className="mb-6">
        <h4 className="text-base mb-3 text-text-primary font-semibold">
          Gender
        </h4>

        <div className="flex flex-col gap-2">
          {["Boys", "Girls", "Unisex"].map(
            (gender) => (
              <label
                key={gender}
                className="flex items-center gap-2 text-sm text-text-secondary cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={filters.genders.includes(
                    gender
                  )}
                  onChange={() =>
                    handleCheckboxChange(
                      "genders",
                      gender
                    )
                  }
                  className="accent-brand-primary w-4 h-4 cursor-pointer"
                />

                {gender}
              </label>
            )
          )}
        </div>
      </div>

      {/* Occupancy Filter */}
      <div className="mb-6">
        <h4 className="text-base mb-3 text-text-primary font-semibold">
          Occupancy
        </h4>

        <div className="flex flex-col gap-2">
          {["Single", "Double", "Triple"].map(
            (occ) => (
              <label
                key={occ}
                className="flex items-center gap-2 text-sm text-text-secondary cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={filters.occupancies.includes(
                    occ
                  )}
                  onChange={() =>
                    handleCheckboxChange(
                      "occupancies",
                      occ
                    )
                  }
                  className="accent-brand-primary w-4 h-4 cursor-pointer"
                />

                {occ}
              </label>
            )
          )}
        </div>
      </div>

      {/* Amenities Filter */}
      <div className="mb-6">
        <h4 className="text-base mb-3 text-text-primary font-semibold">
          Amenities
        </h4>

        <div className="flex flex-col gap-2">
          {[
            "AC",
            "Food Included",
            "Attached Washroom",
            "Gym",
          ].map((amenity) => (
            <label
              key={amenity}
              className="flex items-center gap-2 text-sm text-text-secondary cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters.amenities.includes(
                  amenity
                )}
                onChange={() =>
                  handleCheckboxChange(
                    "amenities",
                    amenity
                  )
                }
                className="accent-brand-primary w-4 h-4 cursor-pointer"
              />

              {amenity}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;