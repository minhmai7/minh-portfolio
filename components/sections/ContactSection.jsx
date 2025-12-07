import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";
import Social from "@/components/Social";
import { animations } from "@/lib/animations";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
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

  return (
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
  );
};

export default ContactSection;