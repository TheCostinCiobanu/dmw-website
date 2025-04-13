import { Menu } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/5">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <img 
              src="https://i.imgur.com/n901XSd.png" 
              alt="DoMostWork" 
              className="h-8" 
            />
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            <a href="#services" className="text-white/80 hover:text-white transition-colors relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#how-it-works" className="text-white/80 hover:text-white transition-colors relative group">
              How It Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#testimonials" className="text-white/80 hover:text-white transition-colors relative group">
              Testimonials
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <motion.a 
              href="https://calendly.com/costin-domostwork/dmw-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="futuristic-button px-6 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book "Smooth Scaling" Roadmap Call
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <Menu className="h-6 w-6" />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-6 flex flex-col space-y-4">
                <a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a>
                <a href="#how-it-works" className="text-white/80 hover:text-white transition-colors">How It Works</a>
                <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</a>
                <a 
                  href="https://calendly.com/costin-domostwork/dmw-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="futuristic-button px-6 py-2 rounded-full text-center"
                >
                  Book "Smooth Scaling" Roadmap Call
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}