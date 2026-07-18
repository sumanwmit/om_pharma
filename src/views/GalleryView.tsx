/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, MouseEvent } from 'react';
import { Maximize2, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, X, MessageSquare, Filter } from 'lucide-react';
import { galleryItems, businessDetails } from '../data/pharmacyData';

interface GalleryViewProps {
  onOpenOrderForm: (prefill?: string) => void;
  setPrefilledMedicine?: (medicine: string) => void;
}

export default function GalleryView({ onOpenOrderForm, setPrefilledMedicine }: GalleryViewProps) {
  const [filter, setFilter] = useState<string>('all');
  const [activeImageIdx, setActiveImageIdx] = useState<number | null>(null);
  const [zoomScale, setZoomScale] = useState<number>(1);

  const filterTabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'store', label: 'Store Front & Interior' },
    { id: 'medicines', label: 'Medicine Shelves' },
    { id: 'equipment', label: 'Medical Devices' },
    { id: 'products', label: 'Wellness Products' }
  ];

  // Filter gallery items
  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  const openLightbox = (indexInFilteredList: number) => {
    // Find index in original list to preserve consistency
    const item = filteredItems[indexInFilteredList];
    const idxInOriginalList = galleryItems.findIndex(g => g.id === item.id);
    setActiveImageIdx(idxInOriginalList);
    setZoomScale(1); // reset zoom
  };

  const closeLightbox = () => {
    setActiveImageIdx(null);
    setZoomScale(1);
  };

  const showNext = (e: MouseEvent) => {
    e.stopPropagation();
    if (activeImageIdx === null) return;
    const nextIdx = (activeImageIdx + 1) % galleryItems.length;
    setActiveImageIdx(nextIdx);
    setZoomScale(1);
  };

  const showPrev = (e: MouseEvent) => {
    e.stopPropagation();
    if (activeImageIdx === null) return;
    const prevIdx = (activeImageIdx - 1 + galleryItems.length) % galleryItems.length;
    setActiveImageIdx(prevIdx);
    setZoomScale(1);
  };

  const handleZoomIn = (e: MouseEvent) => {
    e.stopPropagation();
    setZoomScale(prev => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = (e: MouseEvent) => {
    e.stopPropagation();
    setZoomScale(prev => Math.max(prev - 0.25, 0.75));
  };

  const handleInquiry = (e: MouseEvent, title: string) => {
    e.stopPropagation();
    closeLightbox();
    onOpenOrderForm(title);
  };

  return (
    <div className="animate-fade-in py-12 sm:py-20 bg-slate-50 dark:bg-gray-950" id="gallery-view-container">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Title Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Visual Tour
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Om Pharma Store Gallery
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Take a visual tour of our retail store, temperature-controlled cabinets, and clean diagnostic instrument inventories.
          </p>
          <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full"></div>
        </div>

        {/* Filters and Search Tabs */}
        <div className="flex flex-wrap justify-center gap-2" id="gallery-filters-container">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`rounded-xl px-4 py-2.5 text-xs font-bold transition-all focus:outline-hidden ${
                filter === tab.id
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/10'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-800 dark:hover:bg-gray-800'
              }`}
              id={`btn-filter-${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modern Masonry/Grid of Gallery Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="gallery-grid">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800 shadow-3xs cursor-pointer relative"
              id={`gallery-item-card-${item.id}`}
            >
              {/* Image box */}
              <div className="h-56 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/90 p-3 rounded-full text-emerald-700 shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="h-5 w-5" />
                  </div>
                </div>
              </div>
              
              {/* Details footer */}
              <div className="p-4 bg-white dark:bg-gray-900 flex justify-between items-center">
                <div>
                  <span className="block text-[9px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                    {item.category}
                  </span>
                  <span className="block text-xs font-bold text-gray-800 dark:text-white truncate max-w-[160px] sm:max-w-[200px]">
                    {item.title}
                  </span>
                </div>
                <span className="text-[9px] bg-slate-100 dark:bg-slate-800 text-gray-400 font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                  Zoom
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal with Zoom/Controls */}
        {activeImageIdx !== null && (
          <div
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4 backdrop-blur-md animate-fade-in"
            id="gallery-lightbox-modal"
          >
            {/* Upper control header */}
            <div className="w-full max-w-5xl flex justify-between items-center text-white mb-4 relative z-20">
              <div className="flex items-center space-x-3 bg-black/40 px-3.5 py-2 rounded-xl backdrop-blur-xs">
                <span className="text-xs bg-emerald-600 text-white font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                  {galleryItems[activeImageIdx].category}
                </span>
                <span className="text-xs font-semibold">{galleryItems[activeImageIdx].title}</span>
              </div>

              {/* Action utilities */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleZoomIn}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  title="Zoom In"
                  id="btn-lightbox-zoomin"
                >
                  <ZoomIn className="h-5 w-5" />
                </button>
                <button
                  onClick={handleZoomOut}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  title="Zoom Out"
                  id="btn-lightbox-zoomout"
                >
                  <ZoomOut className="h-5 w-5" />
                </button>
                <button
                  onClick={(e) => handleInquiry(e, galleryItems[activeImageIdx].title)}
                  className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-bold transition-colors"
                  id="btn-lightbox-inquire"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span className="hidden sm:inline">Check Product</span>
                </button>
                <button
                  onClick={closeLightbox}
                  className="p-2 rounded-lg bg-white/10 hover:bg-rose-600 transition-colors"
                  title="Close Lightbox"
                  id="btn-lightbox-close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Core Slide Container */}
            <div className="relative w-full max-w-4xl h-[60vh] flex items-center justify-center overflow-hidden">
              {/* Previous Button */}
              <button
                onClick={showPrev}
                className="absolute left-4 z-20 p-3 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors border border-white/10"
                id="btn-lightbox-prev"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Main Image */}
              <div className="overflow-hidden max-w-full max-h-full flex items-center justify-center transition-transform">
                <img
                  src={galleryItems[activeImageIdx].image}
                  alt={galleryItems[activeImageIdx].alt}
                  style={{ transform: `scale(${zoomScale})` }}
                  className="max-w-full max-h-[55vh] object-contain rounded-lg shadow-2xl transition-transform duration-250 cursor-grab active:cursor-grabbing"
                  referrerPolicy="no-referrer"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>

              {/* Next Button */}
              <button
                onClick={showNext}
                className="absolute right-4 z-20 p-3 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors border border-white/10"
                id="btn-lightbox-next"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Bottom count status */}
            <div className="mt-4 text-xs text-slate-400 bg-black/40 px-3.5 py-1.5 rounded-full backdrop-blur-xs relative z-20">
              Image {activeImageIdx + 1} of {galleryItems.length} (Scale: {Math.round(zoomScale * 100)}%)
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
