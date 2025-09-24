import React from 'react';
import { FileText, Scale, Shield, AlertTriangle, Mail, Phone } from 'lucide-react';

const Terms = () => {
  return (
    <div>
      {/* Hero Section with Card Design */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center mb-6">
                <Scale className="h-12 w-12 text-blue-600 mr-4" />
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  <h1 className="text-5xl font-bold">Terms of Service</h1>
                </div>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 leading-relaxed mb-4">
                These terms govern your use of our services. Please read them carefully before engaging with our technology solutions.
              </p>
              <p className="text-sm text-gray-500">Last updated: January 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            
            {/* Agreement to Terms */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Agreement to Terms</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and TechFlow ("Company," "we," "our," or "us") regarding your use of our website, services, and products.
                </p>
                <p>
                  By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
                </p>
              </div>
            </div>

            {/* Our Services */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  TechFlow provides technology consulting and development services, including but not limited to:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>Data Analytics and Business Intelligence solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>Artificial Intelligence and Machine Learning development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>Web Development and Application Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>Technology consulting and strategy services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>Custom software solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>Technical support and maintenance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-teal-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">User Responsibilities</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  By using our services, you agree to:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>Provide accurate and complete information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>Use our services only for lawful purposes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>Respect intellectual property rights</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>Not interfere with or disrupt our services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>Maintain the confidentiality of your account credentials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>Comply with all applicable laws and regulations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>Not use our services to harm others or engage in illegal activities</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Payment Terms</h2>
              
              <div className="space-y-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pricing and Fees</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <span>All prices are listed in Indian Rupees (INR) unless otherwise specified</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <span>Prices are subject to change with 30 days' notice</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <span>Custom project pricing will be provided in detailed proposals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <span>Additional work beyond the agreed scope may incur extra charges</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-teal-50 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Payment Schedule</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <span>One-time projects: 50% upfront, 50% upon completion (unless otherwise agreed)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <span>Large projects may have milestone-based payment schedules</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <span>Late payments may incur a 2% monthly service charge</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Refunds</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Refund policies vary by service type. Please refer to our Refund Policy for detailed information about cancellations and refunds.
                  </p>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property Rights</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Intellectual Property</h3>
                  <p className="text-gray-700 leading-relaxed">
                    All content, features, and functionality of our services, including but not limited to text, graphics, logos, software, and design, are owned by TechFlow and are protected by copyright, trademark, and other intellectual property laws.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Client Work Product</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <span>Upon full payment, clients receive ownership of custom-developed solutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <span>We retain rights to general methodologies, techniques, and know-how</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <span>We may use anonymized project data for case studies with client consent</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <span>Third-party tools and libraries remain subject to their respective licenses</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Confidentiality */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Confidentiality</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  We understand the sensitive nature of business information and are committed to maintaining confidentiality:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>All client information is treated as confidential</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>We implement appropriate security measures to protect data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>Team members sign confidentiality agreements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>Information is only shared with authorized personnel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>Separate NDAs may be executed for sensitive projects</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service Level Agreements */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Level Agreements</h2>
              
              <div className="space-y-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Response Times</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <span>Email inquiries: Within 24 hours during business days</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <span>Support requests: Within 48 hours for standard support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <span>Emergency issues: Within 4 hours for critical systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <span>Project updates: Weekly status reports for ongoing projects</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-teal-50 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Availability</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We strive for 99.9% uptime for hosted services, with planned maintenance scheduled during off-peak hours with advance notice.
                  </p>
                </div>
              </div>
            </div>

            {/* Limitations of Liability */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-8 w-8 text-orange-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Limitations of Liability</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  To the maximum extent permitted by law:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>Our total liability shall not exceed the amount paid for the specific service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>We are not liable for indirect, incidental, or consequential damages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>We do not guarantee specific business outcomes or results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>Clients are responsible for backing up their data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>Force majeure events are excluded from liability</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Warranties and Disclaimers */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Warranties and Disclaimers</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Warranties</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <span>We warrant that our services will be performed in a professional manner</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <span>We provide a 30-day warranty on deliverables for defects in workmanship</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <span>We warrant compliance with applicable laws and regulations</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimers</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Except as expressly stated, our services are provided "as is" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                  </p>
                </div>
              </div>
            </div>

            {/* Termination */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
              
              <div className="space-y-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Termination by Client</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <span>Ongoing projects: Subject to completion of current milestones</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <span>Immediate termination possible with payment for work completed</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-teal-50 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Termination by TechFlow</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <span>30 days' notice for convenience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <span>Immediate termination for breach of terms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <span>Non-payment after 30 days past due</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dispute Resolution</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  We are committed to resolving disputes amicably:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>Initial disputes should be addressed through direct communication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>Mediation may be pursued for unresolved issues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>Arbitration may be required for significant disputes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>Indian law governs these terms and any disputes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span>Courts in Gujarat, India have exclusive jurisdiction</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update these Terms from time to time. Material changes will be communicated via email or website notice at least 30 days in advance. Continued use of our services after changes take effect constitutes acceptance of the new terms.
              </p>
            </div>

            {/* Governing Law */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms are governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Gujarat, India.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Mail className="h-8 w-8 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>
              </div>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
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