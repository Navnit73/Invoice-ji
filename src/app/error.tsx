'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { RefreshCw, Home, Mail, AlertTriangle } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const [isReloading, setIsReloading] = useState(false);

  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  const handleReset = () => {
    setIsReloading(true);
    reset();
    // Reset loading state after a delay
    setTimeout(() => setIsReloading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated Error Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="w-24 h-24 bg-red-100 rounded-2xl flex items-center justify-center"
            >
              <AlertTriangle className="text-red-600" size={48} />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center"
            >
              <span className="text-white text-sm font-bold">!</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
            Something Went Wrong
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed mb-6">
            We encountered an unexpected error. Don't worry - our team has been notified and is working to fix it.
          </p>
          
          {/* Technical Details (Collapsible) */}
          <details className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 text-left cursor-pointer">
            <summary className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Technical Details
            </summary>
            <div className="mt-3 p-3 bg-gray-50 rounded-lg">
              <code className="text-xs text-gray-600 break-all">
                {error.message || 'Unknown error occurred'}
              </code>
              {error.digest && (
                <div className="mt-2 text-xs text-gray-500">
                  Error ID: {error.digest}
                </div>
              )}
            </div>
          </details>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleReset}
            disabled={isReloading}
            className="w-full sm:w-auto px-8 py-3.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 disabled:bg-gray-400 transition-colors flex items-center justify-center gap-3 font-medium"
          >
            <RefreshCw size={20} className={isReloading ? 'animate-spin' : ''} />
            {isReloading ? 'Reloading...' : 'Try Again'}
          </motion.button>

          <Link href="/" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-3.5 border border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 transition-colors flex items-center justify-center gap-3 font-medium"
            >
              <Home size={20} />
              Go Home
            </motion.button>
          </Link>
        </motion.div>

        {/* Support Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-4 justify-center">
            <Mail className="text-gray-500" size={24} />
            <h3 className="text-xl font-medium text-gray-900">Need Help?</h3>
          </div>
          
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            If the problem persists, please contact our support team and we'll help you right away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
              >
                Contact Support
              </motion.button>
            </Link>
            
            <a href="mailto:support@upwardscript.com">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 transition-colors font-medium"
              >
                Email Us
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow delay-500"></div>
        </motion.div>
      </div>
    </div>
  );
}