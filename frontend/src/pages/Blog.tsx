import { Calendar, User, ArrowRight, Clock, Tag, Search } from 'lucide-react';
import { useState, useMemo } from 'react';
import BlogModal from '../components/BlogModal';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const handleReadMore = (post: any) => {
    const fullPost = {
      ...post,
      content: `Full article content for ${post.title}...`
    };
    setSelectedPost(fullPost);
    setShowModal(true);
  };

  const handleNewsletterSubscribe = async () => {
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

  const allPosts = [
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
    },
    featuredPost
  ];

  // Filter posts based on category and search term
  const filteredPosts = useMemo(() => {
    let filtered = allPosts;
    
    // Filter by category
    if (selectedCategory !== 'All Posts') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [selectedCategory, searchTerm]);

  // Get paginated posts
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(startIndex, startIndex + postsPerPage);
  }, [filteredPosts, currentPage]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Calculate category counts
  const categories = useMemo(() => {
    const counts = allPosts.reduce((acc, post) => {
      acc[post.category] = (acc[post.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return [
      { name: 'All Posts', count: allPosts.length },
      ...Object.entries(counts).map(([name, count]) => ({ name, count }))
    ];
  }, []);

  // Get recent posts (latest 3)
  const recentPosts = useMemo(() => {
    return [...allPosts]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div>
        {/* Hero Section - Enhanced Card Design */}
        <section className="bg-gradient-to-br from-blue-50 via-teal-50 to-blue-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
              <div className="text-center">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
                  <Tag className="h-4 w-4 mr-2" />
                  Tech Insights & Resources
                </div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Stay Ahead of the 
                  <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"> Curve</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                  Discover expert insights, industry trends, and practical guides on AI, data analytics, web development, and digital transformation.
                </p>
                
                {/* Search Bar */}
                <div className="max-w-2xl mx-auto relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or categories..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-6 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post - Enhanced Card */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Article</h2>
              <p className="text-gray-600">Don't miss our editor's pick</p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
                 onClick={() => handleReadMore(featuredPost)}>
              <div className="grid lg:grid-cols-2 items-center">
                <div className="p-8 lg:p-12 text-white">
                  <div className="flex items-center mb-4">
                    <Tag className="h-4 w-4 mr-2" />
                    <span className="text-blue-100 text-sm font-medium bg-blue-500/30 px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">{featuredPost.title}</h2>
                  <p className="text-blue-100 text-lg mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center mb-6 text-blue-100 text-sm">
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
                    className="inline-flex items-center bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
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
                <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Articles</h2>
                    <p className="text-gray-600">
                      {selectedCategory === 'All Posts' 
                        ? `Showing ${filteredPosts.length} articles`
                        : `${filteredPosts.length} articles in ${selectedCategory}`
                      }
                    </p>
                  </div>
                  
                  {/* Category Filter Tabs */}
                  <div className="flex flex-wrap gap-2">
                    {categories.slice(0, 4).map((category) => (
                      <button
                        key={category.name}
                        onClick={() => handleCategoryChange(category.name)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          selectedCategory === category.name
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {paginatedPosts.map((post, index) => (
                    <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                             onClick={() => handleReadMore(post)}>
                      <div className="relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
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
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 group-hover:translate-x-1"
                        >
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-12 flex justify-center">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                      >
                        Previous
                      </button>
                      {[...Array(totalPages)].map((_, i) => (
                        <button
                          key={i + 1}
                          onClick={() => handlePageChange(i + 1)}
                          className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                            currentPage === i + 1
                              ? 'bg-blue-600 text-white'
                              : 'border border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))}
                      <button 
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  
                  {/* Categories Card */}
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Tag className="h-5 w-5 mr-2 text-blue-600" />
                        Categories
                      </h3>
                      <ul className="space-y-2">
                        {categories.map((category, index) => (
                          <li key={index}>
                            <button
                              onClick={() => handleCategoryChange(category.name)}
                              className={`flex justify-between items-center w-full text-left p-2 rounded-lg transition-colors duration-200 ${
                                selectedCategory === category.name
                                  ? 'bg-blue-50 text-blue-600 font-medium'
                                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                              }`}
                            >
                              <span>{category.name}</span>
                              <span className="text-sm text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                                {category.count}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Recent Posts Card */}
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-teal-600" />
                        Recent Posts
                      </h3>
                      <ul className="space-y-4">
                        {recentPosts.map((post, index) => (
                          <li key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                            <button
                              onClick={() => handleReadMore(post)}
                              className="text-left w-full group"
                            >
                              <h4 className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 group-hover:underline text-sm leading-snug">
                                {post.title}
                              </h4>
                              <div className="flex items-center text-xs text-gray-500 mt-2">
                                <Calendar className="h-3 w-3 mr-1" />
                                <span className="mr-3">{post.date}</span>
                                <Tag className="h-3 w-3 mr-1" />
                                <span>{post.category}</span>
                              </div>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Newsletter Signup Card */}
                  <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl text-white hover:shadow-xl hover:shadow-blue-300/30 transition-all duration-300 transform hover:scale-105">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                      <p className="mb-4 text-blue-100">Get the latest insights delivered to your inbox weekly.</p>
                      {isSubscribed ? (
                        <div className="bg-green-600 text-white px-4 py-3 rounded-lg text-center font-medium">
                          Successfully subscribed! ✨
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <input
                            type="email"
                            value={newsletterEmail}
                            onChange={(e) => setNewsletterEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500"
                          />
                          <button 
                            onClick={handleNewsletterSubscribe}
                            disabled={isSubscribing}
                            className="w-full bg-white text-blue-600 hover:bg-blue-50 disabled:bg-blue-200 px-4 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg"
                          >
                            {isSubscribing ? 'Subscribing...' : 'Subscribe Now'}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced Card */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Need Expert Guidance?</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our team of experts is ready to help you implement the strategies and technologies discussed in our blog posts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Schedule Consultation
                  </a>
                  <a
                    href="/services"
                    className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    View Our Services
                  </a>
                </div>
              </div>
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