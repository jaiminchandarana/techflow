import React from 'react';
import { RefreshCw, Clock, CreditCard, AlertCircle, Mail, Phone, CheckCircle } from 'lucide-react';

const Refund = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <RefreshCw className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Refund Policy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We stand behind our work and want you to be completely satisfied. Here's our comprehensive refund policy.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: January 2025</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Overview Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <CheckCircle className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Our Commitment to You</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              At TechFlow, we are committed to delivering high-quality services that meet your expectations. This refund policy outlines the circumstances under which refunds may be provided and the process for requesting them.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe in transparency and fairness, and this policy is designed to protect both our clients and our business while ensuring satisfaction with our services.
            </p>
          </div>

          {/* Service-Specific Policies */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <CreditCard className="h-8 w-8 text-teal-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Service-Specific Refund Policies</h2>
            </div>
            
            {/* Data Analytics Sub-card */}
            <div className="bg-blue-50 rounded-lg p-6 mb-6 border-l-4 border-blue-600">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Data Analytics & Visualization Services</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Project-Based Analytics</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Before work begins:</strong> Full refund minus 10% processing fee</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>After initial analysis:</strong> 75% refund available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>After 50% completion:</strong> 50% refund available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>After final delivery:</strong> No refund, but unlimited revisions for 30 days</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Dashboard Development</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Design phase:</strong> 80% refund if design doesn't meet requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Development phase:</strong> 50% refund for major functionality issues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>After delivery:</strong> No refund, but 60 days of free support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* AI/ML Services Sub-card */}
            <div className="bg-teal-50 rounded-lg p-6 mb-6 border-l-4 border-teal-600">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI & Machine Learning Services</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Custom AI Development</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Planning phase (first 25%):</strong> 90% refund available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Development phase (25-75%):</strong> 50% refund available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Testing phase (75-90%):</strong> 25% refund available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Deployment phase (90%+):</strong> No refund, but 60 days of free support</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">AI Consulting Services</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Hourly consulting:</strong> No refund for completed hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Project-based consulting:</strong> Refund available for undelivered milestones</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Web Development Sub-card */}
            <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-600">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Web Development Services</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Website Development</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Design phase:</strong> 80% refund if design doesn't meet requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Development phase:</strong> 50% refund for major functionality issues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>After launch:</strong> No refund, but 90 days of free bug fixes</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Maintenance & Support</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Ongoing maintenance:</strong> Pro-rated refund for unused services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Emergency fixes:</strong> Full refund if issue not resolved within 24 hours</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Refund Conditions Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <AlertCircle className="h-8 w-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Refund Conditions and Limitations</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Eligible Refund Scenarios</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Services not delivered as specified in the agreement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Major functionality failures that cannot be resolved</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Cancellation within the specified timeframe</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Duplicate payments or billing errors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Services cancelled due to our inability to deliver</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-600">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Non-Refundable Scenarios</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Change of mind after work has commenced</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Failure to provide necessary information or access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Requests for features beyond the original scope</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Third-party service costs (hosting, licenses, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Services completed and delivered as agreed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Refund Process Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <Clock className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Refund Request Process</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">How to Request a Refund</h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">1</span>
                    <span><strong>Contact us immediately:</strong> Email chandaranajaimin@gmail.com with your refund request</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">2</span>
                    <span><strong>Provide details:</strong> Include project details, reason for refund, and supporting documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">3</span>
                    <span><strong>Allow review time:</strong> We will review your request within 3-5 business days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">4</span>
                    <span><strong>Receive decision:</strong> We will communicate our decision and next steps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">5</span>
                    <span><strong>Processing:</strong> Approved refunds are processed within 7-10 business days</span>
                  </li>
                </ol>
              </div>

              <div className="bg-teal-50 rounded-lg p-6 border-l-4 border-teal-600">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Required Information</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Project or service name and date</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Invoice number and payment details</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Detailed reason for refund request</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Supporting documentation (if applicable)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Preferred refund method</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Processing Times Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Processing Times and Methods</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-600">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Refund Processing Times</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Bank transfers:</strong> 3-5 business days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Credit card refunds:</strong> 5-10 business days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>Digital wallet refunds:</strong> 1-3 business days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span><strong>International transfers:</strong> 7-14 business days</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Refund Methods</h3>
                <p className="text-gray-700 leading-relaxed">
                  Refunds will be processed using the same payment method used for the original transaction. In cases where this is not possible, we will work with you to find an alternative method.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <Mail className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Contact Us About Refunds</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              For refund requests or questions about this policy, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">chandaranajaimin@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">+91 74908 24904</span>
                  </div>
                  <div className="text-gray-700">
                    <p className="font-semibold mb-2">Business Hours:</p>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                    <p>Response time: Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Questions About Our Refund Policy?</h2>
          <p className="text-xl mb-8">
            We're here to help clarify any concerns about our refund process
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center"
          >
            Contact Us
            <Mail className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Refund;