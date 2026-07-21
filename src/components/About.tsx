/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { MapPin, Calendar, Sparkles } from "lucide-react";

export const About: React.FC = () => {
  const chips = [
    "AI Websites",
    "Automation",
    "Voice Agents",
    "Digital Experiences"
  ];

  // Staggered animation containers
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-navy relative overflow-hidden"
    >
      {/* Tiny abstract gold line graphics & minimal background decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {/* Subtle geometric structural lines */}
        <svg className="absolute top-10 right-10 w-48 h-48 text-gold/5" viewBox="0 0 100 100" fill="none">
          <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        <svg className="absolute bottom-10 left-10 w-36 h-36 text-gold/5" viewBox="0 0 100 100" fill="none">
          <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="10" y1="10" x2="90" y2="90" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex flex-col items-start"
          >
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-text-muted pb-1">
              About
            </span>
            <div className="w-12 h-[1.5px] bg-gold" />
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-light font-light leading-tight tracking-tight max-w-4xl"
          >
            Designing intelligent digital experiences with clarity, precision, and purpose.
          </motion.h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          
          {/* Left Column (55% / 7 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 space-y-6 md:space-y-8 pr-0 lg:pr-8"
          >
            <motion.p
              variants={itemVariants}
              className="font-sans text-base md:text-lg text-text-light leading-relaxed font-light"
            >
              I’m Aalyan Mukhtar, founder of AM Agency. I focus on designing modern AI-powered digital experiences that combine thoughtful design with practical business solutions.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="font-sans text-base md:text-lg text-text-muted leading-relaxed font-light"
            >
              Rather than chasing trends, I believe technology should solve real problems through simplicity, usability, and intelligent systems.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="font-sans text-base md:text-lg text-text-muted leading-relaxed font-light"
            >
              My work centers around websites, AI automation, voice agents, digital products, and modern business experiences designed with long-term value in mind.
            </motion.p>
          </motion.div>

          {/* Right Column (45% / 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            {/* Premium Profile Card */}
            <motion.div
              whileHover={{ 
                y: -6, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-3xl border border-border-subtle bg-navy-dark p-8 md:p-10 shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition-all duration-500 overflow-hidden"
            >
              {/* Subtle glassmorphism effect indicator inside card */}
              <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent pointer-events-none" />

              <div className="relative z-10 space-y-8">
                {/* Monogram & Title Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-gold/30 bg-maroon text-gold flex items-center justify-center font-serif text-lg font-medium tracking-tighter shadow-md">
                      AM
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-light text-text-light">
                        Aalyan Mukhtar
                      </h3>
                      <p className="font-sans text-[11px] font-semibold uppercase tracking-widest text-gold">
                        AI Solutions Architect
                      </p>
                    </div>
                  </div>
                  
                  <span className="font-sans text-[10px] uppercase tracking-widest text-text-light bg-maroon-dark px-2.5 py-1 rounded-full border border-maroon">
                    Active
                  </span>
                </div>

                <div className="h-[1px] bg-border-subtle" />

                {/* Profile Information List */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm font-sans">
                    <span className="text-text-muted font-light">Title</span>
                    <span className="text-text-light font-medium">Founder — AM Agency</span>
                  </div>

                  <div className="flex items-center justify-between text-sm font-sans">
                    <span className="text-text-muted font-light">Location</span>
                    <span className="text-text-light font-medium flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gold" />
                      Karachi, Pakistan
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm font-sans">
                    <span className="text-text-muted font-light">Availability</span>
                    <span className="text-text-light font-medium flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gold animate-pulse" />
                      Available Worldwide
                    </span>
                  </div>
                </div>

                <div className="h-[1px] bg-border-subtle" />

                {/* Staggered Chips */}
                <div className="space-y-3">
                  <span className="font-sans text-[10px] uppercase tracking-widest font-semibold text-text-muted block">
                    Core Specializations
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {chips.map((chip, index) => (
                      <motion.span
                        key={chip}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -1, borderColor: "#D4AF37", color: "#F3F4F6" }}
                        className="font-sans text-xs text-text-muted bg-navy px-3 py-1.5 rounded-full border border-border-subtle cursor-default transition-all duration-300"
                      >
                        {chip}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Elegant, seamless section divider that transitions cleanly */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
};
