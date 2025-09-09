'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const targetId = href.substring(1); // Remove the '#'
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 104; // Account for navbar height + top margin (24px + 80px)
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-6 w-full left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/95 md:top-0 md:w-full backdrop-blur-xl border-b border-primary/20 shadow-2xl shadow-primary/10' 
          : 'bg-background/20 backdrop-blur-sm'
      }`}
    >
      {/* Gradient overlay for better visual effect */}
      <div className={`absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 transition-opacity duration-500 ${
        scrolled ? 'opacity-100' : 'opacity-0'
      }`} />
      
      <div className="container mx-auto px-4 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent relative"
            >
              Inzamam Sandhu
              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 bg-background/60 backdrop-blur-md rounded-full px-3 py-2 border border-border/30">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-6 py-3 text-sm font-medium text-foreground hover:text-primary transition-all duration-300 group rounded-full"
              >
                {item.name}
                {/* Hover effect background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  layoutId="navbar-hover"
                />
                {/* Active dot indicator */}
                <motion.div
                  className="absolute -bottom-1 left-1/2 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ x: '-50%' }}
                />
              </motion.button>
            ))}
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            className="md:hidden relative w-12 h-12 rounded-xl bg-background/80 backdrop-blur-md border border-border/50 flex items-center justify-center group shadow-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-6 h-6">
              <motion.div
                animate={{ 
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 8 : 0 
                }}
                className="absolute top-1 w-6 h-0.5 bg-current rounded-full"
              />
              <motion.div
                animate={{ opacity: isMenuOpen ? 0 : 1 }}
                className="absolute top-3 w-6 h-0.5 bg-current rounded-full"
              />
              <motion.div
                animate={{ 
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -8 : 0 
                }}
                className="absolute top-5 w-6 h-0.5 bg-current rounded-full"
              />
            </div>
            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 bg-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ scale: isMenuOpen ? 1.1 : 1 }}
            />
          </motion.button>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-6 overflow-hidden"
            >
              <motion.div
                className="bg-background/95 backdrop-blur-xl rounded-2xl border border-border/50 p-8 shadow-2xl shadow-primary/10"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
              >
                <div className="space-y-3">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => {
                        handleNavClick(item.href);
                        setIsMenuOpen(false);
                      }}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 10, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center py-4 px-6 text-foreground hover:text-primary transition-all duration-300 rounded-xl hover:bg-primary/10 group w-full text-left"
                    >
                      <span className="font-medium">{item.name}</span>
                      <motion.div
                        className="ml-auto w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.button>
                  ))}
                </div>
                
                {/* Decorative gradient line */}
                <motion.div
                  className="mt-4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
