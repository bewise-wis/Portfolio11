import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { getProfile } from '../firebase/services';
import { profileData as mockProfileData } from '../mock';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-all duration-300"></div>
            <img
              src={profileData.profileImage}
              alt={profileData.name}
              className="relative w-32 h-32 rounded-full object-cover border-2 border-[#27272a] ring-4 ring-[#1a1a1a] shadow-2xl"
            />
          </div>

          {/* Name and Title */}
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              {profileData.name}
            </h1>
            <p className="text-xl md:text-2xl text-blue-400 font-medium">
              {profileData.title}
            </p>
          </div>

          {/* Bio */}
          <p className="text-[#a1a1aa] text-lg md:text-xl max-w-2xl leading-relaxed">
            {profileData.bio}
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 text-[#71717a]">
            <MapPin size={18} />
            <span>{profileData.location}</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base font-medium transition-all duration-200"
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open(profileData.social.github, '_blank')}
              className="border-[#27272a] bg-[#1a1a1a] hover:bg-[#27272a] text-white px-8 py-6 text-base font-medium transition-all duration-200"
            >
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-6">
            <a
              href={profileData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#71717a] hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={profileData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#71717a] hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={profileData.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#71717a] hover:text-white transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="text-[#71717a] hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
