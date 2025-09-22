import { Users, Award, Target, Heart, Linkedin, Mail } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Jaimin Chandarana',
      role: 'CEO & Founder',
      image: '/src/assets/jaiminchandarana.png',
      bio: 'AI/ML developer and entrepreneur with expertise in modern web technologies, AI, and data analytics. Committed to delivering innovative solutions that drive business growth.',
      linkedin: 'https://www.linkedin.com/in/jaimin-chandarana-903158225/'
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Excellence Driven',
      description: 'We pursue perfection in every project, ensuring our solutions exceed client expectations and industry standards.',
      subcards: [
        { title: 'Quality Assurance', description: 'Rigorous testing and code review processes' },
        { title: 'Best Practices', description: 'Following industry standards and modern methodologies' },
        { title: 'Continuous Improvement', description: 'Always learning and upgrading our skills' }
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: 'Client-Centric',
      description: 'Your success is our success. We partner with you to understand your unique challenges and deliver tailored solutions.',
      subcards: [
        { title: 'Personal Attention', description: 'Direct access to founder and personalized service' },
        { title: 'Custom Solutions', description: 'Tailored approaches for your specific business needs' },
        { title: 'Long-term Partnership', description: 'Building relationships that grow with your business' }
      ]
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, bringing cutting-edge solutions that give you competitive advantages.',
      subcards: [
        { title: 'Latest Technologies', description: 'Using modern frameworks and tools' },
        { title: 'Creative Solutions', description: 'Thinking outside the box for unique challenges' },
        { title: 'Future-Ready', description: 'Building scalable solutions for tomorrow' }
      ]
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: 'Integrity & Trust',
      description: 'We build lasting relationships through transparent communication, reliable delivery, and ethical business practices.',
      subcards: [
        { title: 'Transparent Pricing', description: 'No hidden costs or surprise fees' },
        { title: 'Reliable Delivery', description: 'Meeting deadlines and maintaining quality' },
        { title: 'Ethical Practices', description: 'Honest communication and fair business dealings' }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About TechFlow</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              TechFlow is a passionate startup founded with a vision to make cutting-edge technology accessible to businesses of all sizes. As a fresh and innovative company, we bring modern solutions with a personal touch and startup agility.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-8 pb-6 border-b border-gray-100">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700">
                  To democratize access to modern technology solutions by providing high-quality, affordable IT services that help businesses grow and compete in the digital landscape.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Accessibility</h4>
                  <p className="text-sm text-gray-600">Making advanced technology affordable for all business sizes</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Quality Service</h4>
                  <p className="text-sm text-gray-600">Delivering high-quality solutions with personalized attention</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Business Growth</h4>
                  <p className="text-sm text-gray-600">Helping businesses compete and thrive in the digital age</p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-8 pb-6 border-b border-gray-100">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-700">
                  To become the go-to technology partner for startups and growing businesses, known for innovation, reliability, and exceptional client relationships.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Partnership Focus</h4>
                  <p className="text-sm text-gray-600">Building long-term partnerships with our clients</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Innovation Leadership</h4>
                  <p className="text-sm text-gray-600">Being recognized for cutting-edge solutions and reliability</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Mutual Growth</h4>
                  <p className="text-sm text-gray-600">Growing together as we help clients scale successfully</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
                {/* Value Header */}
                <div className="mb-8 pb-6 border-b border-gray-100">
                  <div className="bg-gray-50 rounded-full p-4 inline-block mb-6 group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-110">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
                
                {/* Value Subcards */}
                <div className="space-y-3">
                  {value.subcards.map((subcard, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 hover:border-gray-200 border border-transparent transition-all duration-300 group/subcard cursor-pointer">
                      <h4 className="font-semibold text-gray-900 group-hover/subcard:text-blue-600 transition-colors duration-300 mb-1">
                        {subcard.title}
                      </h4>
                      <p className="text-sm text-gray-600 group-hover/subcard:text-gray-700 transition-colors duration-300">
                        {subcard.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals driving innovation and excellence</p>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-sm">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-blue-100"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4 text-lg">{member.role}</p>
                <p className="text-gray-600 mb-6">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="mailto:chandaranajaimin@gmail.com" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600">The beginning of an exciting journey</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-all duration-300">
              <div className="mb-8 pb-6 border-b border-gray-100">
                <div className="text-6xl font-bold text-blue-600 mb-4">2025</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Beginning</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Foundation</h4>
                  <p className="text-sm text-gray-600">Born from passion for technology and business growth</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Expertise</h4>
                  <p className="text-sm text-gray-600">Years of experience in development, AI, and analytics</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Vision</h4>
                  <p className="text-sm text-gray-600">Growing alongside clients and building partnerships</p>
                </div>
              </div>
              
              <div className="prose prose-lg mx-auto text-gray-700">
                <p className="mb-6">
                  TechFlow was born from a passion for technology and a desire to help businesses thrive in the digital age. 
                  As a fresh startup, we bring enthusiasm, modern expertise, and a commitment to excellence that sets us apart.
                </p>
                <p>
                  Every great company starts with a single step. This is ours, and we're thrilled to have you be part of our story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Dedication</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Availability</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">∞</div>
              <div className="text-blue-100">Possibilities</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1</div>
              <div className="text-blue-100">Passionate Founder</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Work with Us?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our expertise can help transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Start a Conversation
            </a>
            <a
              href="/services"
              className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;