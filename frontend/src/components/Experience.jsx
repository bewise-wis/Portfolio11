import React, { useState, useEffect } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { getExperience } from '../firebase/services';
import { experienceData as mockExperienceData } from '../mock';

const Experience = () => {
  const [experienceData, setExperienceData] = useState(mockExperienceData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const data = await getExperience();
        if (data && data.length > 0) {
          setExperienceData(data);
        }
      } catch (error) {
        console.error('Error loading experience:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchExperience();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  if (loading) {
    return (
      <section id="experience" className="py-24 px-6 bg-secondary">
        <div className="max-w-5xl mx-auto text-center text-tertiary animate-pulse">Loading...</div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-24 px-6 bg-secondary transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-[rgb(var(--primary))] mx-auto rounded-full"></div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <div
              key={experience.id}
              className="bg-surface border border-color rounded-xl p-8 hover:border-[rgb(var(--primary))]/50 transition-all duration-300 hover-lift gradient-overlay animate-fade-in-up"
              style={{ animationDelay: `${(index + 2) * 0.15}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-primary">
                    {experience.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[rgb(var(--primary))] font-medium">
                    <Briefcase size={18} />
                    <span>{experience.company}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-tertiary text-sm">
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

              <p className="text-secondary leading-relaxed mb-4">
                {experience.description}
              </p>

              {experience.achievements && experience.achievements.length > 0 && (
                <div className="space-y-2">
                  <p className="text-primary font-medium text-sm">Key Achievements:</p>
                  <ul className="space-y-1">
                    {experience.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="text-secondary text-sm flex items-start gap-2 transition-colors duration-300 hover:text-[rgb(var(--primary))]"
                      >
                        <span className="text-[rgb(var(--primary))] mt-1">•</span>
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
