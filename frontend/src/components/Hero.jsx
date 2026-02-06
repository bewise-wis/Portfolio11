import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { getProfile } from '../firebase/services';
import { profileData as mockProfileData } from '../mock';

const Hero = () => {
  const [profileData, setProfileData] = useState(mockProfileData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        if (data) {
          setProfileData(data);
        }
      } catch (error) {
        console.error('Error loading profile:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-[rgb(var(--bg-primary))] via-[rgb(var(--bg-secondary))] to-[rgb(var(--bg-tertiary))]">
        <div className="text-tertiary text-lg animate-pulse">Loading...</div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-[rgb(var(--bg-primary))] via-[rgb(var(--bg-secondary))] to-[rgb(var(--bg-tertiary))] transition-colors duration-500">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile Image */}
          <div className="relative group animate-scale-in">
            <div className="absolute inset-0 bg-[rgb(var(--primary))]/20 rounded-full blur-2xl group-hover:bg-[rgb(var(--primary))]/40 transition-all duration-500 animate-pulse"></div>
            <img
              src={profileData.profileImage}
              alt={profileData.name}
              className="relative w-32 h-32 rounded-full object-cover border-4 border-[rgb(var(--border-color))] ring-4 ring-[rgb(var(--surface))] shadow-2xl transform group-hover:scale-110 transition-all duration-500 animate-float"
            />
          </div>

          {/* Name and Title */}
          <div className="space-y-3 animate-fade-in-up delay-200">
            <h1 className="text-5xl md:text-6xl font-bold text-primary tracking-tight">
              {profileData.name}
            </h1>
            <p className="text-xl md:text-2xl text-[rgb(var(--primary))] font-medium animate-fade-in-up delay-300">
              {profileData.title}
            </p>
          </div>

          {/* Bio */}
          <p className="text-secondary text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-in-up delay-400">
            {profileData.bio}
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 text-tertiary animate-fade-in-up delay-500">
            <MapPin size={18} className="animate-pulse" />
            <span>{profileData.location}</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up delay-600">
            <Button
              onClick={scrollToContact}
              className="bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary-hover))] text-white px-8 py-6 text-base font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open(profileData.social.github, '_blank')}
              className="border-[rgb(var(--border-color))] bg-surface hover:bg-tertiary text-primary px-8 py-6 text-base font-medium transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-6 animate-fade-in-up delay-700">
            {[
              { icon: Github, href: profileData.social.github, label: 'GitHub' },
              { icon: Linkedin, href: profileData.social.linkedin, label: 'LinkedIn' },
              { icon: Twitter, href: profileData.social.twitter, label: 'Twitter' },
              { icon: Mail, href: `mailto:${profileData.email}`, label: 'Email' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="text-tertiary hover:text-[rgb(var(--primary))] transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
