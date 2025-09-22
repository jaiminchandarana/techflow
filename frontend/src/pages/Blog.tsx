import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import { useState } from 'react';
import BlogModal from '../components/BlogModal';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleReadMore = (post: any) => {
    const fullPost = {
      ...post,
      content: `Full article content for ${post.title}...`
    };
    setSelectedPost(fullPost);
    setShowModal(true);
  };

  const handleNewsletterSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    try {
      const response = await fetch('https://jaiminchandaranaportfolio.vercel.app/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: newsletterEmail,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setIsSubscribed(true);
        setNewsletterEmail('');
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

  const featuredPost = {
    title: 'The Future of AI in Business: Trends to Watch in 2025',
    excerpt: 'Discover the emerging AI trends that will reshape industries and create new opportunities for businesses of all sizes in the coming year.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    author: 'Jaimin Chandarana',
    date: 'January 15, 2025',
    readTime: '8 min read',
    category: 'AI & Machine Learning',
    slug: 'future-ai-business-trends-2025'
  };

  const blogPosts = [
    {
      title: '10 Essential Web Development Trends Every Startup Should Know in 2025',
      excerpt: 'Discover the latest web development trends that can give your startup a competitive edge, from AI integration to progressive web apps and modern frameworks.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      author: 'Jaimin Chandarana',
      date: 'January 20, 2025',
      readTime: '8 min read',
      category: 'Web Development',
      slug: 'web-development-trends-startups-2025'
    },
    {
      title: 'Why Startups Need Data Analytics: A Beginner\'s Guide',
      excerpt: 'Learn how data analytics can help your startup make better decisions, understand customers, and drive growth even with limited resources.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      author: 'Jaimin Chandarana',
      date: 'January 18, 2025',
      readTime: '7 min read',
      category: 'Data Analytics',
      slug: 'startups-data-analytics-beginners-guide'
    },
    {
      title: 'AI for Small Businesses: Practical Applications That Don\'t Break the Bank',
      excerpt: 'Explore affordable AI solutions that small businesses and startups can implement today to automate tasks and improve customer experience.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      author: 'Jaimin Chandarana',
      date: 'January 16, 2025',
      readTime: '9 min read',
      category: 'AI & Machine Learning',
      slug: 'ai-small-businesses-practical-applications'
    },
    {
      title: 'Building Your First Business Website: A Complete Guide for Entrepreneurs',
      excerpt: 'Step-by-step guide to creating a professional business website that converts visitors into customers, even if you\'re not technical.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      author: 'Jaimin Chandarana',
      date: 'January 14, 2025',
      readTime: '10 min read',
      category: 'Web Development',
      slug: 'building-first-business-website-guide'
    },
    {
      title: 'The Startup\'s Guide to Choosing the Right Technology Stack',
      excerpt: 'Learn how to select the best technologies for your startup project, balancing performance, cost, scalability, and development speed.',
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      author: 'Jaimin Chandarana',
      date: 'January 12, 2025',
      readTime: '8 min read',
      category: 'Technology',
      slug: 'startup-guide-choosing-technology-stack'
    },
    {
      title: 'Digital Marketing for Tech Startups: Strategies That Actually Work',
      excerpt: 'Discover proven digital marketing strategies specifically designed for tech startups with limited budgets but big ambitions.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      author: 'Jaimin Chandarana',
      date: 'January 10, 2025',
      readTime: '6 min read',
      category: 'Digital Marketing',
      slug: 'digital-marketing-tech-startups-strategies'
    }
  ];

  const categories = [
    { name: 'All Posts', count: 7 },
    { name: 'Web Development', count: 3 },
    { name: 'AI & Machine Learning', count: 1 },
    { name: 'Data Analytics', count: 1 },
    { name: 'Technology', count: 1 },
    { name: 'Digital Marketing', count: 1 }
  ];

  const recentPosts = [
    { title: 'Web Development Trends Every Startup Should Know', date: 'January 20, 2025' },
    { title: 'Why Startups Need Data Analytics', date: 'January 18, 2025' },
    { title: 'AI for Small Businesses: Practical Applications', date: 'January 16, 2025' }
  ];

  return (
    <>
      <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Tech Insights & Resources</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with expert insights, industry trends, and practical guides on AI, data analytics, web development, and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
               onClick={() => handleReadMore(featuredPost)}>
            <div className="grid lg:grid-cols-2 items-center">
              <div className="p-8 lg:p-12 text-white">
                <div className="flex items-center mb-4">
                  <Tag className="h-4 w-4 mr-2" />
                  <span className="text-blue-100 text-sm font-medium">{featuredPost.category}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">{featuredPost.title}</h2>
                <p className="text-blue-100 text-lg mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center mb-6 text-blue-100">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleReadMore(featuredPost);
                  }}
                  className="inline-flex items-center bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              <div className="h-full">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            
            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:scale-105 cursor-pointer group"
                           onClick={() => handleReadMore(post)}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <Tag className="h-4 w-4 mr-2 text-blue-600" />
                        <span className="text-blue-600 text-sm font-medium">{post.category}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <User className="h-4 w-4 mr-1" />
                        <span className="mr-3">{post.author}</span>
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="mr-3">{post.date}</span>
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleReadMore(post);
                        }}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex items-center space-x-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">Previous</button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">2</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">3</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">Next</button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                
                {/* Categories */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a
                          href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex justify-between items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        >
                          <span>{category.name}</span>
                          <span className="text-sm text-gray-400">({category.count})</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent Posts */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h3>
                  <ul className="space-y-4">
                    {recentPosts.map((post, index) => (
                      <li key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                        <a
                          href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 block"
                        >
                          {post.title}
                        </a>
                        <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl p-6 text-white hover:shadow-xl hover:shadow-blue-300/30 transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                  <p className="mb-4">Get the latest insights delivered to your inbox weekly.</p>
                  {isSubscribed ? (
                    <div className="bg-green-600 text-white px-4 py-2 rounded-lg text-center">
                      Successfully subscribed!
                    </div>
                  ) : (
                    <form onSubmit={handleNewsletterSubscribe} className="space-y-3">
                      <input
                        type="email"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                      <button 
                        type="submit"
                        disabled={isSubscribing}
                        className="w-full bg-white text-blue-600 hover:bg-blue-50 disabled:bg-blue-200 px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
                      >
                        {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Need Expert Guidance?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team of experts is ready to help you implement the strategies and technologies discussed in our blog posts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Schedule Consultation
            </a>
            <a
              href="/services"
              className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
      </div>
      
      <BlogModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)}
        post={selectedPost}
      />
    </>
  );
};

export default Blog;