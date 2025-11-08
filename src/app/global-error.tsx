'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error('Global application error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-6">
          <div className="max-w-md mx-auto text-center text-white">
            {/* Critical Error Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="w-20 h-20 bg-red-500 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold">!</span>
              </div>
            </motion.div>

            {/* Error Message */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-3xl font-light mb-4 tracking-tight">
                Critical Error
              </h1>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We're experiencing technical difficulties. Please refresh the page or try again later.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.reload()}
                className="px-8 py-3.5 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-colors font-medium"
              >
                Reload Page
              </motion.button>
            </motion.div>

            {/* Background Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute inset-0 -z-10 overflow-hidden"
            >
              <div className="absolute -top-40 -right-32 w-80 h-80 bg-red-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
              <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow delay-1000"></div>
            </motion.div>
          </div>
        </div>
      </body>
    </html>
  );
}