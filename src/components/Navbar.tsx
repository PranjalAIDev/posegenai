
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-md border-b border-border/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-r from-teal to-purple rounded-md rotate-6"></div>
                <div className="absolute inset-0 bg-midnight rounded-md flex items-center justify-center">
                  <span className="text-teal font-bold text-xl">P</span>
                </div>
              </div>
              <span className="text-xl font-bold ml-1 font-poppins">PoseGenAI</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-6">
              {["Home", "Method", "Results", "Demo", "Docs", "GitHub", "Contact"].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-300 hover:text-teal transition-colors duration-200 font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-teal to-purple-light text-white font-medium rounded-md px-5 py-2 glow-button">
              <Rocket className="mr-1 h-4 w-4" />
              Launch Demo
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 py-3">
            <ul className="flex flex-col space-y-3">
              {["Home", "Method", "Results", "Demo", "Docs", "GitHub", "Contact"].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-300 hover:text-teal transition-colors duration-200 block font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button 
                  className="w-full bg-gradient-to-r from-teal to-purple-light text-white font-medium rounded-md py-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Rocket className="mr-1 h-4 w-4" />
                  Launch Demo
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
