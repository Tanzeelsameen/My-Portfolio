import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Coffee, Code } from 'lucide-react';
import photo from '../images/photo.jpg';

const About = () => {
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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-full overflow-hidden">
                <img
                  src={photo}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <motion.h2 
                className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                variants={itemVariants}
              >
                About Me
              </motion.h2>
              <motion.div 
                className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"
                variants={itemVariants}
              />
            </div>

            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              I'm a Innovative Software developer with over 1 year of experience creating 
              digital solutions that bridge the gap between design and technology. I specialize 
              in building scalable web applications using modern technologies like React, Node.js, 
              and TypeScript.
            </motion.p>

            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or enjoying a good cup of coffee while sketching out ideas 
              for my next project.
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-6 pt-6"
              variants={containerVariants}
            >
              {[
                { Icon: Code, label: 'Projects Completed', value: '20+' },
                { Icon: User, label: 'Happy Clients', value: '10+' },
                { Icon: Code, label: 'Lines Of Code', value: '2000+' },
                { Icon: Heart, label: 'Years Experience', value: '1+' }
              ].map(({ Icon, label, value }) => (
                <motion.div
                  key={label}
                  variants={itemVariants}
                  className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;