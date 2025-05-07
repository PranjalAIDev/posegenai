
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { FileText, Rocket } from "lucide-react";

const HeroSection: React.FC = () => {
  const [animationClass, setAnimationClass] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Add animation class after component mounts
    setAnimationClass("animate-fade-in");
    setIsVisible(true);
    
    // Create intersection observer for fade-in elements
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all elements with section-appear class
    document.querySelectorAll('.section-appear').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-7/12 md:pr-12">
            <div className={`mb-6 ${animationClass}`} style={{ animationDelay: '0.3s' }}>
              <div className="inline-block py-1 px-3 rounded bg-purple-light/10 border border-purple-light/20 text-purple-light font-medium text-sm mb-2">
                Advanced AI Research
              </div>
            </div>
            
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 font-poppins leading-tight ${animationClass}`} style={{ animationDelay: '0.5s' }}>
              <span className="typing-animation inline-block">
                Reimagine Person Image Generation.
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-gray-300 mb-4 font-light ${animationClass}`} style={{ animationDelay: '0.7s' }}>
              Precise control over pose and appearance.
              <br />
              Fewer distortions. Higher fidelity.
            </p>
            
            <p className={`text-base md:text-lg text-gray-400 mb-8 ${animationClass}`} style={{ animationDelay: '0.9s' }}>
              <span className="text-teal">Powered by Flow Fields in Attention.</span>
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 ${animationClass}`} style={{ animationDelay: '1.1s' }}>
              <Button className="bg-teal hover:bg-teal-light text-white font-medium py-6 px-8 rounded-md glow-button">
                <Rocket className="mr-2 h-5 w-5" />
                Try on VTON
              </Button>
              
              <Button variant="outline" className="border-teal/30 text-white hover:bg-teal/10 font-medium py-6 px-8 rounded-md">
                <FileText className="mr-2 h-5 w-5" />
                Read the Paper
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-5/12 mt-12 md:mt-0">
            <div className={`relative ${isVisible ? 'animate-float' : ''}`}>
              {/* Neural Network Visualization */}
              <div className="relative z-10 bg-gradient-to-br from-card to-muted rounded-xl p-1">
                <div className="bg-card rounded-lg p-4 border border-border/30">
                  <div className="aspect-square w-full relative overflow-hidden rounded-md">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <defs>
                          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#4ECDC4" />
                            <stop offset="100%" stopColor="#7E69AB" />
                          </linearGradient>
                        </defs>
                        
                        {/* Neural network visualization */}
                        <g className="nodes">
                          {Array(5).fill(0).map((_, i) => (
                            <circle key={`l1-${i}`} cx="40" cy={40 + i*30} r="4" fill="url(#neuralGradient)" />
                          ))}
                          
                          {Array(4).fill(0).map((_, i) => (
                            <circle key={`l2-${i}`} cx="100" cy={55 + i*30} r="4" fill="url(#neuralGradient)" />
                          ))}
                          
                          {Array(5).fill(0).map((_, i) => (
                            <circle key={`l3-${i}`} cx="160" cy={40 + i*30} r="4" fill="url(#neuralGradient)" />
                          ))}
                        </g>
                        
                        <g className="connections">
                          {/* Connect each node in layer 1 to each node in layer 2 */}
                          {Array(5).fill(0).map((_, i) => 
                            Array(4).fill(0).map((_, j) => (
                              <line 
                                key={`c1-${i}-${j}`} 
                                x1="40" 
                                y1={40 + i*30} 
                                x2="100" 
                                y2={55 + j*30} 
                                stroke="url(#neuralGradient)" 
                                strokeOpacity="0.3" 
                                strokeWidth="1" 
                              />
                            ))
                          )}
                          
                          {/* Connect each node in layer 2 to each node in layer 3 */}
                          {Array(4).fill(0).map((_, i) => 
                            Array(5).fill(0).map((_, j) => (
                              <line 
                                key={`c2-${i}-${j}`} 
                                x1="100" 
                                y1={55 + i*30} 
                                x2="160" 
                                y2={40 + j*30} 
                                stroke="url(#neuralGradient)" 
                                strokeOpacity="0.3" 
                                strokeWidth="1" 
                              />
                            ))
                          )}
                        </g>
                        
                        {/* Flow fields animation - simplified representation */}
                        <g className="flowFields">
                          {Array(8).fill(0).map((_, i) => (
                            <path 
                              key={`flow-${i}`}
                              d={`M${40 + i*20},30 C${70 + i*15},${90 + (i%3)*20} ${130 - i*5},${70 + (i%4)*25} ${160 - i*5},${170 - i*15}`}
                              fill="none"
                              stroke="url(#neuralGradient)"
                              strokeOpacity="0.2"
                              strokeWidth="2"
                              strokeDasharray="5,5"
                            >
                              <animate 
                                attributeName="stroke-dashoffset" 
                                from="0" 
                                to="20" 
                                dur={`${3 + i*0.5}s`} 
                                repeatCount="indefinite" 
                              />
                            </path>
                          ))}
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-teal to-purple rounded-br-3xl opacity-30 blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
