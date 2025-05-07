
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
    <div className="min-h-screen bg-midnight text-white">
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
