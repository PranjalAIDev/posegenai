
import React, { useEffect, useState } from 'react';

const MethodSection: React.FC = () => {
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
    
    const section = document.getElementById('method-section');
    if (section) observer.observe(section);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="method" 
      className="py-24 bg-gradient-to-b from-midnight to-card relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4ECDC4" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#7E69AB" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grad1)" />
          
          {Array(20).fill(0).map((_, i) => (
            <line 
              key={`grid-h-${i}`} 
              x1="0" 
              y1={i * 5} 
              x2="100" 
              y2={i * 5} 
              stroke="#4ECDC4" 
              strokeOpacity="0.1" 
              strokeWidth="0.1" 
            />
          ))}
          
          {Array(20).fill(0).map((_, i) => (
            <line 
              key={`grid-v-${i}`} 
              x1={i * 5} 
              y1="0" 
              x2={i * 5} 
              y2="100" 
              stroke="#7E69AB" 
              strokeOpacity="0.1" 
              strokeWidth="0.1" 
            />
          ))}
        </svg>
      </div>
      
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">How Leffa Works</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Leveraging the power of Flow Fields in Attention to achieve unprecedented control and quality in person image generation.
          </p>
        </div>
        
        <div className={`max-w-6xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          {/* Method diagram */}
          <div className="rounded-xl overflow-hidden border border-border/40 bg-card/70 p-8 shadow-lg">
            <div className="w-full relative">
              {/* SVG diagram of the Leffa training pipeline */}
              <svg viewBox="0 0 1000 400" className="w-full h-auto">
                <defs>
                  <linearGradient id="pipelineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4ECDC4" />
                    <stop offset="100%" stopColor="#7E69AB" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="glow" />
                    <feBlend in="SourceGraphic" in2="glow" mode="normal" />
                  </filter>
                </defs>
                
                {/* Input Block */}
                <g transform="translate(50, 100)">
                  <rect width="180" height="120" rx="10" fill="#222632" stroke="url(#pipelineGrad)" strokeWidth="2" />
                  <text x="90" y="50" textAnchor="middle" fill="white" fontWeight="bold">Input Images</text>
                  <text x="90" y="80" textAnchor="middle" fill="#aaa" fontSize="14">Pose + Reference</text>
                  <circle cx="180" cy="60" r="5" fill="url(#pipelineGrad)" filter="url(#glow)" />
                </g>
                
                {/* Flow */}
                <path d="M230,160 C270,160 270,160 310,160" stroke="url(#pipelineGrad)" strokeWidth="2" strokeDasharray="5,5" fill="none">
                  <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" />
                </path>
                
                {/* Flow Field Module */}
                <g transform="translate(310, 100)">
                  <rect width="190" height="120" rx="10" fill="#222632" stroke="url(#pipelineGrad)" strokeWidth="2" />
                  <text x="95" y="50" textAnchor="middle" fill="white" fontWeight="bold">Flow Field Module</text>
                  <text x="95" y="80" textAnchor="middle" fill="#aaa" fontSize="14">Attention Mapping</text>
                  <circle cx="190" cy="60" r="5" fill="url(#pipelineGrad)" filter="url(#glow)" />
                </g>
                
                {/* Flow */}
                <path d="M500,160 C540,160 540,160 580,160" stroke="url(#pipelineGrad)" strokeWidth="2" strokeDasharray="5,5" fill="none">
                  <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" />
                </path>
                
                {/* Diffusion Module */}
                <g transform="translate(580, 100)">
                  <rect width="190" height="120" rx="10" fill="#222632" stroke="url(#pipelineGrad)" strokeWidth="2" />
                  <text x="95" y="50" textAnchor="middle" fill="white" fontWeight="bold">Diffusion Backbone</text>
                  <text x="95" y="80" textAnchor="middle" fill="#aaa" fontSize="14">Image Generation</text>
                  <circle cx="190" cy="60" r="5" fill="url(#pipelineGrad)" filter="url(#glow)" />
                </g>
                
                {/* Flow */}
                <path d="M770,160 C810,160 810,160 850,160" stroke="url(#pipelineGrad)" strokeWidth="2" strokeDasharray="5,5" fill="none">
                  <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" />
                </path>
                
                {/* Output */}
                <g transform="translate(850, 100)">
                  <rect width="100" height="120" rx="10" fill="#222632" stroke="url(#pipelineGrad)" strokeWidth="2" />
                  <text x="50" y="50" textAnchor="middle" fill="white" fontWeight="bold">Output</text>
                  <text x="50" y="80" textAnchor="middle" fill="#aaa" fontSize="14">Generated Image</text>
                </g>
                
                {/* Flow down from Flow Field */}
                <path d="M405,220 L405,280" stroke="url(#pipelineGrad)" strokeWidth="2" strokeDasharray="5,5" fill="none">
                  <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" />
                </path>
                
                {/* Disentanglement Box */}
                <g transform="translate(310, 280)">
                  <rect width="190" height="80" rx="10" fill="#222632" stroke="url(#pipelineGrad)" strokeWidth="2" />
                  <text x="95" y="30" textAnchor="middle" fill="white" fontWeight="bold">Disentanglement</text>
                  <text x="95" y="55" textAnchor="middle" fill="#aaa" fontSize="14">Appearance + Pose</text>
                </g>
              </svg>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <h3 className="text-teal font-semibold text-lg mb-2">Attention-based Flow Field</h3>
                <p className="text-sm text-gray-300">Learns directional attention fields to guide spatial transformation of features between source and target.</p>
              </div>
              
              <div className="p-4">
                <h3 className="text-purple-light font-semibold text-lg mb-2">Diffusion Backbone</h3>
                <p className="text-sm text-gray-300">Leverages denoising diffusion process to generate high-quality images with fine details.</p>
              </div>
              
              <div className="p-4">
                <h3 className="gradient-text font-semibold text-lg mb-2">Appearance + Pose Disentanglement</h3>
                <p className="text-sm text-gray-300">Separately processes appearance and pose information for precise control over generated outputs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
