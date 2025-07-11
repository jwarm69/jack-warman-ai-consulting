import { Section, Card, Button } from '@/components/ui';

export default function AboutPage() {
  const journey = [
    {
      year: '2010-2015',
      title: 'Early AI Foundations',
      description: 'Started my journey in artificial intelligence during university, focusing on machine learning algorithms and neural networks.',
      highlight: 'PhD in Computer Science, AI Specialization'
    },
    {
      year: '2015-2018',
      title: 'Industry Experience',
      description: 'Worked at leading tech companies, developing AI solutions for enterprise clients and gaining expertise across multiple domains.',
      highlight: 'Led 50+ AI implementations'
    },
    {
      year: '2018-2021',
      title: 'Expanding Horizons',
      description: 'Broadened expertise to cover the entire AI universe - from computer vision to NLP, robotics to predictive analytics.',
      highlight: 'Universal AI certification achieved'
    },
    {
      year: '2021-Present',
      title: 'SMB Focus',
      description: 'Dedicated to bringing enterprise-level AI solutions to small and medium businesses, making cutting-edge technology accessible.',
      highlight: 'Jack Warman AI Consulting founded'
    }
  ];

  const expertise = [
    'Machine Learning & Deep Learning',
    'Natural Language Processing',
    'Computer Vision & Image Recognition',
    'Predictive Analytics & Forecasting',
    'Process Automation & RPA',
    'Data Science & Business Intelligence',
    'AI Strategy & Implementation',
    'Custom AI Solution Development'
  ];

  const certifications = [
    'Google Cloud Professional Machine Learning Engineer',
    'AWS Certified Machine Learning - Specialty',
    'Microsoft Azure AI Engineer Associate',
    'TensorFlow Developer Certificate',
    'OpenAI API Specialist Certification',
    'IBM AI Engineering Professional Certificate'
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-hero gradient-text mb-6">
            Meet Jack Warman
          </h1>
          <h2 className="text-section-title text-gray-700 mb-8">
            Your AI Expert Across the Universe
          </h2>
          <p className="text-body-large text-gray-600 mb-12 max-w-3xl mx-auto">
            With over a decade of experience spanning the entire AI landscape, I bring 
            enterprise-level artificial intelligence solutions to small and medium businesses. 
            My mission is to democratize AI technology and help SMBs compete in the digital age.
          </p>
          <Button variant="primary" size="lg">
            Schedule Your Free Discovery Call
          </Button>
        </div>
      </Section>

      {/* Personal Story */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-section-title text-gray-800 mb-6">
              Why I&apos;m Passionate About AI for SMBs
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                My journey in AI started over a decade ago when I realized the transformative 
                potential of artificial intelligence. After years working with Fortune 500 companies, 
                I noticed a gap: small and medium businesses were being left behind in the AI revolution.
              </p>
              <p>
                That&apos;s when I decided to dedicate my expertise to leveling the playing field. 
                I founded Jack Warman AI Consulting with one goal: to bring the same cutting-edge 
                AI solutions that large corporations use to businesses of all sizes.
              </p>
              <p>
                What sets me apart is my universal expertise across the AI landscape. While many 
                consultants specialize in one area, I&apos;ve mastered everything from machine learning 
                to computer vision, from automation to predictive analytics. This comprehensive 
                knowledge allows me to see the bigger picture and create integrated solutions 
                that truly transform businesses.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <Card className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Mission</h3>
              <p className="text-gray-600">
                Democratize AI technology and make it accessible to businesses of all sizes
              </p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Vision</h3>
              <p className="text-gray-600">
                A world where every business can leverage AI to achieve extraordinary growth
              </p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Values</h3>
              <p className="text-gray-600">
                Innovation, accessibility, integrity, and measurable results for every client
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Journey Timeline */}
      <Section background="light">
        <div className="text-center mb-16">
          <h2 className="text-section-title text-gray-800 mb-6">
            My AI Journey
          </h2>
          <p className="text-body-large text-gray-600 max-w-3xl mx-auto">
            From academic research to enterprise solutions, and now focused on empowering SMBs 
            with the latest AI innovations.
          </p>
        </div>

        <div className="space-y-8">
          {journey.map((phase, index) => (
            <div key={index} className="relative">
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <Card className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{phase.title}</h3>
                      <div className="text-blue-600 font-semibold">{phase.year}</div>
                    </div>
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mt-2 md:mt-0">
                      {phase.highlight}
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                </Card>
              </div>
              {index < journey.length - 1 && (
                <div className="w-px h-8 bg-gray-300 ml-8 mt-4"></div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Expertise Areas */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-section-title text-gray-800 mb-8">
              Universal AI Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {expertise.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                  <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                  <span className="text-gray-700 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-section-title text-gray-800 mb-8">
              Certifications & Credentials
            </h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center text-white text-lg">
                    🏆
                  </div>
                  <div className="text-gray-700 font-medium">{cert}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-section-title text-gray-800 mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-body-large text-gray-600 mb-8">
            Let&apos;s discuss how my universal AI expertise can transform your business and 
            give you the competitive edge you need to thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Book Your Free Discovery Call
            </Button>
            <Button variant="outline" size="lg">
              View My Services
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}