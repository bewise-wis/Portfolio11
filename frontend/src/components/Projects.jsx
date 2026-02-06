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
      <section id="projects" className="py-24 px-6 bg-primary">
        <div className="max-w-7xl mx-auto text-center text-tertiary animate-pulse">Loading...</div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 px-6 bg-primary transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-[rgb(var(--primary))] mx-auto rounded-full"></div>
          <p className="text-secondary mt-6 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and experience
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="bg-surface border border-color rounded-xl overflow-hidden hover:border-[rgb(var(--primary))]/50 transition-all duration-300 group hover-lift animate-fade-in-up"
              style={{ animationDelay: `${(index + 2) * 0.15}s` }}
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-tertiary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 animate-scale-in">
                    <Badge className="bg-[rgb(var(--primary))] text-white border-0 shadow-lg">Featured</Badge>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--bg-primary))]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-primary group-hover:text-[rgb(var(--primary))] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="border-color text-tertiary bg-tertiary hover:bg-[rgb(var(--primary))]/10 hover:text-[rgb(var(--primary))] hover:border-[rgb(var(--primary))] transition-all duration-300"
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
                      className="border-color bg-transparent hover:bg-tertiary text-primary gap-2 transition-all duration-300 transform hover:scale-105"
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
                      className="border-color bg-transparent hover:bg-tertiary text-primary gap-2 transition-all duration-300 transform hover:scale-105"
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
