'use client';

import React, { useState } from 'react';
import { Button, Card, Section } from '@/components/ui';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Implement form submission logic
  };

  return (
    <Section background="gradient">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-section-title text-gray-800 mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-body-large text-gray-600">
            Book your free discovery call with Jack Warman and discover how AI can revolutionize your operations, 
            increase efficiency, and drive unprecedented growth for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="h-fit">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              🚀 Book Your Free Discovery Call
            </h3>
            <p className="text-gray-600 mb-8">
              In this 30-minute consultation, we&apos;ll discuss your business challenges, 
              explore AI opportunities, and create a preliminary roadmap for success.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="strategy">AI Strategy & Consulting</option>
                    <option value="development">Custom AI Development</option>
                    <option value="automation">Process Automation</option>
                    <option value="analytics">Data Analytics</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-50k">$15,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                    <option value="discussing">Open to Discussing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Tell me about your biggest business challenge
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Describe your current challenges and how you think AI might help..."
                ></textarea>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Schedule My Free Discovery Call 🚀
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to receive communications from Jack Warman AI Consulting. 
                Your information is secure and will never be shared.
              </p>
            </form>
          </Card>

          {/* Contact Information & Benefits */}
          <div className="space-y-8">
            {/* What to Expect */}
            <Card>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                What to Expect in Your Discovery Call
              </h3>
              <ul className="space-y-3">
                {[
                  'Business assessment and AI readiness evaluation',
                  'Custom AI opportunities identification',
                  'Preliminary ROI and feasibility analysis',
                  'Clear next steps and implementation roadmap',
                  'No sales pressure - just valuable insights'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Direct Contact */}
            <Card>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Other Ways to Connect
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                    📧
                  </span>
                  <div>
                    <div className="font-medium text-gray-800">Email</div>
                    <div className="text-gray-600">jack@jackwarman.ai</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                    📱
                  </span>
                  <div>
                    <div className="font-medium text-gray-800">Phone</div>
                    <div className="text-gray-600">(555) 123-AI-EXPERT</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                    💼
                  </span>
                  <div>
                    <div className="font-medium text-gray-800">LinkedIn</div>
                    <div className="text-gray-600">linkedin.com/in/jack-warman-ai</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Guarantee */}
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                🛡️ My Commitment to You
              </h3>
              <p className="text-gray-600">
                I guarantee that our discovery call will provide you with valuable insights 
                and a clear understanding of how AI can benefit your business, regardless of 
                whether we work together or not.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};