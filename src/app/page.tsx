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
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-secondary py-5 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0">
            {/* Logo */}
            <div className="flex items-center">
              <Image 
                src="/Inzi_Sandhu.svg" 
                alt="Inzamam Sandhu Logo" 
                width={120}
                height={48}
                className="h-12 w-auto"
              />
            </div>
            
            {/* Copyright */}
            <p className="text-muted-foreground text-center">
              © 2025 Inzamam Sandhu. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
