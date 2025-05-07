
import React, { useEffect, useState } from 'react';
import { BookOpen, Image, Layers, Rocket } from "lucide-react";

const FeaturesSection: React.FC = () => {
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
    
    const section = document.getElementById('features-section');
    if (section) observer.observe(section);
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const features = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Diffusion-Powered",
      description: "Leverages state-of-the-art diffusion models to create realistic images with amazing detail and texture."
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Fine-Grained Detail Preservation",
      description: "Maintains intricate visual elements from the reference image, preserving identity and appearance characteristics."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Model-Agnostic Loss",
      description: "Our innovative loss function can be applied to various diffusion-based image generation architectures."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Realistic Virtual Try-On",
      description: "Seamlessly transfer garments between subjects while maintaining both appearance and body shape integrity."
    }
  ];

  return (
    <section id="features-section" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">Key Features</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            What makes Leffa stand out from other person image generation models.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`feature-card rounded-xl p-6 bg-card/50 border border-border/30 hover:border-teal/30 transition-all duration-300 card-hover ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
