/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import {
  Globe,
  Cpu,
  Phone,
  MessageSquare,
  Video,
  Sparkles,
  Users,
  Layers,
} from "lucide-react";

interface CapabilityItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export const Capabilities: React.FC = () => {
  const capabilitiesList: CapabilityItem[] = [
    {
      icon: Globe,
      title: "AI Website Development",
      description: "Modern, responsive websites designed with performance, usability, and long-term scalability in mind.",
    },
    {
      icon: Cpu,
      title: "AI Automation",
      description: "Automating repetitive workflows and connecting business systems to improve efficiency and reduce manual work.",
    },
    {
      icon: Phone,
      title: "AI Voice Agents",
      description: "Intelligent voice assistants capable of answering calls, handling inquiries, and scheduling appointments.",
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots",
      description: "Conversational assistants for websites and messaging platforms that improve customer communication.",
    },
    {
      icon: Video,
      title: "AI UGC Advertising",
      description: "Short-form AI-generated advertising content designed for modern social media platforms.",
    },
    {
      icon: Sparkles,
      title: "Brand Storytelling",
      description: "Creating digital experiences and content that communicate a clear, memorable brand identity.",
    },
    {
      icon: Users,
      title: "CRM & Lead Management",
      description: "Helping businesses organize leads, manage customer relationships, and build efficient sales workflows.",
    },
    {
      icon: Layers,
      title: "Digital Products",
      description: "Designing templates, playbooks, automation assets, and digital resources that provide lasting value.",
    },
  ];

  return (
    <section
      id="capabilities"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-navy-dark relative overflow-hidden border-b border-border-subtle"
    >
      {/* Subtle abstract grid texture with low opacity */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Minimal gold geometric accents */}
      <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-gold/10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-2 h-2 rounded-full bg-gold/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Label & Main Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex flex-col items-center mb-6"
          >
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-text-muted pb-1">
              Capabilities
            </span>
            <div className="w-12 h-[1.5px] bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-light font-light leading-tight tracking-tight"
          >
            Intelligent solutions designed for modern businesses.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-sans text-base md:text-lg text-text-muted leading-relaxed font-light"
          >
            I design digital systems that combine thoughtful user experience with practical AI solutions, helping businesses communicate better, automate repetitive work, and create stronger digital experiences.
          </motion.p>
        </div>

        {/* Responsive Grid Layout (Desktop: 3 columns, Tablet: 2, Mobile: 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {capabilitiesList.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 12px 30px rgba(0, 0, 0, 0.25)",
                  borderColor: "#800020"
                }}
                className="group bg-navy border border-border-subtle rounded-2xl p-8 transition-all duration-500 flex flex-col justify-between cursor-default"
              >
                <div>
                  {/* Icon Area */}
                  <div className="w-12 h-12 rounded-xl bg-navy-dark border border-border-subtle/50 flex items-center justify-center mb-6 text-gold group-hover:bg-maroon-light group-hover:border-maroon transition-colors duration-500">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.div>
                  </div>

                  <h3 className="font-serif text-2xl font-light text-text-light mb-4 group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="font-sans text-sm text-text-muted font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Small maroon accent line inside card, animates on hover */}
                <div className="mt-8 pt-4 border-t border-border-subtle flex justify-start">
                  <div className="w-6 h-[1px] bg-border-subtle group-hover:bg-maroon group-hover:w-12 transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Section Centered Statement */}
        <div className="mt-24 md:mt-32 text-center max-w-2xl mx-auto border-t border-border-subtle pt-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif italic text-xl md:text-2xl text-text-light leading-relaxed font-light"
          >
            "Every solution is designed with one goal in mind: creating technology that feels intuitive, useful, and built to last."
          </motion.p>
        </div>

      </div>
    </section>
  );
};
