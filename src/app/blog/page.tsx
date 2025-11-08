// app/blog/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Search, Filter, Tag } from 'lucide-react';
import { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Web Development',
    excerpt: 'Exploring how artificial intelligence is transforming the way we build and interact with web applications.',
    author: 'Sarah Chen',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'AI & ML',
    tags: ['AI', 'Web Development', 'Future'],
    image: '/api/placeholder/600/400'
  },
  {
    id: 2,
    title: 'Building Scalable Multi-Tenant Applications',
    excerpt: 'Best practices and architecture patterns for creating robust multi-tenant SaaS applications.',
    author: 'Mike Rodriguez',
    date: '2024-01-10',
    readTime: '8 min read',
    category: 'Development',
    tags: ['SaaS', 'Architecture', 'Scalability'],
    image: '/api/placeholder/600/400'
  },
  {
    id: 3,
    title: 'The Power of Modern CSS Frameworks',
    excerpt: 'How Tailwind CSS and other modern frameworks are changing the way we approach styling.',
    author: 'Emily Davis',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Design',
    tags: ['CSS', 'Tailwind', 'Design Systems'],
    image: '/api/placeholder/600/400'
  },
  {
    id: 4,
    title: 'Machine Learning for Business Applications',
    excerpt: 'Practical applications of machine learning that can drive real business value today.',
    author: 'Alex Johnson',
    date: '2024-01-01',
    readTime: '10 min read',
    category: 'AI & ML',
    tags: ['Machine Learning', 'Business', 'Applications'],
    image: '/api/placeholder/600/400'
  },
  {
    id: 5,
    title: 'Optimizing React Performance',
    excerpt: 'Advanced techniques and tools for maximizing the performance of your React applications.',
    author: 'Sarah Chen',
    date: '2023-12-28',
    readTime: '7 min read',
    category: 'Development',
    tags: ['React', 'Performance', 'JavaScript'],
    image: '/api/placeholder/600/400'
  },
  {
    id: 6,
    title: 'The Rise of No-Code AI Tools',
    excerpt: 'How no-code platforms are making AI accessible to non-technical users and businesses.',
    author: 'Alex Johnson',
    date: '2023-12-25',
    readTime: '4 min read',
    category: 'AI & ML',
    tags: ['No-Code', 'AI Tools', 'Accessibility'],
    image: '/api/placeholder/600/400'
  }
];

const categories = ['All', 'AI & ML', 'Development', 'Design', 'Business'];
const authors = ['All', 'Alex Johnson', 'Sarah Chen', 'Mike Rodriguez', 'Emily Davis'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAuthor, setSelectedAuthor] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const categoryMatch = selectedCategory === 'All' || post.category === selectedCategory;
    const authorMatch = selectedAuthor === 'All' || post.author === selectedAuthor;
    const searchMatch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return categoryMatch && authorMatch && searchMatch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
            Blog & Insights
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Stay updated with the latest trends in AI, web development, and digital product design.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-all"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-all"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={selectedAuthor}
                onChange={(e) => setSelectedAuthor(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-all"
              >
                {authors.map(author => (
                  <option key={author} value={author}>{author}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              {/* Image */}
              <div className="h-48 bg-gray-200 rounded-t-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-900 mb-3 leading-tight group-hover:text-gray-700 transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 leading-relaxed mb-4 text-[15px] line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <div className="flex items-center gap-2 text-gray-900 font-medium group-hover:text-gray-700 transition-colors">
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 text-lg mb-4">No articles found</div>
            <p className="text-gray-600 mb-6">Try adjusting your filters or search terms.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedAuthor('All');
                setSearchQuery('');
              }}
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-[15px] font-medium"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-12 border-t border-gray-200"
        >
          <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">
            Stay Updated
          </h3>
          <p className="text-gray-600 mb-6 text-[15px] max-w-md mx-auto">
            Get the latest articles and insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-all"
            />
            <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-[15px] font-medium whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}