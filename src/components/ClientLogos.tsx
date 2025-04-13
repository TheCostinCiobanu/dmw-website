import { motion } from 'framer-motion';

const clients = [
  {
    name: "Brand 1",
    logo: "https://i.imgur.com/yCLAHXr.png"
  },
  {
    name: "Brand 2",
    logo: "https://i.imgur.com/DVpah59.png"
  },
  {
    name: "Brand 3",
    logo: "https://i.imgur.com/rjdcuCi.png"
  },
  {
    name: "Brand 4",
    logo: "https://i.imgur.com/s5XOhs6.png"
  },
  {
    name: "Brand 5",
    logo: "https://i.imgur.com/LlLINFY.png"
  },
  {
    name: "Brand 6",
    logo: "https://i.imgur.com/akNVZbJ.png"
  }
];

export default function ClientLogos() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400"
        >
          Brands That We Helped Include:
        </motion.h2>
        
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
          
          <div className="logo-slider">
            <div className="logo-slide-track">
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="logo-slide"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-40 w-auto object-contain filter transition-all duration-500 hover:filter-none"
                    style={{
                      filter: 'brightness(0) invert(1)',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}