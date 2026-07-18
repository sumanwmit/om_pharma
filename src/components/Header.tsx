/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X, Phone, MessageSquare, Sun, Moon, Plus } from 'lucide-react';
import { businessDetails } from '../data/pharmacyData';

interface HeaderProps {
  currentView: string;
  setView: (view: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onOpenOrderForm: () => void;
}

export default function Header({
  currentView,
  setView,
  isDarkMode,
  toggleDarkMode,
  onOpenOrderForm
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (viewId: string) => {
    // If the viewId is testimonial or faq, we can scroll to them if we are on Home page.
    // Or we can just set the view to home and then scroll, or keep it in the home view.
    // Let's scroll to the respective section on the home page if it is faq or testimonials.
    if (viewId === 'testimonials' || viewId === 'faq') {
      setView('home');
      setTimeout(() => {
        const element = document.getElementById(viewId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      setView(viewId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header id="main-header" className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/95 backdrop-blur-md dark:border-gray-800/80 dark:bg-gray-950/95 transition-colors duration-300 shadow-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo and Branding */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-2 text-left focus:outline-hidden group"
          id="btn-logo-home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-600/20 group-hover:bg-emerald-500 transition-colors duration-300">
            <Plus className="h-6 w-6 stroke-[3]" />
          </div>
          <div>
            <span className="block text-xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              {businessDetails.name}
            </span>
            <span className="block text-[10px] font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase -mt-1">
              Trusted Pharmacy
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => {
            const isActive =
              (item.id === 'testimonials' || item.id === 'faq')
                ? currentView === 'home' // they are sections in Home
                : currentView === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-semibold tracking-wide transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 focus:outline-hidden ${
                  isActive
                    ? 'text-emerald-600 dark:text-emerald-400 border-b-2 border-emerald-600 dark:border-emerald-400 pb-1 -mb-[6px]'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
                id={`nav-item-${item.id}`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Header Actions */}
        <div className="hidden sm:flex items-center space-x-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors focus:outline-hidden"
            title="Toggle Dark Mode"
            id="btn-dark-mode-desktop"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Call CTA */}
          <a
            href={`tel:${businessDetails.phone}`}
            className="flex items-center space-x-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all focus:outline-hidden"
            id="btn-call-desktop"
          >
            <Phone className="h-4 w-4 text-emerald-600" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Order */}
          <button
            onClick={onOpenOrderForm}
            className="flex items-center space-x-1.5 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-emerald-500 active:scale-[0.98] transition-all focus:outline-hidden"
            id="btn-whatsapp-order-desktop"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Order on WhatsApp</span>
          </button>
        </div>

        {/* Small screen elements (Toggle + Menu Button) */}
        <div className="flex items-center space-x-2 lg:hidden">
          {/* Dark Mode Toggle for Mobile */}
          <button
            onClick={toggleDarkMode}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors focus:outline-hidden"
            title="Toggle Dark Mode"
            id="btn-dark-mode-mobile"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Quick Call Button for Mobile */}
          <a
            href={`tel:${businessDetails.phone}`}
            className="rounded-lg p-2 text-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-950/30 transition-colors focus:outline-hidden"
            id="btn-call-mobile"
          >
            <Phone className="h-5 w-5" />
          </a>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-hidden"
            id="btn-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-4 space-y-3 transition-all">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2.5 px-3 rounded-lg font-medium text-sm transition-colors ${
                  currentView === item.id
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900'
                }`}
                id={`mobile-nav-item-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="pt-4 border-t border-gray-100 dark:border-gray-900 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <a
              href={`tel:${businessDetails.phone}`}
              className="flex items-center justify-center space-x-2 rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all text-center w-full"
              id="mobile-call-cta"
            >
              <Phone className="h-4 w-4 text-emerald-600" />
              <span>Call Us: {businessDetails.phoneDisplay}</span>
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenOrderForm();
              }}
              className="flex items-center justify-center space-x-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500 transition-all text-center w-full shadow-xs"
              id="mobile-whatsapp-cta"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp Prescription</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
