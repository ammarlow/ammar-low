
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

type SocialLinksProps = {
  className?: string;
};

const SocialLinks = ({ className = '' }: SocialLinksProps) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a
        href="mailto:ammarlow.work@gmail.com"
        className="text-muted-foreground hover:text-primary transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
      >
        <Mail size={20} />
      </a>
      <a
        href="https://linkedin.com/in/ammar-low"
        className="text-muted-foreground hover:text-primary transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <Linkedin size={20} />
      </a>
      <a
        href="https://github.com/ammarlow"
        className="text-muted-foreground hover:text-primary transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <Github size={20} />
      </a>
    </div>
  );
};

export default SocialLinks;
