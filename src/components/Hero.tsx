import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const words = ["Identify", "Build", "Manage"];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWord];
    const updateText = () => {
      if (!isDeleting && displayText === word) {
        setTimeout(() => setIsDeleting(true), 1000);
        return;
      }
      
      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentWord((prev) => (prev + 1) % words.length);
        return;
      }

      const delta = isDeleting ? 100 : 150;
      const nextText = isDeleting
        ? word.substring(0, displayText.length - 1)
        : word.substring(0, displayText.length + 1);

      setDisplayText(nextText);
    };

    const timer = setTimeout(updateText, isDeleting ? 50 : 150);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWord]);

  return (
    <section className="pt-32 pb-20 px-4 gradient-bg grid-background min-h-screen flex items-center">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
                We{" "}
                <span className="inline-block min-w-[200px] text-left">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
                {" "}Growth<br />
                Systems For B2C & B2B Companies
              </span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto"
          >
            Automate customer acquisition, streamline fulfillment & install project management – so you can <em className="text-blue-400">smoothly</em> scale to 7-8 figures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <a
              href="https://calendly.com/costin-domostwork/dmw-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block futuristic-button text-white px-10 py-5 rounded-full text-lg font-semibold"
            >
              Book "Smooth Scaling" Roadmap Call →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}