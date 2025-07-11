import React from 'react';
import { Card, Section, Button } from '@/components/ui';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'AI Strategy & Consulting',
      description: 'Comprehensive AI roadmap development, feasibility analysis, and strategic planning to align AI initiatives with your business goals.',
      features: [
        'AI Readiness Assessment',
        'Custom AI Strategy Development',
        'ROI Analysis & Business Case',
        'Implementation Roadmap'
      ],
      price: 'Starting at $2,500',
      duration: '2-4 weeks',
      icon: '🎯'
    },
    {
      title: 'Custom AI Solution Development',
      description: 'End-to-end development of bespoke AI solutions tailored to your specific business challenges and requirements.',
      features: [
        'Custom ML Model Development',
        'AI Application Building',
        'System Integration',
        'Performance Optimization'
      ],
      price: 'Starting at $10,000',
      duration: '6-12 weeks',
      icon: '⚙️'
    },
    {
      title: 'AI Automation & Integration',
      description: 'Streamline your operations with intelligent automation systems that integrate seamlessly with your existing workflows.',
      features: [
        'Process Automation Design',
        'Workflow Integration',
        'Legacy System Modernization',
        'Staff Training & Support'
      ],
      price: 'Starting at $5,000',
      duration: '4-8 weeks',
      icon: '🔄'
    },
    {
      title: 'Data Analytics & Intelligence',
      description: 'Transform your data into actionable insights with advanced analytics, reporting, and predictive modeling.',
      features: [
        'Data Pipeline Development',
        'Predictive Analytics',
        'Custom Dashboards',
        'Real-time Reporting'
      ],
      price: 'Starting at $3,500',
      duration: '3-6 weeks',
      icon: '📈'
    }
  ];

  return (
    <Section background="light">
      <div className="text-center mb-16">
        <h2 className="text-section-title text-gray-800 mb-6">
          Comprehensive AI Services for SMBs
        </h2>
        <p className="text-body-large text-gray-600 max-w-3xl mx-auto">
          From strategy to implementation, I provide end-to-end AI solutions designed 
          specifically for small and medium businesses. Every service is crafted to deliver 
          maximum ROI and competitive advantage.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {services.map((service, index) => (
          <Card key={index} className="h-full border-gradient">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0">
                {service.icon}
              </div>
              <div>
                <h3 className="text-card-title text-gray-800 mb-2">
                  {service.title}
                </h3>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span className="font-medium text-green-600">{service.price}</span>
                  <span>•</span>
                  <span>{service.duration}</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {service.description}
            </p>
            
            <div className="mb-8">
              <h4 className="font-semibold text-gray-800 mb-3">What&apos;s Included:</h4>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-auto">
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Process Overview */}
      <div className="bg-white rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
          My Proven 4-Step Process
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Discovery', description: 'Understanding your business, challenges, and goals' },
            { step: '02', title: 'Strategy', description: 'Developing a custom AI roadmap and implementation plan' },
            { step: '03', title: 'Development', description: 'Building and testing your AI solution with regular updates' },
            { step: '04', title: 'Deployment', description: 'Launching your solution with training and ongoing support' }
          ].map((phase, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">{phase.step}</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">{phase.title}</h4>
              <p className="text-gray-600 text-sm">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};