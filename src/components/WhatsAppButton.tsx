/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Phone, ArrowUp, MessageSquare, X, Upload, Clock, Send, CheckCircle2 } from 'lucide-react';
import { businessDetails } from '../data/pharmacyData';

interface WhatsAppButtonProps {
  isOrderFormOpen: boolean;
  onCloseOrderForm: () => void;
  onOpenOrderForm: (prefill?: string) => void;
  prefilledMedicine?: string;
}

export default function WhatsAppButton({
  isOrderFormOpen,
  onCloseOrderForm,
  onOpenOrderForm,
  prefilledMedicine = ''
}: WhatsAppButtonProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Form Fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicines, setMedicines] = useState('');
  const [hasPrescription, setHasPrescription] = useState('No');
  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [prescriptionPreview, setPrescriptionPreview] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [preferredTime, setPreferredTime] = useState('Anytime');

  // Submit states
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  // Prefill effect
  useEffect(() => {
    if (isOrderFormOpen && prefilledMedicine) {
      setMedicines(prefilledMedicine);
    }
  }, [isOrderFormOpen, prefilledMedicine]);

  // Monitor scroll for Back-To-Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPrescriptionFile(file);
      setHasPrescription('Yes');

      // Create local preview if image
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPrescriptionPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setPrescriptionPreview(null);
      }
    }
  };

  const removePrescription = () => {
    setPrescriptionFile(null);
    setPrescriptionPreview(null);
    setHasPrescription('No');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = 'Full name is required';
    if (!phone.trim()) newErrors.phone = 'Mobile number is required';
    if (phone.trim() && !/^\+?[0-9]{10,12}$/.test(phone.trim().replace(/[-\s]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!address.trim()) newErrors.address = 'Delivery address is required';
    if (!medicines.trim() && hasPrescription === 'No') {
      newErrors.medicines = 'Please list required medicines or upload a prescription';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSuccess(true);

    // Format WhatsApp Message
    const formattedMessage = `Hello Om Pharma,

I would like to order medicines through your website order panel.

Customer Details:
-----------------------------
👤 Name: ${name}
📞 Phone: ${phone}
📧 Email: ${email || 'Not Provided'}
📍 Delivery Address: ${address}

Order Requirements:
-----------------------------
💊 Medicines Needed: 
${medicines || 'Prescription Uploaded'}

📁 Prescription Attached: ${hasPrescription} ${prescriptionFile ? `(${prescriptionFile.name})` : ''}
⏰ Preferred Delivery: ${preferredTime}
💬 Special Instructions: ${message || 'None'}

Please verify my order and send the estimated bill. Thank you!`;

    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${businessDetails.whatsapp}?text=${encodedText}`;

    // Redirect to WhatsApp after 1.5 seconds of success feedback
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSuccess(false);
      resetForm();
      onCloseOrderForm();
    }, 1500);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setAddress('');
    setMedicines('');
    setHasPrescription('No');
    setPrescriptionFile(null);
    setPrescriptionPreview(null);
    setMessage('');
    setPreferredTime('Anytime');
    setErrors({});
  };

  return (
    <>
      {/* Floating Actions Container */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3" id="floating-actions-container">
        
        {/* Back To Top Button */}
        {showScrollTop && (
          <button
            onClick={handleScrollTop}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-white shadow-lg hover:bg-slate-700 hover:-translate-y-1 transition-all focus:outline-hidden"
            title="Scroll To Top"
            id="btn-scroll-top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          href={`tel:${businessDetails.phone}`}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-white shadow-lg hover:bg-emerald-800 hover:-translate-y-1 hover:rotate-12 transition-all focus:outline-hidden border-2 border-white dark:border-gray-950"
          title="Call Om Pharma"
          id="btn-floating-call"
        >
          <Phone className="h-5 w-5 animate-pulse" />
        </a>

        {/* Floating WhatsApp Order Button */}
        <button
          onClick={onOpenOrderForm}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl hover:bg-emerald-600 hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all focus:outline-hidden border-4 border-white dark:border-gray-950 relative group"
          title="Send prescription on WhatsApp"
          id="btn-floating-whatsapp"
        >
          <MessageSquare className="h-7 w-7" />
          <span className="absolute -left-36 top-1/2 -translate-y-1/2 rounded-lg bg-slate-900 text-white text-xs px-3 py-1.5 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md hidden md:block">
            Order via WhatsApp
          </span>
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600 border border-white text-[8px] font-bold text-white items-center justify-center">1</span>
          </span>
        </button>
      </div>

      {/* WhatsApp Order Form Modal */}
      {isOrderFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs overflow-y-auto">
          <div className="w-full max-w-2xl rounded-2xl bg-white dark:bg-gray-900 shadow-2xl relative my-8 max-h-[90vh] flex flex-col" id="whatsapp-order-modal">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-t-2xl">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">WhatsApp Order Panel</h2>
                  <p className="text-xs text-emerald-100 font-medium">Send prescription & list of medicines instantly</p>
                </div>
              </div>
              <button
                onClick={() => {
                  resetForm();
                  onCloseOrderForm();
                }}
                className="rounded-full p-1.5 hover:bg-white/20 transition-colors focus:outline-hidden text-white"
                id="btn-close-order-modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center" id="order-success-banner">
                  <CheckCircle2 className="h-16 w-16 text-emerald-500 animate-bounce mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Order Structured Successfully!</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md">
                    We are launching WhatsApp on your device to share the prefilled formatted prescription details with our pharmacist.
                  </p>
                  <div className="mt-4 flex items-center space-x-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/20 px-3 py-1.5 rounded-full">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
                    <span>Redirecting to WhatsApp App...</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Name and Phone */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-1.5">
                        Customer Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full rounded-lg border px-3.5 py-2.5 text-sm outline-hidden transition-colors bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white ${
                          errors.name ? 'border-rose-500 focus:border-rose-500 bg-rose-50/10' : 'border-gray-300 focus:border-emerald-500 focus:bg-white'
                        }`}
                        placeholder="Enter your full name"
                        id="order-input-name"
                      />
                      {errors.name && <p className="mt-1 text-xs text-rose-500 font-medium">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-1.5">
                        Mobile Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`w-full rounded-lg border px-3.5 py-2.5 text-sm outline-hidden transition-colors bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white ${
                          errors.phone ? 'border-rose-500 focus:border-rose-500 bg-rose-50/10' : 'border-gray-300 focus:border-emerald-500 focus:bg-white'
                        }`}
                        placeholder="e.g. 9576340165"
                        id="order-input-phone"
                      />
                      {errors.phone && <p className="mt-1 text-xs text-rose-500 font-medium">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Row 2: Email and Preferred Delivery Time */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-1.5">
                        Email Address <span className="text-gray-400">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm outline-hidden focus:border-emerald-500 focus:bg-white bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        placeholder="name@example.com"
                        id="order-input-email"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-1.5">
                        Preferred Delivery Time
                      </label>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm outline-hidden focus:border-emerald-500 focus:bg-white bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        id="order-input-time"
                      >
                        <option value="Anytime">Anytime (Standard Dispatch)</option>
                        <option value="Morning (08:00 AM - 12:00 PM)">Morning (08:00 AM - 12:00 PM)</option>
                        <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                        <option value="Evening (04:00 PM - 09:00 PM)">Evening (04:00 PM - 09:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Full Address */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-1.5">
                      Delivery Address / Village & Landmark <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      rows={2}
                      className={`w-full rounded-lg border px-3.5 py-2.5 text-sm outline-hidden transition-colors bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white ${
                        errors.address ? 'border-rose-500 focus:border-rose-500 bg-rose-50/10' : 'border-gray-300 focus:border-emerald-500 focus:bg-white'
                      }`}
                      placeholder="Enter complete address, nearby landmark or village name"
                      id="order-input-address"
                    />
                    {errors.address && <p className="mt-1 text-xs text-rose-500 font-medium">{errors.address}</p>}
                  </div>

                  {/* List of Medicines */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                        Medicines Required / Tablets / Quantities
                      </label>
                      {hasPrescription === 'Yes' && (
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400 font-bold px-2 py-0.5 rounded-full uppercase">
                          Prescription Attached
                        </span>
                      )}
                    </div>
                    <textarea
                      value={medicines}
                      onChange={(e) => setMedicines(e.target.value)}
                      rows={3}
                      className={`w-full rounded-lg border px-3.5 py-2.5 text-sm outline-hidden transition-colors bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white ${
                        errors.medicines ? 'border-rose-500 focus:border-rose-500 bg-rose-50/10' : 'border-gray-300 focus:border-emerald-500 focus:bg-white'
                      }`}
                      placeholder="e.g. Paracetamol 650mg (10 tabs), BP medication, Nebulizer kit etc."
                      id="order-input-medicines"
                    />
                    {errors.medicines && <p className="mt-1 text-xs text-rose-500 font-medium">{errors.medicines}</p>}
                  </div>

                  {/* Upload Prescription */}
                  <div className="bg-slate-50 dark:bg-slate-900 border border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-4 transition-colors">
                    <span className="block text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wide mb-2">
                      Upload Prescription Photo
                    </span>
                    
                    {!prescriptionFile ? (
                      <div className="flex flex-col items-center justify-center py-4 cursor-pointer relative hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                        <input
                          type="file"
                          accept="image/*,application/pdf"
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          id="prescription-file-upload"
                        />
                        <Upload className="h-8 w-8 text-gray-400 mb-1.5" />
                        <span className="text-sm font-semibold">Choose photo or PDF prescription</span>
                        <span className="text-[10px] text-gray-500 mt-1">Accepts PNG, JPG, PDF (Max 5MB)</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between bg-emerald-50/50 dark:bg-emerald-950/20 rounded-lg p-2.5 border border-emerald-100 dark:border-emerald-950">
                        <div className="flex items-center space-x-3 overflow-hidden">
                          {prescriptionPreview ? (
                            <img
                              src={prescriptionPreview}
                              alt="Prescription Thumbnail"
                              className="h-12 w-12 rounded-md object-cover border border-emerald-200"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <div className="h-12 w-12 rounded-md bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xs uppercase">
                              PDF
                            </div>
                          )}
                          <div className="overflow-hidden">
                            <p className="text-xs font-bold truncate text-gray-900 dark:text-white">{prescriptionFile.name}</p>
                            <p className="text-[10px] text-gray-500">{(prescriptionFile.size / 1024).toFixed(1)} KB</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={removePrescription}
                          className="rounded-full p-1 hover:bg-rose-100 hover:text-rose-600 dark:hover:bg-rose-950/30 dark:hover:text-rose-400 text-gray-400 transition-colors"
                          id="btn-remove-prescription"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Special Note / Message */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-1.5">
                      Special Note / Remarks <span className="text-gray-400">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm outline-hidden focus:border-emerald-500 focus:bg-white bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      placeholder="e.g. Please bring changes for Rs 500 / call before arriving"
                      id="order-input-message"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                    <button
                      type="button"
                      onClick={() => {
                        resetForm();
                        onCloseOrderForm();
                      }}
                      className="w-full sm:w-1/3 rounded-lg border border-gray-300 dark:border-gray-700 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-hidden"
                      id="btn-cancel-order"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="w-full sm:w-2/3 flex items-center justify-center space-x-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 text-sm font-semibold transition-all shadow-md focus:outline-hidden active:scale-[0.98]"
                      id="btn-submit-order-whatsapp"
                    >
                      <Send className="h-4 w-4" />
                      <span>Send Order via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Modal Disclaimer Footer */}
            <div className="bg-slate-50 dark:bg-gray-950 p-4 border-t border-gray-100 dark:border-gray-800 rounded-b-2xl text-[10px] text-gray-500 dark:text-gray-400 leading-relaxed text-center">
              ⚠️ <strong>Important regulatory notice:</strong> Our pharmacist will physically inspect original doctor prescriptions for Schedule H medicines prior to dispensing. Please keep original slips handy.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
