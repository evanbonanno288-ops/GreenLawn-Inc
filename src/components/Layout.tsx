import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X, Phone, MapPin, ChevronRight, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: 'About', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* Top Bar - Contact Info */}
      <div className="hidden bg-charcoal-900 px-4 py-2 text-sm text-charcoal-100 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <Phone className="mr-2 h-4 w-4 text-green-400" />
              (814) 215-1371
            </span>
            <span className="flex items-center">
              <MapPin className="mr-2 h-4 w-4 text-green-400" />
              316 Walnut St, Hollidaysburg, PA 16648
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-medium text-green-400">24/7 Emergency Service Available</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300 border-b border-charcoal-100 shrink-0',
          isScrolled
            ? 'bg-white/95 shadow-sm backdrop-blur-md'
            : 'bg-white'
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500">
               <div className="h-5 w-5 rounded-full border-2 border-white"></div>
            </div>
            <span className="text-2xl font-black tracking-tight text-charcoal-900">GREENLAWN<span className="text-green-500">.INC</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-sm font-semibold transition-colors hover:text-green-600',
                  location.pathname === link.path ? 'text-green-600' : 'text-charcoal-500'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="px-6 py-6 shadow-lg shadow-green-900/10">Get Free Estimate</Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="p-2 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-charcoal-900" />
            ) : (
              <Menu className="h-6 w-6 text-charcoal-900" />
            )}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 top-[72px] bg-white px-4 py-6 lg:hidden shadow-xl"
          >
            <div className="flex flex-col space-y-6">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={cn(
                      'text-lg font-semibold transition-colors',
                      location.pathname === link.path ? 'text-green-600' : 'text-charcoal-900'
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col space-y-4 pt-6 border-t border-charcoal-100">
                <Button className="w-full">Get Free Estimate</Button>
                <Button variant="outline" className="w-full">Client Portal</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="shrink-0 bg-charcoal-900 px-4 py-8 text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase sm:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <span>&copy; {new Date().getFullYear()} Greenlawn Inc. All Rights Reserved.</span>
          <div className="flex gap-8 text-center sm:text-left">
            <span>Serving: 16602 and nearby areas</span>
            <span className="hidden sm:inline">Terms of Service</span>
          </div>
        </div>
      </footer>

      {/* Floating Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white p-3 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] lg:hidden">
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1 shrink-0 px-2" onClick={() => window.location.href="tel:8142151371"}>
            <Phone className="mr-2 h-4 w-4" /> Call
          </Button>
          <Link to="/contact" className="flex-[2]">
            <Button className="w-full">Get Quote</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
