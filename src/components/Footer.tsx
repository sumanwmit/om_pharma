/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldAlert, Heart, ArrowUpRight, X } from 'lucide-react';
import { businessDetails } from '../data/pharmacyData';

interface FooterProps {
  setView: (view: string) => void;
}

export default function Footer({ setView }: FooterProps) {
  const [activePolicy, setActivePolicy] = useState<string | null>(null);

  const handleNavClick = (viewId: string) => {
    setView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const policyContent: Record<string, { title: string; content: string[] }> = {
    privacy: {
      title: 'Privacy Policy',
      content: [
        'At Om Pharma, accessible from Gaya - Patna Main Road, Makhdumpur, Bihar, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Om Pharma and how we use it.',
        'We only collect information that you voluntarily provide to us when you use our WhatsApp Order form, Contact Form, or communicate with our pharmacy. This may include your Name, Mobile Number, Email, Address, and Prescription details.',
        'We use the collected information to process your medicine orders, contact you for order clarifications, verify prescriptions under drug regulations, and send order updates via WhatsApp/Phone. We never sell, rent, or lease your personal information or medical records to any third party.',
        'Under Section 65 of the Drugs and Cosmetics Rules, prescriptions are kept strictly confidential and only accessed by registered pharmacists for verification purposes before dispensing medicines.'
      ]
    },
    terms: {
      title: 'Terms & Conditions',
      content: [
        'Welcome to Om Pharma. By accessing this website and using our online WhatsApp order system, you agree to comply with and be bound by the following terms and conditions.',
        'Prescription Requirement: Dispensing of certain Schedule H, H1, and X drugs strictly requires a valid prescription from a registered medical practitioner. We will verify your uploaded prescription photo before preparing your medicine package.',
        'Product Information: While we strive to display accurate medical information, content on this website is for informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment.',
        'Return & Refund Policy: Medicines in uncut, sealed packages can be returned or exchanged within 7 days with a valid bill. Temperature-controlled drugs (like insulin and vaccines) and cut strips are strictly non-returnable to maintain quality standards.'
      ]
    },
    disclaimer: {
      title: 'Medical Disclaimer',
      content: [
        'The information provided on Om Pharma’s website is for general informational and educational purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment.',
        'Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.',
        'Om Pharma does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on the website. Reliance on any information provided by Om Pharma or its staff is solely at your own risk.',
        'All drug brand names, logos, and images are trademarks of their respective pharmaceutical manufacturers. We display them solely for identifying genuine products.'
      ]
    }
  };

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-300 dark:bg-black dark:text-slate-400 transition-colors duration-300">
      {/* Upper Footer section */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Business Identity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white font-bold text-lg">
                +
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {businessDetails.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              {businessDetails.tagline}. We are dedicated to providing 100% authentic pharmaceuticals and reliable clinical supplies to our local community.
            </p>
            <div className="space-y-2.5 pt-2">
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="h-5 w-5 shrink-0 text-emerald-500" />
                <span>{businessDetails.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 shrink-0 text-emerald-500" />
                <a href={`tel:${businessDetails.phone}`} className="hover:text-white transition-colors">
                  {businessDetails.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 shrink-0 text-emerald-500" />
                <a href={`mailto:${businessDetails.email}`} className="hover:text-white transition-colors">
                  {businessDetails.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: 'home', name: 'Home' },
                { id: 'about', name: 'About Business' },
                { id: 'services', name: 'Services & Products' },
                { id: 'gallery', name: 'Store Gallery' },
                { id: 'contact', name: 'Contact & Map' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="flex items-center space-x-1 hover:text-white transition-colors focus:outline-hidden group"
                    id={`footer-link-${link.id}`}
                  >
                    <ArrowUpRight className="h-3 w-3 text-slate-500 group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hours & Support */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-4">
              Working Hours
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  {businessDetails.hours.map((h, i) => (
                    <div key={i}>
                      <span className="block font-medium text-slate-200">{h.days}</span>
                      <span className="block text-slate-400 text-xs">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-2 border-t border-slate-800 space-y-2">
                <span className="block text-xs font-semibold uppercase text-emerald-500 tracking-wider">
                  Need Immediate Help?
                </span>
                <span className="block text-xs text-slate-400">
                  Call our emergency helpline number.
                </span>
                <a
                  href={`tel:${businessDetails.phone}`}
                  className="inline-flex items-center space-x-1.5 font-bold text-white text-sm hover:text-emerald-400 transition-colors"
                  id="footer-emergency-call"
                >
                  <Phone className="h-4 w-4 text-emerald-500 animate-bounce" />
                  <span>{businessDetails.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Location Map Preview */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase">
              Our Location
            </h3>
            <div className="overflow-hidden rounded-lg border border-slate-800 h-36 relative">
              <iframe
                title="Om Pharma Location Map"
                src={businessDetails.googleMapEmbedUrl}
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
              ></iframe>
            </div>
            <a
              href={businessDetails.googleMapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-1 w-full rounded-md bg-slate-800 hover:bg-slate-700 py-1.5 px-3 text-xs font-semibold text-white transition-colors"
              id="footer-directions-btn"
            >
              <MapPin className="h-3 w-3 text-emerald-500" />
              <span>Get Directions on Map</span>
            </a>
          </div>

        </div>
      </div>

      {/* Lower Copyright & Legal Policies footer */}
      <div className="border-t border-slate-800 bg-slate-950 py-6 text-xs text-slate-500 dark:bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>
            <p>
              © {currentYear} {businessDetails.name}. All Rights Reserved. Designed for local trust.{' '}
              <a
                href="https://main.webmakerit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-500 underline font-medium transition-colors"
                id="footer-wmit-link"
              >
                Developed by WMIT
              </a>
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            <button
              onClick={() => setActivePolicy('privacy')}
              className="hover:text-emerald-500 transition-colors focus:outline-hidden"
              id="btn-footer-privacy"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActivePolicy('terms')}
              className="hover:text-emerald-500 transition-colors focus:outline-hidden"
              id="btn-footer-terms"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => setActivePolicy('disclaimer')}
              className="hover:text-emerald-500 transition-colors focus:outline-hidden"
              id="btn-footer-disclaimer"
            >
              Disclaimer
            </button>
          </div>
        </div>
      </div>

      {/* Policy Modal Overlay */}
      {activePolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-2xl rounded-2xl bg-white dark:bg-gray-900 p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActivePolicy(null)}
              className="absolute top-4 right-4 rounded-full p-1.5 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors focus:outline-hidden"
              id="btn-close-policy-modal"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 mb-4">
              <ShieldAlert className="h-6 w-6" />
              <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {policyContent[activePolicy].title}
              </h2>
            </div>
            
            <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {policyContent[activePolicy].content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-6 border-t border-gray-100 dark:border-gray-800 pt-4 flex justify-end">
              <button
                onClick={() => setActivePolicy(null)}
                className="rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 text-sm font-semibold transition-colors focus:outline-hidden"
                id="btn-accept-policy-modal"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
