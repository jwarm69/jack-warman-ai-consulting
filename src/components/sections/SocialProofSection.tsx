import React from 'react';
import { Card, Section } from '@/components/ui';

export const SocialProofSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'CEO, LocalTech Solutions',
      company: 'Tech Startup',
      quote: 'Jack transformed our customer service with an AI chatbot that handles 80% of inquiries automatically. Our response time went from hours to seconds, and customer satisfaction increased by 40%.',
      results: '+40% Customer Satisfaction',
      avatar: '👩‍💼'
    },
    {
      name: 'Mike Rodriguez',
      title: 'Operations Manager',
      company: 'Manufacturing SMB',
      quote: 'The predictive maintenance system Jack built saves us $50K annually in equipment downtime. His AI expertise across the board is truly impressive.',
      results: '$50K Annual Savings',
      avatar: '👨‍🔧'
    },
    {
      name: 'Lisa Thompson',
      title: 'Marketing Director',
      company: 'E-commerce Business',
      quote: 'Jack\'s AI-powered analytics platform increased our conversion rates by 35%. He made complex AI technology accessible and practical for our small business.',
      results: '+35% Conversion Rate',
      avatar: '👩‍💻'
    }
  ];

  const stats = [
    { number: '50+', label: 'AI Projects Delivered', icon: '🚀' },
    { number: '95%', label: 'Client Satisfaction Rate', icon: '⭐' },
    { number: '$2M+', label: 'Value Generated for SMBs', icon: '💰' },
    { number: '24/7', label: 'Ongoing Support', icon: '🔧' }
  ];

  const certifications = [
    'Google Cloud AI/ML Certified',
    'AWS Machine Learning Specialist',
    'Microsoft Azure AI Engineer',
    'TensorFlow Developer Certified',
    'OpenAI API Specialist'
  ];

  return (
    <Section background="white">
      {/* Stats Section */}
      <div className="text-center mb-16">
        <h2 className="text-section-title gradient-text mb-12">
          Proven Results Across the AI Universe
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">{stat.icon}</span>
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">
          What SMB Leaders Say About Working with Jack
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="text-center h-full">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{testimonial.avatar}</span>
                </div>
                <div className="text-lg font-semibold bg-green-100 text-green-800 px-4 py-2 rounded-full inline-block">
                  {testimonial.results}
                </div>
              </div>
              
              <blockquote className="text-gray-600 italic mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-800">{testimonial.name}</div>
                <div className="text-gray-600 text-sm">{testimonial.title}</div>
                <div className="text-gray-500 text-sm">{testimonial.company}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Certifications & Credentials */}
      <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Certified AI Expert with Universal Credentials
          </h3>
          <p className="text-gray-600">
            Backed by industry-leading certifications and continuous learning across the AI landscape
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">🏆</span>
              </div>
              <div className="text-sm font-medium text-gray-800">{cert}</div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Ready to experience the difference that true AI expertise makes?
          </p>
          <button className="btn-primary">
            Book Your Free Discovery Call Today
          </button>
        </div>
      </div>
    </Section>
  );
};