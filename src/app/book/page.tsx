"use client";

import React, { useState } from "react";
import { Topbar } from "@/components/layout/Topbar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "General Consultation",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consultation Booking - ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService Interested: ${formData.service}\n\nMessage:\n${formData.message}`);
    
    // Open Gmail compose window with pre-filled details
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=hello@financialconsultant.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent-orange selection:text-white">
      <Topbar />
      <div className="flex flex-col max-w-[1600px] mx-auto">
        <Navbar />
        
        {/* Booking Section */}
        <main className="w-full px-6 py-16 md:py-24 border-b border-border min-h-[70vh]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 flex flex-col justify-start">
              <div className="text-[10px] uppercase tracking-widest text-muted-text font-mono mb-4">
                Let's Talk
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter mb-8 text-foreground">
                Start your <span className="text-accent-orange">financial journey</span> today.
              </h1>
              
              <p className="text-muted-text leading-relaxed mb-12 max-w-md">
                Whether you need help with wealth creation, securing your family's future, or managing debt, I'm here to provide structured, transparent, and actionable advice.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-accent-orange mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">Phone</h3>
                    <p className="text-[13px] text-muted-text mt-1">+91 75 93 06 31 35</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-accent-orange mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">Email</h3>
                    <p className="text-[13px] text-muted-text mt-1">hello@financialconsultant.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-accent-orange mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">Location</h3>
                    <p className="text-[13px] text-muted-text mt-1">Trivandrum, Kerala<br/>India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-accent-orange mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">Business Hours</h3>
                    <p className="text-[13px] text-muted-text mt-1">Mon - Fri: 9:00 AM - 6:00 PM<br/>Sat: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div className="lg:col-span-7">
              <div className="bg-secondary/20 border border-border/60 p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Request a Consultation</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[11px] uppercase tracking-widest text-muted-text font-mono font-medium block">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent-orange transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[11px] uppercase tracking-widest text-muted-text font-mono font-medium block">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent-orange transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-[11px] uppercase tracking-widest text-muted-text font-mono font-medium block">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent-orange transition-colors"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-[11px] uppercase tracking-widest text-muted-text font-mono font-medium block">
                        Service Interested In
                      </label>
                      <select 
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-background border border-border px-4 py-3 text-sm text-muted-foreground focus:outline-none focus:border-accent-orange transition-colors appearance-none rounded-none"
                      >
                        <option value="General Consultation">General Consultation</option>
                        <option value="Health Insurance">Health Insurance</option>
                        <option value="Life Insurance">Life Insurance</option>
                        <option value="Mutual Funds">Mutual Funds</option>
                        <option value="Loans">Loans</option>
                        <option value="Financial Planning">Financial Planning</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[11px] uppercase tracking-widest text-muted-text font-mono font-medium block">
                      Message / Goals
                    </label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent-orange transition-colors resize-y"
                      placeholder="Tell me a bit about what you're looking for..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="bg-accent-orange text-white px-8 py-4 text-sm font-medium hover:bg-accent-orange/90 transition-colors w-full sm:w-auto shadow-sm"
                  >
                    Submit Booking Request
                  </button>

                  <p className="text-[11px] text-muted-text mt-4">
                    By submitting this form, you will open your email client to securely send your details. I'll get back to you within 24 hours.
                  </p>

                </form>
              </div>
            </div>

          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
