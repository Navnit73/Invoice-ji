// app/components/RootLayoutClient.tsx
'use client';

import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import PromoBanner from './PromoBanner';

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
  
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </motion.div>
  );
}