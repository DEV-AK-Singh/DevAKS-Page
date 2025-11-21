import React from 'react';
import { Download } from 'lucide-react'; 
import TypewriterEffect from './ui/TypeWriter';

const Hero: React.FC = () => { 
  // Define statement about my work area of gen ai full stack dev
  const fullText1 = 'Developing Full-Stack Architectures';
  const fullText2 = 'Building Scalable AI Systems';
  const fullText3 = 'Shipping Production AI Apps';

  return (
    <section id="home" className="py-20 text-center relative z-10 font-mono">

      <div className="ai-tag inline-block px-4 py-2 border border-gray-600 rounded-full text-xs sm:text-sm text-gray-400 mb-6">
        Generative AI Full Stack Developer
      </div>
      
      <h1 className="text-2xl md:text-4xl font-light tracking-wide mb-6 min-h-16">
        <TypewriterEffect statements={[fullText1, fullText2, fullText3]} />
      </h1> 
      
      <p className="text-sm md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
        Creating AI-powered solutions at the intersection of innovation and design. 
        Exploring the frontiers of generative AI and full stack development.
      </p>
      
      <a
        href="https://drive.google.com/file/d/1m4FYR4lpYul9S4SyaG98pxfADAPRlMr1"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono inline-flex items-center gap-3 px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/10"
      >
        <Download size={20} />
        Download Resume
      </a>
    </section>
  );
};

export default Hero;