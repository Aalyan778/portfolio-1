/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";

interface ProcessStep {
  step: string;
  phase: string;
  title: string;
  description: string;
}

export const Process: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      step: "01",
      phase: "Phase One",
      title: "Discovery & Cognitive Mapping",
      description: "A deep dive into your operational bottlenecks, business objectives, and existing tech stacks. We map out precise opportunities where specialized AI systems can optimize workflows, automate repetitive labor, and enhance communication.",
    },
    {
      step: "02",
      phase: "Phase Two",
      title: "Custom Blueprinting & Architecture",
      description: "Before writing any code, we formulate a granular system design. This includes custom data pipelines, model configurations, interface design styles, and exact API boundaries—ensuring a secure and scalable solution tailored to your enterprise.",
    },
    {
      step: "03",
      phase: "Phase Three",
      title: "Precision Engineering & Launch",
      description: "We develop client-side web applications and robust server logic. We build beautiful, responsive UIs, fine-tune model parameters for deterministic outputs, integrate voice agents or custom chatbots, and handle smooth production deployment.",
    }
  ];

  return (
    <section
      id="process"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-navy-dark relative overflow-hidden"
    >
      {/* Decorative vertical bounds margin guidelines (architectural look) */}
      <div className="absolute inset-y-0 left-6 md:left-12 lg:left-20 w-[1px] bg-border-subtle/30 pointer-events-none" />
      <div className="absolute inset-y-0 right-6 md:right-12 lg:right-20 w-[1px] bg-border-subtle/30 pointer-events-none" />

      {/* Slow rotating decorative compass in background */}
      <div className="absolute -bottom-10 right-10 w-96 h-96 pointer-events-none opacity-[0.02]">
        <svg className="w-full h-full text-gold" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="50" y1="2" x2="50" y2="98" stroke="currentColor" strokeWidth="0.5" />
          <line x1="2" y1="50" x2="98" y2="50" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Label & Header */}
        <div className="flex flex-col items-start mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex flex-col items-start"
          >
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-text-muted pb-1">
              Process
            </span>
            <div className="w-12 h-[1.5px] bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-light font-light leading-tight tracking-tight max-w-4xl"
          >
            A deliberate, high-touch methodology centered on absolute precision.
          </motion.h2>
        </div>

        {/* Process Steps List */}
        <div className="relative border-l border-border-subtle ml-4 md:ml-12 pl-8 md:pl-16 space-y-16 md:space-y-24">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Animated step bullet circle aligned directly to the timeline border */}
              <div className="absolute -left-[41px] md:-left-[73px] top-1.5 w-6 h-6 rounded-full bg-navy border border-border-subtle group-hover:border-gold flex items-center justify-center transition-colors duration-500 shadow-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-maroon group-hover:bg-gold transition-colors duration-500" />
              </div>

              {/* Text Area */}
              <div className="max-w-3xl space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-gold tracking-widest uppercase">
                    {item.phase}
                  </span>
                  <span className="w-4 h-[1px] bg-border-subtle" />
                  <span className="font-mono text-[10px] tracking-widest text-text-muted">
                    Milestone {item.step}
                  </span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-light text-text-light group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="font-sans text-base text-text-muted font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Smooth transition bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
};
