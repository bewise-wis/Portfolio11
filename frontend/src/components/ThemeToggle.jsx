import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full bg-surface border border-border hover:border-primary transition-all duration-300 flex items-center justify-center group overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 transform ${
        theme === 'dark' ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
      }`}>
        <Moon size={20} className="text-primary" />
      </div>
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 transform ${
        theme === 'light' ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
      }`}>
        <Sun size={20} className="text-primary" />
      </div>
    </button>
  );
};

export default ThemeToggle;
