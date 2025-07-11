import { Section, Card, Button } from '@/components/ui';

export default function ServicesPage() {
  const services = [
    {
      id: 'strategy',
      title: 'AI Strategy & Consulting',
      subtitle: 'Chart Your AI Journey',
      price: 'Starting at $2,500',
      duration: '2-4 weeks',
      icon: '🎯',
      description: 'Comprehensive AI roadmap development, feasibility analysis, and strategic planning to align AI initiatives with your business goals.',
      longDescription: 'Our AI Strategy & Consulting service provides a comprehensive roadmap for your AI transformation. We start with a thorough assessment of your current operations, identify key opportunities for AI implementation, and develop a strategic plan that aligns with your business objectives and budget constraints.',
      features: [
        'Current State AI Readiness Assessment',
        'Custom AI Strategy Development',
        'ROI Analysis & Business Case Development',
        'Detailed Implementation Roadmap',
        'Technology Stack Recommendations',
        'Risk Assessment & Mitigation Strategies',
        'Change Management Planning',
        'Executive Presentation & Buy-in Support'
      ],
      process: [
        'Discovery workshop with key stakeholders',
        'Technical infrastructure assessment',
        'Market analysis and competitive benchmarking',
        'Strategy development and validation',
        'Roadmap creation with priorities and timelines',
        'Executive presentation and approval'
      ],
      outcomes: [
        'Clear AI implementation strategy',
        'Prioritized project roadmap',
        'Executive buy-in and budget approval',
        'Reduced implementation risks',
        'Faster time to AI value'
      ]
    },
    {
      id: 'development',
      title: 'Custom AI Solution Development',
      subtitle: 'Build Your AI Advantage',
      price: 'Starting at $10,000',
      duration: '6-12 weeks',
      icon: '⚙️',
      description: 'End-to-end development of bespoke AI solutions tailored to your specific business challenges and requirements.',
      longDescription: 'Transform your business with custom-built AI solutions designed specifically for your unique challenges. From concept to deployment, we handle every aspect of AI solution development using the latest technologies and best practices.',
      features: [
        'Custom Machine Learning Model Development',
        'AI Application Design & Development',
        'API Integration & Development',
        'User Interface & Experience Design',
        'System Integration with Existing Tools',
        'Performance Optimization & Tuning',
        'Quality Assurance & Testing',
        'Deployment & Go-live Support'
      ],
      process: [
        'Requirements gathering and analysis',
        'Solution architecture and design',
        'Agile development with regular reviews',
        'Comprehensive testing and validation',
        'User training and documentation',
        'Deployment and monitoring setup'
      ],
      outcomes: [
        'Production-ready AI solution',
        'Improved operational efficiency',
        'Competitive advantage through AI',
        'Scalable and maintainable codebase',
        'Full documentation and training'
      ]
    },
    {
      id: 'automation',
      title: 'AI Automation & Integration',
      subtitle: 'Streamline Your Operations',
      price: 'Starting at $5,000',
      duration: '4-8 weeks',
      icon: '🔄',
      description: 'Streamline your operations with intelligent automation systems that integrate seamlessly with your existing workflows.',
      longDescription: 'Eliminate repetitive tasks and optimize your workflows with intelligent automation. Our solutions integrate AI-powered automation into your existing systems, reducing manual work and improving accuracy while maintaining full control over your processes.',
      features: [
        'Intelligent Process Automation Design',
        'Workflow Optimization & Re-engineering',
        'Legacy System Integration',
        'Document Processing Automation',
        'Email & Communication Automation',
        'Data Entry & Validation Automation',
        'Quality Control & Monitoring',
        'Staff Training & Change Management'
      ],
      process: [
        'Process mapping and analysis',
        'Automation opportunity identification',
        'Solution design and prototyping',
        'Development and testing',
        'Gradual rollout and optimization',
        'Training and knowledge transfer'
      ],
      outcomes: [
        'Reduced manual workload',
        'Improved process accuracy',
        'Faster turnaround times',
        'Cost savings through efficiency',
        'Staff freed for higher-value work'
      ]
    },
    {
      id: 'analytics',
      title: 'Data Analytics & Intelligence',
      subtitle: 'Unlock Your Data&apos;s Potential',
      price: 'Starting at $3,500',
      duration: '3-6 weeks',
      icon: '📈',
      description: 'Transform your data into actionable insights with advanced analytics, reporting, and predictive modeling.',
      longDescription: 'Turn your data into your competitive advantage with advanced analytics and business intelligence solutions. We help you understand your data, predict future trends, and make data-driven decisions that drive growth.',
      features: [
        'Data Pipeline Development & ETL',
        'Predictive Analytics & Forecasting',
        'Custom Dashboard Development',
        'Real-time Reporting Systems',
        'Statistical Analysis & Modeling',
        'Data Visualization & Storytelling',
        'KPI Tracking & Alerting',
        'Self-service Analytics Training'
      ],
      process: [
        'Data audit and quality assessment',
        'Analytics requirements gathering',
        'Data pipeline and infrastructure setup',
        'Model development and validation',
        'Dashboard and reporting creation',
        'User training and documentation'
      ],
      outcomes: [
        'Data-driven decision making',
        'Improved forecasting accuracy',
        'Real-time business insights',
        'Automated reporting processes',
        'Better understanding of customer behavior'
      ]
    }
  ];

  const addOns = [
    {
      title: 'Ongoing AI Support & Maintenance',
      description: 'Monthly maintenance, monitoring, and optimization',
      price: '$500-2000/month'
    },
    {
      title: 'AI Training & Workshops',
      description: 'Team training sessions on AI tools and concepts',
      price: '$1,500/session'
    },
    {
      title: 'Emergency AI Consultation',
      description: 'Priority support for urgent AI-related issues',
      price: '$200/hour'
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-hero gradient-text mb-6">
            AI Services That Transform SMBs
          </h1>
          <p className="text-body-large text-gray-600 mb-12">
            From strategy to implementation, I provide comprehensive AI solutions designed 
            specifically for small and medium businesses. Every service is crafted to deliver 
            maximum ROI and competitive advantage.
          </p>
          <Button variant="primary" size="lg">
            Schedule Your Free Discovery Call
          </Button>
        </div>
      </Section>

      {/* Detailed Services */}
      <Section background="white">
        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={service.id} className="max-w-6xl mx-auto">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Service Overview */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center text-white text-2xl">
                      {service.icon}
                    </div>
                    <div>
                      <h2 className="text-section-title text-gray-800">{service.title}</h2>
                      <p className="text-blue-600 font-semibold">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mb-6 text-sm">
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                      {service.price}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                      {service.duration}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {service.longDescription}
                  </p>

                  <Button variant="primary" className="mb-6">
                    Get Started with {service.title}
                  </Button>
                </div>

                {/* Service Details */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="space-y-6">
                    {/* Features */}
                    <Card>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">What&apos;s Included</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></span>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>

                    {/* Process */}
                    <Card>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Our Process</h3>
                      <ol className="space-y-3">
                        {service.process.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                              {stepIndex + 1}
                            </span>
                            <span className="text-gray-600">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </Card>

                    {/* Outcomes */}
                    <Card>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Expected Outcomes</h3>
                      <ul className="space-y-3">
                        {service.outcomes.map((outcome, outcomeIndex) => (
                          <li key={outcomeIndex} className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                              ✓
                            </span>
                            <span className="text-gray-600">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Add-on Services */}
      <Section background="light">
        <div className="text-center mb-12">
          <h2 className="text-section-title text-gray-800 mb-6">
            Additional Services & Support
          </h2>
          <p className="text-body-large text-gray-600 max-w-3xl mx-auto">
            Extend your AI capabilities with ongoing support, training, and specialized services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {addOns.map((addon, index) => (
            <Card key={index} className="text-center h-full">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{addon.title}</h3>
              <p className="text-gray-600 mb-6">{addon.description}</p>
              <div className="text-2xl font-bold text-green-600 mb-4">{addon.price}</div>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* Process Overview */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-section-title text-gray-800 mb-6">
            How We Work Together
          </h2>
          <p className="text-body-large text-gray-600 max-w-3xl mx-auto">
            My proven methodology ensures successful AI implementation with clear milestones 
            and regular communication throughout the process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: '01',
              title: 'Discovery Call',
              description: 'Free 30-minute consultation to understand your needs and goals',
              duration: '30 minutes'
            },
            {
              step: '02',
              title: 'Proposal & Planning',
              description: 'Detailed proposal with timeline, deliverables, and investment',
              duration: '2-3 days'
            },
            {
              step: '03',
              title: 'Implementation',
              description: 'Agile development with regular check-ins and progress updates',
              duration: 'Project timeline'
            },
            {
              step: '04',
              title: 'Launch & Support',
              description: 'Go-live support, training, and ongoing optimization',
              duration: 'Ongoing'
            }
          ].map((phase, index) => (
            <Card key={index} className="text-center h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-lg">{phase.step}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{phase.title}</h3>
              <p className="text-gray-600 mb-4">{phase.description}</p>
              <div className="text-sm text-blue-600 font-semibold">{phase.duration}</div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-section-title text-gray-800 mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-body-large text-gray-600 mb-8">
            Let&apos;s discuss your specific needs and create a custom AI solution that delivers 
            real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Schedule Free Discovery Call
            </Button>
            <Button variant="outline" size="lg">
              Download Service Brochure
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}