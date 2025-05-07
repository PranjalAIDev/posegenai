
import React, { useState, useEffect } from 'react';

const ShowcaseSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const slides = [
    {
      title: "Virtual Try-On Results",
      description: "Leffa achieves unprecedented accuracy in virtual try-on tasks, maintaining garment details while adapting to different body shapes.",
      beforeImage: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
      afterImage: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      title: "Pose Transfer Examples",
      description: "Our model excels at transferring poses between subjects while preserving identity and appearance details.",
      beforeImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      afterImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    },
    {
      title: "Comparison with State-of-the-Art",
      description: "Leffa outperforms other models like OOTDiffusion and CaVTYON in preserving fine details and realistic rendering.",
      beforeImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      afterImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    }
  ];
  
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
    
    const section = document.getElementById('showcase-section');
    if (section) observer.observe(section);
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };
  
  useEffect(() => {
    // Auto-advance slides
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section 
      id="showcase-section" 
      className={`py-24 relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      style={{ animationDelay: '0.2s' }}
    >
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">Stunning Results</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            See how Leffa's advanced flow field attention mechanism produces superior image generation quality.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Slides container */}
          <div className="relative overflow-hidden rounded-xl">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`transition-opacity duration-700 absolute inset-0 ${activeSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  {/* Before Image */}
                  <div className="flex flex-col">
                    <div className="overflow-hidden rounded-lg border border-border/40 bg-card/50">
                      <div className="aspect-square relative">
                        <img 
                          src={slide.beforeImage} 
                          alt="Before" 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          Before
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* After Image */}
                  <div className="flex flex-col">
                    <div className="overflow-hidden rounded-lg border border-teal/40 bg-card/50 shadow-lg shadow-teal/10">
                      <div className="aspect-square relative">
                        <img 
                          src={slide.afterImage} 
                          alt="After" 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-teal/80 text-white text-xs px-2 py-1 rounded">
                          After
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Slide content */}
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold mb-2 text-white">{slide.title}</h3>
                  <p className="text-gray-300">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Slide controls */}
          <div className="flex justify-center mt-8 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`slide-dot ${activeSlide === index ? 'active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
