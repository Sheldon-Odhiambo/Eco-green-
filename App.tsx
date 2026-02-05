
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Impact } from './components/Impact';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Loader } from './components/Loader';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Loader isLoading={isLoading} />
      
      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        
        <main>
          <section id="home">
            <Hero />
          </section>
          
          <About />
          
          <Services />
          
          <Impact />
          
          <Contact />
        </main>
        
        <Footer />
        
        {/* Floating Utilities */}
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default App;
