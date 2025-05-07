
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ShowcaseSection from '@/components/ShowcaseSection';
import MethodSection from '@/components/MethodSection';
import FeaturesSection from '@/components/FeaturesSection';
import UpdatesSection from '@/components/UpdatesSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Add intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with section-appear class
    document.querySelectorAll('.section-appear').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="title-banner bg-gradient-to-r from-teal/10 to-purple/10 py-2 border-b border-teal/20">
        <div className="container mx-auto px-4">
          <h1 className="text-lg md:text-xl font-poppins font-semibold text-center">
            <span className="text-teal">PoseGenAI:</span> Visual Try On
          </h1>
        </div>
      </div>
      <Navbar />
      <HeroSection />
      <ShowcaseSection />
      <MethodSection />
      <FeaturesSection />
      <UpdatesSection />
      <Footer />
    </div>
  );
};

export default Index;
