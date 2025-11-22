import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="py-8 flex justify-between items-center relative font-mono">
      <div className="logo">
        <span className="text-2xl font-light tracking-widest relative">
          <p>Dev<span className='text-gray-400'>aks</span><sub className='text-gray-500 text-sm tracking-normal'>.space</sub></p> 
        </span>
      </div>

      <button
        className="md:hidden z-20"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav
        className={`${
          isMenuOpen
            ? 'flex flex-col absolute top-full left-0 right-0 bg-black border-t border-gray-800 p-4'
            : 'hidden md:flex'
        } md:flex md:static md:bg-transparent md:border-0 md:p-0`}
      >
        <ul className="flex flex-col bg-black pb-8 md:pb-0 md:bg-transparent z-50 md:flex-row gap-6 md:gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm tracking-wide hover:text-gray-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;