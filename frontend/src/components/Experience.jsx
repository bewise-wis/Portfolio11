import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experienceData } from '../mock';

const Experience = () => {
  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <section id="experience" className="py-24 px-6 bg-[#111111]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <div
              key={experience.id}
              className="bg-[#1a1a1a] border border-[#27272a] rounded-xl p-8 hover:border-blue-500/50 transition-all duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">
                    {experience.title}
                  </h3>
                  <div className="flex items-center gap-2 text-blue-400 font-medium">
                    <Briefcase size={18} />
                    <span>{experience.company}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-[#71717a] text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>
                      {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-[#a1a1aa] leading-relaxed mb-4">
                {experience.description}
              </p>

              {experience.achievements && experience.achievements.length > 0 && (
                <div className="space-y-2">
                  <p className="text-white font-medium text-sm">Key Achievements:</p>
                  <ul className="space-y-1">
                    {experience.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="text-[#a1a1aa] text-sm flex items-start gap-2"
                      >
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
