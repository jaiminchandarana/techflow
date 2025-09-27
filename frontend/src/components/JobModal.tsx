import React, {} from 'react';
import { MapPin, Clock, DollarSign, Code, Send, X } from 'lucide-react';

interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: () => void;
}

const JobModal: React.FC<JobModalProps> = ({ isOpen, onClose, onApply }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div 
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          onClick={onClose}
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full max-w-4xl">
          <div className="bg-white px-6 pt-6 pb-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Full Stack Developer</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="max-h-[70vh] overflow-y-auto pr-2">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl p-6 mb-6">
                <div className="flex items-center mb-4">
                  <Code className="h-8 w-8 mr-3" />
                  <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Full-time</span>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-blue-100">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>Remote</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-2" />
                    <span>₹3-8 LPA</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>Immediate</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">About the Role</h4>
                  <p className="text-gray-700 mb-3">
                    We're seeking a talented Full Stack Developer to join our growing startup team. You'll work directly with our founder 
                    to build cutting-edge web applications, AI-powered solutions, and data analytics platforms for our clients.
                  </p>
                  <p className="text-gray-700">
                    This is a unique opportunity to be part of a startup from its early stages, where your contributions will have a direct 
                    impact on our growth and success.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {[
                      'Develop and maintain full-stack web applications using modern technologies',
                      'Build responsive, user-friendly interfaces with React, Next.js, and Tailwind CSS',
                      'Design and implement RESTful APIs and database schemas',
                      'Integrate AI/ML models and data analytics solutions into web applications',
                      'Collaborate on project planning, architecture decisions, and code reviews',
                      'Optimize applications for performance, scalability, and security'
                    ].map((responsibility, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Required Skills</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Technical Skills</h5>
                      <ul className="space-y-1">
                        {[
                          'React.js & Next.js',
                          'Node.js & Express.js',
                          'TypeScript/JavaScript',
                          'HTML5, CSS3, Tailwind CSS',
                          'PostgreSQL/MongoDB',
                          'Git & GitHub'
                        ].map((skill, index) => (
                          <li key={index} className="flex items-center text-gray-700 text-sm">
                            <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2"></div>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Experience</h5>
                      <ul className="space-y-1">
                        {[
                          '2+ years of development experience',
                          'Strong problem-solving skills',
                          'Excellent communication abilities',
                          'Startup mindset & adaptability',
                          'Portfolio of completed projects'
                        ].map((quality, index) => (
                          <li key={index} className="flex items-center text-gray-700 text-sm">
                            <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></div>
                            {quality}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3">
              <button
                onClick={onClose}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                Close
              </button>
              <button
                onClick={onApply}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center"
              >
                Apply Now
                <Send className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobModal;