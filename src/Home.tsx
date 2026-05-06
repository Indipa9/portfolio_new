import React, { Suspense } from 'react';
import Scene from './components/Scene';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// Helper component for animated sections
const Section = ({ title, children, delay = 0 }: any) => (
  <motion.section 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className="mb-10 w-full max-w-5xl mx-auto bg-slate-800/40 p-8 md:p-12 rounded-3xl backdrop-blur-lg border border-white/10 shadow-xl shadow-indigo-500/10"
  >
    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-pink-300">
      {title}
    </h2>
    {children}
  </motion.section>
);

// Helper component for project cards
const ProjectCard = ({ title, desc, stack, link }: any) => (
  <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/10 hover:border-indigo-400 hover:bg-slate-700/60 transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1 relative">
    <div className="flex justify-between items-start mb-3">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      {link && (
        <a href={link} target="_blank" rel="noreferrer" className="text-xs bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/50 hover:text-white px-2.5 py-1 rounded-md transition-colors border border-indigo-400/30 shadow-sm flex items-center">
          Play ↗
        </a>
      )}
    </div>
    <p className="text-slate-300 mb-6 text-sm leading-relaxed flex-grow">{desc}</p>
    <div className="flex flex-wrap gap-2 mt-auto">
      {stack.map((s: string) => (
        <span key={s} className="text-xs font-semibold bg-indigo-500/30 text-indigo-200 px-3 py-1.5 rounded-full border border-indigo-400/40">
          {s}
        </span>
      ))}
    </div>
  </div>
);

