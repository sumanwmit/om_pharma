/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { History, Target, Compass, ShieldCheck, Heart, Award, Star, Quote } from 'lucide-react';
import { businessDetails } from '../data/pharmacyData';

export default function AboutView() {
  const values = [
    {
      title: 'Therapeutic Authenticity',
      desc: 'We procure 100% of our drugs directly from authorized pharmaceutical hubs with complete chemical chain auditing.',
      icon: ShieldCheck,
      color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400'
    },
    {
      title: 'Empathy & Patient Care',
      desc: 'We treat every visitor with patience, strict medical confidentiality, and professional therapeutic advisory.',
      icon: Heart,
      color: 'bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400'
    },
    {
      title: 'Continuous Availability',
      desc: 'Equipped with cold-chain backups to ensure constant supply of vital life-supporting medications.',
      icon: Compass,
      color: 'bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400'
    },
    {
      title: 'Absolute Quality Billing',
      desc: 'We strictly maintain computer billing specifying batch number and expiry date details with absolute accuracy.',
      icon: Award,
      color: 'bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400'
    }
  ];

  const timelineSteps = [
    {
      year: '2018',
      title: 'The Foundation',
      desc: 'Om Pharma was founded on Gaya - Patna Main Road with a simple goal: making 100% genuine medicines accessible locally.'
    },
    {
      year: '2020',
      title: 'Cold-Chain Upgrade',
      desc: 'Installed specialized medical-grade active refrigeration units to safely store vaccines, insulin, and sensitive drugs during peak summer.'
    },
    {
      year: '2022',
      title: 'Digital Prescription Assist',
      desc: 'Launched our popular WhatsApp prescription ordering service to serve rural patients and elderly citizens, reducing waiting times.'
    },
    {
      year: '2024',
      title: 'Community Health Partner',
      desc: 'Recognized as one of the most reliable pharmacies in the Makhdumpur and Gaya region for supply authenticity.'
    }
  ];

  return (
    <div className="animate-fade-in py-12 sm:py-20 bg-slate-50 dark:bg-gray-950" id="about-view-container">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* Page Title Header */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            About Om Pharma
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Discover our rich heritage of authentic pharmaceutical care, dedicated clinical excellence, and patient trust.
          </p>
          <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full"></div>
        </div>

        {/* 1. Business Story & Owner Message */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-150 dark:border-gray-800">
          <div className="space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Our Journey
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-3xl">
              Serving our community with genuine medicines since 2018
            </h2>
            <p className="text-xs text-gray-650 dark:text-gray-300 leading-relaxed">
              Om Pharma was established in Makhdumpur, Bihar with a solemn promise: to address the local shortage of certified, high-grade therapeutic medicines and specialized home-care medical equipment.
            </p>
            <p className="text-xs text-gray-655 dark:text-gray-300 leading-relaxed">
              We realized that healthcare suffers when local pharmacies store medication poorly or procure from sub-standard routes. By establishing an honest, fully air-conditioned, cold-chain backed clinical retail pharmacy directly on the Patna-Gaya Main Road, we became the primary beacon of healthcare trust for thousands of local families.
            </p>
            <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <span>Licensed & Certified under Drug Control Administration, Bihar</span>
            </div>
          </div>

          {/* Owner Message Quote Box */}
          <div className="bg-emerald-50/50 dark:bg-emerald-950/20 rounded-2xl p-6 sm:p-8 border border-emerald-100/50 dark:border-emerald-900/30 relative overflow-hidden flex flex-col justify-between min-h-[300px]">
            <Quote className="h-12 w-12 text-emerald-200 dark:text-emerald-900/40 absolute -top-2 -left-2 rotate-180" />
            <div className="relative z-10 space-y-4">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md">
                Pharmacist & Proprietor Message
              </span>
              <p className="text-xs italic text-gray-700 dark:text-gray-300 leading-relaxed">
                &ldquo;At Om Pharma, we do not view medicines as mere retail products. They are vital life-lines. When a patient walks into our store with a prescription, they are placing their trust in us. That is why we enforce rigid expiry checks, double-verify medicine batches, and preserve sensitive insulin under strictly controlled refrigeration. Your health is our highest duty.&rdquo;
              </p>
            </div>
            
            <div className="flex items-center space-x-3 pt-6 border-t border-emerald-200/50 dark:border-emerald-900/30 relative z-10">
              <div className="h-11 w-11 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg">
                OP
              </div>
              <div>
                <span className="block font-bold text-sm text-gray-950 dark:text-white">Om Pharma Team</span>
                <span className="block text-[10px] text-gray-500">Makhdumpur Healthcare Lead</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Mission, Vision, Values */}
        <section className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-150 dark:border-gray-800 space-y-4 shadow-2xs">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-950 dark:text-white">Our Mission</h3>
              <p className="text-xs text-gray-650 dark:text-gray-300 leading-relaxed">
                To maximize local pharmaceutical accessibility by procuring authentic clinical remedies directly from authorized channels, maintaining stringent storage regulations, and delivering compassionate patient advisory.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-150 dark:border-gray-800 space-y-4 shadow-2xs">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-950 dark:text-white">Our Vision</h3>
              <p className="text-xs text-gray-655 dark:text-gray-300 leading-relaxed">
                To evolve as the gold-standard medical repository in the Gaya-Patna Main Road belt, recognized globally by customers and clinicians for unparalleled cold-chain accuracy, digital delivery response, and public health care.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-950 dark:text-white text-center">
              Our Core Clinical Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-2xs text-center space-y-3"
                  id={`value-card-${idx}`}
                >
                  <div className={`mx-auto inline-flex h-10 w-10 items-center justify-center rounded-xl ${val.color}`}>
                    <val.icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-sm text-gray-950 dark:text-white">
                    {val.title}
                  </h4>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Operational Timeline */}
        <section className="space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              The Milestones
            </span>
            <h3 className="text-2xl font-bold text-gray-950 dark:text-white">
              Timeline of Our Growth
            </h3>
          </div>

          <div className="relative border-l-2 border-emerald-200 dark:border-emerald-900 max-w-3xl mx-auto pl-6 sm:pl-10 space-y-8" id="about-timeline-trail">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="relative group" id={`timeline-step-${idx}`}>
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-white dark:bg-gray-950 border-4 border-emerald-600 group-hover:scale-125 transition-transform"></div>
                
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 sm:p-6 border border-gray-150 dark:border-gray-800 shadow-3xs hover:shadow-xs transition-shadow">
                  <span className="inline-block text-xs font-black text-emerald-600 dark:text-emerald-400 mb-1">
                    {step.year}
                  </span>
                  <h4 className="font-bold text-sm sm:text-base text-gray-950 dark:text-white">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mt-2">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Why Local Customers Trust Us Footer CTA */}
        <section className="bg-slate-900 text-white dark:bg-black rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl">
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <span className="inline-flex text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md">
              A Trusted Partner
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Looking for professional diagnostic monitors or Schedule-H medicines?
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We stock standard pulse-oximeters, pediatric vaporizers, lumbar support belts, and crucial regular diabetic supplies. Send your prescription photo now.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shrink-0">
            <a
              href={`tel:${businessDetails.phone}`}
              className="rounded-xl bg-white text-slate-900 hover:bg-slate-100 py-3 px-5 text-xs font-bold transition-transform hover:-translate-y-0.5"
              id="about-cta-call"
            >
              Call {businessDetails.phoneDisplay}
            </a>
            <a
              href={businessDetails.googleMapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 py-3 px-5 text-xs font-bold transition-transform hover:-translate-y-0.5"
              id="about-cta-directions"
            >
              Get Directions on Maps
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
