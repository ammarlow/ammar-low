
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import SocialLinks from './SocialLinks';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <h1 className="text-primary text-xl font-bold">Ammar Low</h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          <SocialLinks className="ml-4" />
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-md z-40">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            <button onClick={() => scrollToSection('about')} className="nav-link text-xl">About</button>
            <button onClick={() => scrollToSection('experience')} className="nav-link text-xl">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link text-xl">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link text-xl">Contact</button>
            <SocialLinks className="mt-6" />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
