
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { CommunityHeart } from './components/CommunityHeart';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Loader } from './components/Loader';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Loader isLoading={isLoading} />
      
      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <main className="flex-grow">
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="community">
            <CommunityHeart />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default App;
