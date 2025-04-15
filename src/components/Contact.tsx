
import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto text-center">
      <h2 className="text-primary font-mono mb-2">What's Next?</h2>
      <h3 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h3>
      <p className="max-w-lg mx-auto mb-8 text-muted-foreground">
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <a
        href="mailto:ammarlow.work@gmail.com"
        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary/10 transition-colors font-medium"
      >
        <Mail size={18} />
        Say Hello
      </a>
      <div className="mt-20 text-sm text-muted-foreground">
        <p>Designed & Built by Ammar Low 🫶</p>
      </div>
    </section>
  );
};

export default Contact;
