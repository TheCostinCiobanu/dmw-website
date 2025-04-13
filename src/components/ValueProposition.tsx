import { motion } from 'framer-motion';
import { PauseCircle, Workflow, Zap } from 'lucide-react';

const features = [
  {
    title: "1. Pause Anytime",
    description: "Building systems takes time, managing them is quick. That's why we work month-by-month - you can pause or cancel at any time, and come back when needed.",
    icon: PauseCircle
  },
  {
    title: "2. Lean Workflow",
    description: "We join your favorite communication platform & give you updates where it's the accessible for you. We can also have weekly consultation calls as needed (not mandatory).",
    icon: Workflow
  },
  {
    title: "3. Fast Work, Fast Results",
    description: "We plan thoroughly, then act quickly. Instead of month-long projects, we deliver weekly solutions.",
    icon: Zap
  }
];

export default function ValueProposition() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary mb-4"
          >
            Your Ops Department, All In One Place
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-white relative z-10 py-8"
          >
            The New Era Of Scaling
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-white/80 max-w-3xl mx-auto"
          >
            Hiring an operator takes time, costs a lot, and comes with an immense learning curve. We already know what works, so we can start the scaling process as fast as you say "growth".
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-2xl -z-10"></div>
              <div className="relative p-8 rounded-2xl border border-white/5 backdrop-blur-sm hover:border-primary/50 transition-colors duration-500">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}