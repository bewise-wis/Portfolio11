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
      <section id="skills" className="py-24 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto text-center text-[#71717a]">Loading...</div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-24 px-6 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-[#27272a] rounded-xl p-8 hover:border-blue-500/50 transition-all duration-200"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="bg-[#27272a] text-[#e5e5e5] hover:bg-blue-500/20 hover:text-blue-400 border-0 px-4 py-2 text-sm font-medium transition-all duration-200"
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
