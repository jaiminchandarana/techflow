import { Users, Award, Target, Heart, Linkedin, Mail } from 'lucide-react';
import ceoProfile from '../assets/jaiminchandarana.png';

const About = () => {
  const team = [
    {
      name: 'Jaimin Chandarana',
      role: 'CEO & Founder',
      image: {ceoProfile},
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
      {/* Hero Section with Card Design */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                <h1 className="text-5xl font-bold mb-6">About TechFlow</h1>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 leading-relaxed">
                TechFlow is a passionate startup founded with a vision to make cutting-edge technology accessible to businesses of all sizes. As a fresh and innovative company, we bring modern solutions with a personal touch and startup agility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-white rounded-xl p-6 mb-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 rounded-full p-3 mr-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700">
                  To democratize access to modern technology solutions by providing high-quality, affordable IT services that help businesses grow and compete in the digital landscape.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-blue-600">
                  <h4 className="font-semibold text-gray-900 mb-2">Accessibility</h4>
                  <p className="text-sm text-gray-600">Making advanced technology affordable for all business sizes</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-blue-600">
                  <h4 className="font-semibold text-gray-900 mb-2">Quality Service</h4>
                  <p className="text-sm text-gray-600">Delivering high-quality solutions with personalized attention</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-blue-600">
                  <h4 className="font-semibold text-gray-900 mb-2">Business Growth</h4>
                  <p className="text-sm text-gray-600">Helping businesses compete and thrive in the digital age</p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-white rounded-xl p-6 mb-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-600 rounded-full p-3 mr-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-700">
                  To become the go-to technology partner for startups and growing businesses, known for innovation, reliability, and exceptional client relationships.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-teal-600">
                  <h4 className="font-semibold text-gray-900 mb-2">Partnership Focus</h4>
                  <p className="text-sm text-gray-600">Building long-term partnerships with our clients</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-teal-600">
                  <h4 className="font-semibold text-gray-900 mb-2">Innovation Leadership</h4>
                  <p className="text-sm text-gray-600">Being recognized for cutting-edge solutions and reliability</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-teal-600">
                  <h4 className="font-semibold text-gray-900 mb-2">Mutual Growth</h4>
                  <p className="text-sm text-gray-600">Growing together as we help clients scale successfully</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Value Header Card */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 mb-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-white rounded-full p-3 shadow-md mr-4">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
                
                {/* Value Subcards */}
                <div className="space-y-3">
                  {value.subcards.map((subcard, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-4 hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all duration-300 cursor-pointer group">
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-1">
                        {subcard.title}
                      </h4>
                      <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
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
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
              <p className="text-xl text-gray-600">Experienced professionals driving innovation and excellence</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-sm">
            {team.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl shadow-xl p-2 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-white rounded-xl p-8 text-center">
                  <img
                    src={ceoProfile}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-blue-100 shadow-lg"
                  />
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-semibold text-lg">{member.role}</p>
                  </div>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <a href={member.linkedin} className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="mailto:chandaranajaimin@gmail.com" className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
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
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-xl text-gray-600">The beginning of an exciting journey</p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-6 mb-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-600 mb-4">2025</div>
                  <h3 className="text-2xl font-bold text-gray-900">The Beginning</h3>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600 hover:shadow-md transition-all duration-300">
                  <h4 className="font-semibold text-gray-900 mb-2">Foundation</h4>
                  <p className="text-sm text-gray-600">Born from passion for technology and business growth</p>
                </div>
                <div className="bg-teal-50 rounded-xl p-6 border-l-4 border-teal-600 hover:shadow-md transition-all duration-300">
                  <h4 className="font-semibold text-gray-900 mb-2">Expertise</h4>
                  <p className="text-sm text-gray-600">Years of experience in development, AI, and analytics</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-600 hover:shadow-md transition-all duration-300">
                  <h4 className="font-semibold text-gray-900 mb-2">Vision</h4>
                  <p className="text-sm text-gray-600">Growing alongside clients and building partnerships</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
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
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '100%', label: 'Dedication' },
              { number: '24/7', label: 'Availability' },
              { number: '∞', label: 'Possibilities' },
              { number: '1', label: 'Passionate Founder' }
            ].map((stat, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl font-bold mb-2 text-white">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Work with Us?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our expertise can help transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Start a Conversation
              </a>
              <a
                href="/services"
                className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;