import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { getProfile } from '../firebase/services';
import { aboutData as mockAboutData } from '../mock';

const About = () => {
  const [aboutData, setAboutData] = useState(mockAboutData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const data = await getProfile();
        if (data && data.fullBio && data.highlights) {
          setAboutData({
            fullBio: data.fullBio,
            highlights: data.highlights
          });
        }
      } catch (error) {
        console.error('Error loading about data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAbout();
  }, []);

  if (loading) {
    return (
      <section id="about" className="py-24 px-6 bg-primary">
        <div className="max-w-5xl mx-auto text-center text-tertiary animate-pulse">Loading...</div>
      </section>
    );
  }

  return (
    <section id="about" className="py-24 px-6 bg-primary transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-[rgb(var(--primary))] mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Bio */}
          <div className="bg-surface border border-color rounded-xl p-8 md:p-10 hover-lift animate-fade-in-up delay-200">
            <p className="text-primary text-lg leading-relaxed">
              {aboutData.fullBio}
            </p>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 gap-4">
            {aboutData.highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-surface border border-color rounded-lg p-6 flex items-start gap-4 hover:border-[rgb(var(--primary))]/50 transition-all duration-300 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[rgb(var(--primary))]/20 flex items-center justify-center mt-1 animate-scale-in" style={{ animationDelay: `${(index + 4) * 0.1}s` }}>
                  <Check size={16} className="text-[rgb(var(--primary))]" />
                </div>
                <p className="text-primary text-base">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
