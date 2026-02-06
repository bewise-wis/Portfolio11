import React, { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { getProjects } from '../firebase/services';
import { projectsData as mockProjectsData } from '../mock';

const Projects = () => {
  const [projectsData, setProjectsData] = useState(mockProjectsData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        if (data && data.length > 0) {
          setProjectsData(data);
        }
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto text-center text-[#71717a]">Loading...</div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-[#a1a1aa] mt-6 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and experience
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-[#1a1a1a] border border-[#27272a] rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-[#27272a]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-600 text-white border-0">Featured</Badge>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#a1a1aa] leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-[#27272a] text-[#71717a] bg-[#0a0a0a]"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="border-[#27272a] bg-transparent hover:bg-[#27272a] text-[#e5e5e5] gap-2"
                    >
                      <Github size={16} />
                      Code
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="border-[#27272a] bg-transparent hover:bg-[#27272a] text-[#e5e5e5] gap-2"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
