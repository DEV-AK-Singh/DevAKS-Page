import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import TechStackIcons from './TechStackIcons';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  repoUrl: string;
  liveUrl?: string;
  technologies: string[];
  category: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden hover:border-gray-500 transition-all duration-300 bg-gray-900/30">
      {/* Project Image */}
      <div className="h-48 bg-linear-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-all duration-300 hover:scale-125 opacity-70 hover:opacity-100"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-4xl opacity-20">🚀</div>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-black/80 text-xs rounded-full border border-gray-600">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <TechStackIcons 
          technologies={project.technologies} 
          className="mb-4"
        />

        {/* Project Links */}
        <div className="grid grid-cols-2 gap-4 border-t border-gray-700 pt-4">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-600 hover:border-white transition-colors text-sm"
          >
            <Github size={16} />
            Github Repo
          </a>
          
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-gray-600 hover:border-white transition-colors text-sm"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;