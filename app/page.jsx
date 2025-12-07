"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FiDownload, FiChevronDown } from "react-icons/fi";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';
import Social from "@/components/Social";
import TechStack from "@/components/TechStack";
import Skills from "@/components/Skills";
import { FaCoffee } from "react-icons/fa";

// Typing Animation Component
const TypingAnimation = ({ text, delay = 0, showCursor = true }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    setDisplayText(""); setCurrentIndex(0); setStartTyping(false);
    const startTimer = setTimeout(() => setStartTyping(true), delay);
    return () => clearTimeout(startTimer);
  }, [text, delay]);

  useEffect(() => {
    if (startTyping && currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, startTyping]);

  return <span>{displayText}{showCursor && <span className="animate-pulse text-accent">|</span>}</span>;
};

// Animation variants
const animations = {
  fadeInUp: { initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: "easeOut" } },
  fadeInDown: { initial: { opacity: 0, y: -30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: "easeOut" } },
  staggerContainer: { initial: { opacity: 0 }, animate: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } } },
  staggerItem: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
  heroStagger: { initial: { opacity: 0 }, animate: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } } },
  heroFadeInUp: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" } }
};

const Home = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    firstname: "", lastname: "", email: "", phone: "", service: "", message: ""
  });

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    emailjs.send(
      serviceId,
      templateId,
      formData,
      publicKey
    )
    .then((result) => {
      console.log(result.text);
      setStatus("Thank you for your message! I'll get back to you within 24 hours. :D");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
      setIsSubmitting(false);
    }, (error) => {
      console.log(error.text);
      setStatus("Error sending message. Please try again.");
      setIsSubmitting(false);
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setShowScrollIndicator(scrollPosition < 50 || scrollPosition <= windowHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
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
                      First-year student at UW Bothell planning to major in CSSE and Data Science.
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
                      <p className="text-white/70 text-sm">Pre-Major</p>
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

        <motion.section 
          id="projects-section" 
          className="min-h-screen bg-background scroll-mt-[120]"
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.2, once: true }}
          variants={animations.staggerContainer}
        >
          <div className="container mx-auto min-h-screen flex">
            <div className="max-w-7xl mx-auto space-y-16 w-full px-4">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.h1 
                  className="h1 mb-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  My <motion.span 
                    className="text-accent"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    Projects
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Here are some projects I worked and am working on.
                </motion.p>
              </motion.div>
              
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.8,
                  staggerChildren: 0.2
                }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="group bg-accent/10 rounded-xl overflow-hidden hover:bg-accent/20 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20"
                  initial={{ opacity: 0, y: 80, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="h-48 bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%", skewX: -45 }}
                      whileHover={{ x: "200%" }}
                      transition={{ duration: 0.8 }}
                    />
                    <motion.span 
                      className="text-2xl font-bold text-accent z-10"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      COMING SOON
                    </motion.span>
                  </motion.div>
                  <motion.div 
                    className="p-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.h3 
                      className="h3 mb-3 text-accent"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      PenguPlan
                    </motion.h3>
                    <motion.p 
                      className="text-white/70 mb-4 group-hover:text-white/90 transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      An app helping user to optimize their learning schedule by analyzing their Canvas/Schoology.
                    </motion.p>
                    <motion.div 
                      className="flex flex-wrap gap-2 mb-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.6, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full hover:bg-accent/30 transition-colors duration-200">VibeCode</span>
                      <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full hover:bg-accent/30 transition-colors duration-200">React</span>
                      <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full hover:bg-accent/30 transition-colors duration-200">JavaScript</span>
                    </motion.div>
                    <motion.div 
                      className="flex gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.8, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Button size="sm" variant="outline" className="px-3 py-0.5 hover:scale-105 transition-transform duration-200">Live Demo</Button>
                      <Button size="sm" variant="outline" className="px-3 py-0.5 hover:scale-105 transition-transform duration-200">Code</Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="group bg-accent/10 rounded-xl overflow-hidden hover:bg-accent/20 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20"
                  initial={{ opacity: 0, y: 80, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="h-48 bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%", skewX: -45 }}
                      whileHover={{ x: "200%" }}
                      transition={{ duration: 0.8 }}
                    />
                    <motion.span 
                      className="text-2xl font-bold text-accent z-10"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      COMING SOON
                    </motion.span>
                  </motion.div>
                  <motion.div 
                    className="p-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.h3 
                      className="h3 mb-3 text-accent"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      BudgetBook
                    </motion.h3>
                    <motion.p 
                      className="text-white/70 mb-4 group-hover:text-white/90 transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.6, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      A site comparing the riding costs of different car hailing services.
                    </motion.p>
                    <motion.div 
                      className="flex flex-wrap gap-2 mb-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.8, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full hover:bg-accent/30 transition-colors duration-200">React</span>
                      <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full hover:bg-accent/30 transition-colors duration-200">JavaScript</span>
                      <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full hover:bg-accent/30 transition-colors duration-200">API</span>
                    </motion.div>
                    <motion.div 
                      className="flex gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.0, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Button size="sm" variant="outline" className="px-3 py-0.5 hover:scale-105 transition-transform duration-200">Live Demo</Button>
                      <Button size="sm" variant="outline" className="px-3 py-0.5 hover:scale-105 transition-transform duration-200">Code</Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="group bg-accent/10 rounded-xl overflow-hidden hover:bg-accent/20 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20"
                  initial={{ opacity: 0, y: 80, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="h-48 relative overflow-hidden bg-gradient-to-br from-red-500/30 via-black/50 to-green-500/30"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img 
                      src="/roulette.png" 
                      alt="Roulette game screenshot"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%", skewX: -45 }}
                      whileHover={{ x: "200%" }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.div>
                  <motion.div 
                    className="p-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.h3 
                      className="h3 mb-3 text-accent"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      Roulette
                    </motion.h3>
                    <motion.p 
                      className="text-white/70 mb-4 group-hover:text-white/90 transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.8, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      An app illustrating a roulette game using fake money.
                    </motion.p>
                    <motion.div 
                      className="flex flex-wrap gap-2 mb-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 2.0, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full hover:bg-accent/30 transition-colors duration-200">Code.org</span>
                      <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full hover:bg-accent/30 transition-colors duration-200">JavaScript</span>
                      <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full hover:bg-accent/30 transition-colors duration-200">UI Design</span>
                    </motion.div>
                    <motion.div 
                      className="flex gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.2, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="px-3 py-0.5 hover:scale-105 transition-transform duration-200"
                        onClick={() => window.open('https://studio.code.org/projects/applab/obAg8wCHAeK3mx6mE-DXOxK7KyQ7s-amhai8KmX_0bg', '_blank')}
                      >
                        Live Demo
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="px-3 py-0.5 hover:scale-105 transition-transform duration-200"
                        onClick={() => window.open('https://studio.code.org/projects/applab/obAg8wCHAeK3mx6mE-DXOxK7KyQ7s-amhai8KmX_0bg/edit', '_blank')}
                      >
                        Code
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="contact-section" 
          className="min-h-screen py-6 bg-background"
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.2, once: true }}
          variants={animations.staggerContainer}
        >
          <div className="container mx-auto min-h-screen">
            <div className="max-w-6xl mx-auto space-y-12 w-full">
              <motion.div
                className="text-center"
                variants={animations.staggerItem}
              >
                <motion.h1 
                  className="h1 mb-8"
                  variants={animations.fadeInDown}
                >
                  Contact <motion.span 
                    className="text-accent"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    Me!
                  </motion.span>
                </motion.h1>
              </motion.div>
              
              <motion.div 
                className="grid lg:grid-cols-2 gap-12"
                variants={animations.staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ amount: 0.1, once: true }}
              >
                <motion.div 
                  className="order-2 lg:order-1"
                  variants={animations.fadeInLeft}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.form 
                    onSubmit={sendEmail} 
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstname" className="block text-sm font-medium text-white/80 mb-2">
                          First Name
                        </label>
                        <Input
                          id="firstname"
                          name="firstname"
                          type="text"
                          required
                          value={formData.firstname}
                          onChange={handleChange}
                          className="bg-primary/50 border-accent/20 focus:border-accent text-white placeholder:text-white/50"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastname" className="block text-sm font-medium text-white/80 mb-2">
                          Last Name
                        </label>
                        <Input
                          id="lastname"
                          name="lastname"
                          type="text"
                          required
                          value={formData.lastname}
                          onChange={handleChange}
                          className="bg-primary/50 border-accent/20 focus:border-accent text-white placeholder:text-white/50"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-primary/50 border-accent/20 focus:border-accent text-white placeholder:text-white/50"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-primary/50 border-accent/20 focus:border-accent text-white placeholder:text-white/50"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2">
                        Service
                      </label>
                      <Select value={formData.service} onValueChange={(value) => setFormData(prev => ({...prev, service: value}))}>
                        <SelectTrigger className="bg-primary/50 border-accent/20 focus:border-accent text-white">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-primary border-accent/20">
                          <SelectItem value="web-development">Programming</SelectItem>
                          <SelectItem value="frontend-development">Food Date</SelectItem>
                          <SelectItem value="backend-development">Just A Chat</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
                          <SelectItem value="collaboration">Collaboration</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="bg-primary/50 border-accent/20 focus:border-accent text-white placeholder:text-white/50 resize-none"
                        placeholder="Tell me what's on your mind..."
                      />
                    </div>
                    
                    {status && (
                      <div className={`p-4 rounded-lg text-center relative ${
                        status.includes('Error') 
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                          : 'bg-accent/20 text-accent border border-accent/30'
                      }`}>
                        <button
                          onClick={() => setStatus("")}
                          className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors duration-200 bg-transparent border-0 p-0 cursor-pointer"
                          aria-label="Close message"
                        >
                          ×
                        </button>
                        {status}
                      </div>
                    )}
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full hover:bg-accent/90 transition-colors duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.form>
                </motion.div>
                
                <motion.div 
                  className="order-1 lg:order-2 space-y-8"
                  variants={animations.fadeInRight}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.h2 
                      className="h2 mb-6"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      Let's Connect
                    </motion.h2>
                    <p className="text-white/70 leading-relaxed mb-8">
                      I'm always excited to chat with fellow developers, 
                      or anyone interested in technology. Feel free to reach out through any of these channels.
                    </p>
                  </motion.div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Email</h3>
                        <p className="text-white/70">maiminh207@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Phone</h3>
                        <p className="text-white/70">206-617-5667</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Location</h3>
                        <p className="text-white/70">Seattle WA, USA</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="h3 mb-4">Find Me Online</h3>
                    <Social containerStyles="flex gap-6" />
                  </div>
  
                </motion.div>
              </motion.div> 
            </div>
          </div>
        </motion.section>

        <footer className="py-12 border-t border-accent/20">
          <div className="container mx-auto text-center">
            <p className="text-white/60">
              © 2025 Minh Mai. Built with Next.js and lots of {" "}
              <span className="text-accent">
                <FaCoffee className="inline w-2 h-2"/>
              </span>
            </p>
          </div>
        </footer>
    </>
  );
};

export default Home;
