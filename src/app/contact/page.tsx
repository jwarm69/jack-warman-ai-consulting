'use client';

import React, { useState } from 'react';
import { Section, Card, Button } from '@/components/ui';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    hearAbout: ''
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

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'jack@jackwarman.ai',
      description: 'For detailed inquiries and project discussions',
      action: 'mailto:jack@jackwarman.ai'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '(555) 123-AI-EXPERT',
      description: 'For urgent matters and direct consultation',
      action: 'tel:+15551234393'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/jack-warman-ai',
      description: 'Connect professionally and see my network',
      action: 'https://linkedin.com/in/jack-warman-ai'
    },
    {
      icon: '📅',
      title: 'Calendar',
      value: 'Book Direct Meeting',
      description: 'Schedule a time that works for both of us',
      action: '#calendar'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can we start working together?',
      answer: 'After our discovery call and proposal approval, most projects can begin within 1-2 weeks. Urgent projects may start sooner with priority scheduling.'
    },
    {
      question: 'What information should I prepare for our first call?',
      answer: 'Come prepared with your biggest business challenges, current processes you&apos;d like to improve, and any specific AI ideas you&apos;ve been considering. No technical knowledge required!'
    },
    {
      question: 'Do you work with businesses outside your local area?',
      answer: 'Absolutely! While I focus on SMBs, I work with clients nationwide through video conferencing and digital collaboration tools.'
    },
    {
      question: 'What if I&apos;m not sure if AI is right for my business?',
      answer: 'That&apos;s exactly what our free discovery call is for! I&apos;ll help you understand if and how AI can benefit your specific business situation.'
    },
    {
      question: 'How do you ensure the AI solutions will work with our existing systems?',
      answer: 'I always start with a thorough assessment of your current technology stack and design solutions that integrate seamlessly with your existing tools and workflows.'
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-hero gradient-text mb-6">
            Let&apos;s Transform Your Business Together
          </h1>
          <p className="text-body-large text-gray-600 mb-12">
            Ready to harness the power of AI for your business? I&apos;m here to help you every step 
            of the way. Reach out using any method below, and let&apos;s start your AI journey.
          </p>
        </div>
      </Section>

      {/* Contact Methods */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-section-title text-gray-800 mb-6">
            How to Reach Me
          </h2>
          <p className="text-body-large text-gray-600">
            Choose the method that works best for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center h-full hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{method.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{method.title}</h3>
              <div className="text-blue-600 font-semibold mb-3">{method.value}</div>
              <p className="text-gray-600 text-sm mb-4">{method.description}</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => method.action.startsWith('#') ? null : window.open(method.action, '_blank')}
              >
                {method.title === 'Calendar' ? 'Schedule Now' : `Contact via ${method.title}`}
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* Main Contact Form */}
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  🚀 Start Your AI Transformation
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out this detailed form to help me understand your needs better. 
                  The more information you provide, the more valuable our first conversation will be.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
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
                        placeholder="Your full name"
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
                        placeholder="Your company name"
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

                  {/* Project Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Primary Interest
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select your primary interest</option>
                        <option value="strategy">AI Strategy & Consulting</option>
                        <option value="development">Custom AI Development</option>
                        <option value="automation">Process Automation</option>
                        <option value="analytics">Data Analytics & BI</option>
                        <option value="assessment">AI Readiness Assessment</option>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Desired Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="3-months">Within 3 months</option>
                        <option value="6-months">Within 6 months</option>
                        <option value="planning">Still planning</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        How did you hear about me?
                      </label>
                      <select
                        name="hearAbout"
                        value={formData.hearAbout}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select source</option>
                        <option value="google">Google Search</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="referral">Referral</option>
                        <option value="social-media">Social Media</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Describe your biggest business challenge *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell me about your current challenges, goals, and how you think AI might help your business. The more detail you provide, the better I can prepare for our conversation."
                    ></textarea>
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Send My Information & Schedule Discovery Call 🚀
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to receive communications from Jack Warman AI Consulting. 
                    Your information is secure and will never be shared with third parties.
                  </p>
                </form>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* What to Expect */}
              <Card>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  What Happens Next?
                </h3>
                <ol className="space-y-3">
                  {[
                    'I&apos;ll review your information within 24 hours',
                    'You&apos;ll receive a calendar link to schedule our call',
                    'We&apos;ll have a 30-minute discovery conversation',
                    'I&apos;ll provide initial recommendations and next steps',
                    'If we&apos;re a good fit, I&apos;ll create a custom proposal'
                  ].map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-600 text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </Card>

              {/* Guarantee */}
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  🛡️ My Promise to You
                </h3>
                <p className="text-gray-600 text-sm">
                  Our discovery call will provide valuable insights for your business, 
                  regardless of whether we work together. I guarantee you&apos;ll walk away 
                  with actionable AI recommendations.
                </p>
              </Card>

              {/* Response Time */}
              <Card>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  ⚡ Quick Response
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  I typically respond to new inquiries within 4-6 hours during business days.
                </p>
                <div className="text-sm text-blue-600 font-semibold">
                  Business Hours: Mon-Fri, 9 AM - 6 PM PST
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-section-title text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-body-large text-gray-600">
              Common questions about working with Jack Warman AI Consulting
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Emergency Contact */}
      <Section background="gradient">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-section-title text-gray-800 mb-6">
            Need Urgent AI Assistance?
          </h2>
          <p className="text-body-large text-gray-600 mb-8">
            For time-sensitive AI issues or urgent consultations, contact me directly 
            for priority support and same-day response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              📱 Call Now: (555) 123-AI-EXPERT
            </Button>
            <Button variant="outline" size="lg">
              📧 Priority Email: urgent@jackwarman.ai
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}