/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowRight, ArrowDown, Sparkles } from "lucide-react";
import { Button } from "./Button";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Interactive mouse tracking for high-end Apple-style parallax rotation (max 3 degrees)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for fluid responsiveness
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-300, 300], [3, -3]), springConfig);
  const rotateY = useSpring(useTransform(x, [-300, 300], [-3, 3]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleScrollToExplore = () => {
    const el = document.getElementById("about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    "AI Websites",
    "Automation",
    "Voice Agents",
    "Digital Experiences"
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-[calc(100vh-73px)] flex items-center px-6 md:px-12 lg:px-20 relative overflow-hidden bg-navy-dark py-12"
    >
      {/* Slow animated ambient circular gradients in the background for a luxurious, soft glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 20, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[20%] right-[10%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-maroon/10 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -30, 30, 0],
            y: [0, 40, -30, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-gold/5 blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-8 md:space-y-10">
          
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-text-muted">
              AI Solutions Architect
            </span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-light font-extralight tracking-tight leading-[1.05]"
            >
              Aalyan Mukhtar
            </motion.h1>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="font-sans text-lg md:text-xl text-text-muted font-light leading-relaxed max-w-xl"
          >
            I design AI-powered websites, intelligent automations, voice agents, and digital experiences that help modern businesses work smarter.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            {/* Custom high-end button matches requested styles */}
            <Button
              variant="primary"
              onClick={handleScrollToContact}
              className="shadow-[0_4px_20px_rgba(128,0,32,0.15)] px-8 py-3.5"
            >
              Let's Work Together
            </Button>
            
            <button
              onClick={handleScrollToExplore}
              className="group inline-flex items-center justify-center gap-2 font-sans text-sm font-medium tracking-wide text-text-light hover:text-gold transition-colors duration-300 py-3 px-4 cursor-pointer"
            >
              View Capabilities
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Outlined Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="flex flex-wrap gap-2.5 pt-4 border-t border-border-subtle max-w-xl"
          >
            {features.map((feature, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-border-subtle bg-navy-dark text-xs font-sans text-text-muted tracking-wide"
              >
                <span className="text-gold">✓</span>
                {feature}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Column: High-fidelity Apple-style Glass Card Presentation */}
        <div className="lg:col-span-5 flex justify-center items-center relative min-h-[380px] md:min-h-[480px]">
          
          {/* Subtle slow floating motion wrapper */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="w-full max-w-[340px] md:max-w-[400px] aspect-[4/5] relative z-10 cursor-grab active:cursor-grabbing"
          >
            {/* Real blurred backdrop & premium micro glass reflection layout */}
            <div className="absolute inset-0 rounded-3xl border border-gold/20 bg-navy/60 backdrop-blur-xl shadow-[0_24px_50px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(212,175,55,0.05)] overflow-hidden flex flex-col justify-between p-8 md:p-10">
              
              {/* Soft decorative golden lighting gradient inside card */}
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-gold/10 blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-maroon/20 blur-2xl pointer-events-none" />

              {/* Diagonal reflection shine line */}
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-gold/10 to-transparent pointer-events-none rotate-12 scale-150" />

              <div className="flex items-center justify-between" style={{ transform: "translateZ(30px)" }}>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="font-mono text-[9px] tracking-widest text-text-muted uppercase">
                    Architect System V2.6
                  </span>
                </div>
                <div className="w-6 h-[1px] bg-border-subtle" />
              </div>

              {/* Glass Card Centerpiece Monogram Area */}
              <div className="flex flex-col items-center justify-center flex-1 py-4" style={{ transform: "translateZ(40px)" }}>
                {/* Visual architectural geometric lines */}
                <div className="relative w-32 h-32 rounded-full border border-border-subtle/50 flex items-center justify-center">
                  
                  {/* Rotating decorative target bounds */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-2 rounded-full border border-dashed border-gold/20"
                  />
                  
                  <div className="w-20 h-20 rounded-full border border-gold/40 flex items-center justify-center bg-maroon text-gold shadow-xl relative overflow-hidden group">
                    <span className="font-serif text-3xl font-light tracking-tighter text-gold relative z-10">
                      AM
                    </span>
                  </div>
                </div>

                <div className="mt-6 text-center space-y-1">
                  <h3 className="font-serif text-xl font-light text-text-light tracking-wide">
                    Aalyan Mukhtar
                  </h3>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-gold font-semibold">
                    AI Solutions Architect
                  </p>
                </div>
              </div>



            </div>
          </motion.div>
          
          {/* Circular structural background design ring representing orbits */}
          <div className="absolute w-[360px] h-[360px] md:w-[450px] md:h-[450px] rounded-full border border-border-subtle/30 pointer-events-none" />
          <div className="absolute w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full border border-border-subtle/20 pointer-events-none" />
        </div>
      </div>

      {/* Centered Scroll to Explore Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none">
        <span className="font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-text-muted">
          Scroll to Explore
        </span>
        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="cursor-pointer"
        >
          <ArrowDown className="w-4 h-4 text-gold" />
        </motion.div>
      </div>

      {/* Decorative vertical bounds margin guidelines (architectural look) */}
      <div className="absolute inset-y-0 left-6 md:left-12 lg:left-20 w-[1px] bg-border-subtle/30 pointer-events-none" />
      <div className="absolute inset-y-0 right-6 md:right-12 lg:right-20 w-[1px] bg-border-subtle/30 pointer-events-none" />
    </section>
  );
};
