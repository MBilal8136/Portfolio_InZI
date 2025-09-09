'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'Modern e-commerce platform with advanced features',
      image: '/placeholder-project.jpg',
      tags: ['Web Development', 'UI/UX'],
    },
    {
      title: 'Brand Identity Design',
      description: 'Complete brand identity for a tech startup',
      image: '/placeholder-project.jpg',
      tags: ['Graphic Design', 'Branding'],
    },
    {
      title: 'SEO Campaign',
      description: 'Comprehensive SEO strategy that increased traffic by 300%',
      image: '/placeholder-project.jpg',
      tags: ['SEO', 'Digital Marketing'],
    },
    {
      title: 'Mobile App Design',
      description: 'User-friendly mobile app interface design',
      image: '/placeholder-project.jpg',
      tags: ['UI/UX', 'Mobile Design'],
    },
    {
      title: 'Social Media Campaign',
      description: 'Viral social media campaign for product launch',
      image: '/placeholder-project.jpg',
      tags: ['Digital Marketing', 'Social Media'],
    },
    {
      title: 'Corporate Website',
      description: 'Professional corporate website with CMS integration',
      image: '/placeholder-project.jpg',
      tags: ['Web Development', 'CMS'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary pt-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work across different domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="relative h-48 bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-muted-foreground">Project Image</span>
                </div>
                <motion.div
                  className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <button className="text-white font-semibold">View Project</button>
                </motion.div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
