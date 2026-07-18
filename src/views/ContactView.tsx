/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, Map } from 'lucide-react';
import { businessDetails } from '../data/pharmacyData';

export default function ContactView() {
  // Form fields state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Status state
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = 'Full name is required';
    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    if (phone.trim() && !/^\+?[0-9]{10,12}$/.test(phone.trim().replace(/[-\s]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!message.trim()) newErrors.message = 'Please type your message';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    // Simulate backend submission delay of 1 second
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      resetForm();
      
      // Auto close success panel after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setErrors({});
  };

  return (
    <div className="animate-fade-in py-12 sm:py-20 bg-slate-50 dark:bg-gray-950" id="contact-view-container">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Title Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Get In Touch
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Contact Om Pharma
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Have queries regarding prescription availability or bulk medical supply? Drop us a message or call us directly.
          </p>
          <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full"></div>
        </div>

        {/* Form and Info Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Business details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 border border-gray-150 dark:border-gray-800 shadow-3xs space-y-6">
              <h2 className="text-lg font-bold text-gray-950 dark:text-white pb-3 border-b border-gray-100 dark:border-gray-800">
                Business Information
              </h2>

              <div className="space-y-4">
                {/* Address block */}
                <div className="flex items-start space-x-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Store Address</span>
                    <p className="text-xs text-gray-700 dark:text-gray-200 font-medium leading-relaxed mt-1">
                      {businessDetails.address}
                    </p>
                  </div>
                </div>

                {/* Phone block */}
                <div className="flex items-start space-x-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Call Helpline</span>
                    <a
                      href={`tel:${businessDetails.phone}`}
                      className="block text-sm font-bold text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 mt-1 transition-colors"
                      id="contact-call-link"
                    >
                      {businessDetails.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email block */}
                <div className="flex items-start space-x-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Email Support</span>
                    <a
                      href={`mailto:${businessDetails.email}`}
                      className="block text-xs font-medium text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 mt-1 transition-colors"
                      id="contact-email-link"
                    >
                      {businessDetails.email}
                    </a>
                  </div>
                </div>

                {/* Hours block */}
                <div className="flex items-start space-x-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Store Timing</span>
                    <div className="text-xs text-gray-700 dark:text-gray-200 leading-relaxed mt-1 font-medium">
                      {businessDetails.hours.map((h, i) => (
                        <div key={i} className="flex justify-between space-x-4">
                          <span className="text-gray-500">{h.days}:</span>
                          <span>{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct clickable CTAs */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                <a
                  href={`tel:${businessDetails.phone}`}
                  className="flex items-center justify-center space-x-1.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 py-2.5 text-xs font-bold text-gray-700 dark:text-gray-300 transition-colors"
                  id="btn-contact-call-cta"
                >
                  <Phone className="h-4 w-4 text-emerald-600" />
                  <span>Call Store</span>
                </a>
                <a
                  href={`https://wa.me/${businessDetails.whatsapp}?text=Hi%20Om%20Pharma%2C%20I%20have%20an%20inquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white py-2.5 text-xs font-extrabold transition-all"
                  id="btn-contact-whatsapp-cta"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Micro Map block */}
            <div className="overflow-hidden rounded-3xl border border-gray-150 dark:border-gray-800 bg-white dark:bg-gray-900 p-3 shadow-3xs h-60 relative">
              <iframe
                title="Om Pharma Store Contact Map"
                src={businessDetails.googleMapEmbedUrl}
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-2xl border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 border border-gray-150 dark:border-gray-800 shadow-3xs">
              <h2 className="text-lg font-bold text-gray-950 dark:text-white pb-3 border-b border-gray-100 dark:border-gray-800 mb-6">
                Send Quick Inquiry Message
              </h2>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4" id="contact-success-banner">
                  <CheckCircle2 className="h-14 w-14 text-emerald-500 animate-bounce" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Inquiry Sent Successfully!</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm">
                    Thank you for reaching out to Om Pharma. Our team will verify your query and revert back on your mobile number as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                    id="btn-send-another-message"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-1.5">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full rounded-lg border px-3.5 py-2.5 text-xs outline-hidden transition-colors bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white ${
                        errors.name ? 'border-rose-500 focus:border-rose-500 bg-rose-50/10' : 'border-gray-300 focus:border-emerald-500 focus:bg-white'
                      }`}
                      placeholder="Enter your name"
                      id="contact-input-name"
                    />
                    {errors.name && <p className="mt-1 text-[11px] text-rose-500 font-medium">{errors.name}</p>}
                  </div>

                  {/* Phone and Email grid */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-1.5">
                        Mobile Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`w-full rounded-lg border px-3.5 py-2.5 text-xs outline-hidden transition-colors bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white ${
                          errors.phone ? 'border-rose-500 focus:border-rose-500 bg-rose-50/10' : 'border-gray-300 focus:border-emerald-500 focus:bg-white'
                        }`}
                        placeholder="e.g. 09576340165"
                        id="contact-input-phone"
                      />
                      {errors.phone && <p className="mt-1 text-[11px] text-rose-500 font-medium">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-1.5">
                        Email Address <span className="text-gray-400">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-xs outline-hidden focus:border-emerald-500 focus:bg-white bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        placeholder="name@example.com"
                        id="contact-input-email"
                      />
                    </div>
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-1.5">
                      Your Query Message / Requirements <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className={`w-full rounded-lg border px-3.5 py-2.5 text-xs outline-hidden transition-colors bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white ${
                        errors.message ? 'border-rose-500 focus:border-rose-500 bg-rose-50/10' : 'border-gray-300 focus:border-emerald-500 focus:bg-white'
                      }`}
                      placeholder="Type details of medicines, quantities or equipment you are inquiring about..."
                      id="contact-input-message"
                    />
                    {errors.message && <p className="mt-1 text-[11px] text-rose-500 font-medium">{errors.message}</p>}
                  </div>

                  {/* Buttons */}
                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex items-center justify-center space-x-2 w-full sm:w-auto rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 px-6 transition-all shadow-md focus:outline-hidden disabled:bg-emerald-400 active:scale-95"
                      id="btn-submit-contact-form"
                    >
                      {isLoading ? (
                        <>
                          <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Submit Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
