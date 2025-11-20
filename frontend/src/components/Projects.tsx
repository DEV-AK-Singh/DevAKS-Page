import React from 'react';
import ProjectCard, { type Project } from './ui/ProjectCard.tsx';
import emergingEconomicsPreview from '../assets/project_previews/emerging_economics_preview.png';
import droppersAppPreview from '../assets/project_previews/droppers_app_preview.png'; 
import dreelAppPreview from '../assets/project_previews/dreel_app_preview.png';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Emerging Economic Dashboard',
      imageUrl: emergingEconomicsPreview,
      description: 'Built economic data visualization dashboard for IIM Ahmedabad using Javascript, React and Node. Integrated World Bank & IMF APIs to deliver insights on emerging economies through interactive charts with Plotly.js.',
      repoUrl: 'https://github.com/DEV-AK-Singh/Emerging-Economics',
      liveUrl: 'https://emerging-economics.devaks.space',
      technologies: ['Python', 'Javascript', 'Express', 'Node', 'React', 'Plotly.js', 'World Bank API', 'IMF API'],
      category: 'Data Visualization'
    },
    {
      id: '2',
      title: 'Droppers Logistics Platform',
      imageUrl: droppersAppPreview,
      description: 'Built complete logistics management platform with Express and React. Developed three Android applications published on Play Store with AWS deployment and Firebase integration for real-time tracking and optimized routing.',
      repoUrl: 'https://github.com/DEV-AK-Singh/Droppers-App',
      liveUrl: 'https://droppers.devaks.space',
      technologies: ['Typescript', 'Node', 'Express', 'React', 'Android', 'AWS', 'Firebase', 'Real-time Tracking'],
      category: 'Logistics'
    },
    {
      id: '3',
      title: 'DreeL.Co AI Video Platform',
      imageUrl: dreelAppPreview,
      description: 'Spearheaded AI-powered video platform with scalable AI pipeline. Integrated Whisper, Deepgram, and GPT-4 for automated content enhancement. Built backend with Nest.js and Python, deployed on AWS.',
      repoUrl: 'https://dreel.co',
      liveUrl: 'https://dreel.co',
      technologies: ['Next', 'Python', 'AWS', 'Whisper', 'Deepgram', 'GPT-4', 'Redis', 'FFmpeg'],
      category: 'AI/ML'
    } 
  ];

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-light tracking-wide mb-4">Featured Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of projects showcasing my expertise in AI, full-stack development, and innovative solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;