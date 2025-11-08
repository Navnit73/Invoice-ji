// app/blog/[slug]/BlogPostClient.tsx
'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, Eye, MessageCircle } from 'lucide-react';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  authorImage: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  views: number;
  likes: number;
}

interface RelatedPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
}

interface BlogPostClientProps {
  post: BlogPost;
  relatedPosts: RelatedPost[];
}

export default function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
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
    hidden: { opacity: 0, y: 20 },
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
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-[15px] font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          {/* Category */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight tracking-tight"
          >
            {post.title}
          </motion.h1>

          {/* Excerpt */}
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 mb-8 leading-relaxed"
          >
            {post.excerpt}
          </motion.p>

          {/* Meta Information */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mb-8"
          >
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="font-medium">{post.author}</span>
              <span className="text-gray-400">•</span>
              <span>{post.authorRole}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              {post.views.toLocaleString()} views
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-4 border-t border-b border-gray-200 py-4"
          >
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Bookmark className="w-5 h-5" />
              Save
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Share2 className="w-5 h-5" />
              Share
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <MessageCircle className="w-5 h-5" />
              Comment
            </button>
          </motion.div>
        </motion.header>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-12 rounded-2xl overflow-hidden"
        >
          <div className="w-full h-96 bg-gradient-to-br from-gray-300 to-gray-400" />
        </motion.div>

        {/* Article Content */}
        <motion.article
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="prose prose-lg max-w-none mb-16"
        >
          {/* Content from CMS/API */}
          <div 
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-200">
            {post.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                #{tag}
              </span>
            ))}
          </motion.div>
        </motion.article>

        {/* Author Bio */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 mb-16 border border-gray-200"
        >
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-gray-300 rounded-full flex-shrink-0 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {post.author}
              </h3>
              <p className="text-gray-600 text-sm font-medium mb-3">
                {post.authorRole}
              </p>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {post.author} is a key member of the UpwardScript team, bringing expertise in {post.category.toLowerCase()} 
                and a passion for sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Related Posts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-light text-gray-900 mb-8 tracking-tight">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <motion.article
                key={relatedPost.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link href={`/blog/${relatedPost.slug}`}>
                  <div className="bg-gray-100 rounded-xl h-48 mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <span className="font-medium">{relatedPost.category}</span>
                    <span>•</span>
                    <span>{relatedPost.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors leading-tight">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Newsletter CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl p-12 text-white text-center"
        >
          <h3 className="text-2xl font-light mb-4 tracking-tight">
            Stay Updated
          </h3>
          <p className="text-gray-300 mb-8 text-lg max-w-md mx-auto">
            Get the latest articles on AI, web development, and digital innovation delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all"
            />
            <button className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}