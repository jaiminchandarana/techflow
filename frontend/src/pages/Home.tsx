import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Brain, Code, Users, Zap, Shield } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <BarChart3 className="h-12 w-12 text-blue-600" />,
      title: 'Data Analytics & Visualization',
      description: 'Transform raw data into actionable insights with advanced BI solutions, interactive dashboards, and comprehensive reporting systems.',
      features: ['Business Intelligence', 'Custom Dashboards ', 'Multipage Dashboard', 'Predictive Analytics'],
      startingPrice: 'Starting at ₹2,500/month',
      href: '#data-analytics'
    },
    {
      icon: <Brain className="h-12 w-12 text-teal-600" />,
      title: 'AI & Machine Learning',
      description: 'Harness the power of AI to automate processes, predict outcomes, and gain competitive advantages through intelligent solutions.',
      features: ['ML Model Development', 'Natural Language Processing', 'Deployment setup', 'AI Consulting'],
      startingPrice: 'Starting at ₹5,000/project',
      href: '#ai-ml'
    },
    {
      icon: <Code className="h-12 w-12 text-orange-600" />,
      title: 'Web Development',
      description: 'Build scalable, modern web applications that deliver exceptional user experiences and drive business growth.',
      features: ['Landing Pages', 'Full-Stack Development', 'E-commerce Solutions', 'API Development'],
      startingPrice: 'Starting at ₹3,500/project',
      href: '#web-development'
    }
  ];

  const stats = [
    { number: '50+', label: 'Hours of Development' },
    { number: '100%', label: 'Commitment to Quality' },
    { number: '24/7', label: 'Availability' },
    { number: '3+', label: 'Technologies Mastered' }
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Technology</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We deliver cutting-edge IT solutions that drive growth, reduce costs, and give you competitive advantages. From AI-powered analytics to scalable web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in three key areas that drive digital transformation and business success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105 group cursor-pointer flex flex-col h-full">
                <div className="mb-6 transition-transform duration-300 ease-in-out group-hover:scale-110">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 ease-in-out">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex items-start transition-colors duration-300 ease-in-out group-hover:text-gray-700">{service.description}</p>
                
                <ul className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 transition-colors duration-300 ease-in-out group-hover:text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0 transition-colors duration-300 ease-in-out group-hover:bg-teal-600"></div>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-gray-200 pt-6 mt-auto">
                  <div className="text-lg font-semibold text-blue-600 mb-4 flex items-center transition-colors duration-300 ease-in-out group-hover:text-blue-600">{service.startingPrice}</div>
                  <div className="flex justify-center">
                    <a
                      href={`/services${service.href}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-all duration-300 ease-in-out group-hover:bg-blue-600 group-hover:text-white px-4 py-2 rounded-lg hover:shadow-lg"
                    >
                      Request a Quote
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose TechFlow?</h2>
            <p className="text-xl text-gray-600">Fresh perspective, cutting-edge skills, and dedicated service</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group cursor-pointer">
              <div className="bg-blue-100 rounded-full p-4 inline-block mb-4 group-hover:bg-blue-600 group-hover:shadow-lg group-hover:shadow-blue-300/50 transition-all duration-300 transform group-hover:scale-110">
                <Users className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Passionate Founder</h3>
              <p className="text-gray-600">Dedicated founder with deep expertise in modern technologies and startup mindset</p>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="bg-teal-100 rounded-full p-4 inline-block mb-4 group-hover:bg-teal-600 group-hover:shadow-lg group-hover:shadow-teal-300/50 transition-all duration-300 transform group-hover:scale-110">
                <Zap className="h-8 w-8 text-teal-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">Agile & Fast</h3>
              <p className="text-gray-600">Startup agility means faster decisions, quicker iterations, and rapid delivery</p>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="bg-orange-100 rounded-full p-4 inline-block mb-4 group-hover:bg-orange-600 group-hover:shadow-lg group-hover:shadow-orange-300/50 transition-all duration-300 transform group-hover:scale-110">
                <Shield className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">Modern & Secure</h3>
              <p className="text-gray-600">Latest technologies with security best practices and industry standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">
            Get a free consultation and discover how we can help you achieve your technology goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Schedule Free Consultation
            </Link>
            <Link
              to="/services"
              className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;