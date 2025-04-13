import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import ValueProposition from './components/ValueProposition';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import HowWeCollaborate from './components/HowWeCollaborate';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <ValueProposition />
        <Testimonials />
        <Services />
        <HowWeCollaborate />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;