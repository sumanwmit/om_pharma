/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  role?: string;
  avatar?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PharmacyService {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface MedicineCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'medicines' | 'products' | 'equipment';
  image: string;
  alt: string;
}

export interface BusinessDetails {
  name: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  address: string;
  googleMapEmbedUrl: string;
  googleMapDirectionsUrl: string;
  hours: {
    days: string;
    time: string;
  }[];
}
