/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Paintbrush, Brain, Eye, MessageSquareCode, ShieldCheck, HeartHandshake } from "lucide-react";

interface WhyAMCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export const WhyAM: React.FC = () => {
  const cards: WhyAMCard[] = [
    {
      icon: Paintbrush,
      title: "Modern Design",
      description: "Clean, timeless interfaces designed to create exceptional first impressions.",
    },
    {
      icon: Brain,
      title: "AI-First Thinking",
      description: "Technology is integrated where it creates genuine value rather than unnecessary complexity.",
    },
    {
      icon: Eye,
      title: "Attention to Detail",
      description: "Every interaction, animation, and layout is carefully considered.",
    },
    {
      icon: MessageSquareCode,
      title: "Clear Communication",
      description: "Transparent collaboration throughout every stage of a project.",
    },
    {
      icon: ShieldCheck,
      title: "Scalable Solutions",
      description: "Digital experiences designed to grow alongside your business.",
    },
    {
      icon: HeartHandshake,
      title: "Long-Term Partnership",
      description: "Support and continuous improvement beyond the initial launch.",
    }
  ];

  return (
    <section
      id="why-am"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-navy relative overflow-hidden border-b border-border-subtle"
    >
      {/* Decorative guidelines mapping to structural grids */}
      <div className="absolute inset-y-0 left-6 md:left-12 lg:left-20 w-[1px] bg-border-subtle/30 pointer-events-none" />
      <div className="absolute inset-y-0 right-6 md:right-12 lg:right-20 w-[1px] bg-border-subtle/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Label & Main Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex flex-col items-center mb-6"
          >
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-text-muted pb-1">
              Why AM Agency
            </span>
            <div className="w-12 h-[1.5px] bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gold font-light leading-tight tracking-tight"
          >
            Built with intention.<br />Designed for the future.
          </motion.h2>
        </div>

        {/* 2x3 Grid Layout (Desktop: 3 columns, Tablet: 2, Mobile: 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {cards.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
                whileHover={{
                  y: -4,
                  borderColor: "#D4AF37",
                  boxShadow: "0 12px 30px rgba(0, 0, 0, 0.3)"
                }}
                className="group bg-navy-dark border border-border-subtle rounded-2xl p-8 md:p-10 transition-all duration-500 cursor-default"
              >
                {/* Icon Wrapper with minimal gold accents */}
                <div className="w-10 h-10 rounded-lg bg-navy border border-border-subtle/50 flex items-center justify-center mb-6 text-gold group-hover:text-gold-secondary group-hover:border-gold/30 transition-colors duration-500">
                  <IconComponent className="w-5 h-5" />
                </div>

                <h3 className="font-serif text-xl font-light text-gold mb-3 group-hover:text-gold-secondary transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="font-sans text-sm text-text-light/90 font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Quote section */}
        <div className="mt-24 md:mt-32 text-center max-w-2xl mx-auto border-t border-border-subtle/50 pt-16">
          <motion.blockquote
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif italic text-2xl md:text-3xl text-gold font-light leading-relaxed"
          >
            "The smallest details often create the strongest impressions."
          </motion.blockquote>
        </div>

      </div>
    </section>
  );
};
