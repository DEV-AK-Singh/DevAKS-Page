import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      url: 'https://github.com/DEV-AK-Singh',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dev-ak-singh/',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      url: 'mailto:singh.abhishek151019@gmail.com',
    },
    {
      icon: <FileText className="w-5 h-5" />,
      label: 'Resume',
      url: 'https://drive.google.com/file/d/1m4FYR4lpYul9S4SyaG98pxfADAPRlMr1',
    },
  ];

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 border border-gray-600 hover:border-white transition-all duration-300 hover:-translate-y-1 text-sm"
          >
            {link.icon}
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;