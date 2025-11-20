import React from 'react';

interface TechStackIconsProps {
  technologies: string[];
  className?: string;
}

const techIcons: Record<string, string> = {
  // Frontend
  'react': '⚛️',
  'vue': '🟢',
  'angular': '🅰️',
  'typescript': '🔷',
  'javascript': '🟨',
  'html': '🌐',
  'css': '🎨',
  'tailwind': '💨',
  'sass': '💜',
  
  // Backend
  'node': '⬢',
  'python': '🐍',
  'java': '☕',
  'go': '🐹',
  'rust': '🦀',
  'php': '🐘',
  
  // AI/ML
  'tensorflow': '🧠',
  'pytorch': '🔥',
  'openai': '🤖',
  'langchain': '⛓️',
  'huggingface': '🤗',
  
  // Databases
  'mongodb': '🍃',
  'postgresql': '🐘',
  'mysql': '🐬',
  'redis': '🔴',
  
  // DevOps
  'docker': '🐳',
  'kubernetes': '☸️',
  'aws': '☁️',
  'azure': '🔷',
  'gcp': '🔶',
  
  // Tools
  'git': '📚',
  'github': '🐙',
  'vscode': '💻',
  'figma': '🎨',
};

const TechStackIcons: React.FC<TechStackIconsProps> = ({ technologies, className = '' }) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {technologies.map((tech) => {
        const normalizedTech = tech.toLowerCase().trim();
        const icon = techIcons[normalizedTech] || '⚡';
        
        return (
          <span
            key={tech}
            className="inline-flex items-center gap-1 px-3 py-1 border border-gray-600 rounded-full text-sm bg-gray-900/50"
            title={tech}
          >
            <span>{icon}</span>
            <span className="text-xs">{tech}</span>
          </span>
        );
      })}
    </div>
  );
};

export default TechStackIcons;