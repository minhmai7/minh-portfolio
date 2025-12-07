import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { animations } from "@/lib/animations";

const ProjectsSection = () => {
  return (
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
  );
};

export default ProjectsSection;