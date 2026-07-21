/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Check, Send, Mail, MapPin, Clock, MessageSquare, Instagram, Linkedin } from "lucide-react";
import { Button } from "./Button";
import { Card } from "./Card";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    solutionType: "AI Websites"
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const solutionOptions = [
    "AI Websites",
    "Automation",
    "Voice Agents",
    "Digital Products",
    "Other Systems"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate premium luxury response delays
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-navy relative overflow-hidden"
    >
      {/* Decorative vertical bounds margin guidelines (architectural look) */}
      <div className="absolute inset-y-0 left-6 md:left-12 lg:left-20 w-[1px] bg-border-subtle/30 pointer-events-none" />
      <div className="absolute inset-y-0 right-6 md:right-12 lg:right-20 w-[1px] bg-border-subtle/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Label & Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex flex-col items-center mb-6"
          >
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-text-muted pb-1">
              Inquire
            </span>
            <div className="w-12 h-[1.5px] bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-light font-light leading-tight tracking-tight max-w-4xl"
          >
            Begin Your Journey
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-sans text-base md:text-lg text-text-muted leading-relaxed font-light max-w-2xl"
          >
            Let's build a bespoke intelligent experience that accelerates your enterprise.
          </motion.p>
        </div>

        {/* Form and info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-12">
          
          {/* Left info column (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-serif text-3xl font-light text-text-light leading-tight">
                Connect with AM Agency
              </h3>
              <p className="font-sans text-sm text-text-muted font-light leading-relaxed">
                We accept selective client engagements each quarter to guarantee premium service design, dedicated computational mapping, and precise deployment.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email direct link */}
              <a
                href="mailto:aalyanmukhtar1@gmail.com"
                className="group flex items-center justify-between p-4 border border-border-subtle hover:border-gold rounded-xl transition-all duration-300 bg-navy-dark shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-navy border border-border-subtle/50 flex items-center justify-center text-gold">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-sans text-xs uppercase tracking-wider font-semibold text-text-light">
                    Email
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-sans text-xs font-light text-text-muted group-hover:text-gold transition-colors">
                    aalyanmukhtar1@gmail.com
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>

              {/* WhatsApp direct link */}
              <a
                href="https://wa.me/923152548432"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-4 border border-border-subtle hover:border-gold rounded-xl transition-all duration-300 bg-navy-dark shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-navy border border-border-subtle/50 flex items-center justify-center text-gold">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span className="font-sans text-xs uppercase tracking-wider font-semibold text-text-light">
                    WhatsApp
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-sans text-xs font-light text-text-muted group-hover:text-gold transition-colors">
                    +92 315 2548432
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>

              {/* Instagram direct link */}
              <a
                href="https://www.instagram.com/am_agency26"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-4 border border-border-subtle hover:border-gold rounded-xl transition-all duration-300 bg-navy-dark shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-navy border border-border-subtle/50 flex items-center justify-center text-gold">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span className="font-sans text-xs uppercase tracking-wider font-semibold text-text-light">
                    Instagram
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-sans text-xs font-light text-text-muted group-hover:text-gold transition-colors">
                    @am_agency26
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>

              {/* LinkedIn direct link */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-4 border border-border-subtle hover:border-gold rounded-xl transition-all duration-300 bg-navy-dark shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-navy border border-border-subtle/50 flex items-center justify-center text-gold">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <span className="font-sans text-xs uppercase tracking-wider font-semibold text-text-light">
                    LinkedIn
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-sans text-xs font-light text-text-muted group-hover:text-gold transition-colors">
                    Aalyan Mukhtar
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>

              {/* Location indicator */}
              <div className="flex items-center gap-4 p-4 border border-border-subtle rounded-xl bg-navy-dark">
                <div className="w-8 h-8 rounded-full bg-navy border border-border-subtle/50 flex items-center justify-center text-gold">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="font-mono text-[9px] text-text-muted block uppercase tracking-widest">HQ Location</span>
                  <span className="font-sans text-xs font-light text-text-light">Karachi, Pakistan (GMT+5)</span>
                </div>
              </div>

              {/* Response guarantee */}
              <div className="flex items-center gap-4 p-4 border border-border-subtle rounded-xl bg-navy-dark">
                <div className="w-8 h-8 rounded-full bg-navy border border-border-subtle/50 flex items-center justify-center text-gold">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="font-mono text-[9px] text-text-muted block uppercase tracking-widest">Response Promise</span>
                  <span className="font-sans text-xs font-light text-text-light">Qualified inquiries response within 24 hours</span>
                </div>
              </div>
            </div>

            <div className="h-[1px] bg-border-subtle pt-4" />
          </div>

          {/* Right inquiry form column (7 columns) */}
          <div className="lg:col-span-7">
            <Card hoverEffect={false} className="p-8 md:p-10 bg-navy-dark border border-border-subtle relative shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label className="font-mono text-[10px] uppercase tracking-widest text-text-muted block">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full font-sans text-sm font-light text-text-light border border-border-subtle focus:border-gold px-4 py-3.5 rounded-xl outline-hidden bg-navy focus:bg-navy-dark transition-all duration-300 placeholder:text-text-muted/30"
                          placeholder="e.g. Sterling Cooper"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label className="font-mono text-[10px] uppercase tracking-widest text-text-muted block">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full font-sans text-sm font-light text-text-light border border-border-subtle focus:border-gold px-4 py-3.5 rounded-xl outline-hidden bg-navy focus:bg-navy-dark transition-all duration-300 placeholder:text-text-muted/30"
                          placeholder="e.g. sterling@cooper.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Company input */}
                      <div className="space-y-2">
                        <label className="font-mono text-[10px] uppercase tracking-widest text-text-muted block">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full font-sans text-sm font-light text-text-light border border-border-subtle focus:border-gold px-4 py-3.5 rounded-xl outline-hidden bg-navy focus:bg-navy-dark transition-all duration-300 placeholder:text-text-muted/30"
                          placeholder="e.g. AM Agency"
                        />
                      </div>

                      {/* Solution interest picker */}
                      <div className="space-y-2">
                        <label className="font-mono text-[10px] uppercase tracking-widest text-text-muted block">
                          Interest Area
                        </label>
                        <select
                          value={formData.solutionType}
                          onChange={(e) => setFormData({ ...formData, solutionType: e.target.value })}
                          className="w-full font-sans text-sm font-light text-text-light border border-border-subtle focus:border-gold px-4 py-3.5 rounded-xl outline-hidden bg-navy focus:bg-navy-dark transition-all duration-300"
                        >
                          {solutionOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-navy text-text-light">
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Inquiry Message */}
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase tracking-widest text-text-muted block">
                        Describe Your Objective
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full font-sans text-sm font-light text-text-light border border-border-subtle focus:border-gold px-4 py-3.5 rounded-xl outline-hidden bg-navy focus:bg-navy-dark transition-all duration-300 resize-none placeholder:text-text-muted/30"
                        placeholder="Tell us about the digital architecture or automation challenge you want to address."
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        disabled={isSubmitting}
                        className="w-full py-4 text-sm font-medium tracking-wide flex items-center justify-center gap-2 group shadow-[0_4px_20px_rgba(128,0,32,0.15)]"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 rounded-full border-2 border-gold/30 border-t-gold animate-spin" />
                            Establishing Pipeline...
                          </>
                        ) : (
                          <>
                            Send Proposal
                            <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </>
                        )}
                      </Button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="submission-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold/10 text-gold flex items-center justify-center mx-auto shadow-sm border border-gold/20">
                      <Check className="w-8 h-8" />
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-serif text-3xl font-light text-text-light">
                        Inquiry Received
                      </h4>
                      <p className="font-sans text-sm text-text-muted font-light max-w-md mx-auto leading-relaxed">
                        Thank you, {formData.name}. Your blueprint specification has been safely established. Our architectural lead will evaluate and contact you within 24 hours.
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          company: "",
                          message: "",
                          solutionType: "AI Websites"
                        });
                      }}
                      className="font-sans text-xs font-semibold text-gold hover:text-gold-secondary transition-colors duration-300 underline underline-offset-4 uppercase tracking-widest cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};
