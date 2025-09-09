'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{
    id: number;
    left: string;
    top: string;
    animateX: number;
    animateY: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    
    // Generate particles only on client side to avoid hydration mismatch
    const generatedParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
      animateX: Math.random() * 1000,
      animateY: Math.random() * 1000,
      duration: Math.random() * 20 + 10,
    }));
    setParticles(generatedParticles);
  }, [mounted]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 104; // Account for navbar height + top margin (24px + 80px)
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Multi-layered gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-primary/3 to-transparent" />
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-full"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg"
          animate={{ 
            rotate: -360,
            y: [0, -20, 0],
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 border-2 border-accent/30"
          animate={{ 
            rotate: 360,
            x: [0, 30, 0],
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            x: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        {/* Enhanced Animated Particles with different sizes */}
        {mounted && particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute bg-primary rounded-full ${
              particle.id % 3 === 0 ? 'w-2 h-2 opacity-40' :
              particle.id % 3 === 1 ? 'w-1.5 h-1.5 opacity-30' :
              'w-1 h-1 opacity-20'
            }`}
            animate={{
              x: [0, particle.animateX],
              y: [0, particle.animateY],
              scale: [0, 1, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: particle.left,
              top: particle.top,
            }}
          />
        ))}

        {/* Multiple Mouse Follow Effects */}
        {mounted && (
          <>
            <motion.div
              className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl"
              animate={{
                x: mousePosition.x - 192,
                y: mousePosition.y - 192,
              }}
              transition={{ type: "spring", damping: 30 }}
            />
            <motion.div
              className="absolute w-64 h-64 bg-accent/15 rounded-full blur-2xl"
              animate={{
                x: mousePosition.x - 128,
                y: mousePosition.y - 128,
              }}
              transition={{ type: "spring", damping: 40, delay: 0.1 }}
            />
          </>
        )}

        {/* Orbital rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full"
          style={{ x: '-50%', y: '-50%' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] border border-accent/5 rounded-full"
          style={{ x: '-50%', y: '-50%' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Enhanced Typography */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              className="inline-block bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Inzamam
            </motion.span>{' '}
            <motion.span 
              className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                backgroundPosition: { duration: 3, repeat: Infinity },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              Sandhu
            </motion.span>
            
            {/* Decorative elements around name */}
            <motion.div
              className="absolute -top-6 -left-6 w-3 h-3 bg-primary rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-2 h-2 bg-accent rounded-full"
              animate={{ scale: [1.5, 1, 1.5], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            />
          </motion.h1>

          <motion.div
            className="relative mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Creative Mind in{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">
                Design, Marketing & Development
              </span>
            </motion.p>
            
            {/* Animated underline */}
            <motion.div
              className="mt-4 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
              initial={{ width: 0 }}
              animate={{ width: '200px' }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
          </motion.div>

          {/* Enhanced Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="relative px-10 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-primary/50 group overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="relative px-10 py-4 border-2 border-primary text-primary rounded-full font-semibold text-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground group overflow-hidden backdrop-blur-sm"
            >
              <span className="relative z-10">Contact Me</span>
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 border-2 border-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
          </motion.div>

          {/* Floating skill badges */}
          <motion.div className="flex flex-wrap justify-center gap-4 mb-8">
            {['🎨 Design', '📈 Marketing', '🔍 SEO', '💻 Development'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <span className="text-xs text-muted-foreground mb-2 font-medium">Scroll to explore</span>
            <div className="relative">
              <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex justify-center backdrop-blur-sm">
                <motion.div
                  className="w-1.5 h-3 bg-gradient-to-b from-primary to-accent rounded-full mt-2"
                  animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 border-2 border-accent/30 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
