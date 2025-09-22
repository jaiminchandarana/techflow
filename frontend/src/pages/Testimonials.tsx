import { Star, ArrowRight, TrendingUp, Clock, DollarSign } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'CEO',
      company: 'DataCorp Solutions',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      quote: 'TechFlow completely transformed our data strategy. Their analytics dashboard not only increased our decision-making speed by 60% but also helped us identify cost-saving opportunities that resulted in $200K annual savings. The team was professional, responsive, and truly understood our business needs.',
      rating: 5,
      project: 'Business Intelligence Dashboard',
      results: {
        metric: '60% faster decisions',
        savings: '$200K annual savings',
        timeline: '3 months delivery'
      }
    },
    {
      name: 'Michael Chen',
      title: 'CTO',
      company: 'InnovateTech',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      quote: 'The AI solution they built for our customer service has been a game-changer. We now handle 3x more inquiries with the same team size, and customer satisfaction scores improved by 40%. The implementation was smooth and the ongoing support has been excellent.',
      rating: 5,
      project: 'AI-Powered Customer Service',
      results: {
        metric: '3x inquiry capacity',
        satisfaction: '40% higher satisfaction',
        timeline: '4 months delivery'
      }
    },
    {
      name: 'Emily Rodriguez',
      title: 'Founder',
      company: 'EcoCommerce',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      quote: 'Their web development team delivered our e-commerce platform ahead of schedule and under budget. The site is fast, mobile-responsive, and has all the features we needed. Sales increased by 150% in the first quarter after launch.',
      rating: 5,
      project: 'E-commerce Platform',
      results: {
        metric: '150% sales increase',
        performance: '99.9% uptime',
        timeline: 'Delivered early'
      }
    },
    {
      name: 'David Park',
      title: 'VP of Operations',
      company: 'LogisticsPro',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      quote: 'The predictive analytics model they developed for our supply chain optimization has revolutionized our operations. We reduced inventory costs by 25% while improving delivery times by 30%. The ROI exceeded our expectations within 6 months.',
      rating: 5,
      project: 'Supply Chain Analytics',
      results: {
        metric: '25% cost reduction',
        efficiency: '30% faster delivery',
        timeline: '6 months ROI'
      }
    }
  ];

  const caseStudies = [
    {
      title: 'Fortune 500 Manufacturing Analytics',
      client: 'Global Manufacturing Corp',
      challenge: 'Scattered production data across 15 facilities with no centralized reporting, leading to inefficient operations and missed optimization opportunities.',
      solution: 'Implemented a comprehensive BI platform integrating data from all facilities, with real-time dashboards and predictive maintenance algorithms.',
      results: [
        '$2.3M annual cost savings',
        '35% reduction in downtime',
        '20% increase in overall efficiency',
        'Real-time visibility across all facilities'
      ],
      image: 'https://images.pexels.com/photos/1267336/pexels-photo-1267336.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      industry: 'Manufacturing',
      duration: '8 months'
    },
    {
      title: 'Healthcare AI Diagnostic System',
      client: 'MedTech Innovations',
      challenge: 'Manual radiology analysis was creating bottlenecks, with average diagnosis time of 4 hours and increasing patient wait times.',
      solution: 'Developed an AI-powered diagnostic assistant using computer vision to analyze medical images with 95% accuracy, integrated with existing PACS systems.',
      results: [
        '75% reduction in analysis time',
        '95% diagnostic accuracy',
        '200% increase in patient throughput',
        'FDA compliance achieved'
      ],
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      industry: 'Healthcare',
      duration: '12 months'
    },
    {
      title: 'Fintech Mobile Banking Platform',
      client: 'NextGen Financial',
      challenge: 'Legacy banking systems couldn\'t support modern mobile banking features, limiting customer acquisition and retention.',
      solution: 'Built a modern, cloud-native mobile banking platform with advanced security, real-time transactions, and personalized financial insights.',
      results: [
        '300% increase in mobile adoption',
        '50% reduction in support tickets',
        '99.99% system uptime',
        'SOC 2 Type II compliant'
      ],
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      industry: 'Financial Services',
      duration: '10 months'
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Client Success Stories</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real results from real businesses. See how we've helped companies across industries achieve their technology goals and drive meaningful business outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">₹10K+</div>
              <div className="text-gray-600">Value Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Hear directly from the business leaders we've helped transform</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.title}, {testimonial.company}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">Project: {testimonial.project}</div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <TrendingUp className="h-5 w-5 text-green-500 mx-auto mb-1" />
                      <div className="font-semibold">{testimonial.results.metric}</div>
                    </div>
                    <div className="text-center">
                      <DollarSign className="h-5 w-5 text-green-500 mx-auto mb-1" />
                      <div className="font-semibold">{testimonial.results.savings || testimonial.results.satisfaction || testimonial.results.performance}</div>
                    </div>
                    <div className="text-center">
                      <Clock className="h-5 w-5 text-blue-500 mx-auto mb-1" />
                      <div className="font-semibold">{testimonial.results.timeline}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Detailed Case Studies</h2>
            <p className="text-xl text-gray-600">In-depth look at how we solve complex business challenges</p>
          </div>
          
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mr-3">
                      {study.industry}
                    </span>
                    <span className="text-gray-500 text-sm">{study.duration}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h3>
                  <p className="text-gray-600 mb-2 text-sm font-semibold">Client: {study.client}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-700">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-700">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Results Achieved</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="rounded-xl shadow-lg w-full h-80 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-xl mb-8">
            Let's discuss how we can help you achieve similar results for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Start Your Success Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/services"
              className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;