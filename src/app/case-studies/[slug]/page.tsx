import { caseStudies } from '@/data/case-studies';
import CaseStudyClient from './CaseStudyClient';
import { notFound } from 'next/navigation';

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = caseStudies[slug as keyof typeof caseStudies];

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyClient caseStudy={caseStudy} />;
}

// Generate static params for SSG
export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = caseStudies[slug as keyof typeof caseStudies];
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
      description: 'The requested case study could not be found.'
    };
  }

  return {
    title: `${caseStudy.title} Case Study | UpwardScript`,
    description: caseStudy.excerpt,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.excerpt,
      type: 'article',
      images: [caseStudy.image],
    },
  };
}