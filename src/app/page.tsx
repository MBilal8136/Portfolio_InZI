'use client';

import React from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-secondary py-5 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center relative">
            {/* Logo Left */}
            <div className="absolute left-0">
              <Image
                src="/Inzi_Sandhu.svg"
                alt="Inzamam Sandhu Logo"
                width={120}
                height={48}
                className="h-12 w-auto"
              />
            </div>

            {/* Copyright Center */}
            <p className="text-muted-foreground text-center">
              © 2025 Inzamam Sandhu. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
