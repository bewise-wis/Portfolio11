import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { getProfile } from '../firebase/services';
import { aboutData as mockAboutData } from '../mock';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Bio */}
          <div className="bg-[#1a1a1a] border border-[#27272a] rounded-xl p-8 md:p-10">
            <p className="text-[#e5e5e5] text-lg leading-relaxed">
              {aboutData.fullBio}
            </p>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 gap-4">
            {aboutData.highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] border border-[#27272a] rounded-lg p-6 flex items-start gap-4 hover:border-blue-500/50 transition-all duration-200"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                  <Check size={16} className="text-blue-400" />
                </div>
                <p className="text-[#e5e5e5] text-base">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
