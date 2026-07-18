/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import {
  Search, Award, ShieldCheck, Zap, Smile, Percent, MapPin,
  Activity, Phone, MessageSquare, Check, ChevronDown, ChevronUp,
  Star, FileText, ArrowRight, ClipboardList, HelpingHand, Plus, SearchCheck
} from 'lucide-react';
import {
  businessDetails, testimonials, faqs, services,
  featuredCategories, reasonsToTrustUs, workingProcess
} from '../data/pharmacyData';

interface HomeViewProps {
  setView: (view: string) => void;
  onOpenOrderForm: (prefill?: string) => void;
  setPrefilledMedicine?: (medicine: string) => void;
}

export default function HomeView({ setView, onOpenOrderForm, setPrefilledMedicine }: HomeViewProps) {
  // Search Box states
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<typeof featuredCategories | null>(null);

  // FAQ Accordion states
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  // Active Category filter in the search suggestion
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchResult(null);
      return;
    }

    const filtered = featuredCategories.filter(cat =>
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResult(filtered);
  };

  const handleInquiry = (term: string) => {
    onOpenOrderForm(term);
  };

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="animate-fade-in" id="home-view-container">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50/20 to-white py-16 sm:py-24 dark:from-slate-950 dark:via-emerald-950/10 dark:to-slate-950">
        <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20">
          <div className="absolute -top-48 -left-48 h-96 w-96 rounded-full bg-emerald-300 blur-3xl dark:bg-emerald-900"></div>
          <div className="absolute top-1/2 right-12 h-80 w-80 rounded-full bg-teal-200 blur-3xl dark:bg-teal-900"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider shadow-xs">
              <Star className="h-3.5 w-3.5 fill-emerald-600 text-emerald-600 dark:fill-emerald-400 dark:text-emerald-400" />
              <span>100% Genuine Medicines Guaranteed</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
              {businessDetails.name} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-400">
                Your Trusted Pharmacy in Makhdumpur
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices. Located conveniently on Gaya - Patna Main Rd, Makhdumpur.
            </p>

            {/* Quick Actions CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href={`tel:${businessDetails.phone}`}
                className="inline-flex items-center space-x-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white px-6 py-3.5 text-base font-semibold shadow-lg transition-transform hover:-translate-y-0.5 focus:outline-hidden dark:bg-emerald-600 dark:hover:bg-emerald-500"
                id="btn-hero-call"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
              <button
                onClick={onOpenOrderForm}
                className="inline-flex items-center space-x-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 text-base font-semibold shadow-lg transition-transform hover:-translate-y-0.5 focus:outline-hidden dark:bg-slate-800 dark:hover:bg-slate-700"
                id="btn-hero-whatsapp"
              >
                <MessageSquare className="h-5 w-5" />
                <span>WhatsApp Order</span>
              </button>
              <a
                href={businessDetails.googleMapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 px-6 py-3.5 text-base font-semibold shadow-sm transition-transform hover:-translate-y-0.5 focus:outline-hidden"
                id="btn-hero-directions"
              >
                <MapPin className="h-5 w-5 text-emerald-600" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Medicine Search Box Feature */}
            <div className="max-w-xl mx-auto lg:mx-0 pt-4">
              <form onSubmit={handleSearch} className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (!e.target.value) setSearchResult(null);
                  }}
                  className="block w-full rounded-2xl border border-gray-300 bg-white py-4 pl-12 pr-28 text-sm outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                  placeholder="Search tablets, syrup, vitamins, diapers..."
                  id="search-input-box"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 text-xs font-bold transition-all focus:outline-hidden"
                  id="btn-submit-search"
                >
                  Search
                </button>
              </form>

              {/* Dynamic Search Suggestions */}
              {searchQuery && (
                <div className="absolute z-20 mt-2 w-full max-w-xl rounded-2xl border border-gray-200 bg-white p-4 shadow-xl dark:border-gray-800 dark:bg-gray-900">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Search Results & Suggestions
                  </div>
                  {searchResult && searchResult.length > 0 ? (
                    <div className="space-y-2">
                      {searchResult.map((cat) => (
                        <div
                          key={cat.id}
                          className="flex items-center justify-between rounded-lg p-2.5 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="rounded-lg bg-emerald-50 dark:bg-emerald-950/40 p-2 text-emerald-600 dark:text-emerald-400">
                              <SearchCheck className="h-4 w-4" />
                            </div>
                            <div>
                              <span className="block font-bold text-sm text-gray-900 dark:text-white">{cat.name}</span>
                              <span className="block text-xs text-gray-500 dark:text-gray-400 truncate max-w-xs sm:max-w-md">
                                {cat.description}
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={() => handleInquiry(cat.name)}
                            className="rounded-lg bg-emerald-55 border border-emerald-200 dark:border-emerald-900 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 py-1.5 px-3 hover:bg-emerald-600 hover:text-white transition-colors"
                            id={`btn-search-inquire-${cat.id}`}
                          >
                            Inquire Now
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        No category matched &ldquo;{searchQuery}&rdquo;.
                      </p>
                      <button
                        type="button"
                        onClick={() => handleInquiry(searchQuery)}
                        className="mt-2 inline-flex items-center space-x-1.5 rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 py-1.5 px-4 text-xs font-bold hover:bg-emerald-100 transition-colors"
                        id="btn-search-whatsapp-fallback"
                      >
                        <MessageSquare className="h-3.5 w-3.5" />
                        <span>Order Custom Medicine: &ldquo;{searchQuery}&rdquo;</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Column Illustration Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white p-4 shadow-2xl dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <div className="overflow-hidden rounded-2xl h-64 sm:h-80 relative">
                <img
                  src="https://images.unsplash.com/photo-1631549916768-4119b295f846?auto=format&fit=crop&q=80&w=600"
                  alt="Om Pharma Store Front"
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-widest font-bold text-emerald-400">Our Pharmacy Store</p>
                  <p className="text-lg font-bold">Gaya - Patna Main Road, Makhdumpur</p>
                </div>
              </div>
              
              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-start space-x-2.5">
                  <div className="bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 p-1.5 rounded-lg">
                    <Plus className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">Availability</span>
                    <span className="block text-[11px] text-gray-500">Fast 24hr response</span>
                  </div>
                </div>
                <div className="flex items-start space-x-2.5">
                  <div className="bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 p-1.5 rounded-lg">
                    <Star className="h-4 w-4 fill-emerald-600 text-emerald-600" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">Trust Score</span>
                    <span className="block text-[11px] text-gray-500">4.9 Google Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Choose Us */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900" id="why-choose-us">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Why Choose Us
            </h2>
            <p className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Om Pharma - Trusted Local Pharmacy
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Our core pillars of dedication, authentic sourcing, and immediate client support guarantee premium healthcare standards.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: '100% Genuine Medicines',
                desc: 'Direct pharmaceutical supply guarantees authentic therapeutic materials with accurate chemical composition.',
                icon: ShieldCheck,
                color: 'bg-emerald-500/10 text-emerald-600'
              },
              {
                title: 'Experienced Staff',
                desc: 'Our certified pharmacists provide precise counseling, dosage advisory, and prescription verification.',
                icon: Award,
                color: 'bg-blue-500/10 text-blue-600'
              },
              {
                title: 'Affordable Prices',
                desc: 'Quality medicines, therapeutic supports, and pediatric formulas supplied at reasonable competitive pricing.',
                icon: Percent,
                color: 'bg-teal-500/10 text-teal-600'
              },
              {
                title: 'Fast Service',
                desc: 'Zero-waiting checkout, structured packaging, and immediate priority assistance on urgent requisitions.',
                icon: Zap,
                color: 'bg-amber-500/10 text-amber-600'
              },
              {
                title: 'Prescription Medicines',
                desc: 'Compliant pharmacy protocols for stocking vital Schedule-H chronic heart, respiratory, and diabetic supplies.',
                icon: FileText,
                color: 'bg-indigo-500/10 text-indigo-600'
              },
              {
                title: 'Healthcare Products',
                desc: 'Comprehensive inventory ranging from daily personal sanitization essentials to dietary food supplements.',
                icon: Activity,
                color: 'bg-rose-500/10 text-rose-600'
              },
              {
                title: 'Trusted Local Pharmacy',
                desc: 'Highly recommended by community members, local medical practitioners, and elderly citizens of Bihar.',
                icon: Smile,
                color: 'bg-cyan-500/10 text-cyan-600'
              },
              {
                title: 'Easy WhatsApp Support',
                desc: 'Order effortlessly using prescription snapshots. Our team processes orders and notifies you within minutes.',
                icon: MessageSquare,
                color: 'bg-emerald-500/10 text-emerald-600'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 dark:border-gray-800 dark:bg-gray-950 group hover:-translate-y-1"
                id={`why-card-${index}`}
              >
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.color} group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Services */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-gray-950" id="services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Our Key Services
            </h2>
            <p className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Comprehensive Pharmaceutical & Wellness Solutions
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              We cover every aspect of clinical and general home healthcare with absolute precision and authenticity.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, idx) => (
              <div
                key={service.id}
                className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 relative group overflow-hidden"
                id={`srv-home-card-${service.id}`}
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-600"></div>
                <span className="inline-block text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-md mb-3">
                  {service.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {service.description}
                </p>
                <button
                  onClick={() => handleInquiry(service.title)}
                  className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                  id={`btn-srv-inquire-${service.id}`}
                >
                  <span>WhatsApp Inquiry</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setView('services')}
              className="inline-flex items-center space-x-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white px-6 py-3 font-semibold text-sm transition-colors shadow-sm"
              id="btn-view-all-services"
            >
              <span>View All 10 Services</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Featured Categories */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900" id="featured-categories">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Featured Categories
            </h2>
            <p className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Browse Our Medical Store Catalog
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Easily explore specialized departments containing medical-grade formulations, instruments, and pediatric hygiene.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {featuredCategories.map((cat, i) => (
              <div
                key={cat.id}
                className="overflow-hidden rounded-2xl border border-gray-150 bg-slate-50 shadow-xs hover:shadow-md transition-all duration-300 dark:border-gray-800 dark:bg-gray-950 group"
                id={`cat-card-${cat.id}`}
              >
                <div className="h-44 relative overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <span className="absolute bottom-3 left-3 rounded-md bg-emerald-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                    {cat.name}
                  </span>
                </div>
                <div className="p-4 space-y-3 bg-white dark:bg-gray-900">
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed min-h-[48px]">
                    {cat.description}
                  </p>
                  <button
                    onClick={() => handleInquiry(cat.name)}
                    className="flex items-center justify-center space-x-1.5 w-full rounded-lg bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-600 dark:hover:bg-emerald-500 hover:text-white py-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 transition-all"
                    id={`btn-cat-order-${cat.id}`}
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>Inquire Availability</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Customers Trust Us */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-gray-950" id="trust">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                Community Trust
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                The Standards That Set Om Pharma Apart
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Over the years, we have built unshakeable trust in Makhdumpur, Bihar by strictly adhering to clinical regulations, maintaining perfect cold-chain systems, and prioritizing local emergencies with empathy.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400 mt-0.5 shrink-0">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="block font-bold text-sm text-gray-950 dark:text-white">Strict Cold-Chain Verification</span>
                    <span className="block text-xs text-gray-500">Sensitive items like Insulin are kept in active refrigerated environments continuously.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400 mt-0.5 shrink-0">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="block font-bold text-sm text-gray-950 dark:text-white">100% Bill Transparency</span>
                    <span className="block text-xs text-gray-500">Every purchase is issued with a computer-printed billing statement showing batch and expiry limits.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Bento Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasonsToTrustUs.map((reason, i) => {
                // Map string icon name to real icon
                const iconsMap: Record<string, any> = {
                  Award: Award,
                  ShieldCheck: ShieldCheck,
                  Zap: Zap,
                  Smile: Smile,
                  Percent: Percent,
                  MapPin: MapPin,
                };
                const IconComponent = iconsMap[reason.icon] || ShieldCheck;

                return (
                  <div
                    key={i}
                    className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 shadow-xs relative overflow-hidden"
                    id={`bento-trust-card-${i}`}
                  >
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Working Process */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900" id="process">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Our Process
            </h2>
            <p className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              How to Purchase Medicines Easily
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Our workflows are optimized for extreme speed, legal compliance, and total customer convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 relative">
            {/* Draw connectors for desktop */}
            <div className="hidden md:block absolute top-14 left-16 right-16 h-0.5 bg-dashed border-t border-emerald-200 dark:border-emerald-900 z-0"></div>

            {workingProcess.map((proc, index) => (
              <div
                key={index}
                className="text-center space-y-4 relative z-10 group"
                id={`proc-card-${index}`}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white dark:bg-gray-950 border-2 border-emerald-600 font-extrabold text-emerald-600 shadow-md group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  {proc.step}
                </div>
                <div>
                  <h3 className="font-bold text-base text-gray-950 dark:text-white">
                    {proc.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mt-2 max-w-xs mx-auto">
                    {proc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Customer Testimonials */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-gray-950" id="testimonials">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Client Reviews
            </h2>
            <p className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Why Customers Trust Om Pharma
            </p>
            {/* Google review rating badge */}
            <div className="flex items-center justify-center space-x-1.5 mt-2">
              <div className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4.5 w-4.5 fill-current" />
                ))}
              </div>
              <span className="text-sm font-bold text-gray-800 dark:text-gray-200">4.9 / 5.0</span>
              <span className="text-xs text-gray-400">(Based on 250+ Google Reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xs relative flex flex-col justify-between dark:border-gray-800 dark:bg-gray-900"
                id={`testi-card-${test.id}`}
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex text-amber-400 mb-4">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Star key={i} className="h-4.5 w-4.5 fill-current text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 italic leading-relaxed mb-6">
                    &ldquo;{test.text}&rdquo;
                  </p>
                </div>

                {/* Profile row */}
                <div className="flex items-center space-x-3 border-t border-gray-100 dark:border-gray-800 pt-4">
                  <img
                    src={test.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120'}
                    alt={test.name}
                    className="h-10 w-10 rounded-full object-cover border border-gray-100"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div>
                    <span className="block font-bold text-sm text-gray-900 dark:text-white">
                      {test.name}
                    </span>
                    <span className="block text-[10px] text-gray-400 font-medium">
                      {test.role || 'Customer'} • {test.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900" id="faq">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Frequently Asked Questions
            </h2>
            <p className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center">
              Pharmacy & Ordering Help Center
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Get immediate answers to queries regarding prescription policies, home dispatch, returns, and payment options.
            </p>
          </div>

          {/* Accordion container */}
          <div className="space-y-4" id="faq-accordion-container">
            {faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;

              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 overflow-hidden shadow-xs transition-colors"
                  id={`faq-item-${faq.id}`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left font-bold text-sm text-gray-900 dark:text-white focus:outline-hidden hover:bg-gray-50/50 dark:hover:bg-gray-900/50 transition-colors"
                    id={`btn-faq-toggle-${faq.id}`}
                  >
                    <span>{faq.question}</span>
                    <span className="ml-4 shrink-0 rounded-full bg-emerald-50 dark:bg-emerald-950 p-1.5 text-emerald-600 dark:text-emerald-400">
                      {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 border-t border-gray-100 dark:border-gray-900 animate-fade-in" id={`faq-answer-${faq.id}`}>
                      <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Google Map Section */}
      <section className="relative h-96 w-full" id="map-section">
        <iframe
          title="Om Pharma Comprehensive Google Map Location"
          src={businessDetails.googleMapEmbedUrl}
          className="absolute inset-0 w-full h-full border-0 shadow-inner"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer"
        ></iframe>
        
        {/* Map Float Info card */}
        <div className="absolute top-6 left-6 z-10 hidden sm:block max-w-xs rounded-2xl bg-white/90 dark:bg-gray-950/90 p-5 shadow-2xl backdrop-blur-md border border-white/20 dark:border-gray-800/20">
          <span className="block text-[10px] font-extrabold uppercase text-emerald-600 tracking-wider">Our Location</span>
          <h3 className="text-base font-bold text-gray-900 dark:text-white mt-1">{businessDetails.name}</h3>
          <p className="text-xs text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
            {businessDetails.address}
          </p>
          <a
            href={businessDetails.googleMapDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center space-x-1.5 w-full rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 py-2.5 text-xs font-bold transition-colors"
            id="map-directions-btn-float"
          >
            <MapPin className="h-3.5 w-3.5" />
            <span>Launch Google Maps</span>
          </a>
        </div>
      </section>

      {/* 10. Contact CTA Section */}
      <section className="py-16 sm:py-20 bg-emerald-600 text-white relative overflow-hidden dark:bg-emerald-700" id="cta-section">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-white blur-2xl"></div>
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white blur-2xl"></div>
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Need Authentic Medicines Urgently?
          </h2>
          <p className="text-emerald-100 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Connect with our certified pharmacy helpline now. We pack your prescription items immediately, avoiding any waiting queues.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href={`tel:${businessDetails.phone}`}
              className="inline-flex items-center space-x-2 rounded-xl bg-slate-950 text-white hover:bg-slate-900 px-6 py-3.5 text-sm font-semibold transition-transform hover:-translate-y-0.5 shadow-lg"
              id="cta-call-btn"
            >
              <Phone className="h-4.5 w-4.5" />
              <span>Call Us: {businessDetails.phoneDisplay}</span>
            </a>
            <button
              onClick={onOpenOrderForm}
              className="inline-flex items-center space-x-2 rounded-xl bg-white text-emerald-700 hover:bg-emerald-50 px-6 py-3.5 text-sm font-bold transition-transform hover:-translate-y-0.5 shadow-lg"
              id="cta-whatsapp-btn"
            >
              <MessageSquare className="h-4.5 w-4.5" />
              <span>WhatsApp Order Form</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
