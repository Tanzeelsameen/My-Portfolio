import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Database, Globe, Smartphone, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: ['React', 'JavaScript','TypeScript', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      icon: Database,
      skills: ['Node.js', 'PHP', 'SQL', 'APIs'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Design',
      icon: Palette,
      skills: ['Figma', 'Canva', 'Photoshop', 'Illustrator', 'UI/UX Design', 'v0'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Tools & Others',
      icon: Zap,
      skills: ['Git', 'AWS', 'cursor', 'Vercel', 'Postman', 'coderabbit' ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            variants={itemVariants}
          >
            Skills & Technologies
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6"
            variants={itemVariants}
          />
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Here are the technologies and tools I work with to bring ideas to life
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-4">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="bg-white dark:bg-gray-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-gray-300 text-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          variants={containerVariants}
          className="mt-16 text-center"
        >
          <motion.h3 
            className="text-2xl font-semibold text-gray-900 dark:text-white mb-8"
            variants={itemVariants}
          >
            Other Skills
          </motion.h3>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
          >
            {[
              'Python', 'GenAI', 'MCP','Promt Engineering', 'Power Apps', 
              'Computer Networking', 'Database Optimization', 'Software Testing', 'Team Lead', 'Agile Methodologies', 'Problem Solving', 'Business Communication', 'Time Management', 'Adaptability', 'Critical Thinking', 'Collaboration'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                variants={itemVariants}
                className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900 dark:hover:to-purple-900 transition-all duration-300 cursor-default"
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;