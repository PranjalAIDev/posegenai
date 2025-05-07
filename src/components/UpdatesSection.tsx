
import React, { useEffect, useState } from 'react';
import { Calendar, Check, TrendingUp } from "lucide-react";

const UpdatesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('updates-section');
    if (section) observer.observe(section);
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const updates = [
    {
      date: "January 25, 2025",
      title: "Paper Accepted at CVPR 2025",
      description: "Our research paper on Flow Fields in Attention has been accepted for presentation at CVPR 2025.",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      date: "January 15, 2025",
      title: "Benchmark Results Released",
      description: "Published comparison results showing 37% improvement over state-of-the-art methods on standard datasets.",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      date: "January 5, 2025",
      title: "Public Demo Launched",
      description: "The Leffa demo is now publicly accessible with support for custom image uploads.",
      icon: <Check className="w-5 h-5" />
    },
    {
      date: "December 15, 2024",
      title: "Code Repository Public",
      description: "Our GitHub repository is now public with full implementation and pretrained models.",
      icon: <Check className="w-5 h-5" />
    }
  ];

  return (
    <section id="updates-section" className="py-24 relative bg-gradient-to-b from-card to-midnight">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">Latest Updates</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Follow our progress as we continue to innovate and improve the Leffa framework.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {updates.map((update, index) => {
            const isLast = index === updates.length - 1;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`relative mb-12 ${isLast ? 'timeline-last' : ''} ${isEven ? 'timeline-left' : 'timeline-right'} ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${0.2 + index * 0.2}s` }}
              >
                <div className="flex items-start">
                  {/* Timeline dot */}
                  <div className={`timeline-dot flex-shrink-0 ${isEven ? 'order-1' : 'order-3'} mx-4`}></div>
                  
                  {/* Content */}
                  <div className={`flex-grow ${isEven ? 'order-2 text-right' : 'order-2 text-left'}`}>
                    <div className={`bg-card/70 rounded-xl p-6 border border-border/30 hover:border-teal/30 transition-all duration-300 card-hover ${isEven ? 'mr-4' : 'ml-4'}`}>
                      <div className="flex items-center mb-3 gap-2 text-teal">
                        {isEven ? (
                          <>
                            <span className="text-sm font-medium">{update.date}</span>
                            <span className="ml-auto">{update.icon}</span>
                          </>
                        ) : (
                          <>
                            <span>{update.icon}</span>
                            <span className="text-sm font-medium">{update.date}</span>
                          </>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{update.title}</h3>
                      <p className="text-gray-300 text-sm">{update.description}</p>
                    </div>
                  </div>
                  
                  {/* Spacer to maintain the timeline in the middle */}
                  <div className={`flex-grow-0 ${isEven ? 'order-3' : 'order-1'}`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;
