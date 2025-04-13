import { motion } from 'framer-motion';
import { ClipboardList, FileText, Users, UserPlus, ArrowUpRight, Database } from 'lucide-react';

const services = [
  {
    title: "Lead Generation",
    description: "Automated systems to consistently attract and qualify potential clients.",
    icon: Users,
  },
  {
    title: "CRMs",
    description: "Centralized customer relationship management with automated touchpoints.",
    icon: Database,
  },
  {
    title: "Fulfillment & Ascension",
    description: "Optimize your service delivery and create seamless client upgrade paths.",
    icon: ArrowUpRight,
  },
  {
    title: "Hiring Processes",
    description: "Structured frameworks to identify, evaluate, and onboard top talent efficiently.",
    icon: UserPlus,
  },
  {
    title: "Project Management",
    description: "Streamline your project delivery with automated workflows and clear processes.",
    icon: ClipboardList,
  },
  {
    title: "Living SOPs",
    description: "Dynamic, always up-to-date standard operating procedures that evolve with your business.",
    icon: FileText,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary mb-4"
          >
            Comprehensive Solutions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Services We Streamline
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-white/80 max-w-3xl mx-auto"
          >
            From lead generation to client fulfillment, we automate and optimize every aspect of your coaching business.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-2xl -z-10"></div>
              <div className="relative p-8 rounded-2xl border border-white/5 backdrop-blur-sm overflow-hidden">
                {/* Animated border effect */}
                <div 
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'conic-gradient(from 0deg at 50% 50%, transparent, #1a4dbe40, transparent)',
                    animation: 'spin 4s linear infinite'
                  }}
                ></div>
                <div className="absolute inset-[1px] rounded-2xl bg-background/95"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6 group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-white/70">{service.description}</p>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(45deg, transparent, rgba(26, 77, 190, 0.1), transparent)',
                  }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}