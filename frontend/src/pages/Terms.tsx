import React from 'react';
import { FileText, Scale, Shield, AlertTriangle, Mail, Phone } from 'lucide-react';

const Terms = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Scale className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Terms of Service</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These terms govern your use of our services. Please read them carefully before using our platform.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: January 2025</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="h-8 w-8 text-blue-600 mr-3" />
                Agreement to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and TechFlow ("Company," "we," "our," or "us") regarding your use of our website, services, and products.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
              </p>
            </div>

            {/* Services Description */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TechFlow provides technology consulting and development services, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Data Analytics and Business Intelligence solutions</li>
                <li>Artificial Intelligence and Machine Learning development</li>
                <li>Web Development and Application Development</li>
                <li>Technology consulting and strategy services</li>
                <li>Custom software solutions</li>
                <li>Technical support and maintenance</li>
              </ul>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="h-8 w-8 text-teal-600 mr-3" />
                User Responsibilities
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By using our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Provide accurate and complete information</li>
                <li>Use our services only for lawful purposes</li>
                <li>Respect intellectual property rights</li>
                <li>Not interfere with or disrupt our services</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use our services to harm others or engage in illegal activities</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Payment Terms</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pricing and Fees</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>All prices are listed in Indian Rupees (INR) unless otherwise specified</li>
                <li>Prices are subject to change with 30 days' notice</li>
                <li>Custom project pricing will be provided in detailed proposals</li>
                <li>Additional work beyond the agreed scope may incur extra charges</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Payment Schedule</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Monthly services: Payment due at the beginning of each billing cycle</li>
                <li>Project-based work: 50% upfront, 50% upon completion (unless otherwise agreed)</li>
                <li>Large projects may have milestone-based payment schedules</li>
                <li>Late payments may incur a 2% monthly service charge</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Refunds</h3>
              <p className="text-gray-700 leading-relaxed">
                Refund policies vary by service type. Please refer to our Refund Policy for detailed information about cancellations and refunds.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property Rights</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Intellectual Property</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, software, and design, are owned by TechFlow and are protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Client Work Product</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Upon full payment, clients receive ownership of custom-developed solutions</li>
                <li>We retain rights to general methodologies, techniques, and know-how</li>
                <li>We may use anonymized project data for case studies with client consent</li>
                <li>Third-party tools and libraries remain subject to their respective licenses</li>
              </ul>
            </div>

            {/* Confidentiality */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Confidentiality</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We understand the sensitive nature of business information and are committed to maintaining confidentiality:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>All client information is treated as confidential</li>
                <li>We implement appropriate security measures to protect data</li>
                <li>Team members sign confidentiality agreements</li>
                <li>Information is only shared with authorized personnel</li>
                <li>Separate NDAs may be executed for sensitive projects</li>
              </ul>
            </div>

            {/* Service Level Agreements */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Level Agreements</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Response Times</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Email inquiries: Within 24 hours during business days</li>
                <li>Support requests: Within 48 hours for standard support</li>
                <li>Emergency issues: Within 4 hours for critical systems</li>
                <li>Project updates: Weekly status reports for ongoing projects</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Availability</h3>
              <p className="text-gray-700 leading-relaxed">
                We strive for 99.9% uptime for hosted services, with planned maintenance scheduled during off-peak hours with advance notice.
              </p>
            </div>

            {/* Limitations of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="h-8 w-8 text-orange-600 mr-3" />
                Limitations of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Our total liability shall not exceed the amount paid for the specific service</li>
                <li>We are not liable for indirect, incidental, or consequential damages</li>
                <li>We do not guarantee specific business outcomes or results</li>
                <li>Clients are responsible for backing up their data</li>
                <li>Force majeure events are excluded from liability</li>
              </ul>
            </div>

            {/* Warranties and Disclaimers */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Warranties and Disclaimers</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Warranties</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>We warrant that our services will be performed in a professional manner</li>
                <li>We provide a 30-day warranty on deliverables for defects in workmanship</li>
                <li>We warrant compliance with applicable laws and regulations</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimers</h3>
              <p className="text-gray-700 leading-relaxed">
                Except as expressly stated, our services are provided "as is" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Termination by Client</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Monthly services: 30 days' written notice required</li>
                <li>Project-based work: Subject to completion of current milestones</li>
                <li>Immediate termination possible with payment for work completed</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Termination by TechFlow</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>30 days' notice for convenience</li>
                <li>Immediate termination for breach of terms</li>
                <li>Non-payment after 30 days past due</li>
              </ul>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are committed to resolving disputes amicably:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Initial disputes should be addressed through direct communication</li>
                <li>Mediation may be pursued for unresolved issues</li>
                <li>Arbitration may be required for significant disputes</li>
                <li>Indian law governs these terms and any disputes</li>
                <li>Courts in Gujarat, India have exclusive jurisdiction</li>
              </ul>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update these Terms from time to time. Material changes will be communicated via email or website notice at least 30 days in advance. Continued use of our services after changes take effect constitutes acceptance of the new terms.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms are governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Gujarat, India.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Mail className="h-8 w-8 text-blue-600 mr-3" />
                Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have questions about these Terms of Service, please contact us:
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
                  <div className="flex items-start">
                    <FileText className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="text-gray-700 font-semibold">TechFlow</p>
                      <p className="text-gray-700">We are fully remote</p>
                    </div>
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
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Now that you understand our terms, let's discuss your project
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center"
          >
            Start Your Project
            <Mail className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Terms;