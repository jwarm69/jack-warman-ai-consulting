import React from 'react';
import { Button, Section } from '@/components/ui';

export const HeroSection: React.FC = () => {
  return (
    <Section background="gradient" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-hero gradient-text mb-6">
          Jack Warman
        </h1>
        
        {/* Subheading */}
        <h2 className="text-section-title text-gray-700 mb-8">
          AI Expert Across the Universe
        </h2>
        
        {/* Value Proposition */}
        <p className="text-body-large text-gray-600 mb-12 max-w-3xl mx-auto">
          Transform your small business with cutting-edge AI solutions. 
          I bring decades of expertise across the entire AI landscape to help local SMBs 
          unlock unprecedented growth, efficiency, and competitive advantage.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="primary" 
            size="lg"
            className="w-full sm:w-auto"
          >
            🚀 Book Your Free Discovery Call
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto"
          >
            View AI Services →
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Universal AI Expertise</h3>
            <p className="text-gray-600 text-sm">From machine learning to automation, covering the entire AI spectrum</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🏢</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">SMB Focused</h3>
            <p className="text-gray-600 text-sm">Tailored solutions designed specifically for small and medium businesses</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Proven Results</h3>
            <p className="text-gray-600 text-sm">Delivering measurable ROI and competitive advantages</p>
          </div>
        </div>
      </div>
    </Section>
  );
};