export default function Home() {
  const skills = [
    "React.js", "Next.js", "Node.js", "Express.js", "MySQL", "Postgres", "MongoDB", 
    "Laravel", "AWS", "Socket.io", "JavaFX", "Fiori", "JavaScript", "CodeIgniter", 
    "PHP", "HTML5", "CSS", "Java", "C", "Git", "GitHub", "Figma", "REST APIs", "CI/CD"
  ];

  return (
    <main className="relative min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-indigo-500/30">
      {/* Fixed 3D Background */}
      <div className="fixed inset-0 z-0">
        <Suspense fallback={<div className="absolute inset-0 bg-slate-900" />}>
          <Scene />
        </Suspense>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 w-full h-screen overflow-y-auto pt-24 pb-20 px-4 md:px-8">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl mx-auto text-center bg-slate-800/50 p-10 md:p-16 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl shadow-indigo-500/20 mb-12 flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
            className="mb-8 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <img 
              src="/profile.jpg" 
              alt="Indipa Perera" 
              className="relative w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-slate-800 shadow-2xl z-10"
            />
          </motion.div>
          <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-4xl md:text-7xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 drop-shadow-lg"
          >
            Indipa Perera
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="text-xl md:text-2xl text-gray-300 font-light mb-8"
          >
            Software Engineer
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.5 }}
             className="flex flex-wrap justify-center gap-6 text-sm text-slate-300 mb-10 font-medium"
          >
            <a href="mailto:IndipaPerera1@gmail.com" className="flex items-center gap-2 hover:text-indigo-400 transition-colors"><Mail className="w-4 h-4 text-indigo-400" /> IndipaPerera1@gmail.com</a>
            <a href="tel:0779604402" className="flex items-center gap-2 hover:text-purple-400 transition-colors"><Phone className="w-4 h-4 text-purple-400" /> 0779604402</a>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-pink-400" /> Bandaragama, Sri Lanka</span>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="flex gap-6 justify-center"
          >
            <a href="https://github.com/indipa" target="_blank" rel="noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:text-indigo-400 transition-all duration-300 transform hover:scale-110 border border-white/5 shadow-lg">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/indipa-perera-6937b5234/" target="_blank" rel="noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:text-indigo-400 transition-all duration-300 transform hover:scale-110 border border-white/5">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Section */}
        <Section title="Profile" delay={0.1}>
          <p className="text-gray-300 leading-relaxed text-lg font-light text-justify">
            Enthusiastic and detail-oriented Information Systems student with a solid understanding of programming, databases, 
            and systems analysis. Skilled in applying problem-solving techniques and using modern tools to develop and optimize 
            software solutions. Eager to gain hands-on industry experience, contribute to collaborative projects, and bridge the 
            gap between technical skills and business needs. Passionate about learning emerging technologies and delivering 
            practical, user-centered solutions.
          </p>
        </Section>

        {/* Experience Section */}
        <Section title="Professional Experience" delay={0.2}>
          <div className="border-l-2 border-indigo-500/30 pl-8 ml-2 relative">
            <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
            
            <div className="flex justify-between items-start mb-4 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-wide">Intern ERP Technical Consultant</h3>
                <h4 className="text-indigo-300 mt-2 font-medium flex items-center gap-3">
                  <span className="text-xl">Altria Consulting</span>
                  <span className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs">11/2025 – 2026</span>
                </h4>
              </div>
              
              <div className="shrink-0 bg-white/90 rounded-2xl border border-indigo-500/30 shadow-lg backdrop-blur-md hover:scale-105 transition-transform duration-300 overflow-hidden flex items-center justify-center p-2 mt-2 md:mt-0">
                <img 
                  src="/altria-logo.png" 
                  alt="Altria Logo" 
                  className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-md" 
                  onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                />
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-lg font-light">
              Working exclusively with <strong className="text-gray-200">SAP ERP</strong> systems, supporting implementation and customization activities across client projects. 
              Involved in <strong className="text-gray-200">SAP ABAP development</strong>, system configuration support, data migration, testing, and troubleshooting, while 
              collaborating with functional consultants to deliver end-to-end SAP solutions aligned with business requirements.
            </p>
          </div>
        </Section>

        {/* Projects Section */}
        <Section title="Key Projects" delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard 
              title="SilverCare" 
              desc="Elder Care web app with an online consultation system via Jitsi and email verification for doctors and healthcare professionals via Nodemailer."
              stack={["PERN Stack", "Jitsi", "Nodemailer"]}
            />
            <ProjectCard 
              title="Nebula Chat" 
              desc="Realtime chat application mimicking the WhatsApp interface, offering instant user-to-user messaging capabilities."
              stack={["MERN Stack", "Socket.io"]}
            />
            <ProjectCard 
              title="MelodyLink" 
              desc="Music Collaboration Web App created as a team project. Spearheaded the development of a custom MVC architecture from scratch."
              stack={["HTML", "CSS", "JS", "PHP", "MySQL", "MVC"]}
            />
            <ProjectCard 
              title="Chess App" 
              desc="Interactive multiplayer chess app where players can compete in real-time by creating and joining custom rooms."
              stack={["Javascript", "Node.js"]}
              link="https://chess-y6j4.onrender.com/"
            />
            <ProjectCard 
              title="SmartHostel" 
              desc="Resident Management System featuring automated profile creation, room assignments, payment tracking, and receipt generation."
              stack={["JavaFX"]}
            />
            <ProjectCard 
              title="Tails Of Hope" 
              desc="Comprehensive Pet Care website built from scratch, featuring an integrated email authentication system linked to a database."
              stack={["HTML", "CSS", "JS", "MySQL"]}
            />
          </div>
        </Section>

        {/* Education Section */}
        <Section title="Education" delay={0.4}>
          <div className="space-y-8">
            <div className="border-b border-white/10 pb-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-white">BSc. in Information Systems (Undergraduate)</h3>
                <span className="text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">06/2023 – 06/2026</span>
              </div>
              <p className="text-gray-400 text-lg font-light">University Of Colombo School Of Computing, Sri Lanka</p>
            </div>
            
            <div className="border-b border-white/10 pb-6">
              <h3 className="text-xl font-bold text-white mb-2">A/Ls - Physical Science Stream</h3>
              <p className="text-gray-400 text-lg font-light mb-3">Taxila Central College</p>
              <span className="inline-block bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-md text-sm">
                3As with a z-score of 1.8841
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">O/Ls</h3>
              <p className="text-gray-400 text-lg font-light mb-3">Taxila Central College</p>
              <span className="inline-block bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-md text-sm">
                8As including ICT and English Literature
              </span>
            </div>
          </div>
        </Section>

        {/* Skills & Certificates Section */}
        <Section title="Skills & Certifications" delay={0.5}>
          <div className="mb-10">
            <h3 className="text-xl font-bold text-white mb-4">Technical Stack & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map(skill => (
                <span key={skill} className="bg-slate-800/80 border border-white/20 px-4 py-2 rounded-xl text-slate-200 hover:bg-indigo-500/30 hover:text-indigo-100 hover:border-indigo-400/50 transition-all font-medium text-sm shadow-md">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Certifications</h3>
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 px-4 py-2 rounded-lg border border-purple-500/20 font-medium text-sm">
                🏆 Java (Basic) - HackerRank
              </span>
              <span className="flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 px-4 py-2 rounded-lg border border-purple-500/20 font-medium text-sm">
                🏆 SQL (Basic & Intermediate) - HackerRank
              </span>
              <span className="flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 px-4 py-2 rounded-lg border border-purple-500/20 font-medium text-sm">
                📜 Project Management
              </span>
              <span className="flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 px-4 py-2 rounded-lg border border-purple-500/20 font-medium text-sm">
                ☁️ AWS Cloud Practitioner
              </span>
            </div>
          </div>
        </Section>

      </div>
    </main>
  );
}