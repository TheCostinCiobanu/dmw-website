import { motion } from 'framer-motion';
import { Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <motion.img 
                src="https://i.imgur.com/n901XSd.png"
                alt="DoMostWork" 
                className="h-8 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              />
            </div>

            <div>
              <motion.h3 
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                General
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <a href="mailto:costin@domostwork.com" className="block text-white/80 hover:text-primary transition-colors mb-2">
                  Contact
                </a>
              </motion.div>
            </div>

            <div>
              <motion.h3 
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Resources
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <a 
                  href="https://calendly.com/costin-domostwork/dmw-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="block text-white/80 hover:text-primary transition-colors mb-2"
                >
                  Done-For-You Systems
                </a>
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-white/60">© 2025 DoMostWork.</span>
              <a href="/privacy" className="text-white/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-white/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <motion.a
                href="https://www.instagram.com/the.costin.c?igsh=NG51ZXRwZm95dHh3&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:costin@domostwork.com"
                className="p-2 rounded-full bg-white/5 hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}