import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
  budget: string;
  timeline: string;
  description: string;
}

interface ApiResponse {
  success: boolean;
  inquiry_id?: string;
  message: string;
  error?: string;
  details?: {
    client_email_sent: boolean;
    admin_email_sent: boolean;
  };
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    budget: '',
    timeline: '',
    description: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');
  const [inquiryId, setInquiryId] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear any previous errors when user starts typing
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
    if (!formData.service) {
      setSubmitError('Please select a service you\'re interested in');
      return false;
    }
    if (!formData.message.trim()) {
      setSubmitError('Please describe your project requirements');
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
    console.log('Submitting form data:', formData);
    
    const response = await fetch('https://techflow-backend-t4zw.onrender.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));
    
    // Check if response is JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error(`Server returned ${response.status}: ${response.statusText}. Expected JSON response.`);
    }

    const result: ApiResponse = await response.json();
    console.log('Response data:', result);

    if (response.ok && result.success) {
      setIsSubmitted(true);
      setInquiryId(result.inquiry_id || '');
      
      // Optional: Track successful submissions
      if (window.gtag) {
        window.gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: formData.service,
          value: 1
        });
      }
    } else {
      throw new Error(result.message || result.error || `Server error: ${response.status}`);
    }
  } catch (error) {
    console.error('Error sending message:', error);
    
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      setSubmitError('Network error: Unable to connect to server. Please check your internet connection and try again.');
    } else {
      setSubmitError(
        error instanceof Error 
          ? error.message 
          : 'Failed to send message. Please try again or contact us directly.'
      );
    }
  } finally {
    setIsSubmitting(false);
  }
};

  const resetForm = () => {
    setIsSubmitted(false);
    setSubmitError('');
    setInquiryId('');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: '',
      budget: '',
      timeline: '',
      description: ''
    });
  };

  const services = [
    'Data Analytics & Visualization',
    'AI & Machine Learning',
    'Web Development',
  ];

  const budgetRanges = [
    'Less then ₹3,000',
    '₹3,000 - ₹5,000',
    '₹5,000 - ₹10,000',
    '₹10,000+',
    'Not sure yet'
  ];

  const timelines = [
    'ASAP',
    '3-4 weeks',
    '5-6 weeks',
    '6+ weeks',
    'Flexible'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center px-4">
        <div className="max-w-lg w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="bg-green-100 rounded-full p-4 inline-block mb-6">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
              {inquiryId && (
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-blue-800 font-medium">Your Inquiry ID</p>
                  <p className="text-lg font-bold text-blue-900">{inquiryId}</p>
                  <p className="text-xs text-blue-600 mt-1">Please save this ID for your records</p>
                </div>
              )}
              <p className="text-gray-600">
                We've received your message and sent you a confirmation email. Our team will get back to you within 24 hours with a detailed response.
              </p>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center text-green-600 bg-green-50 p-3 rounded-lg">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span className="text-sm">Confirmation email sent to your inbox</span>
              </div>
              <div className="flex items-center justify-center text-blue-600 bg-blue-50 p-3 rounded-lg">
                <Mail className="h-5 w-5 mr-2" />
                <span className="text-sm">Our team has been notified</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/services"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                View Our Services
              </a>
              <button
                onClick={resetForm}
                className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section with Card Design */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Ready to transform your business with intelligent technology? We'd love to hear about your project and discuss how we can help you achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                <div className="bg-white rounded-xl p-6 mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Start a Conversation</h2>
                  <p className="text-gray-600">
                    Whether you're looking to build a new solution, optimize existing systems, or explore AI opportunities, we're here to help. Get in touch and let's discuss your vision.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 hover:shadow-md transition-all duration-300 border-l-4 border-blue-600">
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                        <Phone className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Phone</h3>
                        <p className="text-gray-600">+91 74908 24904</p>
                        <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM IST</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 hover:shadow-md transition-all duration-300 border-l-4 border-teal-600">
                    <div className="flex items-start">
                      <div className="bg-teal-100 rounded-full p-2 mr-4 mt-1">
                        <Mail className="h-5 w-5 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Email</h3>
                        <p className="text-gray-600">chandaranajaimin@gmail.com</p>
                        <p className="text-sm text-gray-500">We respond within 24 hours</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 hover:shadow-md transition-all duration-300 border-l-4 border-orange-600">
                    <div className="flex items-start">
                      <div className="bg-orange-100 rounded-full p-2 mr-4 mt-1">
                        <MapPin className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Office</h3>
                        <p className="text-gray-600">We are fully remote.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 hover:shadow-md transition-all duration-300 border-l-4 border-green-600">
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                        <Clock className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions Card */}
                <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-semibold text-gray-900 mb-4 text-center">Need Immediate Help?</h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+917490824904"
                      className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium text-center transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                      <Phone className="inline h-4 w-4 mr-2" />
                      Call Now
                    </a>
                    <a
                      href="mailto:chandaranajaimin@gmail.com"
                      className="block bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 px-4 py-3 rounded-lg font-medium text-center transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                      <Mail className="inline h-4 w-4 mr-2" />
                      Send Email
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl p-8">
                <div className="bg-white rounded-xl p-6 mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Request a Free Consultation</h2>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
                </div>
                
                {/* Error Display */}
                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                      <p className="text-red-700 font-medium">{submitError}</p>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                        placeholder="Rohit Pujara"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                        placeholder="rohit@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                        placeholder="Your Company"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                        placeholder="+91 74908 24904"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                      >
                        <option value="">Select a service</option>
                        {services.map(service => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                      >
                        <option value="">Select budget</option>
                        {budgetRanges.map(range => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-white"
                      placeholder="Tell us about your project, challenges, and goals. The more details you provide, the better we can understand your needs and provide accurate recommendations."
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Details
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-white"
                      placeholder="Any additional information about your project requirements, timeline, or specific needs..."
                    />
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="consent"
                        required
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                      />
                      <label htmlFor="consent" className="ml-3 block text-sm text-gray-700">
                        I agree to receive communications from TechFlow and understand that I can unsubscribe at any time. *
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none flex items-center justify-center shadow-md hover:shadow-lg disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="animate-spin h-5 w-5 mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
                
                <div className="bg-white rounded-lg p-4 mt-4">
                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our{' '}
                    <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="/terms" className="text-blue-600 hover:text-blue-800 underline">
                      Terms of Service
                    </a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Quick answers to common questions</p>
            </div>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary depending on complexity and scope. Simple websites typically take 4-8 weeks, while complex AI or data analytics projects may take 3-4 months. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you offer ongoing support and maintenance?",
                answer: "Yes, we provide comprehensive support and maintenance packages. Our standard support includes bug fixes, security updates, and basic modifications. We also offer enhanced support plans with priority response times and dedicated resources."
              },
              {
                question: "What is your pricing structure?",
                answer: "Our pricing varies by service and project complexity. We offer both fixed-price projects and hourly rates. All projects start with a free consultation where we'll provide a detailed proposal with transparent pricing."
              },
              {
                question: "Do you work with startups or only enterprise clients?",
                answer: "We work with businesses of all sizes, from early-stage startups to Fortune 500 companies. We have flexible engagement models and pricing structures to accommodate different budgets and needs."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "We specialize in modern web technologies (React, Node.js, Python), cloud platforms (AWS, Azure, GCP), AI/ML frameworks (TensorFlow, PyTorch), and data tools (Tableau, Power BI, Snowflake). We stay current with the latest industry trends and technologies."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                </div>
                <div className="p-6 pt-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Schedule a free consultation and let's discuss how we can help transform your business
            </p>
            <a
              href="tel:+917490824904"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center shadow-lg hover:shadow-xl"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +91 74908 24904
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Extend window interface for gtag (Google Analytics)
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: any) => void;
  }
}

export default Contact;