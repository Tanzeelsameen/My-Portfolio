import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

// Import company images
import mayuraLogo from '../images/mayura.png';
import bitsolveLogo from '../images/bitsolve.jpg';
import mgmLogo from '../images/mgm.png';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Frontend Engineer',
      company: 'Mayura Consultancy Services',
      logo: mayuraLogo,
      location: 'Banglore, India',
      period: 'Sep 2024 - April 2025',
     description: [
                  'Improved the frontend by developing robust, reusable components, leading to a more efficient and maintainable codebase. Contributed over 2000 lines of code.',
                  'Boosted team efficiency by 50% by implementing monorepo architecture and a reusable Design-System.',
                  'Worked on live projects, ensuring timely delivery and smooth implementation. Incorporated client feedback to refine designs and deliver solutions aligned with requirements.',
                  'Contributed to 10+ global projects (lyftyng.com, siruandu, Cnergee Global, 369nft.com), designed/optimized UIs for GMLM projects, and integrated unit testing with 80% code coverage.'
                ],

      technologies: ['Bootstrap', 'JavaScript','PHP', 'Codeigniter', 'MySQL', 'React','Tailwind CSS']
    },
    {
      type: 'work',
      title: 'Software Developer Intern',
      company: 'BitSolve Technologies Pvt Ltd',
      logo: bitsolveLogo,
      location: 'Nanded, India',
      period: ' Feb 2024- May 2024',
      description: [
        'Developed and deployed AI-powered full-stack web applications using Vibe Coding, React, and AI tools like OpenAI and Hugging Face to create intelligent features such as real-time summarization, smart chat interfaces, and content generation.',
        'Led front-end development with React and integrated multiple AI APIs seamlessly into backend systems, resulting in a 40% increase in user engagement and improved automation workflows.',
        'Owned end-to-end feature delivery across the stack, contributing to 70% of core development efforts and collaborating closely with designers and AI specialists to align solutions with user needs.'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'APIs','OpenAI']
    },
    {
      type: 'education',
      title: 'Bachelors Of Technology',
      company: ' MGMs College Of Engineering',
      logo: mgmLogo,
      location: 'Nanded, India',
      period: '2020 - 2024',
      description: 'Graduated From top university with focus on Software Engineering and Core Development.',
      technologies: ['Computer Networking', 'Python', 'Database Management', 'Algorithms', 'Software Testing', 'Team Lead', 'Agile Methodologies', 'Problem Solving',  'Time Management', 'Adaptability', 'Critical Thinking', 'Collaboration']
    },
    
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            Experience & Education
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6"
            variants={itemVariants}
          />
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            My journey in technology and continuous learning
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <motion.div
            variants={containerVariants}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-900 border-4 border-blue-600 rounded-full flex items-center justify-center z-10">
                  {exp.type === 'work' ? (
                    <Briefcase className="w-4 h-4 text-blue-600" />
                  ) : (
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                  )}
                </div>

                {/* Content Card */}
                <motion.div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-8 pl-16 md:pl-0' : 'md:pl-8 pl-16 md:pr-0'
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className={`w-3 h-3 rounded-full mr-3 ${
                        exp.type === 'work' ? 'bg-green-500' : 'bg-blue-500'
                      }`}></div>
                      <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
                        exp.type === 'work' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      }`}>
                        {exp.type === 'work' ? 'Work' : 'Education'}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center mb-2">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        className="w-8 h-8 rounded-full object-cover mr-3"
                      />
                      <div className="text-blue-600 dark:text-blue-400 font-semibold">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{exp.period}</span>
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>

                    <div className="text-gray-700 dark:text-gray-300 mb-4">
                      {Array.isArray(exp.description) ? (
                        <ul className="list-disc list-inside space-y-2">
                          {exp.description.map((descItem, descIndex) => (
                            <li key={descIndex}>{descItem}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>{exp.description}</p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;