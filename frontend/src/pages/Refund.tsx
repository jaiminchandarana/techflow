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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Overview */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="h-8 w-8 text-blue-600 mr-3" />
                Our Commitment to You
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At TechFlow, we are committed to delivering high-quality services that meet your expectations. This refund policy outlines the circumstances under which refunds may be provided and the process for requesting them.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                We believe in transparency and fairness, and this policy is designed to protect both our clients and our business while ensuring satisfaction with our services.
              </p>
            </div>

            {/* Service-Specific Policies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <CreditCard className="h-8 w-8 text-teal-600 mr-3" />
                Service-Specific Refund Policies
              </h2>
              
              {/* Data Analytics */}
              <div className="mb-8 bg-blue-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Data Analytics & Visualization Services</h3>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Monthly Subscription Services</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li><strong>First 7 days:</strong> Full refund if not satisfied with initial setup</li>
                  <li><strong>After 7 days:</strong> Pro-rated refund for unused portion of the month</li>
                  <li><strong>Cancellation:</strong> 30 days' notice required, no refund for current month</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3">One-time Dashboard Projects</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Before work begins:</strong> Full refund minus 10% processing fee</li>
                  <li><strong>After initial mockup:</strong> 75% refund available</li>
                  <li><strong>After 50% completion:</strong> 50% refund available</li>
                  <li><strong>After final delivery:</strong> No refund, but unlimited revisions for 30 days</li>
                </ul>
              </div>

              {/* AI/ML Services */}
              <div className="mb-8 bg-teal-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI & Machine Learning Services</h3>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Custom AI Development</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li><strong>Planning phase (first 25%):</strong> 90% refund available</li>
                  <li><strong>Development phase (25-75%):</strong> 50% refund available</li>
                  <li><strong>Testing phase (75-90%):</strong> 25% refund available</li>
                  <li><strong>Deployment phase (90%+):</strong> No refund, but 60 days of free support</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3">AI Consulting Services</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Hourly consulting:</strong> No refund for completed hours</li>
                  <li><strong>Project-based consulting:</strong> Refund available for undelivered milestones</li>
                </ul>
              </div>

              {/* Web Development */}
              <div className="mb-8 bg-orange-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Web Development Services</h3>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Website Development</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li><strong>Design phase:</strong> 80% refund if design doesn't meet requirements</li>
                  <li><strong>Development phase:</strong> 50% refund for major functionality issues</li>
                  <li><strong>After launch:</strong> No refund, but 90 days of free bug fixes</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-3">Maintenance Services</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Monthly maintenance:</strong> Pro-rated refund for unused services</li>
                  <li><strong>Emergency fixes:</strong> Full refund if issue not resolved within 24 hours</li>
                </ul>
              </div>
            </div>

            {/* Refund Conditions */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertCircle className="h-8 w-8 text-orange-600 mr-3" />
                Refund Conditions and Limitations
              </h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Eligible Refund Scenarios</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Services not delivered as specified in the agreement</li>
                <li>Major functionality failures that cannot be resolved</li>
                <li>Cancellation within the specified timeframe</li>
                <li>Duplicate payments or billing errors</li>
                <li>Services cancelled due to our inability to deliver</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Non-Refundable Scenarios</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Change of mind after work has commenced</li>
                <li>Failure to provide necessary information or access</li>
                <li>Requests for features beyond the original scope</li>
                <li>Third-party service costs (hosting, licenses, etc.)</li>
                <li>Services completed and delivered as agreed</li>
                <li>Refund requests made after 60 days of service completion</li>
              </ul>
            </div>

            {/* Refund Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="h-8 w-8 text-blue-600 mr-3" />
                Refund Request Process
              </h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">How to Request a Refund</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-3 mb-6">
                <li><strong>Contact us immediately:</strong> Email chandaranajaimin@gmail.com with your refund request</li>
                <li><strong>Provide details:</strong> Include project details, reason for refund, and supporting documentation</li>
                <li><strong>Allow review time:</strong> We will review your request within 3-5 business days</li>
                <li><strong>Receive decision:</strong> We will communicate our decision and next steps</li>
                <li><strong>Processing:</strong> Approved refunds are processed within 7-10 business days</li>
              </ol>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Required Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Project or service name and date</li>
                <li>Invoice number and payment details</li>
                <li>Detailed reason for refund request</li>
                <li>Supporting documentation (if applicable)</li>
                <li>Preferred refund method</li>
              </ul>
            </div>

            {/* Processing Times */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Processing Times and Methods</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Refund Processing Times</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li><strong>Bank transfers:</strong> 3-5 business days</li>
                <li><strong>Credit card refunds:</strong> 5-10 business days</li>
                <li><strong>Digital wallet refunds:</strong> 1-3 business days</li>
                <li><strong>International transfers:</strong> 7-14 business days</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Refund Methods</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Refunds will be processed using the same payment method used for the original transaction. In cases where this is not possible, we will work with you to find an alternative method.
              </p>
            </div>

            {/* Partial Refunds */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Partial Refunds and Credits</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In some cases, partial refunds or service credits may be more appropriate than full refunds:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li><strong>Partial delivery:</strong> Refund for undelivered portions</li>
                <li><strong>Service credits:</strong> Credits toward future services</li>
                <li><strong>Revised scope:</strong> Refund difference for reduced project scope</li>
                <li><strong>Performance issues:</strong> Partial refund for substandard delivery</li>
              </ul>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you disagree with our refund decision, we offer the following resolution process:
              </p>
              <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
                <li>Request a review with additional documentation</li>
                <li>Schedule a call to discuss the situation</li>
                <li>Seek mediation through a neutral third party</li>
                <li>Escalate to formal dispute resolution if necessary</li>
              </ol>
            </div>

            {/* Exceptions */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Special Circumstances</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Force Majeure</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                In cases of force majeure (natural disasters, pandemics, etc.) that prevent service delivery, we will work with clients to reschedule services or provide appropriate refunds.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technical Failures</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If technical failures on our end prevent service delivery, we will provide full refunds or alternative solutions at no additional cost.
              </p>
            </div>

            {/* Policy Updates */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Policy Updates</h2>
              <p className="text-gray-700 leading-relaxed">
                This refund policy may be updated from time to time. Material changes will be communicated to existing clients via email. The updated policy will apply to new agreements signed after the effective date.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Mail className="h-8 w-8 text-blue-600 mr-3" />
                Contact Us About Refunds
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                For refund requests or questions about this policy, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Email: chandaranajaimin@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Phone: +91 74908 24904</span>
                  </div>
                  <div className="text-gray-700">
                    <p className="font-semibold">Business Hours:</p>
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