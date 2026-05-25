"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

interface FormData {
  name: string;
  roomType: string;
  moveInDate: string;
}

const FloatingWhatsAppEnquiry: React.FC = () => {
  
  const [isOpen, setIsOpen] =
    useState<boolean>(false);

  const [formData, setFormData] =
    useState<FormData>({
      name: "",
      roomType: "Single Sharing",
      moveInDate: "",
    });

  const hostelPhone = "+917489837462";

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsAppRedirect = (
    e?: React.FormEvent<HTMLFormElement>
  ) => {
    if (e) e.preventDefault();

    const message = `Hello, I'm interested in the hostel.`;

    const encodedMessage =
      encodeURIComponent(message);

    window.open(
      `https://wa.me/${hostelPhone}?text=${encodedMessage}`,
      "_blank"
    );

    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      
      {/* Enquiry Form */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-green-600 p-4 text-white flex justify-between items-center">
            
            <div>
              <h3 className="font-bold">
                Hostel Support
              </h3>

              <p className="text-xs text-green-100">
                Typically replies within an
                hour
              </p>
            </div>

            <button
              onClick={() =>
                setIsOpen(false)
              }
              className="hover:bg-green-700 p-1 rounded-full transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* Form */}
          <form
            onSubmit={handleWhatsAppRedirect}
            className="p-4 space-y-4"
          >
            
            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase">
                Your Name
              </label>

              <input
                required
                name="name"
                type="text"
                value={formData.name}
                className="w-full mt-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-sm"
                placeholder="How should we call you?"
                onChange={handleChange}
              />
            </div>

            {/* Room & Date */}
            <div className="grid grid-cols-2 gap-3">
              
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase">
                  Room Type
                </label>

                <select
                  name="roomType"
                  value={formData.roomType}
                  className="w-full mt-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-sm"
                  onChange={handleChange}
                >
                  <option>Single</option>
                  <option>Double</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase">
                  Move-in
                </label>

                <input
                  required
                  name="moveInDate"
                  type="date"
                  value={formData.moveInDate}
                  className="w-full mt-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-sm"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition shadow-md"
            >
              <MessageCircle size={18} />
              Start Chat
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleWhatsAppRedirect}
        className={`relative ${
          isOpen
            ? "bg-gray-800"
            : "bg-green-500"
        } p-4 rounded-full text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-90 flex items-center justify-center`}
      >
        {isOpen ? (
          <X size={28} />
        ) : (
          <MessageCircle size={28} />
        )}

        {/* Pulse Effect */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        )}
      </button>
    </div>
  );
};

export default FloatingWhatsAppEnquiry;