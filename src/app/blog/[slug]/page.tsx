// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';

// Mock blog data - in real app, this would come from CMS or API
const blogPosts = {
  'future-of-ai-in-web-development': {
    id: 1,
    title: 'The Future of AI in Web Development',
    excerpt: 'Exploring how artificial intelligence is transforming the way we build and interact with web applications.',
    content: `
      <h2>The AI Revolution in Web Development</h2>
      <p>The landscape of web development is undergoing a seismic shift, driven by advancements in artificial intelligence. What started as simple automation tools has evolved into sophisticated AI systems that can generate code, design interfaces, and optimize user experiences.</p>

      <h3>AI-Powered Code Generation</h3>
      <p>Tools like GitHub Copilot and ChatGPT are changing how developers write code. These AI assistants can:</p>
      <ul>
        <li>Generate boilerplate code instantly</li>
        <li>Suggest optimizations and best practices</li>
        <li>Help debug complex issues</li>
        <li>Translate code between languages</li>
      </ul>

      <p>At UpwardScript, we've integrated AI code assistants into our workflow, reducing development time by 30% while maintaining code quality.</p>

      <h3>Intelligent Design Systems</h3>
      <p>AI is revolutionizing UI/UX design through:</p>
      <ul>
        <li>Automated layout generation</li>
        <li>Personalized user experiences</li>
        <li>Accessibility optimization</li>
        <li>Performance prediction</li>
      </ul>

      <blockquote>
        "AI isn't replacing developers; it's augmenting our capabilities and allowing us to focus on more complex, creative problems."
      </blockquote>

      <h3>The Future is Collaborative</h3>
      <p>We're moving towards a future where developers and AI work together seamlessly. The most successful teams will be those that embrace AI as a collaborative partner rather than seeing it as a threat.</p>

      <p>At UpwardScript, we're investing heavily in AI research and development, ensuring we stay at the forefront of these technological advancements.</p>
    `,
    author: 'Sarah Chen',
    authorRole: 'Lead Developer',
    authorImage: '/api/placeholder/100/100',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'AI & ML',
    tags: ['AI', 'Web Development', 'Future Trends', 'Technology'],
    image: '/api/placeholder/800/400',
    views: 1247,
    likes: 89
  },
  'building-scalable-multi-tenant-applications': {
    id: 2,
    title: 'Building Scalable Multi-Tenant Applications',
    excerpt: 'Best practices and architecture patterns for creating robust multi-tenant SaaS applications.',
    content: `
      <h2>Mastering Multi-Tenant Architecture</h2>
      <p>Multi-tenant applications are the backbone of modern SaaS platforms, allowing multiple customers to use the same application instance while keeping their data isolated and secure.</p>

      <h3>Key Architecture Patterns</h3>
      <p>We've identified three main approaches to multi-tenancy:</p>

      <h4>1. Database per Tenant</h4>
      <p>Each tenant gets their own database instance. This provides maximum isolation but can be challenging to scale.</p>

      <h4>2. Shared Database, Separate Schemas</h4>
      <p>All tenants share the same database but have separate schemas. This balances isolation with resource efficiency.</p>

      <h4>3. Shared Database, Shared Schema</h4>
      <p>All tenants share the same database and schema, with tenant isolation handled at the application level. This is the most resource-efficient approach.</p>

      <h3>Best Practices from Our Experience</h3>
      <p>At UpwardScript, we've built multi-tenant systems for clients across various industries. Here are our key learnings:</p>

      <ul>
        <li><strong>Tenant Identification:</strong> Always validate tenant context at the API gateway level</li>
        <li><strong>Data Isolation:</strong> Implement row-level security and tenant-based filtering</li>
        <li><strong>Performance:</strong> Use connection pooling and query optimization</li>
        <li><strong>Backups:</strong> Implement tenant-aware backup and recovery strategies</li>
      </ul>

      <blockquote>
        "The key to successful multi-tenancy is designing for isolation from day one. Retro-fitting tenant separation is much more challenging."
      </blockquote>

      <h3>Real-World Implementation</h3>
      <p>In our recent project for a healthcare SaaS platform, we implemented a shared database with separate schemas approach. This allowed us to:</p>
      <ul>
        <li>Serve 50+ healthcare providers</li>
        <li>Maintain HIPAA compliance</li>
        <li>Achieve 99.9% uptime</li>
        <li>Scale to handle 10,000+ concurrent users</li>
      </ul>

      <p>The system uses JWT tokens for tenant identification and implements comprehensive audit logging for compliance.</p>
    `,
    author: 'Mike Rodriguez',
    authorRole: 'CTO',
    authorImage: '/api/placeholder/100/100',
    date: '2024-01-10',
    readTime: '8 min read',
    category: 'Development',
    tags: ['SaaS', 'Architecture', 'Scalability', 'Backend'],
    image: '/api/placeholder/800/400',
    views: 892,
    likes: 67
  }
};

const relatedPosts = [
  {
    slug: 'machine-learning-for-business-applications',
    title: 'Machine Learning for Business Applications',
    excerpt: 'Practical applications of machine learning that can drive real business value today.',
    category: 'AI & ML',
    readTime: '10 min read',
    date: '2024-01-01'
  },
  {
    slug: 'optimizing-react-performance',
    title: 'Optimizing React Performance',
    excerpt: 'Advanced techniques and tools for maximizing the performance of your React applications.',
    category: 'Development',
    readTime: '7 min read',
    date: '2023-12-28'
  },
  {
    slug: 'the-rise-of-no-code-ai-tools',
    title: 'The Rise of No-Code AI Tools',
    excerpt: 'How no-code platforms are making AI accessible to non-technical users and businesses.',
    category: 'AI & ML',
    readTime: '4 min read',
    date: '2023-12-25'
  }
];

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} relatedPosts={relatedPosts} />;
}

// Generate static params for SSG
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: `${post.title} | UpwardScript Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}