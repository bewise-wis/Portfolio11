import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { profileData } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-color px-6 py-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-tertiary text-sm flex items-center gap-2">
            <span>© {currentYear} {profileData.name}. Made with</span>
            <Heart size={14} className="text-red-500 fill-current animate-pulse" />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={profileData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary hover:text-[rgb(var(--primary))] transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={profileData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary hover:text-[rgb(var(--primary))] transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={profileData.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary hover:text-[rgb(var(--primary))] transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-tertiary hover:text-[rgb(var(--primary))] transition-all duration-300 text-sm font-medium transform hover:scale-110"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
