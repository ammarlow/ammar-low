
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="h-screen flex flex-col justify-center" id="home">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <p className="text-primary mb-4 font-mono">Hi, my name is</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              Ammar Low.
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6">
              I build things for the web/mobile.
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl">
              I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
              Currently, focusing on building accessible, human-centered products.
            </p>
            <button 
              onClick={scrollToNext}
              className="px-6 py-3 border-2 border-primary text-primary rounded hover:bg-primary/10 transition-colors font-medium"
            >
              Send me a message👋
            </button>
          </div>
          
          <div className="mt-10 md:mt-0 md:ml-8 w-full max-w-sm">
            <div className="code-animation relative">
              <div className="code-window bg-gray-900 border border-gray-200 rounded-lg shadow-xl overflow-hidden">
                <div className="code-header bg-gray-700 border-b border-gray-200 flex items-center p-2">
                  <div className="code-dots flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto text-xs font-medium text-white">code.js</div>
                </div>
                <div className="code-body p-4 font-mono text-sm">
                  <div className="flex">
                    <span className="text-gray-400 mr-4">1</span>
                    <span className="text-purple-400">const</span>
                    <span className="text-blue-400 mx-1">developer</span>
                    <span>=</span>
                    <span className="text-blue-400 mx-1">{'{'}</span>
                  </div>
                  <div className="flex animate-typing overflow-hidden whitespace-nowrap opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                    <span className="text-gray-400 mr-4">2</span>
                    <span className="text-green-400 ml-4">name:</span>
                    <span className="text-orange-400 mx-1">'Ammar Low'</span><span>,</span>
                  </div>
                  <div className="flex animate-typing overflow-hidden whitespace-nowrap opacity-0" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
                    <span className="text-gray-400 mr-4">3</span>
                    <span className="text-green-400 ml-4">skills:</span>
                    <span className="text-blue-400 mx-1">[</span>
                    <span className="text-orange-400">'Vue.js'</span><span>,</span>
                  </div>
                  <div className="flex animate-typing overflow-hidden whitespace-nowrap opacity-0" style={{ animationDelay: '3s', animationFillMode: 'forwards' }}>
                    <span className="text-gray-400 mr-4">4</span>
                    <span className="text-orange-400 ml-12">'TypeScript'</span><span>,</span>
                  </div>
                  <div className="flex animate-typing overflow-hidden whitespace-nowrap opacity-0" style={{ animationDelay: '4s', animationFillMode: 'forwards' }}>
                    <span className="text-gray-400 mr-4">5</span>
                    <span className="text-orange-400 ml-12">'Node.js'</span>
                    <span className="text-blue-400 mx-1">]</span><span>,</span>
                  </div>
                  <div className="flex animate-typing overflow-hidden whitespace-nowrap opacity-0" style={{ animationDelay: '5s', animationFillMode: 'forwards' }}>
                    <span className="text-gray-400 mr-4">6</span>
                    <span className="text-green-400 ml-4">status:</span>
                    <span className="text-orange-400 mx-1">'Ready to work'</span>
                  </div>
                  <div className="flex animate-typing overflow-hidden whitespace-nowrap opacity-0" style={{ animationDelay: '6s', animationFillMode: 'forwards' }}>
                    <span className="text-gray-400 mr-4">7</span>
                    <span className="text-blue-400">{'}'}</span><span>;</span>
                  </div>
                  <div className="flex mt-2 animate-typing overflow-hidden whitespace-nowrap opacity-0" style={{ animationDelay: '7s', animationFillMode: 'forwards' }}>
                    <span className="text-gray-400 mr-4">8</span>
                    <span className="text-purple-400">console</span><span className="text-gray-200">.</span><span className="text-yellow-600">log</span><span className="text-gray-200">(</span><span className="text-blue-600">developer</span><span className="text-gray-200">);</span>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-50 animate-pulse transition duration-1000"></div>
            </div>
          </div>
        </div>
      </div>
      <button 
        onClick={scrollToNext} 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={28} />
      </button>
    </section>
  );
};

export default Hero;
