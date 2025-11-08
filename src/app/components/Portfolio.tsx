// app/components/Portfolio.tsx
"use client";

import { motion } from "framer-motion";
import { Project } from "@/types";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Timeline } from "./ui/timeline";

const projects: Project[] = [
  {
    id: 1,
    title: "Create an Account",
    description:
      "Sign up for free and set up your business profile in less than a minute. No credit card required to get started.",
    image:
      "https://res.cloudinary.com/ddxu2wqfm/image/upload/v1762596857/login_zb4soa.jpg",
    category: "Getting Started",
    year: "Step 1",
    slug: "create-account",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Add Clients & Items",
    description:
      "Easily manage client data and build your item catalog. Store all your business information securely in one place.",
    image:
      "https://res.cloudinary.com/ddxu2wqfm/image/upload/v1762596857/addclients_xqftob.jpg",
    category: "Setup",
    year: "Step 2",
    slug: "add-clients-items",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Generate Invoices",
    description:
      "Create professional invoices with automatic tax calculations, custom branding, and flexible payment terms in seconds.",
    image:
      "https://res.cloudinary.com/ddxu2wqfm/image/upload/v1762596857/genratesinvoice_hlyvqd.jpg",
    category: "Automation",
    year: "Step 3",
    slug: "generate-invoices",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Track Payments",
    description:
      "Monitor invoice status in real-time and get powerful analytics on your business growth, revenue trends, and client insights.",
    image:
      "https://res.cloudinary.com/ddxu2wqfm/image/upload/v1762596856/trackpayment_t4krg1.jpg",
    category: "Analytics",
    year: "Step 4",
    slug: "track-payments",
    liveUrl: "#",
    githubUrl: "#",
  },
];

// Transform projects into timeline data
const timelineData = projects.map((project) => ({
  title: project.year,
  content: (
    <div className="relative group">
      {/* Project Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Image */}
        <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full relative"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>

          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center gap-4 mb-3">
            <span className="text-sm text-gray-500 font-medium tracking-wide">
              {project.year}
            </span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span className="text-sm text-gray-500 font-medium">
              {project.category}
            </span>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight group-hover:text-gray-700 transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  ),
}));

export default function Portfolio() {
  return (
    <section id="projects" className="py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-light text-gray-900 mb-4 tracking-tight"
          >
            Get Started in 4 Simple Steps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            From signup to your first invoice in minutes
          </motion.p>
        </div>

        {/* Timeline Integration */}
        <div className="relative w-full overflow-hidden">
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  );
}
