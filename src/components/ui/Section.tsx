import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'gradient';
  padding?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  background = 'white',
  padding = true
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    light: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-blue-50 to-teal-50'
  };
  
  const paddingClasses = padding ? 'section-padding' : '';
  
  return (
    <section className={`${backgroundClasses[background]} ${paddingClasses} ${className}`}>
      <div className="container">
        {children}
      </div>
    </section>
  );
};