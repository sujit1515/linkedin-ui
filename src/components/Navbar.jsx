// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Rocket, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { href: '/students', label: 'For Students' },
    { href: '/institutions', label: 'For Institutions' },
    { href: '/recruiters', label: 'For Recruiters' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' 
        : 'bg-white shadow-sm py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Left - Logo with enhanced design */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="bg-gradient-to-br from-[#1565c0] to-[#0d47a1] text-white p-2 rounded-xl shadow-md transform transition-transform group-hover:scale-110 group-hover:rotate-3">
              <Rocket className="h-6 w-6 md:h-7 md:w-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 leading-tight">
                Career<span className="text-[#1565c0]">Hub</span>
              </span>
              <span className="text-xs font-medium text-[#1565c0] -mt-1">India's Trusted Platform</span>
            </div>
          </Link>

          {/* Center - Main Links (Desktop) */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} hasDropdown={link.hasDropdown}>
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right - Auth Buttons with enhanced design */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/login"
              className="hidden sm:inline-block text-gray-700 hover:text-[#1565c0] font-medium px-4 py-2.5 text-sm lg:text-base transition-all relative group"
            >
              Login
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#1565c0] transition-all group-hover:w-1/2"></span>
            </Link>

            <Link
              to="/signup"
              className="bg-[#1565c0] hover:bg-[#0d47a1] text-white font-semibold px-5 py-2.5 rounded-xl text-sm lg:text-base transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Join Now</span>
            </Link>

            {/* Mobile menu button with animation */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu with animation */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-3 space-y-1">
          {/* Mobile menu links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="block px-4 py-3 text-gray-700 hover:text-[#1565c0] hover:bg-blue-50 rounded-lg font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          
          {/* Mobile auth links */}
          <div className="border-t border-gray-100 mt-3 pt-3">
            <Link
              to="/login"
              className="block px-4 py-3 text-gray-700 hover:text-[#1565c0] hover:bg-blue-50 rounded-lg font-medium transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block px-4 py-3 mt-1 bg-[#1565c0] text-white rounded-lg font-medium hover:bg-[#0d47a1] transition-colors"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Enhanced Reusable Nav Link component
function NavLink({ href, children, hasDropdown }) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      className={`
        relative px-4 py-2 text-sm lg:text-base font-medium rounded-lg
        transition-all duration-300 group
        ${isActive 
          ? 'text-[#1565c0] bg-blue-50' 
          : 'text-gray-700 hover:text-[#1565c0] hover:bg-blue-50/50'
        }
      `}
    >
      <span className="flex items-center gap-1">
        {children}
        {hasDropdown && <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />}
      </span>
      {isActive && (
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-[#1565c0] rounded-full"></span>
      )}
    </Link>
  );
}