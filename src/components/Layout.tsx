/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "capabilities", "why-am", "process", "contact"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-navy-dark text-text-light flex flex-col selection:bg-maroon/30 selection:text-text-light">
      {/* Premium subtle grain overlay for organic luxury feel */}
      <div className="fixed inset-0 pointer-events-none z-[99] bg-[radial-gradient(#ffffff_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.015]" />
      
      <Navbar activeSection={activeSection} />
      
      <main className="flex-grow pt-[73px]">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};
