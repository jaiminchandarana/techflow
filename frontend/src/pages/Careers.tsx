import { useState } from 'react';
import { MapPin, Clock, IndianRupee, Users, Code, Zap, Send, Briefcase, Star, Award, TrendingUp, Heart, AlertCircle } from 'lucide-react';
import JobModal from '../components/JobModal';
import ApplicationModal from '../components/ApplicationModal';

const Careers = () => {
  const [showJobModal, setShowJobModal] = useState(false);
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  // Toggle this to show/hide open positions
  const hasOpenPositions = true; // Set to false when no positions available

  const openPositions = [
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote',
      salary: '3-8 LPA',
      description: 'Join our team to build cutting-edge web applications and AI solutions.',
      requirements: ['2+ years experience', 'React/Node.js', 'TypeScript'],
      posted: '2 days ago',
      urgent: true
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Hybrid',
      salary: '2.5-6 LPA',
      description: 'Create beautiful and responsive user interfaces for our web applications.',
      requirements: ['1+ years experience', 'React/Vue.js', 'CSS/Tailwind'],
      posted: '1 week ago',
      urgent: false
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      type: 'Contract',
      location: 'Remote',
      salary: '2-5 LPA',
      description: 'Design intuitive and engaging user experiences for our digital products.',
      requirements: ['Portfolio required', 'Figma/Adobe XD', 'User research'],
      posted: '3 days ago',
      urgent: false
    }
  ];

  const benefits = [
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Startup Equity',
      description: 'Get ownership in the company and benefit from our growth journey',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Rapid Growth',
      description: 'Accelerate your career with hands-on experience and real impact',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Small Team',
      description: 'Work closely with founders and have your voice heard in decisions',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Latest Tech',
      description: 'Work with cutting-edge technologies and modern development tools',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Work-Life Balance',
      description: 'Flexible hours and remote work options to maintain healthy balance',
      gradient: 'from-rose-500 to-pink-500'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Learning Budget',
      description: 'Annual budget for courses, conferences, and skill development',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  const companyValues = [
    {
      title: 'Innovation First',
      description: 'We constantly push boundaries and embrace new technologies to deliver exceptional solutions.',
      icon: <Zap className="h-12 w-12" />,
      color: 'blue'
    },
    {
      title: 'Team Collaboration',
      description: 'We believe in the power of teamwork and create an environment where everyone can contribute.',
      icon: <Users className="h-12 w-12" />,
      color: 'teal'
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and encourage continuous learning and skill development.',
      icon: <Award className="h-12 w-12" />,
      color: 'purple'
    }
  ];

  const handleApplyFromJob = () => {
    setShowJobModal(false);
    setShowApplicationModal(true);
  };

  return (
    <>
      <div>
        {/* Hero Section - Enhanced Card Design */}
        <section className="bg-gradient-to-br from-blue-50 via-teal-50 to-purple-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
              <div className="text-center">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
                  <Briefcase className="h-4 w-4 mr-2" />
                  We're Hiring
                </div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Join Our 
                  <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"> Dream Team</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                  Be part of an exciting startup journey! We're looking for passionate developers who want to make a real impact 
                  and grow with us as we build innovative solutions for businesses worldwide.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setShowApplicationModal(true)}
                    className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
                <p className="text-xl text-gray-600">
                  {hasOpenPositions 
                    ? 'Join our growing team and make an impact from day one'
                    : 'Check back soon for new opportunities'}
                </p>
              </div>
            </div>
            
            {hasOpenPositions ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {openPositions.map((position, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105 cursor-pointer group border border-gray-100"
                       onClick={() => setShowJobModal(true)}>
                    
                    {/* Card Header */}
                    <div className="p-6 border-b border-gray-100">
                      <div className="flex items-start justify-between mb-4">
                        <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-3 rounded-xl shadow-lg group-hover:shadow-blue-300/30 transition-all duration-300">
                          <Briefcase className="h-6 w-6 text-white" />
                        </div>
                        {position.urgent && (
                          <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            Urgent
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium group-hover:bg-teal-100 group-hover:text-teal-800 transition-colors duration-300">
                          {position.type}
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {position.department}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {position.title}
                      </h3>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 leading-relaxed">{position.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <IndianRupee className="h-4 w-4 mr-2 text-green-500" />
                          <span>{position.salary}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-2 text-orange-500" />
                          <span>Posted {position.posted}</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                        <div className="flex flex-wrap gap-2">
                          {position.requirements.map((req, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="p-6 bg-gray-50 rounded-b-2xl">
                      <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg">
                        View Details & Apply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* No Open Positions Card */
              <div className="max-w-3xl mx-auto">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-xl overflow-hidden">
                  <div className="p-8 md:p-12">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full mb-6">
                        <AlertCircle className="h-10 w-10 text-blue-600" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        No Open Positions Currently
                      </h3>
                      
                      <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
                        While we don't have any open positions at the moment, we're always interested in meeting talented individuals who share our passion for technology and innovation.
                      </p>

                      <div className="bg-white/80 backdrop-blur rounded-xl p-6 mb-8 border border-blue-100">
                        <h4 className="font-semibold text-gray-900 mb-3">Stay Connected</h4>
                        <p className="text-sm text-gray-600 mb-4">
                          Join our talent pool to be notified when new opportunities arise that match your skills and interests.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                          <button
                            onClick={() => setShowApplicationModal(true)}
                            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center shadow-lg"
                          >
                            <Send className="mr-2 h-5 w-5" />
                            Join Talent Pool
                          </button>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 text-center">
                        <div className="bg-white/60 backdrop-blur rounded-lg p-4 border border-gray-200">
                          <div className="text-blue-600 mb-2">
                            <Users className="h-6 w-6 mx-auto" />
                          </div>
                          <p className="text-xs text-gray-600">Follow us on LinkedIn for job updates</p>
                        </div>
                        <div className="bg-white/60 backdrop-blur rounded-lg p-4 border border-gray-200">
                          <div className="text-teal-600 mb-2">
                            <Briefcase className="h-6 w-6 mx-auto" />
                          </div>
                          <p className="text-xs text-gray-600">Check back regularly for new openings</p>
                        </div>
                        <div className="bg-white/60 backdrop-blur rounded-lg p-4 border border-gray-200">
                          <div className="text-purple-600 mb-2">
                            <Star className="h-6 w-6 mx-auto" />
                          </div>
                          <p className="text-xs text-gray-600">Send us your resume for future roles</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {hasOpenPositions && (
              <div className="text-center mt-12">
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't See Your Role?</h3>
                  <p className="text-gray-600 mb-6">We're always looking for talented individuals. Send us your resume!</p>
                  <button
                    onClick={() => setShowApplicationModal(true)}
                    className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center shadow-lg"
                  >
                    Send General Application
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section - Enhanced Cards */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose TechFlow?</h2>
                <p className="text-xl text-gray-600">Amazing perks and benefits that make a difference</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105 group overflow-hidden">
                  <div className="p-8">
                    <div className={`bg-gradient-to-br ${benefit.gradient} rounded-2xl p-4 inline-block mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                      <div className="text-white">
                        {benefit.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                  <div className={`h-1 bg-gradient-to-r ${benefit.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values - Enhanced Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                <p className="text-xl text-gray-600">The principles that guide everything we do</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105 group border-l-4 border-blue-500">
                  <div className="p-8">
                    <div className={`text-${value.color}-600 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced Card */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl shadow-2xl overflow-hidden">
              <div className="p-8 md:p-12 text-white text-center">
                <div className="bg-white/20 rounded-full p-4 inline-block mb-6">
                  <Send className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
                <p className="text-xl mb-8 text-blue-100">
                  Join us in building the future of technology solutions. Your career growth starts here.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setShowApplicationModal(true)}
                    className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center shadow-lg"
                  >
                    Apply Now
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <JobModal 
        isOpen={showJobModal} 
        onClose={() => setShowJobModal(false)}
        onApply={handleApplyFromJob}
      />
      <ApplicationModal 
        isOpen={showApplicationModal} 
        onClose={() => setShowApplicationModal(false)}
      />
    </>
  );
};

export default Careers;