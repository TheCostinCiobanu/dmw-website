import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Why work with DoMostWork instead of hiring a COO?",
    answer: "Hiring even a decent COO takes months and costs *a ton* (average $121,000/yr). You'll also have to deal with benefits + severance, and there's no guarantee they'll deliver what you want them to. Subscription models like ours are quantitatively & qualitatively better for the vast majority of companies under $3M/yr: you pay less, get results faster, and can pause or cancel your arrangement at any time."
  },
  {
    question: "How much more time & money does this actually save you?",
    answer: "When you take into account payroll, benefits, severance, and the opportunity cost of hiring, our service is ~30% of the price of hiring in-house, and ~70% of the price of hiring an agency. You also get access to world-class ops executives who have helped scale 7-figure companies, as well as a 100% satisfaction guarantee + the ability to pause or cancel anytime."
  },
  {
    question: "How does payment work?",
    answer: "When you click one of the payment options above, you'll be taken to a link to book a \"Smooth Scaling\" Roadmap Call. On the call, we'll first make sure you can 100% take advantage of our operational expertise. Then, for the on-going work, we'll send you a subscription invoice link, whereas for the on-demand option, just a one-time payment link."
  },
  {
    question: "How do you guarantee quality?",
    answer: "We collaborate in a simple way which allows you to request changes or revisions after a delivery. If you're not completely satisfied with the systems you receive (think sales, hiring, onboarding, etc), you'd simply message us on your preferred communication channel and we'd continue revising your deliverable until you are."
  },
  {
    question: "How can I request a change to a system?",
    answer: "After our onboarding call, we'll both decide on the most convenient place where you can stack requests like this so that it fits better in your workflow without any extra complication."
  },
  {
    question: "What's your refund policy?",
    answer: "If you're not 100% satisfied with your service, we'll keep working for free until you are."
  },
  {
    question: "What do \"unlimited systems\" mean?",
    answer: "You can submit an unlimited number of requests regarding systems. Most clients often have 10-15 in the queue at any one time. We work on one at a time (prioritized by you), and our average turnaround time on a system deliverable is between 1-4 days. When we're done, we get to work on the next. In this way, we often deliver 10+ systems per month (whereas an in-house hire might deliver one or two)."
  },
  {
    question: "How do we communicate?",
    answer: "We'll collaborate through the platform(s) that are the most convenient for you. Usually, this involves one project management software (Asana, Click-Up, etc.) and one communication software (Slack, Discord, etc.). Additionally, we can have up to one weekly consultation through Zoom, where we identify constraints, prioritize them, and discuss progress."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent"></div>
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-white/80">
            Everything you need to know about working with us
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left"
              >
                <div className="relative rounded-2xl overflow-hidden">
                  {/* Animated border effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
                      animation: 'spin 20s linear infinite'
                    }}
                  />
                  
                  <div className="relative bg-primary/10 backdrop-blur-sm p-6 rounded-2xl group-hover:bg-primary/20 transition-all duration-300">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-6 h-6 text-primary" />
                      </motion.div>
                    </div>
                    
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 text-white/80 border-t border-white/10 pt-4">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}