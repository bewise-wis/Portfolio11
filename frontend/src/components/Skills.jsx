import React, { useState, useEffect } from 'react';
import { Badge } from './ui/badge';
import { getSkills } from '../firebase/services';
import { skillsData as mockSkillsData } from '../mock';

const Skills = () => {
  const [skillsData, setSkillsData] = useState(mockSkillsData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await getSkills();
        if (data && data.length > 0) {
          setSkillsData(data);
        }
      } catch (error) {
        console.error('Error loading skills:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

  if (loading) {
    return (
      <section id="skills" className="py-24 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto text-center text-tertiary animate-pulse">Loading...</div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-24 px-6 bg-secondary transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-[rgb(var(--primary))] mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-surface border border-color rounded-xl p-8 hover:border-[rgb(var(--primary))]/50 transition-all duration-300 hover-lift gradient-overlay animate-fade-in-up"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-primary mb-6 animate-fade-in-left" style={{ animationDelay: `${(index + 3) * 0.1}s` }}>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="bg-tertiary text-primary hover:bg-[rgb(var(--primary))]/20 hover:text-[rgb(var(--primary))] border-0 px-4 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-110 cursor-default animate-scale-in"
                    style={{ animationDelay: `${(index * 10 + skillIndex) * 0.05}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
