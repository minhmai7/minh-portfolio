import { motion } from "framer-motion";
import TechStack from "@/components/TechStack";
import Skills from "@/components/Skills";
import { animations } from "@/lib/animations";

const AboutSection = () => {
  return (
    <motion.section 
      id="about-section" 
      className="min-h-screen py-8 items-center"
      initial="initial"
      whileInView="animate"
      viewport={{ amount: 0.3, once: true }}
      variants={animations.staggerContainer}
    >
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto space-y-12 w-full px-4">
          <motion.div 
            className="text-left -ml-4"
            variants={animations.staggerItem}
          >
            <motion.h1 
              className="h1 mb-6"
              variants={animations.fadeInDown}
            >
              About <motion.span 
                className="text-accent"
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              >
                Me
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-lg text-white/80 leading-relaxed max-w-3xl"
              variants={animations.fadeInUp}
            >
              Hello there! I'm Minh, a Vietnamese currently living in Seattle with a passion for technology and food :D. Here are a few things about me:
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8"
            variants={animations.staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.1 }}
          >
            <motion.div 
              className="space-y-6"
              variants={animations.staggerItem}
            >
              <h2 className="text-2xl font-semibold text-accent mb-6">Background</h2>
              <div className="bg-accent/10 p-5 rounded-lg space-y-4">
                <p className="text-white/80 text-sm leading-relaxed">
                  First-year student at UW Bothell majoring in CSSE: Information Assurance and Cybersecurity & Data Visualization.
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Looking for internships to grow my skills and contribute to meaningful projects.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              variants={animations.staggerItem}
            >
              <h2 className="text-2xl font-semibold text-accent mb-6">Education</h2>
              <div className="space-y-3">
                <div className="bg-accent/10 p-4 rounded-lg">
                  <h3 className="text-sm font-semibold text-accent mb-1">University of Washington, Bothell</h3>
                  <p className="text-white/70 text-sm">CSSE: IAC & Data Visualization</p>
                  <p className="text-white/60 text-xs">Expected Graduation: 2029</p>
                </div>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <h3 className="text-sm font-semibold text-accent mb-1">Kennedy Catholic High School</h3>
                  <p className="text-white/70 text-sm">Salutatorian</p>
                  <p className="text-white/60 text-xs">Graduated: May 2025</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={animations.staggerItem}
            >
              <Skills />
            </motion.div>

            <motion.div 
              className="space-y-6"
              variants={animations.staggerItem}
            >
              <h2 className="text-2xl font-semibold text-accent mb-6">Hobbies</h2>
              <div className="space-y-4">
                <div className="bg-accent/10 p-4 rounded-lg">
                  <h3 className="text-sm font-semibold text-accent mb-2">Problem/Puzzle Solving</h3>
                  <p className="text-white/70 text-sm">Coding problems, boardgames, and Gundams!</p>
                </div>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <h3 className="text-sm font-semibold text-accent mb-2">Tennis & Food</h3>
                  <p className="text-white/70 text-sm">I love rallying. I also love spending all of my money on food. </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-background/5 rounded-2xl border-accent/10 overflow-hidden"
          >
            <TechStack />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;