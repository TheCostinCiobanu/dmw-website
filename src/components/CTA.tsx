import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          <motion.div
            className="absolute top-1/4 -left-12 w-24 h-24 bg-primary/20 rounded-full blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold mb-8 leading-tight"
          >
            Get Started Right Now With A{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
              30-Min "Smooth Scaling Roadmap Call"
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 mb-4"
          >
            A cool meet-and-greet & small consultation with Costin.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-white/80 mb-12"
          >
            Book your call now 👇
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="inline-block"
          >
            <motion.a
              href="https://calendly.com/costin-domostwork/dmw-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 futuristic-button text-white px-12 py-6 rounded-full text-xl font-semibold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book "Smooth Scaling" Roadmap Call
              <motion.div
                className="relative"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-white/60"
          >
            No credit card required.
          </motion.p>
        </div>
      </div>
    </section>
  );
}