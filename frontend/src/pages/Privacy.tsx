import React from 'react';
import { Shield, Eye, Lock, Users, Mail, Phone } from 'lucide-react';

const Privacy = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: January 2025</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <Eye className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Introduction</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              TechFlow ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any way.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our services, you consent to the data practices described in this policy. If you do not agree with the practices described in this policy, please do not use our services.
            </p>
          </div>

          {/* Information We Collect Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-teal-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Information We Collect</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us, including:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Name and contact information (email address, phone number, mailing address)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Company information and job title</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Project requirements and business needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Payment information (processed securely through third-party providers)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Communication preferences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Resume and professional information (for job applications)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-teal-50 rounded-lg p-6 border-l-4 border-teal-600">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Automatically Collected Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you visit our website, we may automatically collect certain information:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>IP address and location information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Browser type and version</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Device information and operating system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Pages visited and time spent on our website</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Referring website and search terms used</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Cookies and similar tracking technologies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Information Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <Lock className="h-8 w-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>
            <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-600">
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Providing and maintaining our services</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Processing and fulfilling your requests</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Communicating with you about our services</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Sending you marketing communications (with your consent)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Improving our website and services</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Analyzing usage patterns and trends</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Preventing fraud and ensuring security</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Complying with legal obligations</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Processing job applications and recruitment</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Information Sharing Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Information Sharing and Disclosure</h2>
            <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-600">
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our business</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Consent:</strong> With your explicit consent for specific purposes</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Data Security Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Measures</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Encryption of data in transit and at rest</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Regular security assessments and updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Access controls and authentication measures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Employee training on data protection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Secure hosting and infrastructure</span>
                  </li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Important Note</h3>
                <p className="text-gray-700 leading-relaxed">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </div>
            </div>
          </div>

          {/* Your Rights Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Access:</strong> Request access to your personal information</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Correction:</strong> Request correction of inaccurate information</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Deletion:</strong> Request deletion of your personal information</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Portability:</strong> Request a copy of your data in a portable format</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Opt-out:</strong> Unsubscribe from marketing communications</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Restriction:</strong> Request restriction of processing in certain circumstances</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>
          </div>

          {/* Additional Policies Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Privacy Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Retention</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.
                  </p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-600">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Third-Party Links</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-pink-600">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Children's Privacy</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.
                  </p>
                </div>
                <div className="bg-cyan-50 rounded-lg p-6 border-l-4 border-cyan-600">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">International Transfers</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Your information may be transferred to and processed in countries other than your own with appropriate safeguards in place.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <Mail className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
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
          <h2 className="text-4xl font-bold mb-4">Questions About Our Privacy Policy?</h2>
          <p className="text-xl mb-8">
            We're here to help you understand how we protect your information
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

export default Privacy;