import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Armash Kamal",
    role: "Founder & CEO @ AKC",
    quote: "When it comes to automations and making people's lives easy, Costin is simply a maestro. He created complex automations and processes that helped us save at least 1 to 2 hours every day from our workflow, enabling us to do MORE of what moves the needle and provide maximum value to our clients.",
    highlight: "Helped us save at least 1-2 hours daily from our workflow. I recommend with all my heart!",
    avatar: "https://i.imgur.com/dEVL4Ow.png",
    rating: 5
  },
  {
    name: "Tyson Benoit",
    role: "Founder & CEO @ 4D Copywriting",
    quote: "Costin, you really are a killer. You really are the one guy I know I can count on no matter what, and that means a lot to me.",
    highlight: "I know I can count on Costin & DoMostWork no matter what, and that means a lot to me.",
    avatar: "https://i.imgur.com/dxKkAQY.jpeg",
    rating: 5
  },
  {
    name: "Gregory Evans",
    role: "Founder & CEO @ National Cyber Security Training Academy",
    quote: "The absolute BEST, hands down! Incredibly fast – and I mean REALLY fast. Maintained a high level of professionalism throughout.",
    highlight: "When it comes to automation, there's simply no one better!",
    avatar: "https://i.imgur.com/pd4H6Ai.jpeg",
    rating: 5
  },
  {
    name: "Harsimran Dhaliwal",
    role: "Co-Founder @ Milkshake Media",
    quote: "Costin is an absolute wizard when it comes to AI automations and processes. He was able to understand the project in detail right away and knew the exact steps to take to execute on this. He was able to turn around this project in such a fast time and completed it exactly as I had envisioned. I would highly highly recommend partnering with Costin on anything AI automations related.",
    highlight: "I would highly highly recommend partnering with Costin on anything AI automations related.",
    avatar: "https://i.imgur.com/hysfivu.jpeg",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Here's What Brand Executives<br />Think Of Our Work:
          </h2>
        </motion.div>

        <div className="relative" ref={containerRef}>
          <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full z-20 pointer-events-none">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors pointer-events-auto"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors pointer-events-auto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `${-currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="w-full flex-shrink-0 px-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl p-8 relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-white via-blue-50 to-blue-100"></div>
                    <div 
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: 'conic-gradient(from 0deg at 50% 50%, transparent, #1a4dbe20, transparent)',
                        animation: 'spin 4s linear infinite'
                      }}
                    ></div>
                    <div className="relative">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-xl font-semibold text-primary mb-6">
                        {testimonial.highlight}
                      </p>
                      <p className="text-gray-600 mb-6 italic">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-4 object-cover"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.name}</p>
                          <p className="text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-primary'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}