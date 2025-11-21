import React from 'react';
import { Brain, Code, Cloud, Database, Cpu, GitBranch } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: 'AI & Machine Learning',
      description: 'Building and deploying generative AI models, neural networks, and ML solutions.',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'HuggingFace']
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Full Stack Development',
      description: 'End-to-end web application development with modern frameworks and best practices.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Python', 'Vue.js']
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: 'Generative AI',
      description: 'Creating AI systems that generate text, images, and code using state-of-the-art models.',
      technologies: ['GPT', 'DALL-E', 'Stable Diffusion', 'LLMs', 'RAG']
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: 'Cloud & DevOps',
      description: 'Deploying and scaling applications using cloud platforms and modern DevOps practices.',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Azure', 'CI/CD']
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: 'Databases',
      description: 'Designing and optimizing database architectures for scalable applications.',
      technologies: ['MongoDB', 'PostgreSQL', 'Redis', 'MySQL', 'Vector DBs']
    },
    {
      icon: <GitBranch className="w-10 h-10" />,
      title: 'Tools & Methodologies',
      description: 'Implementing best practices with modern development tools and agile methodologies.',
      technologies: ['Git', 'GitHub', 'VSCode', 'Figma', 'Agile']
    }
  ];

  return (
    <section id="skills" className="py-20 relative z-10 font-mono">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-light tracking-wide mb-4">Technical Expertise</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Comprehensive skills in AI development, full-stack engineering, and modern cloud technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="p-8 border border-gray-700 rounded-lg hover:border-gray-500 transition-all duration-300 hover:-translate-y-2 bg-gray-900/30 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-linear-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="text-gray-400 mb-4 group-hover:text-white transition-colors">
              {category.icon}
            </div>
            
            <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">
              {category.title}
            </h3>
            
            <p className="text-gray-400 text-sm mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
              {category.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {category.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 border border-gray-600 rounded-full text-xs text-gray-400 group-hover:text-gray-300 group-hover:border-gray-400 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;