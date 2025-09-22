import React, { useState } from 'react';
import { MapPin, Clock, DollarSign, Users, Code, Zap, Send, CheckCircle, FileText, Briefcase } from 'lucide-react';
import JobModal from '../components/JobModal';
import ApplicationModal from '../components/ApplicationModal';

const Careers = () => {
  const [showJobModal, setShowJobModal] = useState(false);
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  const openPositions = [
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote',
      salary: '₹3-8 LPA',
      description: 'Join our team to build cutting-edge web applications and AI solutions.',
      requirements: ['2+ years experience', 'React/Node.js', 'TypeScript'],
      posted: '2 days ago'
    }
  ];

  const handleApplyFromJob = () => {
    setShowJobModal(false);
    setShowApplicationModal(true);
  };

  return (
    <>
      <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Be part of an exciting startup journey! We're looking for passionate developers who want to make a real impact 
              and grow with us as we build innovative solutions for businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">Join our growing team and make an impact</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                   onClick={() => setShowJobModal(true)}>
                <div className="flex items-center mb-4">
                  <Briefcase className="h-8 w-8 text-blue-600 mr-3 group-hover:text-teal-600 transition-colors duration-300" />
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium group-hover:bg-teal-100 group-hover:text-teal-800 transition-colors duration-300">
                    {position.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {position.title}
                </h3>
                <p className="text-gray-600 mb-4">{position.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <DollarSign className="h-4 w-4 mr-2" />
                    <span>{position.salary}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Posted {position.posted}</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {position.requirements.map((req, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {req}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 group-hover:bg-teal-600">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={() => setShowApplicationModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center"
            >
              Apply Now
              <Send className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
      {/* Why Join Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join TechFlow?</h2>
            <p className="text-xl text-gray-600">Be part of something special from the ground up</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105 group">
              <div className="bg-blue-100 rounded-full p-4 inline-block mb-4 group-hover:bg-blue-600 group-hover:shadow-lg group-hover:shadow-blue-300/50 transition-all duration-300">
                <Zap className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Startup Energy</h3>
              <p className="text-gray-600">Experience the excitement of building something from scratch with direct impact on company growth and direction.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105 group">
              <div className="bg-teal-100 rounded-full p-4 inline-block mb-4 group-hover:bg-teal-600 group-hover:shadow-lg group-hover:shadow-teal-300/50 transition-all duration-300">
                <Users className="h-8 w-8 text-teal-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">Direct Mentorship</h3>
              <p className="text-gray-600">Work closely with our experienced founder and get personalized guidance to accelerate your career growth.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105 group">
              <div className="bg-orange-100 rounded-full p-4 inline-block mb-4 group-hover:bg-orange-600 group-hover:shadow-lg group-hover:shadow-orange-300/50 transition-all duration-300">
                <Code className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">Latest Technologies</h3>
              <p className="text-gray-600">Work with cutting-edge technologies including AI, modern web frameworks, and cloud platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">
            Join us in building the future of technology solutions. Your career growth starts here.
          </p>
          <button
            onClick={() => setShowApplicationModal(true)}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center"
          >
            Apply Now
            <Send className="ml-2 h-5 w-5" />
          </button>
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