'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary pt-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                  <div className="w-64 h-64 bg-muted rounded-xl flex items-center justify-center overflow-hidden">
                    <Image 
                      src="/images/profile.jpeg" 
                      alt="Profile" 
                      width={256}
                      height={230}
                      className="object-cover rounded-xl shadow-2xl"
                      priority
                    />
                  </div>
                </div>
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-full opacity-20"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-full opacity-20"
                  animate={{ scale: [1.2, 1, 1.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-primary">Me</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                I&apos;m a passionate creative professional with expertise in graphic design, digital marketing, 
                SEO optimization, and web development. With a keen eye for design and a strategic mindset, 
                I help businesses create compelling digital experiences that drive results.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                My approach combines creativity with data-driven strategies to deliver solutions that not 
                only look great but also perform exceptionally. I believe in the power of good design to 
                transform businesses and create meaningful connections with audiences.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">30+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
