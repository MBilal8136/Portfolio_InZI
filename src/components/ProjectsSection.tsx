"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description: "Modern e-commerce platform with advanced features",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
      tags: ["Web Development", "UI/UX"],
    },
    {
      title: "Brand Identity Design",
      description: "Complete brand identity for a tech startup",
      image:
        "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=400&h=300&fit=crop&crop=center",
      tags: ["Graphic Design", "Branding"],
    },
    {
      title: "SEO Campaign",
      description: "Comprehensive SEO strategy that increased traffic by 300%",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
      tags: ["SEO", "Digital Marketing"],
    },
    {
      title: "Mobile App Design",
      description: "User-friendly mobile app interface design",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center",
      tags: ["UI/UX", "Mobile Design"],
    },
    {
      title: "Social Media Campaign",
      description: "Viral social media campaign for product launch",
      image:
        "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=400&h=300&fit=crop&crop=center",
      tags: ["Digital Marketing", "Social Media"],
    },
    {
      title: "Corporate Website",
      description: "Professional corporate website with CMS integration",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop&crop=center",
      tags: ["Web Development", "CMS"],
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
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <button className="text-white font-semibold">
                    View Project
                  </button>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
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
