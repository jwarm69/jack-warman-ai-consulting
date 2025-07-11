import React from 'react';
import { Card, Section } from '@/components/ui';

export const ValuePropositionSection: React.FC = () => {
  const expertiseAreas = [
    {
      icon: '🤖',
      title: 'Machine Learning & AI',
      description: 'Custom ML models, predictive analytics, and intelligent automation systems that learn and adapt to your business needs.',
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI']
    },
    {
      icon: '💬',
      title: 'Conversational AI',
      description: 'Advanced chatbots, virtual assistants, and customer service automation powered by latest language models.',
      technologies: ['GPT-4', 'Claude', 'LangChain', 'Rasa']
    },
    {
      icon: '👁️',
      title: 'Computer Vision',
      description: 'Image recognition, document processing, quality control, and visual inspection systems for your operations.',
      technologies: ['OpenCV', 'YOLO', 'Detectron2', 'TesseractOCR']
    },
    {
      icon: '📊',
      title: 'Data Science & Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics, forecasting, and business intelligence.',
      technologies: ['Python', 'R', 'Tableau', 'PowerBI']
    },
    {
      icon: '🔄',
      title: 'Process Automation',
      description: 'Streamline workflows, eliminate repetitive tasks, and optimize operations with intelligent automation.',
      technologies: ['RPA', 'Zapier', 'Power Automate', 'Custom APIs']
    },
    {
      icon: '🔮',
      title: 'Predictive Analytics',
      description: 'Forecast trends, predict customer behavior, and make data-driven decisions with advanced modeling.',
      technologies: ['Time Series', 'Neural Networks', 'Ensemble Methods']
    }
  ];

  return (
    <Section background="white">
      <div className="text-center mb-16">
        <h2 className="text-section-title gradient-text mb-6">
          AI Expertise Across the Universe
        </h2>
        <p className="text-body-large text-gray-600 max-w-3xl mx-auto">
          With deep knowledge spanning the entire AI landscape, I bring cutting-edge solutions 
          tailored specifically for small and medium businesses. From automation to analytics, 
          I&apos;ve got the expertise to transform your operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertiseAreas.map((area, index) => (
          <Card key={index} className="h-full">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">{area.icon}</span>
              </div>
              
              <h3 className="text-card-title text-gray-800 mb-4">
                {area.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {area.description}
              </p>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {area.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Harness the Power of AI?
          </h3>
          <p className="text-blue-100 mb-6 text-lg">
            Let&apos;s discuss how my universal AI expertise can transform your business
          </p>
          <button className="btn-secondary">
            Schedule Your Free Consultation
          </button>
        </div>
      </div>
    </Section>
  );
};