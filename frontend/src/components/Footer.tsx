import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin} from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/techflow-logo.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    try {
      const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      
      const response = await fetch(`${BACKEND_URL}/newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubscribed(true);
        setEmail('');
        setTimeout(() => setIsSubscribed(false), 3000);
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      alert('Failed to subscribe. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

  const services = [
    { name: 'Data Analytics & Visualization', href: '/services#data-analytics' },
    { name: 'AI & Machine Learning', href: '/services#ai-ml' },
    { name: 'Web Development', href: '/services#web-development' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Refund Policy', href: '/refund' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src={logo} 
                alt="TechFlow - IT Solutions Company" 
                className="h-8 sm:h-8 md:h-10 lg:h-16 xl:h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6">
              A passionate startup delivering innovative IT solutions. We help businesses leverage technology for growth and competitive advantage.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/jaimin-chandarana-903158225/" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3" />
                <span>+91 74908 24904</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3" />
                <span>chandaranajaimin@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3" />
                <span>We are fully remote.</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Stay Updated</h4>
              {isSubscribed ? (
                <div className="bg-green-600 text-white px-4 py-2 rounded-lg text-center">
                  Successfully subscribed!
                </div>
              ) : (
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                  type="submit"
                  disabled={isSubscribing}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-r-lg transition-colors duration-200"
                >
                  {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 TechFlow. All rights reserved. | 
            <Link to="/privacy" className="hover:text-white ml-1">Privacy Policy</Link> |
            <Link to="/terms" className="hover:text-white ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;