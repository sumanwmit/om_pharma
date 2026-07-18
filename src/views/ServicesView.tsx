/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  FileText, ShieldAlert, Activity, Baby, Sparkles, HeartPulse,
  Scissors, BriefcaseMedical, Droplet, PlusSquare, MessageSquare, Phone
} from 'lucide-react';
import { services, businessDetails } from '../data/pharmacyData';

interface ServicesViewProps {
  onOpenOrderForm: (prefill?: string) => void;
  setPrefilledMedicine?: (medicine: string) => void;
}

export default function ServicesView({ onOpenOrderForm, setPrefilledMedicine }: ServicesViewProps) {
  // Map string icon names to real Lucide icons
  const iconsMap: Record<string, any> = {
    FileText: FileText,
    ShieldAlert: ShieldAlert,
    Activity: Activity,
    Baby: Baby,
    Sparkles: Sparkles,
    HeartPulse: HeartPulse,
    Scissors: Scissors,
    BriefcaseMedical: BriefcaseMedical,
    Droplet: Droplet,
    PlusSquare: PlusSquare
  };

  const handleInquiry = (serviceTitle: string) => {
    onOpenOrderForm(serviceTitle);
  };

  return (
    <div className="animate-fade-in py-12 sm:py-20 bg-slate-50 dark:bg-gray-950" id="services-view-container">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Title Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Our Offerings
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Pharmaceutical & Healthcare Services
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Explore our specialized categories and medical equipment lines, sourced and stored under clinical standards.
          </p>
          <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv) => {
            const IconComponent = iconsMap[srv.icon] || FileText;

            return (
              <div
                key={srv.id}
                className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-150 dark:border-gray-800 shadow-3xs hover:shadow-xs transition-all duration-300 relative overflow-hidden flex flex-col justify-between group hover:-translate-y-1"
                id={`srv-page-card-${srv.id}`}
              >
                {/* Visual Accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500"></div>

                <div className="space-y-4">
                  {/* Icon */}
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-6 w-6 stroke-[2]" />
                  </div>

                  <div className="space-y-1.5">
                    <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      {srv.category}
                    </span>
                    <h3 className="text-base font-bold text-gray-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {srv.title}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-500 dark:text-gray-300 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                {/* Card CTA triggers */}
                <div className="pt-6 mt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <button
                    onClick={() => handleInquiry(srv.title)}
                    className="flex items-center space-x-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                    id={`btn-srv-order-whatsapp-${srv.id}`}
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Inquire via WhatsApp</span>
                  </button>
                  
                  <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider bg-slate-50 dark:bg-slate-950 px-2 py-0.5 rounded-md border border-gray-100 dark:border-gray-800">
                    Active
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick FAQ summary banner */}
        <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-lg" id="services-regulatory-banner">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-white blur-xl"></div>
          </div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-100 bg-emerald-800 px-2.5 py-1 rounded-md">
              Regulatory Standards Policy
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Looking for specialized or custom life-saving compounds?
            </h3>
            <p className="text-xs text-emerald-105 leading-relaxed max-w-2xl">
              We coordinate with registered national distributors to fulfill custom drug requisitions. For Schedule H list medicines (anti-diabetic, anti-hypertensive, complex antibiotics), please present a certified prescription copy. Cold-chain storage is kept functional 24/7.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={`tel:${businessDetails.phone}`}
                className="rounded-xl bg-slate-950 text-white hover:bg-slate-900 py-3 px-5 text-xs font-bold transition-transform hover:-translate-y-0.5"
                id="services-call-link"
              >
                Call {businessDetails.phoneDisplay}
              </a>
              <button
                onClick={onOpenOrderForm}
                className="rounded-xl bg-white text-emerald-800 hover:bg-emerald-50 py-3 px-5 text-xs font-extrabold transition-transform hover:-translate-y-0.5"
                id="services-order-btn"
              >
                Open Order Panel
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
