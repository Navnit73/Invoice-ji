// app/components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerTop, setHeaderTop] = useState('0px');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  // Set isClient to true when component mounts on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only run on client side
    if (!isClient) return;

    const updateHeaderPosition = () => {
      const promoBanner = document.querySelector('[data-promo-banner]');
      const isPromoVisible = promoBanner && getComputedStyle(promoBanner).display !== 'none';
      const scrollY = window.scrollY;
      
      // If scrolled, always stick to top
      if (scrollY > 20) {
        setHeaderTop('0px');
        setIsScrolled(true);
      } else {
        // If at top and promo banner is visible, position below it
        if (isPromoVisible && promoBanner) {
          const promoHeight = promoBanner.getBoundingClientRect().height;
          setHeaderTop(`${promoHeight}px`);
        } else {
          setHeaderTop('0px');
        }
        setIsScrolled(false);
      }
    };

    // Initial check
    updateHeaderPosition();

    // Set up observers and event listeners
    const observer = new MutationObserver(updateHeaderPosition);
    const promoBanner = document.querySelector('[data-promo-banner]');
    if (promoBanner) {
      observer.observe(promoBanner, { 
        attributes: true, 
        attributeFilter: ['style', 'class'],
        childList: true,
        subtree: true 
      });
    }

    // Throttled scroll handler for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateHeaderPosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateHeaderPosition);

    // Check again after a short delay to ensure DOM is fully rendered
    const timeoutId = setTimeout(updateHeaderPosition, 100);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateHeaderPosition);
      clearTimeout(timeoutId);
    };
  }, [isClient]); // Add isClient as dependency

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) {
      // Only check hash on client side
      if (!isClient) return pathname === '/';
      return pathname === '/' && window.location.hash === href.substring(1);
    }
    return pathname.startsWith(href);
  };

  const navigation = [
    {
      name: 'Services',
      href: '/#services',
      type: 'link' as const
    },
    {
      name: 'Products',
      href: '/products',
      type: 'link' as const
    },
    {
      name: 'Work',
      href: '/projects',
      type: 'link' as const
    },
    // {
    //   name: 'Company',
    //   href: '#',
    //   type: 'dropdown' as const,
    //   items: [
    //     { name: 'About Us', href: '/about' },
    //     { name: 'Our Process', href: '/process' },
    //     { name: 'Our Team', href: '/team' },
    //     { name: 'Careers', href: '/careers' },
    //     { name: 'Press & Media', href: '/press' },
    //     { name: 'Partners', href: '/partners' }
    //   ]
    // },
    // {
    //   name: 'Resources',
    //   href: '#',
    //   type: 'dropdown' as const,
    //   items: [
    //     { name: 'Blog', href: '/blog' },
    //     { name: 'Case Studies', href: '/projects' },
    //     { name: 'Status', href: '/status' },
    //     { name: 'Documentation', href: '#' }
    //   ]
    // }
  ];

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ top: headerTop }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group" onClick={closeAllDropdowns}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Image
                src="https://res.cloudinary.com/ddxu2wqfm/image/upload/v1762098813/invoice_1_xf2zk7.png"
                alt="UpwardScript Logo"
                width={40}
                height={40}
                className="rounded-md object-contain"
                priority
              />
            </motion.div>
            <span className="ml-2 text-xl font-light text-gray-900 tracking-tight group-hover:text-gray-700 transition-colors">
              Invoice Ji
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.type === 'link' ? (
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-2 rounded-lg text-[15px] font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-gray-900 bg-gray-100'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <motion.div
                    className="relative"
                    onHoverStart={() => setOpenDropdown(item.name)}
                    onHoverEnd={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg text-[15px] font-medium transition-colors ${
                        openDropdown === item.name || item.items.some(subItem => isActive(subItem.href))
                          ? 'text-gray-900 bg-gray-100'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>

                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50"
                          onHoverStart={() => setOpenDropdown(item.name)}
                          onHoverEnd={() => setOpenDropdown(null)}
                        >
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`block px-4 py-2 text-[15px] font-medium transition-colors ${
                                isActive(subItem.href)
                                  ? 'text-gray-900 bg-gray-50'
                                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                              }`}
                              onClick={closeAllDropdowns}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex items-center gap-3"
          >
            <Link href="/#contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors text-[15px] font-medium"
              >
                Login
              </motion.button>
            </Link>
            <Link href="/#contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-[15px] font-medium"
              >
                Sign Up
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-gray-200 bg-white"
            >
              <div className="py-4 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.type === 'link' ? (
                      <Link
                        href={item.href}
                        className={`block py-3 px-4 rounded-lg text-[15px] font-medium transition-colors ${
                          isActive(item.href)
                            ? 'text-gray-900 bg-gray-100'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                        onClick={closeAllDropdowns}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <div>
                        <button
                          onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                          className={`flex items-center justify-between w-full py-3 px-4 rounded-lg text-[15px] font-medium transition-colors ${
                            openDropdown === item.name || item.items.some(subItem => isActive(subItem.href))
                              ? 'text-gray-900 bg-gray-100'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                          }`}
                        >
                          {item.name}
                          <ChevronDown 
                            className={`w-4 h-4 transition-transform ${
                              openDropdown === item.name ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                        
                        <AnimatePresence>
                          {openDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-4 mt-1 space-y-1 overflow-hidden"
                            >
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className={`block py-2 px-4 rounded-lg text-[15px] font-medium transition-colors ${
                                    isActive(subItem.href)
                                      ? 'text-gray-900 bg-gray-100'
                                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                  }`}
                                  onClick={closeAllDropdowns}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA Buttons */}
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <Link href="/#contact" onClick={closeAllDropdowns}>
                    <button className="w-full py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors text-[15px] font-medium">
                      Login
                    </button>
                  </Link>
                  <Link href="/#contact" onClick={closeAllDropdowns}>
                    <button className="w-full py-3 px-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-[15px] font-medium">
                     Sign Up
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}