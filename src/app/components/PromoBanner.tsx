// app/components/PromoBanner.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Tag } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          data-promo-banner
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden z-50"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }} />
          </div>

          <div className="container mx-auto px-6 py-3 relative">
            <div className="flex items-center justify-between">
              {/* Left Content */}
              <div className="flex items-center gap-6">
                {/* Main Offer */}
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      repeatDelay: 5
                    }}
                    className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 backdrop-blur-sm"
                  >
                    <Tag className="w-4 h-4" />
                    <span className="font-semibold text-sm">LIMITED TIME OFFER</span>
                  </motion.div>
                  
                  <motion.span 
                    className="text-lg font-bold bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ['0%', '100%', '0%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      backgroundSize: '200% 100%'
                    }}
                  >
                    Get 20% Off Your First Project
                  </motion.span>
                </div>

                {/* Countdown Timer */}
                <div className="hidden md:flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Clock className="w-4 h-4" />
                    <span>Ends in:</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono">
                    <motion.span 
                      key={`hours-${timeLeft.hours}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="bg-white/10 rounded px-2 py-1 text-sm"
                    >
                      {formatTime(timeLeft.hours)}
                    </motion.span>
                    <span>:</span>
                    <motion.span 
                      key={`minutes-${timeLeft.minutes}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="bg-white/10 rounded px-2 py-1 text-sm"
                    >
                      {formatTime(timeLeft.minutes)}
                    </motion.span>
                    <span>:</span>
                    <motion.span 
                      key={`seconds-${timeLeft.seconds}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="bg-white/10 rounded px-2 py-1 text-sm"
                    >
                      {formatTime(timeLeft.seconds)}
                    </motion.span>
                  </div>
                </div>
              </div>

              {/* Right Content - CTA & Close */}
              <div className="flex items-center gap-4">
                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden sm:flex items-center gap-2 bg-amber-500 text-gray-900 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-amber-400 transition-colors"
                >
                  Claim Offer
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.button>

                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsVisible(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="Close banner"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

            {/* Mobile Countdown */}
            <div className="md:hidden mt-2 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Clock className="w-3 h-3" />
                <span>Ends in:</span>
              </div>
              <div className="flex items-center gap-1 font-mono text-sm">
                <span className="bg-white/10 rounded px-1.5 py-0.5">
                  {formatTime(timeLeft.hours)}
                </span>
                <span>:</span>
                <span className="bg-white/10 rounded px-1.5 py-0.5">
                  {formatTime(timeLeft.minutes)}
                </span>
                <span>:</span>
                <span className="bg-white/10 rounded px-1.5 py-0.5">
                  {formatTime(timeLeft.seconds)}
                </span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ 
              duration: 24 * 60 * 60, // 24 hours
              ease: "linear"
            }}
            className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}