"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialsSection = () => {
  const [mounted, setMounted] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      content:
        "Inzamam delivered an exceptional brand identity that perfectly captured our vision. His attention to detail and creative approach exceeded our expectations.",
      avatar: "👩‍💼",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "Marketing Director, Growth Co.",
      content:
        "The digital marketing campaign designed by Inzamam increased our online engagement by 250%. His strategic approach is truly remarkable.",
      avatar: "👨‍💼",
      rating: 5,
    },
    {
      name: "Emily Davis",
      position: "Founder, E-Shop Plus",
      content:
        "Our website redesign not only looks amazing but also improved our SEO rankings significantly. Inzamam is a true professional.",
      avatar: "👩‍💻",
      rating: 5,
    },
    {
      name: "David Rodriguez",
      position: "Owner, Local Business",
      content:
        "The SEO optimization work helped us rank #1 for our main keywords. Our organic traffic has tripled since working with Inzamam.",
      avatar: "👨‍🔧",
      rating: 5,
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [mounted, testimonials.length]);

  const renderStars = (rating: number) => {
    return [...Array(rating)].map((_, i) => (
      <span key={i} className="text-yellow-400 text-lg">
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-secondary pt-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Clients <span className="text-primary">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don&apos;t just take my word for it - hear from satisfied clients
            who have experienced success
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-card p-8 md:p-12 rounded-2xl border border-border"
              >
                <div className="text-center">
                  <div className="text-6xl mb-6">
                    {testimonials[currentTestimonial].avatar}
                  </div>

                  <div className="flex justify-center mb-4">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>

                  <blockquote className="text-lg md:text-xl text-muted-foreground mb-6 italic leading-relaxed">
                    &ldquo;{testimonials[currentTestimonial].content}&rdquo;
                  </blockquote>

                  <div>
                    <h4 className="text-xl font-semibold mb-1">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-primary">
                      {testimonials[currentTestimonial].position}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-primary scale-125"
                    : "bg-muted hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                setCurrentTestimonial((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )
              }
              className="bg-card border border-border hover:border-primary/50 p-3 rounded-full transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                setCurrentTestimonial(
                  (prev) => (prev + 1) % testimonials.length
                )
              }
              className="bg-card border border-border hover:border-primary/50 p-3 rounded-full transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
