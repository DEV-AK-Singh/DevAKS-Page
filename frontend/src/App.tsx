import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';
import SocialLinks from './components/SocialLinks.tsx';
import Footer from './components/Footer.tsx';
import AIElements from './components/AIElements.tsx';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <AIElements />
      <div className="container mx-auto px-4 max-w-6xl">
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <SocialLinks />
        <Footer />
      </div>
    </div>
  );
};

export default App;