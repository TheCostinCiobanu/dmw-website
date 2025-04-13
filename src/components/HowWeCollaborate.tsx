import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: "1. Onboarding",
    title: "Quick Discovery Call",
    description: "We hop on a quick 30 min onboarding call, figure out all logistics ahead of time, and identify the first systems we need to implement."
  },
  {
    number: "2. Start The Growth Process",
    title: "Implementation Phase",
    description: "We start implementing the systems discovered in our onboarding call, create clear documentation and ensure they work seamlessly."
  },
  {
    number: "3. Manage & Optimize",
    title: "Continuous Improvement",
    description: "We continue to maintain the effectiveness of the systems we already built and find new processes to implement in order to scale."
  }
];

export default function HowWeCollaborate() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="how-it-works" className="py-24 px-4 relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold flex items-center justify-center gap-4">
            How We'll Collaborate,
            <br />
            In 3 Simple Steps
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ArrowRight className="w-8 h-8 text-primary" />
            </motion.div>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px hidden md:block">
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary to-primary/30"
              style={{
                scaleY: scrollYProgress,
                transformOrigin: "top"
              }}
            />
          </div>

          <div className="space-y-24 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Animated connection dot */}
                <motion.div
                  className="absolute left-[calc(50%-0.5rem)] top-12 w-4 h-4 rounded-full bg-primary hidden md:block"
                  style={{
                    scale: useTransform(
                      scrollYProgress,
                      [index / steps.length, (index + 1) / steps.length],
                      [0.5, 1.5]
                    ),
                    opacity: useTransform(
                      scrollYProgress,
                      [index / steps.length, (index + 1) / steps.length],
                      [0.5, 1]
                    )
                  }}
                >
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
                </motion.div>

                <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1">
                    <motion.div
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 relative overflow-hidden group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* Animated border effect */}
                      <div 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        style={{
                          background: 'conic-gradient(from 0deg at 50% 50%, transparent, #1a4dbe40, transparent)',
                          animation: 'spin 4s linear infinite'
                        }}
                      />
                      <div className="relative">
                        <h3 className="text-xl font-bold text-primary mb-2">{step.number}</h3>
                        <h4 className="text-2xl font-semibold mb-4">{step.title}</h4>
                        <p className="text-white/70">{step.description}</p>
                      </div>
                    </motion.div>
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}