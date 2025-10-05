import React, { useState } from 'react';
import { Send, CheckCircle, X, Loader, AlertCircle } from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    portfolio: '',
    coverLetter: '',
    availability: '',
    expectedSalary: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');
  const [applicationId, setApplicationId] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (submitError) {
      setSubmitError('');
    }
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setSubmitError('Please enter your full name');
      return false;
    }
    if (!formData.email.trim()) {
      setSubmitError('Please enter your email address');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setSubmitError('Please enter a valid email address');
      return false;
    }
    if (!formData.phone.trim()) {
      setSubmitError('Please enter your phone number');
      return false;
    }
    if (!formData.experience) {
      setSubmitError('Please select your experience level');
      return false;
    }
    if (!formData.portfolio.trim()) {
      setSubmitError('Please provide your portfolio/GitHub URL');
      return false;
    }
    if (!formData.coverLetter.trim()) {
      setSubmitError('Please write a cover letter');
      return false;
    }
    if (formData.coverLetter.trim().length < 50) {
      setSubmitError('Cover letter must be at least 50 characters');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      
      const response = await fetch(`${BACKEND_URL}/careers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error(`Server returned ${response.status}: ${response.statusText}. Expected JSON response.`);
      }

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        setApplicationId(result.application_id || '');
        
        if (window.gtag) {
          window.gtag('event', 'career_application', {
            event_category: 'engagement',
            event_label: formData.experience,
            value: 1
          });
        }
      } else {
        throw new Error(result.message || result.error || `Server error: ${response.status}`);
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        setSubmitError('Network error: Unable to connect to server. Please check your internet connection and try again.');
      } else {
        setSubmitError(
          error instanceof Error 
            ? error.message 
            : 'Failed to submit application. Please try again or contact us directly.'
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setSubmitError('');
    setApplicationId('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      experience: '',
      portfolio: '',
      coverLetter: '',
      availability: '',
      expectedSalary: ''
    });
  };

  if (!isOpen) return null;

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose}></div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full max-w-md">
            <div className="bg-white px-6 pt-6 pb-4">
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 inline-block mb-6">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted!</h3>
                {applicationId && (
                  <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <p className="text-sm text-blue-800 font-medium">Your Application ID</p>
                    <p className="text-lg font-bold text-blue-900">{applicationId}</p>
                    <p className="text-xs text-blue-600 mt-1">Please save this ID for your records</p>
                  </div>
                )}
                <p className="text-gray-600 mb-6">
                  Thank you for your interest in joining TechFlow! We've received your application and sent you a confirmation email. Our team will review your application and get back to you within 5-7 business days.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center text-green-600 bg-green-50 p-3 rounded-lg">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="text-sm">Confirmation email sent to your inbox</span>
                  </div>
                  <div className="flex items-center justify-center text-blue-600 bg-blue-50 p-3 rounded-lg">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="text-sm">HR team has been notified</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      resetForm();
                      onClose();
                    }}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    Close
                  </button>
                  <button
                    onClick={resetForm}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    Apply for Another Position
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose}></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
        
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full max-w-2xl">
          <div className="bg-white px-6 pt-6 pb-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Job Application</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Error Display */}
            {submitError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                  <p className="text-red-700 font-medium">{submitError}</p>
                </div>
              </div>
            )}
            
            <div className="max-h-[70vh] overflow-y-auto pr-2">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                      Years of Experience *
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      required
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select experience</option>
                      <option value="0-1 years">0-1 years</option>
                      <option value="1-2 years">1-2 years</option>
                      <option value="2-4 years">2-4 years</option>
                      <option value="4-6 years">4-6 years</option>
                      <option value="6+ years">6+ years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">
                    Portfolio/GitHub URL *
                  </label>
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    required
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="https://github.com/johndoe or https://portfolio.com"
                  />
                  <p className="text-xs text-gray-500 mt-1">Share your GitHub profile, portfolio website, or LinkedIn</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                      Availability
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select availability</option>
                      <option value="Immediate">Immediate</option>
                      <option value="2 weeks notice">2 weeks notice</option>
                      <option value="1 month notice">1 month notice</option>
                      <option value="2 months notice">2 months notice</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="expectedSalary" className="block text-sm font-medium text-gray-700 mb-1">
                      Expected Salary (LPA)
                    </label>
                    <input
                      type="text"
                      id="expectedSalary"
                      name="expectedSalary"
                      value={formData.expectedSalary}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., 5-7 LPA or Negotiable"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
                    Cover Letter *
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    required
                    rows={5}
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us why you're interested in joining TechFlow and what makes you a great fit for this role. Include relevant experience, skills, and achievements..."
                  />
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-xs text-gray-500">Minimum 50 characters</p>
                    <p className="text-xs text-gray-500">{formData.coverLetter.length} characters</p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                    />
                    <label htmlFor="consent" className="ml-3 block text-sm text-gray-700">
                      I agree to receive communications from TechFlow regarding my application and understand that I can unsubscribe at any time. By submitting this application, I confirm that all information provided is accurate. *
                    </label>
                  </div>
                </div>
              </form>
            </div>
            
            <div className="bg-gray-50 px-6 py-4 mt-6 flex justify-end space-x-3 rounded-b-lg">
              <button
                onClick={onClose}
                disabled={isSubmitting}
                className="bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-medium transition-colors duration-200 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="animate-spin h-4 w-4 mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Extend window interface for gtag (Google Analytics)
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: any) => void;
  }
}

export default ApplicationModal;