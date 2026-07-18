/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { businessDetails, faqs } from '../data/pharmacyData';

interface SEOMetaProps {
  currentView: string;
}

export default function SEOMeta({ currentView }: SEOMetaProps) {
  useEffect(() => {
    // Determine view name for title
    const viewTitles: Record<string, string> = {
      home: 'Home',
      about: 'About Us',
      services: 'Our Services',
      gallery: 'Gallery',
      contact: 'Contact Us',
    };

    const titleSuffix = 'Om Pharma - Reliable Pharmacy in Makhdumpur, Bihar';
    const viewTitle = viewTitles[currentView] || 'Trusted Medicine Store';
    document.title = `${viewTitle} | ${titleSuffix}`;

    // Meta descriptions and keywords
    const metaDescription = `Om Pharma in Makhdumpur, Bihar is your trusted local pharmacy on Gaya-Patna Main Road. We provide 100% genuine medicines, healthcare products, baby care, surgical supplies, and medical equipment at affordable prices. Order on WhatsApp or call 09576340165.`;
    const metaKeywords = 'Om Pharma, Pharmacy in Makhdumpur, Medical Store Makhdumpur, Medical Store Gaya Patna Road, Genuine Medicines Bihar, Surgical supplies Makhdumpur, WhatsApp medicine delivery Bihar, Titaiganj Pharmacy, Om Medical Store';

    // Helper to update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update basic metas
    updateMetaTag('description', metaDescription);
    updateMetaTag('keywords', metaKeywords);

    // Open Graph
    updateMetaTag('og:title', `${viewTitle} | Om Pharma`, true);
    updateMetaTag('og:description', metaDescription, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', window.location.href, true);
    updateMetaTag('og:image', 'https://images.unsplash.com/photo-1631549916768-4119b295f846?auto=format&fit=crop&q=80&w=600', true);
    updateMetaTag('og:site_name', 'Om Pharma', true);

    // Twitter Cards
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', `${viewTitle} | Om Pharma`);
    updateMetaTag('twitter:description', metaDescription);
    updateMetaTag('twitter:image', 'https://images.unsplash.com/photo-1631549916768-4119b295f846?auto=format&fit=crop&q=80&w=600');

    // Breadcrumb schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': window.location.origin
        },
        ...(currentView !== 'home' ? [{
          '@type': 'ListItem',
          'position': 2,
          'name': viewTitles[currentView],
          'item': `${window.location.origin}/#${currentView}`
        }] : [])
      ]
    };

    // Pharmacy/LocalBusiness schema
    const pharmacySchema = {
      '@context': 'https://schema.org',
      '@type': 'Pharmacy',
      '@id': `${window.location.origin}/#store`,
      'name': businessDetails.name,
      'image': [
        'https://images.unsplash.com/photo-1631549916768-4119b295f846?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=600'
      ],
      'priceRange': '$$',
      'telephone': businessDetails.phone,
      'url': window.location.origin,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Gaya - Patna Main Rd, Titaiganj, Makhdumpur',
        'addressLocality': 'Makhdumpur',
        'addressRegion': 'Bihar',
        'postalCode': '804422',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '25.0657',
        'longitude': '84.9123'
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '08:00',
          'closes': '22:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Sunday',
          'opens': '09:00',
          'closes': '16:00'
        }
      ],
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': businessDetails.phone,
        'contactType': 'customer service',
        'areaServed': 'IN',
        'availableLanguage': ['en', 'hi']
      },
      'sameAs': [
        `https://wa.me/${businessDetails.whatsapp}`
      ]
    };

    // FAQ schema
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    };

    // Inject JSON-LD
    const injectJSONLD = (id: string, schema: object) => {
      let script = document.getElementById(id) as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(schema);
    };

    injectJSONLD('breadcrumb-schema-jsonld', breadcrumbSchema);
    injectJSONLD('pharmacy-schema-jsonld', pharmacySchema);
    injectJSONLD('faq-schema-jsonld', faqSchema);

    // Clean up schemas if needed
    return () => {
      // Keep main schemas, as they benefit SEO overall, but we can update them on view change
    };
  }, [currentView]);

  return null;
}
