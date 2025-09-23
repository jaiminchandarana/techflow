import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Star, BarChart3, Brain, Code, Zap, Shield, Users, Send} from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState('data-analytics');

  const services = {
    'data-analytics': {
      title: 'Data Analytics & Visualization',
      icon: <BarChart3 className="h-12 w-12 text-blue-600" />,
      description: 'Transform your raw data into actionable business insights with our comprehensive analytics solutions.',
      features: [
        'Custom Dashboard Development',
        'Business Intelligence Solutions',
        'Predictive Analytics',
        'Data Visualization',
        'Real-time Reporting',
        'Performance Metrics Tracking'
      ]
    },
    'ai-ml': {
      title: 'AI & Machine Learning',
      icon: <Brain className="h-12 w-12 text-blue-600" />,
      description: 'Harness the power of artificial intelligence to automate processes and gain competitive advantages.',
      features: [
        'Custom AI Model Development',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'Automation Systems',
        'AI Integration & Deployment'
      ]
    },
    'web-development': {
      title: 'Web Development',
      icon: <Code className="h-12 w-12 text-blue-600" />,
      description: 'Build modern, scalable web applications that deliver exceptional user experiences.',
      features: [
        'Responsive Web Design',
        'Full-Stack Development',
        'E-commerce Solutions',
        'Progressive Web Apps',
        'API Development',
        'Performance Optimization'
      ]
    }
  };

  const servicesArray = [
    {
      id: 'data-analytics',
      title: 'Data Analytics & Visualization',
      icon: <BarChart3 className="h-16 w-16 text-blue-600" />,
      description: 'Transform your raw data into actionable business insights with our comprehensive analytics solutions. We help businesses make data-driven decisions through powerful visualizations and intelligent reporting systems.',
      features: [
        'Custom Dashboard Development',
        'Business Intelligence Solutions',
        'Predictive Analytics & Forecasting',
        'Interactive Data Visualization',
        'Real-time Reporting Systems',
        'Performance Metrics Tracking',
        'Data Integration & ETL',
        'Advanced Analytics & KPIs'
      ],
      techStack: [
        'Power BI',
        'Tableau',
        'Python',
        'SQL',
        'Excel',
        'Google Analytics',
        'Apache Spark',
        'Snowflake'
      ],
      packages: [
        {
          name: 'Starter Analytics',
          price: '₹2,500',
          period: '/month',
          description: 'Perfect for small businesses starting their data journey',
          features: [
            'Basic dashboard with 5 key metrics',
            'Weekly automated reports',
            'Data integration from 2 sources',
            'Email support',
            'Basic data visualization',
            '1 revision per month'
          ],
          popular: false,
          cta: 'Start Analytics Journey'
        },
        {
          name: 'Professional BI',
          price: '₹5,000',
          period: '/month',
          description: 'Comprehensive business intelligence for growing companies',
          features: [
            'Advanced multi-page dashboard',
            'Daily automated reports',
            'Data integration from 5+ sources',
            'Priority email & chat support',
            'Interactive visualizations',
            'Predictive analytics basics',
            'Custom KPI tracking',
            '3 revisions per month'
          ],
          popular: true,
          cta: 'Upgrade to Professional'
        },
        {
          name: 'Enterprise Analytics',
          price: '₹10,000',
          period: '/month',
          description: 'Full-scale analytics solution for large organizations',
          features: [
            'Unlimited dashboards & reports',
            'Real-time data streaming',
            'Unlimited data source integration',
            '24/7 phone & chat support',
            'Advanced predictive modeling',
            'Custom AI-powered insights',
            'White-label solutions',
            'Dedicated account manager',
            'Unlimited revisions'
          ],
          popular: false,
          cta: 'Go Enterprise'
        }
      ]
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: <Brain className="h-16 w-16 text-teal-600" />,
      description: 'Harness the power of artificial intelligence to automate processes, predict outcomes, and gain competitive advantages. Our AI solutions are tailored to solve real business problems and drive measurable results.',
      features: [
        'Custom AI Model Development',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'Automation Systems',
        'AI Integration & Deployment',
        'Predictive Analytics & Forecasting',
        'Process Automation Systems',
        'AI Integration & Deployment',
        'Machine Learning Consulting',
        'AI Strategy & Implementation'
      ],
      techStack: [
        'Python',
        'TensorFlow',
        'PyTorch',
        'Scikit-learn',
        'OpenAI API',
        'Hugging Face',
        'AWS SageMaker',
        'Docker'
      ],
      packages: [
        {
          name: 'AI Starter',
          price: '₹8,000',
          period: '/project',
          description: 'Basic AI solutions for specific business problems',
          features: [
            'Simple chatbot development',
            'Basic data analysis with AI',
            'Pre-trained model integration',
            'Email support',
            'Basic documentation',
            '1 month support'
          ],
          popular: false,
          cta: 'Start AI Journey'
        },
        {
          name: 'Custom AI Solution',
          price: '₹15,000',
          period: '/project',
          description: 'Tailored AI solutions for complex business needs',
          features: [
            'Custom ML model development',
            'Advanced NLP capabilities',
            'Computer vision integration',
            'API development & integration',
            'Comprehensive testing',
            'Priority support',
            'Detailed documentation',
            '3 months support & maintenance'
          ],
          popular: true,
          cta: 'Build Custom AI'
        },
        {
          name: 'Enterprise AI Platform',
          price: '₹30,000',
          period: '/project',
          description: 'Complete AI ecosystem for large-scale operations',
          features: [
            'Multi-model AI platform',
            'Advanced deep learning solutions',
            'Real-time AI processing',
            'Scalable cloud deployment',
            'Custom training pipelines',
            '24/7 monitoring & support',
            'Team training included',
            'Dedicated AI consultant',
            '6 months support & updates'
          ],
          popular: false,
          cta: 'Deploy Enterprise AI'
        }
      ]
    },
    {
      id: 'web-development',
      title: 'Web Development',
      icon: <Code className="h-16 w-16 text-orange-600" />,
      description: 'Build modern, scalable web applications that deliver exceptional user experiences and drive business growth. From simple landing pages to complex web applications, we create solutions that work.',
      features: [
        'Responsive Web Design',
        'Full-Stack Development',
        'E-commerce Solutions',
        'Progressive Web Apps',
        'API Development',
        'Performance Optimization',
        'Progressive Web Apps (PWA)',
        'RESTful API Development',
        'Performance Optimization',
        'SEO & Analytics Integration',
        'Maintenance & Support'
      ],
      techStack: [
        'React.js',
        'Next.js',
        'Node.js',
        'TypeScript',
        'Tailwind CSS',
        'MongoDB',
        'PostgreSQL',
        'AWS/Vercel'
      ],
      packages: [
        {
          name: 'Landing Page Pro',
          price: '₹5,000',
          period: '/project',
          description: 'Professional landing pages that convert visitors to customers',
          features: [
            'Responsive single-page design',
            'Contact form integration',
            'Basic SEO optimization',
            'Mobile-first approach',
            'Fast loading optimization',
            '2 rounds of revisions',
            '1 month support'
          ],
          popular: false,
          cta: 'Create Landing Page'
        },
        {
          name: 'Business Website',
          price: '₹12,000',
          period: '/project',
          description: 'Complete business website with modern features',
          features: [
            'Multi-page responsive website',
            'Content management system',
            'Advanced SEO optimization',
            'Contact & booking forms',
            'Social media integration',
            'Analytics setup',
            'Blog functionality',
            '3 rounds of revisions',
            '3 months support'
          ],
          popular: true,
          cta: 'Build Business Site'
        },
        {
          name: 'Custom Web Application',
          price: '₹25,000',
          period: '/project',
          description: 'Full-featured web applications with custom functionality',
          features: [
            'Custom web application',
            'User authentication system',
            'Database integration',
            'Admin dashboard',
            'API development',
            'Third-party integrations',
            'Advanced security features',
            'Performance optimization',
            'Unlimited revisions',
            '6 months support & maintenance'
          ],
          popular: false,
          cta: 'Develop Custom App'
        }
      ]
    }
  ];

  const currentService = services[activeService as keyof typeof services];

  return (
    <div>
      {/* Hero Section - Enhanced Card Design */}
      <section className="bg-gradient-to-br from-blue-50 via-teal-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
            <div className="text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
                <Code className="h-4 w-4 mr-2" />
                Our Solutions
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Our 
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"> Services</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Comprehensive technology solutions designed to transform your business. Choose from our expertly crafted packages or let us create a custom solution for your unique needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Get Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services and Packages Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {Object.entries(servicesArray).map(([key, service]) => (
              <div key={key} className="bg-white rounded-xl shadow-lg p-8">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  {/* Service Details Card - Left Side - Centered */}
                  <div className="lg:col-span-1 flex items-center justify-center">
                    <div className="bg-gray-50 rounded-lg p-6 w-full max-w-md">
                      <div className="flex flex-col items-center text-center mb-4">
                        <div className="bg-blue-100 p-3 rounded-lg mb-3">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      </div>
                      
                      <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 mb-3 text-center">Key Features:</h4>
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                            <span className="text-black text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Packages Cards - Right Side - Stacked Vertically */}
                  <div className="lg:col-span-2">
                    <div className="space-y-6">
                      {service.packages.map((pkg, index) => (
                        <div
                          key={index}
                          className={`bg-white border rounded-lg p-6 relative transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 ${
                            pkg.popular ? 'border-2 border-blue-600 shadow-lg' : 'border border-gray-200 shadow-md'
                          }`}
                        >
                          {pkg.popular && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                                <Star className="h-3 w-3 mr-1" />
                                Popular
                              </span>
                            </div>
                          )}
                          
                          <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                              <h4 className="text-lg font-bold text-gray-900 mb-1">{pkg.name}</h4>
                              <div className="flex items-baseline justify-center mb-2">
                                <span className="text-2xl font-bold text-gray-900">{pkg.price}</span>
                                <span className="text-gray-600 text-sm ml-1">{pkg.period}</span>
                              </div>
                              <p className="text-gray-600 text-sm">{pkg.description}</p>
                            </div>

                            <div className="md:col-span-2">
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <h5 className="font-semibold text-gray-900 text-sm mb-3">Includes:</h5>
                                  <div className="space-y-2">
                                    {pkg.features.slice(0, Math.ceil(pkg.features.length / 2)).map((feature, idx) => (
                                      <div key={idx} className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                                        <span className="text-black text-sm">{feature}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                
                                <div>
                                  <div className="space-y-2 mt-6">
                                    {pkg.features.slice(Math.ceil(pkg.features.length / 2)).map((feature, idx) => (
                                      <div key={idx} className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                                        <span className="text-black text-sm">{feature}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              
                              <div className="mt-4">
                                <button
                                  className={`w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 transform hover:scale-105 ${
                                    pkg.popular
                                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                                  }`}
                                >
                                  {pkg.cta}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose TechFlow?</h2>
            <p className="text-xl text-gray-600">We deliver results that matter to your business</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group cursor-pointer">
              <div className="bg-blue-100 rounded-full p-4 inline-block mb-4 group-hover:bg-blue-600 group-hover:shadow-lg group-hover:shadow-blue-300/50 transition-all duration-300 transform group-hover:scale-110">
                <Zap className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Fast Delivery</h3>
              <p className="text-gray-600">Quick turnaround times without compromising on quality. Most projects delivered ahead of schedule.</p>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="bg-teal-100 rounded-full p-4 inline-block mb-4 group-hover:bg-teal-600 group-hover:shadow-lg group-hover:shadow-teal-300/50 transition-all duration-300 transform group-hover:scale-110">
                <Shield className="h-8 w-8 text-teal-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">Quality Guaranteed</h3>
              <p className="text-gray-600">100% satisfaction guarantee with unlimited revisions until you're completely happy with the results.</p>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="bg-orange-100 rounded-full p-4 inline-block mb-4 group-hover:bg-orange-600 group-hover:shadow-lg group-hover:shadow-orange-300/50 transition-all duration-300 transform group-hover:scale-110">
                <Users className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">Dedicated Support</h3>
              <p className="text-gray-600">Personal attention from our founder with direct communication and ongoing support for all projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">Simple, transparent, and results-driven approach</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We understand your business needs and goals through detailed consultation.' },
              { step: '02', title: 'Planning', description: 'Create a detailed project plan with timelines, milestones, and deliverables.' },
              { step: '03', title: 'Development', description: 'Build your solution using modern technologies and best practices.' },
              { step: '04', title: 'Delivery', description: 'Deploy, test, and provide ongoing support for your new solution.' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">
            Choose a package that fits your needs or contact us for a custom solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Get Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;