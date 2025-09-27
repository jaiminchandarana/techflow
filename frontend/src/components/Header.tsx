import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '@/assets/techflow-logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', hasDropdown: true },
    // { name: 'Testimonials', href: '/testimonials' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Data Analytics & Visualization', href: '/services#data-analytics' },
    { name: 'AI & Machine Learning', href: '/services#ai-ml' },
    { name: 'Web Development', href: '/services#web-development' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src={logo}
                alt="TechFlow - IT Solutions Company" 
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setShowServices(true)}
                      onMouseLeave={() => setShowServices(false)}
                    >
                      <button
                        onClick={() => {
                          if (location.pathname !== '/services') {
                            window.location.href = '/services';
                          }
                        }}
                        className={`${
                          location.pathname === item.href
                            ? 'text-blue-600'
                            : 'text-gray-700 hover:text-blue-600'
                        } px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200`}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {showServices && (
                        <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                          {services.map((service) => (
                            <a
                              key={service.name}
                              href={service.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                            >
                              {service.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`${
                        location.pathname === item.href
                          ? 'text-blue-600'
                          : 'text-gray-700 hover:text-blue-600'
                      } px-3 py-2 text-sm font-medium transition-colors duration-200`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    location.pathname === item.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  } block px-3 py-2 text-base font-medium transition-colors duration-200`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200 mt-4"
                onClick={() => setIsOpen(false)}
              >
                Book a Call
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
