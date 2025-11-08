'use client';

import { motion } from 'framer-motion';
import {
  Search,
  Filter,
  Grid,
  List,
  ChevronDown,
  ArrowLeft,
  Calendar,
  Clock,
  Users,
} from 'lucide-react';
import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// ✅ All products (including Believer Arts)
const allProducts = [
  {
    id: 1,
    name: 'Resourcify',
    description:
      'A centralized hub for free study materials, question banks, and learning roadmaps for students.',
    fullDescription:
      'Resourcify was born from the challenge students face in finding and organizing quality study materials across multiple platforms. It aggregates verified resources, curates topic-wise roadmaps, and integrates AI-based learning recommendations. Designed for accessibility, it empowers students to focus on learning rather than searching.',
    image:
      'https://res.cloudinary.com/dtj9iddrs/image/upload/v1725808866/Resourcify.png',
    category: 'Mobile App',
    tags: ['Education', 'React Native', 'AI', 'Students'],
    status: 'Live',
    color: 'blue',
    year: '2023',
    duration: '4 months',
    teamSize: '3 developers',
    technologies: [
      'React Native',
      'Node.js',
      'MongoDB',
      'Firebase',
      'TensorFlow',
      'AWS',
    ],
    features: [
      'Comprehensive resource aggregation system',
      'AI-powered learning path recommendations',
      'Community-driven question bank',
      'Collaborative study group features',
      'Cross-platform mobile application',
    ],
    liveUrl: '#',
    githubUrl: '#',
    slug: 'resourcify',
    rating: 4.8,
    reviews: 1247,
  },
  {
    id: 2,
    name: 'Believer Arts',
    description:
      'A modern digital art and design platform showcasing handmade artwork, prints, and creative design collections.',
    fullDescription:
      'Believer Arts is a digital-first art and design studio blending creativity with technology. It serves as a portfolio and ecommerce hub for digital artists to showcase their creations, connect with buyers, and build brand identity. The platform emphasizes elegant UI, smooth animations, and an immersive visual experience.',
    image:
      'https://res.cloudinary.com/dtj9iddrs/image/upload/v1730979820/Believer-Arts.png',
    category: 'Website',
    tags: ['Portfolio', 'Design', 'Ecommerce', 'Next.js'],
    status: 'Live',
    color: 'yellow',
    year: '2024',
    duration: '6 months',
    teamSize: '2 designers, 2 developers',
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'Framer Motion',
      'Sanity CMS',
      'Stripe',
    ],
    features: [
      'Custom art portfolio and store',
      'Smooth animations with Framer Motion',
      'Artist CMS for content management',
      'Responsive and minimal design layout',
      'Integrated Stripe payments for art sales',
    ],
    liveUrl: 'https://believerarts.com',
    githubUrl: '#',
    slug: 'believer-arts',
    rating: 4.9,
    reviews: 968,
  },
  {
    id: 3,
    name: 'Zyora-AI',
    description:
      'Smart resume and career toolkit powered by AI, offering resume building, cover letter generation, interview practice, and personalized career guidance.',
    fullDescription:
      'Zyora-AI addresses the challenges job seekers face in creating compelling resumes, preparing for interviews, and exploring personalized career opportunities. The AI-driven toolkit provides smart insights, tailored resume templates, and real-time feedback. Designed for individuals and enterprises alike, it transforms how people approach career growth.',
    image:
      'https://res.cloudinary.com/dtj9iddrs/image/upload/v1762587709/Zyora-ai.png',
    category: 'SaaS',
    tags: ['AI', 'Career', 'SaaS', 'Resume'],
    status: 'Coming Soon',
    color: 'green',
    year: '2025',
    duration: '8 months',
    teamSize: '6 developers, 3 AI specialists',
    technologies: [
      'Python',
      'React',
      'FastAPI',
      'PostgreSQL',
      'OpenAI',
      'Docker',
    ],
    features: [
      'AI-powered resume analysis and optimization',
      'Personalized career path recommendations',
      'Interactive interview simulation with feedback',
      'Skill gap analysis and learning recommendations',
      'Enterprise-grade SaaS platform',
    ],
    liveUrl: '#',
    githubUrl: '#',
    slug: 'zyora-ai',
  },
];

// ✅ Badge colors
const statusColors: Record<string, string> = {
  Live: 'bg-green-100 text-green-800',
  Beta: 'bg-yellow-100 text-yellow-800',
  'Coming Soon': 'bg-blue-100 text-blue-800',
  Development: 'bg-gray-100 text-gray-800',
};

const categories = ['All', 'Mobile App', 'Website', 'SaaS', 'AI Tools'];
const statuses = ['All', 'Live', 'Beta', 'Coming Soon', 'Development'];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // ✅ Safe window usage
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsLargeScreen(window.innerWidth >= 1024);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ✅ Filters
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const categoryMatch =
        selectedCategory === 'All' || product.category === selectedCategory;
      const statusMatch =
        selectedStatus === 'All' || product.status === selectedStatus;
      const searchMatch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && statusMatch && searchMatch;
    });
  }, [selectedCategory, selectedStatus, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedStatus('All');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <h1 className="text-4xl font-light text-gray-900 mb-4">
            Our Products & Projects
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Explore our portfolio of innovative digital solutions.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-10 flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* View toggle */}
          <div className="flex items-center gap-4">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md ${
                  viewMode === 'grid'
                    ? 'bg-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md ${
                  viewMode === 'list'
                    ? 'bg-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
            >
              <Filter className="w-4 h-4" />
              Filters
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  showFilters ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Filters Panel */}
        {(showFilters || isLargeScreen) && (
          <div className="mb-12 flex flex-wrap gap-6 items-center">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`px-3 py-1.5 rounded-full text-sm ${
                    selectedCategory === c
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {statuses.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedStatus(s)}
                  className={`px-3 py-1.5 rounded-full text-sm ${
                    selectedStatus === s
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            {(selectedCategory !== 'All' ||
              selectedStatus !== 'All' ||
              searchQuery) && (
              <button
                onClick={clearFilters}
                className="text-sm text-gray-600 hover:text-gray-900 font-medium"
              >
                Clear all
              </button>
            )}
          </div>
        )}

        {/* Grid/List View */}
        <div
          className={
            viewMode === 'grid'
              ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'space-y-6'
          }
        >
          {filteredProducts.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ y: -6 }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {viewMode === 'grid' ? (
                <GridView product={p} />
              ) : (
                <ListView product={p} />
              )}
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            No products found.{' '}
            <button onClick={clearFilters} className="underline">
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ✅ Grid View
function GridView({ product }: { product: any }) {
  return (
    <>
      <div className="relative h-48 bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
          {product.category}
        </div>
        <div
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${statusColors[product.status]}`}
        >
          {product.status}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>

        <div className="flex gap-4 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" /> {product.year}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> {product.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-3 h-3" /> {product.teamSize}
          </span>
        </div>

        <Link
          href={`/case-studies/${product.slug}`}
          className="block text-center py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
        >
          View Case Study
        </Link>
      </div>
    </>
  );
}

// ✅ List View
function ListView({ product }: { product: any }) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      <div className="lg:w-64 flex-shrink-0 relative h-48">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-2xl font-semibold">{product.name}</h3>
          <span
            className={`px-3 py-1 rounded-full text-sm ${statusColors[product.status]}`}
          >
            {product.status}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex gap-6 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" /> {product.year}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> {product.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" /> {product.teamSize}
          </span>
        </div>
        <Link
          href={`/case-studies/${product.slug}`}
          className="inline-block px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
        >
          View Case Study
        </Link>
      </div>
    </div>
  );
}