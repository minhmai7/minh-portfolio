import { motion, AnimatePresence } from "framer-motion";
import { FiDownload, FiChevronDown } from "react-icons/fi";
import Social from "@/components/Social";
import TypingAnimation from "@/components/TypingAnimation";
import { animations } from "@/lib/animations";

const HeroSection = ({ showScrollIndicator }) => {
  return (
    <section id="hero-section" className="pt-24 pb-12 xl:pt-32 xl:pb-0 min-h-screen">
      <div className="container mx-auto min-h-screen">
      <motion.div 
        className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 gap-8"
        initial="initial"
        animate="animate"
        variants={animations.heroStagger}
      >
        <motion.div 
          className="order-2 xl:order-none text-center xl:text-left"
          variants={animations.staggerItem}
        >
          <motion.span 
            className="text-lg tracking-wide text-accent font-medium font-bold block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            Full-Time Student
          </motion.span>
          <motion.h1 
            className="h1 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <TypingAnimation text="Hello, I'm " delay={800} showCursor={false} />
            <span className="text-accent block xl:inline">
              <TypingAnimation text="Minh Mai" delay={2000} />
            </span>
          </motion.h1>
          <motion.p 
            className="max-w-[990px] mx-auto xl:mx-0 mb-12 text-white/80 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            I'm a passionate student developer on a journey to become a{" "}
            <motion.span 
              className="text-accent font-medium"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              Full-Stack Developer
            </motion.span>. Currently seeking internship opportunities to apply my skills and grow in the world of software development.
            
          </motion.p>
          <motion.div 
            className="flex flex-col xl:flex-row items-center gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.2 }}
          >
            <div className="flex items-center gap-6">
              <motion.button 
                onClick={() => {
                  window.open('/resume.pdf', '_blank');
                }}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-background border border-accent/30 text-accent font-medium rounded-lg hover:bg-accent hover:text-black transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="text-lg" />
                Download Resume
              </motion.button>
              <Social 
                containerStyles="flex gap-6" 
                iconStyles="w-10 h-10 border border-accent/30 rounded-full flex justify-center items-center text-accent text-lg hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      <AnimatePresence>
        {showScrollIndicator && (
          <motion.div 
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ 
              opacity: [0, 1, 0.7, 1, 0.8, 1], 
              y: [20, 0, -5, 0, -3, 0],
              scale: 1,
              transition: { 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }
            }}
            exit={{ opacity: 0, y: 50, scale: 0.8, transition: { duration: 0.5 } }}
          >
            <div className="flex flex-col items-center cursor-pointer group" 
            onClick={() => {
              const aboutSection = document.getElementById('about-section');
              aboutSection?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <motion.div 
                className="flex flex-col items-center space-y-1"
                animate={{ 
                  y: [0, -5, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FiChevronDown className="text-accent text-xl opacity-60" />
                <FiChevronDown className="text-accent text-xl opacity-80" />
                <FiChevronDown className="text-accent text-xl" />
              </motion.div>
              <motion.p 
                className="text-accent text-xs mt-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Scroll Down
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;