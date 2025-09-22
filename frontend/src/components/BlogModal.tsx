import React from 'react';
import { X, Calendar, User, Clock, Tag } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: BlogPost | null;
}

const BlogModal: React.FC<BlogModalProps> = ({ isOpen, onClose, post }) => {
  if (!isOpen || !post) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div 
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          onClick={onClose}
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full max-w-4xl">
          <div className="bg-white">
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-600 hover:text-gray-800 p-2 rounded-full transition-all duration-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="px-6 py-6">
              <div className="flex items-center mb-4">
                <Tag className="h-4 w-4 mr-2 text-blue-600" />
                <span className="text-blue-600 text-sm font-medium">{post.category}</span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
              
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <User className="h-4 w-4 mr-1" />
                <span className="mr-4">{post.author}</span>
                <Calendar className="h-4 w-4 mr-1" />
                <span className="mr-4">{post.date}</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
              
              <div className="max-h-[50vh] overflow-y-auto pr-2">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 mb-6 font-medium">{post.excerpt}</p>
                  
                  <div className="space-y-6 text-gray-700">
                    <p>
                      The landscape of artificial intelligence is evolving at an unprecedented pace, and 2025 promises to be a pivotal year for businesses looking to harness AI's transformative power. As we stand at the threshold of a new era in business technology, understanding these emerging trends isn't just advantageous—it's essential for survival and growth.
                    </p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Generative AI Goes Mainstream</h2>
                    <p>
                      Generative AI has moved beyond the realm of tech enthusiasts and is now becoming a core business tool. Companies are integrating AI-powered content creation, code generation, and design automation into their daily workflows. This trend is democratizing creativity and productivity across industries.
                    </p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. AI-Powered Customer Experience</h2>
                    <p>
                      Customer service is being revolutionized by AI chatbots and virtual assistants that can handle complex queries, provide personalized recommendations, and even predict customer needs before they arise. This shift is enabling 24/7 support while reducing operational costs.
                    </p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Predictive Analytics for Strategic Planning</h2>
                    <p>
                      Businesses are leveraging AI to forecast market trends, predict customer behavior, and optimize supply chains. This predictive capability is transforming reactive businesses into proactive organizations that can anticipate and prepare for future challenges and opportunities.
                    </p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Ethical AI and Responsible Implementation</h2>
                    <p>
                      As AI becomes more prevalent, businesses are focusing on ethical implementation, bias reduction, and transparent AI decision-making processes. This trend is crucial for maintaining customer trust and regulatory compliance.
                    </p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Getting Started with AI in Your Business</h2>
                    <p>
                      The key to successful AI implementation is starting small, focusing on specific use cases, and gradually expanding as you build expertise and see results. Consider partnering with experienced AI consultants to navigate this complex landscape and ensure your AI initiatives deliver real business value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;