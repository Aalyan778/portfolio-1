/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Capabilities } from "./components/Capabilities";
import { WhyAM } from "./components/WhyAM";
import { Process } from "./components/Process";
import { Contact } from "./components/Contact";
import { SparkEffect } from "./components/SparkEffect";
import { ScrollReveal } from "./components/ScrollReveal";

export default function App() {
  return (
    <Layout>
      {/* Interactive premium mouse spark triggers */}
      <SparkEffect />

      {/* 1. HIGH-FIDELITY HERO SECTION */}
      <Hero />

      {/* 2. HIGH-FIDELITY ABOUT SECTION */}
      <ScrollReveal>
        <About />
      </ScrollReveal>

      {/* 3. HIGH-FIDELITY CAPABILITIES SECTION */}
      <ScrollReveal>
        <Capabilities />
      </ScrollReveal>

      {/* 3.5. HIGH-FIDELITY WHY AM AGENCY SECTION */}
      <ScrollReveal>
        <WhyAM />
      </ScrollReveal>

      {/* 4. HIGH-FIDELITY PROCESS SECTION */}
      <ScrollReveal>
        <Process />
      </ScrollReveal>

      {/* 5. HIGH-FIDELITY CONTACT SECTION */}
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </Layout>
  );
}
