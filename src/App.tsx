/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import SEOMeta from './components/SEOMeta';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import ServicesView from './views/ServicesView';
import GalleryView from './views/GalleryView';
import ContactView from './views/ContactView';
import { useTracker } from './hooks/useTracker';

export default function App() {
  const [currentView, setView] = useState<string>('home');
  const [isOrderFormOpen, setIsOrderFormOpen] = useState<boolean>(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState<string>('');
  
  // Global WMIT tracking hook
  useTracker(currentView);
  
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply dark class to document body / html
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const handleOpenOrderForm = (prefill = '') => {
    setPrefilledMedicine(prefill);
    setIsOrderFormOpen(true);
  };

  // Render active view
  const renderActiveView = () => {
    switch (currentView) {
      case 'home':
        return (
          <HomeView
            setView={setView}
            onOpenOrderForm={(prefill) => handleOpenOrderForm(prefill)}
            setPrefilledMedicine={setPrefilledMedicine}
          />
        );
      case 'about':
        return <AboutView />;
      case 'services':
        return (
          <ServicesView
            onOpenOrderForm={(prefill) => handleOpenOrderForm(prefill)}
            setPrefilledMedicine={setPrefilledMedicine}
          />
        );
      case 'gallery':
        return (
          <GalleryView
            onOpenOrderForm={(prefill) => handleOpenOrderForm(prefill)}
            setPrefilledMedicine={setPrefilledMedicine}
          />
        );
      case 'contact':
        return <ContactView />;
      default:
        return (
          <HomeView
            setView={setView}
            onOpenOrderForm={(prefill) => handleOpenOrderForm(prefill)}
            setPrefilledMedicine={setPrefilledMedicine}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 flex flex-col font-sans transition-colors duration-300">
      {/* 1. Injects SEO Metadata & Schema Markups Dynamically */}
      <SEOMeta currentView={currentView} />

      {/* 2. Responsive Navigation Header */}
      <Header
        currentView={currentView}
        setView={setView}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        onOpenOrderForm={() => handleOpenOrderForm('')}
      />

      {/* 3. Main View Stage Container */}
      <main className="flex-1">
        {renderActiveView()}
      </main>

      {/* 4. Professional Information Footer */}
      <Footer setView={setView} />

      {/* 5. Floating CTAs, Back-to-Top, and WhatsApp Form Dialog */}
      <WhatsAppButton
        isOrderFormOpen={isOrderFormOpen}
        onCloseOrderForm={() => {
          setIsOrderFormOpen(false);
          setPrefilledMedicine(''); // clear prefill on close
        }}
        onOpenOrderForm={(prefill) => handleOpenOrderForm(prefill)}
        prefilledMedicine={prefilledMedicine}
      />
    </div>
  );
}
