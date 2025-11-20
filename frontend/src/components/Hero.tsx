import React, { useEffect, useState } from 'react';
import { Download } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Building Intelligent Digital Experiences';

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setDisplayText(fullText.substring(0, i + 1));
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    
    setTimeout(typeWriter, 500);
  }, []);

  return (
    <section id="home" className="py-20 text-center relative z-10">
      <div className="ai-tag inline-block px-4 py-2 border border-gray-600 rounded-full text-sm text-gray-400 mb-6">
        Generative AI Full Stack Developer
      </div>
      
      <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-6 min-h-16">
        {displayText}
      </h1>
      
      <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
        Creating AI-powered solutions at the intersection of innovation and design. 
        Exploring the frontiers of generative AI and full stack development.
      </p>
      
      <a
        href="https://drive.google.com/file/d/1m4FYR4lpYul9S4SyaG98pxfADAPRlMr1"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/10"
      >
        <Download size={20} />
        Download Resume
      </a>
    </section>
  );
};

export default Hero;