'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skills = [
    { name: 'Graphic Designing', icon: '🎨', progress: 95 },
    { name: 'Digital Marketing', icon: '📈', progress: 90 },
    { name: 'SEO Optimization', icon: '🔍', progress: 85 },
    { name: 'Web Development', icon: '💻', progress: 92 },
  ];

  return (
    <section id="skills" className="py-20 pt-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Expertise across multiple disciplines to deliver comprehensive digital solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">{skill.icon}</span>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              
              <div className="mb-2">
                <div className="flex justify-between text-sm text-muted-foreground mb-1">
                  <span>Proficiency</span>
                  <span>{skill.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.progress}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
