"use client";
import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-6 max-w-7xl py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading font-bold text-text-primary mb-4">
          Get in Touch
        </h1>

        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Have questions about a property or need help finding your perfect
          student home? Fill out the form below and our team will get back to
          you within 24 hours.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Information */}
        <div className="lg:w-1/3 flex flex-col gap-8">
          <div className="bg-bg-surface p-8 rounded-3xl border border-border-light shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-text-primary">
              Contact Information
            </h3>

            <div className="flex flex-col gap-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary">
                  <Phone size={24} />
                </div>

                <div>
                  <h4 className="font-semibold text-text-primary">Phone</h4>
                  <a href="tel:+918871273244" >
                  <p className="text-text-secondary">+91 8871273244</p>

                  </a>
                  <a href="tel:+918103586712" >
                  <p className="text-text-secondary mt-1">+91 8103586712</p>

                  </a>

                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary">
                  <Mail size={24} />
                </div>

                <div>
                  <h4 className="font-semibold text-text-primary">Email</h4>

                  <p className="text-text-secondary mt-1">
                    support@kpzonestays.com
                  </p>

                  <p className="text-text-secondary">
                    enquiries@kpzonestays.com
                  </p>
                </div>
              </div>

              {/* Address */}
              {/* <div className="flex items-start gap-4">
                <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary">
                  <MapPin size={24} />
                </div>

                <div>
                  <h4 className="font-semibold text-text-primary">
                    Office Address
                  </h4>

                  <p className="text-text-secondary mt-1 leading-relaxed">
                    123 Zolo Tower, 100ft Road,
                    <br />
                    Koramangala, 5th Block,
                    <br />
                    Bangalore, Karnataka 560095
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="lg:w-2/3">
          <div className="bg-bg-surface p-8 rounded-3xl border border-border-light shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-text-primary">
              Send an Enquiry
            </h3>

            <form className="flex flex-col gap-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium text-text-secondary"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="firstName"
                    className="border border-border-light rounded-xl p-3 bg-bg-primary outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all"
                    placeholder="Enter Your First Name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium text-text-secondary"
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="lastName"
                    className="border border-border-light rounded-xl p-3 bg-bg-primary outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all"
                    placeholder="Enter Your Last Name"
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-text-secondary"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    className="border border-border-light rounded-xl p-3 bg-bg-primary outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all"
                    placeholder="Enter Your Email"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-text-secondary"
                  >
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    className="border border-border-light rounded-xl p-3 bg-bg-primary outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all"
                    placeholder="Enter Your Number"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-text-secondary"
                >
                  Subject
                </label>

                <select
                  id="subject"
                  className="border border-border-light rounded-xl p-3 bg-bg-primary outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all text-text-primary"
                >
                  <option value="">Select a topic</option>

                  <option value="booking">Property Booking</option>

                  <option value="tour">Schedule a Visit</option>

                  <option value="payment">Payment Issues</option>

                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-text-secondary"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  className="border border-border-light rounded-xl p-3 bg-bg-primary outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all resize-y"
                  placeholder="Tell us what you're looking for..."
                />
              </div>

              {/* Submit */}
              <button
                type="button"
                className="btn-primary w-full md:w-auto self-start mt-2 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
