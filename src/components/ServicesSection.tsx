'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      title: 'Graphic Designing',
      description: 'Creative visual solutions for your brand identity, marketing materials, and digital assets.',
      icon: '🎨',
      features: ['Logo Design', 'Brand Identity', 'Print Design', 'Digital Graphics'],
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns to boost your online presence and drive conversions.',
      icon: '📈',
      features: ['Social Media Marketing', 'Content Strategy', 'PPC Campaigns', 'Analytics'],
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and increase organic traffic to your website.',
      icon: '🔍',
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Link Building'],
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with latest technologies.',
      icon: '💻',
      features: ['Responsive Design', 'E-commerce', 'CMS Integration', 'Performance Optimization'],
    },
  ];

  return (
    <section id="services" className="py-20 pt-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the digital world
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{service.icon}</span>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-primary text-primary px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
