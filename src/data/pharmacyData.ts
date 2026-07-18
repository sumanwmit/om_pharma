/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BusinessDetails, Testimonial, FAQItem, PharmacyService, MedicineCategory, GalleryItem } from '../types';

export const businessDetails: BusinessDetails = {
  name: 'Om Pharma',
  tagline: 'Your Trusted Medical Store for Genuine Medicines & Healthcare Needs',
  phone: '+919576340165',
  phoneDisplay: '09576340165',
  whatsapp: '919576340165',
  whatsappDisplay: '09576340165',
  email: 'info@ompharma.com',
  address: 'Titaiganj 3X8C+RGM, Gaya - Patna Main Rd, Makhdumpur, Bihar 804422',
  googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115810.15589417855!2d84.91230198642784!3d25.065751939527712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f3238699292a83%3A0xe9c15893d56eb722!2sOm%20Pharma!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  googleMapDirectionsUrl: 'https://maps.google.com/?q=Om+Pharma+Titaiganj+Makhdumpur+Bihar',
  hours: [
    { days: 'Monday - Saturday', time: '08:00 AM - 10:00 PM' },
    { days: 'Sunday', time: '09:00 AM - 04:00 PM' }
  ]
};

export const testimonials: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Amit Kumar',
    rating: 5,
    text: 'Best pharmacy in Makhdumpur region. They always have genuine medicines which are sometimes hard to find elsewhere. The owner and staff are very helpful and offer proper guidance.',
    date: '1 month ago',
    role: 'Verified Customer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 'rev-2',
    name: 'Priyanka Sharma',
    rating: 5,
    text: 'Very fast and convenient service. I usually order my parents\' monthly diabetic medicines on WhatsApp by sending the prescription, and they pack and keep everything ready for quick pickup. Highly recommended!',
    date: '2 weeks ago',
    role: 'Local Resident',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 'rev-3',
    name: 'Sanjeev Yadav',
    rating: 5,
    text: 'Prices are very reasonable and they provide genuine bills for all medicines. The store is clean, hygienic, and well-organized. They have a wide variety of medical equipment as well.',
    date: '3 weeks ago',
    role: 'Regular Buyer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 'rev-4',
    name: 'Renu Kumari',
    rating: 5,
    text: 'Friendly staff and quick service. I bought a BP monitor from Om Pharma. They patiently demonstrated how to use it and explained all precautions. Really appreciated the personal touch.',
    date: '3 days ago',
    role: 'Home Maker',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 'rev-5',
    name: 'Vikash Kumar Singh',
    rating: 5,
    text: 'Om Pharma has been our trusted medical store for years. Even during shortages, they manage to source vital medicines for their regular clients. Honest business with great customer service.',
    date: '2 months ago',
    role: 'Business Owner',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 'rev-6',
    name: 'Dr. Rajiv Ranjan',
    rating: 5,
    text: 'I recommend Om Pharma to my patients for genuine orthopedic supports, nebulizers, and prescription medicines. They store medicines under proper temperature control, ensuring maximum efficacy.',
    date: '1 month ago',
    role: 'Medical Practitioner',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=120'
  }
];

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Are all medicines sold at Om Pharma 100% genuine?',
    answer: 'Yes, absolutely. We source all our medicines, healthcare products, and medical equipment directly from authorized distributors and pharmaceutical companies. We guarantee 100% genuine products with proper batch numbers and expiration checks.'
  },
  {
    id: 'faq-2',
    question: 'Can I order medicines through WhatsApp?',
    answer: 'Yes, we offer a dedicated WhatsApp ordering service. You can send a photo of your doctor\'s prescription or list the required medicines to +91-9576340165. We will verify, calculate the bill, and prepare it for quick pickup or notify you of delivery options.'
  },
  {
    id: 'faq-3',
    question: 'Is a prescription required for purchasing medicines?',
    answer: 'For Schedule H, H1, and X medicines (like antibiotics, strong painkillers, psychiatric drugs, and hormones), a valid doctor\'s prescription is legally mandatory. Over-the-counter (OTC) medicines, supplements, baby care, and daily wellness items can be purchased without a prescription.'
  },
  {
    id: 'faq-4',
    question: 'Do you sell medical equipment and home-care devices?',
    answer: 'Yes, we stock a wide variety of medical equipment including digital Blood Pressure monitors, Glucometers (sugar testing), Nebulizers, Thermometers, Pulse Oximeters, Steam Inhalers, and orthopedic supports like knee braces, lumbar belts, and cervical collars.'
  },
  {
    id: 'faq-5',
    question: 'What are the operating hours of Om Pharma?',
    answer: 'We are open from Monday to Saturday from 08:00 AM to 10:00 PM. On Sundays, we are open from 09:00 AM to 04:00 PM to support emergency requirements.'
  },
  {
    id: 'faq-6',
    question: 'Do you offer home delivery in Makhdumpur?',
    answer: 'We offer free home delivery for elderly patients and regular clients within Makhdumpur town for orders exceeding a minimum bill amount. For details or to check availability in your specific area, please contact us on WhatsApp.'
  },
  {
    id: 'faq-7',
    question: 'Can I return or exchange purchased medicines?',
    answer: 'Medicines can be returned or exchanged within 7 days of purchase, provided they are in their original uncut packaging, have not expired, and are accompanied by the original purchase bill. Please note that cold-storage medicines (like insulin) are strictly non-returnable to maintain efficacy standards.'
  },
  {
    id: 'faq-8',
    question: 'Do you stock baby care and personal care products?',
    answer: 'Yes, we have a comprehensive range of baby care products (diapers, baby lotions, milk powders, baby soaps) and personal hygiene products (sanitizers, handwashes, skin creams, dental care items) from top trusted brands.'
  },
  {
    id: 'faq-9',
    question: 'What payment methods do you accept at the store?',
    answer: 'We accept all major payment methods including Cash, UPI (GPay, PhonePe, Paytm, BHIM), and Debit/Credit Cards for a hassle-free checkout experience.'
  },
  {
    id: 'faq-10',
    question: 'How do you ensure proper storage of sensitive medicines like insulin?',
    answer: 'We maintain state-of-the-art refrigeration facilities with 24/7 power backup to store temperature-sensitive medicines, vaccines, insulin, and eye drops within the recommended 2°C to 8°C range.'
  }
];

export const services: PharmacyService[] = [
  {
    id: 'srv-1',
    title: 'Prescription Medicines',
    description: 'Accurate dispensing of life-saving drugs, chronic ailment medications, antibiotics, and specialized treatments based on valid prescriptions.',
    icon: 'FileText',
    category: 'Core Service'
  },
  {
    id: 'srv-2',
    title: 'General & OTC Medicines',
    description: 'Wide stock of Over-the-Counter medicines for common issues like fever, cold, cough, headache, digestive problems, and first-aid treatment.',
    icon: 'ShieldAlert',
    category: 'Core Service'
  },
  {
    id: 'srv-3',
    title: 'Health Supplements',
    description: 'High-quality multivitamins, mineral supplements, protein powders, fish oils, and health boosters from trusted pharmaceutical brands.',
    icon: 'Activity',
    category: 'Wellness'
  },
  {
    id: 'srv-4',
    title: 'Baby Care Products',
    description: 'Essential items for infants including specialized baby food, sensitive-skin lotions, diapers, wipes, baby soaps, shampoos, and feeding bottles.',
    icon: 'Baby',
    category: 'Family Care'
  },
  {
    id: 'srv-5',
    title: 'Personal Care Products',
    description: 'Daily hygiene and grooming needs, premium skin-care creams, hair oils, sanitizers, dental hygiene products, and personal wellness essentials.',
    icon: 'Sparkles',
    category: 'Family Care'
  },
  {
    id: 'srv-6',
    title: 'Medical Equipment',
    description: 'Retail and supply of vital health monitoring tools like Blood Pressure monitors, Glucometers, Nebulizers, Pulse Oximeters, and Thermometers.',
    icon: 'HeartPulse',
    category: 'Medical Devices'
  },
  {
    id: 'srv-7',
    title: 'Surgical Supplies',
    description: 'Premium disposable syringes, surgical gloves, bandages, sterile gauze, IV sets, adhesive tapes, cotton rolls, and surgical dressing materials.',
    icon: 'Scissors',
    category: 'Medical Devices'
  },
  {
    id: 'srv-8',
    title: 'First Aid Products',
    description: 'Comprehensive solutions for immediate injury response, antiseptic creams, liquid solutions, band-aids, burn creams, and pre-packaged kits.',
    icon: 'BriefcaseMedical',
    category: 'Wellness'
  },
  {
    id: 'srv-9',
    title: 'Diabetic Care',
    description: 'Complete range of blood sugar monitoring kits, testing strips, insulin syringes, pen needles, and sugar-free daily wellness food options.',
    icon: 'Droplet',
    category: 'Specialized Care'
  },
  {
    id: 'srv-10',
    title: 'Healthcare Essentials',
    description: 'Orthopedic kneecaps, cervical collars, back-support belts, heating pads, hot water bags, face masks, and essential sanitizer formulations.',
    icon: 'PlusSquare',
    category: 'Specialized Care'
  }
];

export const featuredCategories: MedicineCategory[] = [
  {
    id: 'cat-1',
    name: 'Tablets',
    description: 'Antibiotics, pain relievers, cardiovascular, and daily health pills.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300',
    icon: 'Tablet'
  },
  {
    id: 'cat-2',
    name: 'Capsules',
    description: 'Softgels, multi-vitamin capsules, gastro-resistant capsules, and antibiotics.',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=300',
    icon: 'Pil'
  },
  {
    id: 'cat-3',
    name: 'Syrups',
    description: 'Cough syrups, pediatric suspensions, digestive tonics, and iron boosters.',
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&q=80&w=300',
    icon: 'FlaskConical'
  },
  {
    id: 'cat-4',
    name: 'Injections',
    description: 'Vials, pre-filled syringes, ampoules under stringent sterile conditions.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=300',
    icon: 'Syringe'
  },
  {
    id: 'cat-5',
    name: 'Medical Equipment',
    description: 'BP monitors, Nebulizers, Glucometers, and temperature sensors.',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1ea06073e5?auto=format&fit=crop&q=80&w=300',
    icon: 'Activity'
  },
  {
    id: 'cat-6',
    name: 'Protein Supplements',
    description: 'High quality whey proteins, diabetic-safe protein drinks, and mass gainers.',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=300',
    icon: 'Dumbbell'
  },
  {
    id: 'cat-7',
    name: 'Vitamins',
    description: 'Vitamin C, Vitamin D3, B-Complex, Calcium, and Zinc supplements.',
    image: 'https://images.unsplash.com/photo-1616671285410-4e326620ca73?auto=format&fit=crop&q=80&w=300',
    icon: 'ShieldCheck'
  },
  {
    id: 'cat-8',
    name: 'Skin Care',
    description: 'Dermatologist tested medicated creams, anti-acne gels, and sunscreen.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=300',
    icon: 'Sparkles'
  },
  {
    id: 'cat-9',
    name: 'Baby Products',
    description: 'Mild baby washes, standard formula powders, moisturizing lotions, and diapers.',
    image: 'https://images.unsplash.com/photo-1515488042361-404e9250afef?auto=format&fit=crop&q=80&w=300',
    icon: 'Baby'
  },
  {
    id: 'cat-10',
    name: 'Personal Hygiene',
    description: 'Sanitizers, antiseptic washes, oral care products, and adult diapers.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=300',
    icon: 'Droplet'
  },
  {
    id: 'cat-11',
    name: 'Orthopedic Support',
    description: 'Knee braces, cervical pillows, ankle support, and lumbar traction belts.',
    image: 'https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?auto=format&fit=crop&q=80&w=300',
    icon: 'Accessibility'
  },
  {
    id: 'cat-12',
    name: 'Diabetic Care',
    description: 'Sugar-free diets, glucometers, lancing devices, and test-strip cartridges.',
    image: 'https://images.unsplash.com/photo-1508847154043-be12a62861c1?auto=format&fit=crop&q=80&w=300',
    icon: 'Heart'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Modern and Clean Store Front',
    category: 'store',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b295f846?auto=format&fit=crop&q=80&w=600',
    alt: 'Om Pharma Store Front'
  },
  {
    id: 'gal-2',
    title: 'Well Organized Medicine Shelves',
    category: 'medicines',
    image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=600',
    alt: 'Organized Medicines shelves'
  },
  {
    id: 'gal-3',
    title: 'Vital Medical Devices & Equipment',
    category: 'equipment',
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=600',
    alt: 'Healthcare Devices'
  },
  {
    id: 'gal-4',
    title: 'Premium Quality Healthcare Products',
    category: 'products',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=600',
    alt: 'A wide range of healthcare products'
  },
  {
    id: 'gal-5',
    title: 'Safe Temperature Controlled Cold-Storage',
    category: 'store',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600',
    alt: 'Refrigerated medicine storage'
  },
  {
    id: 'gal-6',
    title: 'Diagnostic Instruments and Monitors',
    category: 'equipment',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1ea06073e5?auto=format&fit=crop&q=80&w=600',
    alt: 'BP monitors and blood sugar meters'
  },
  {
    id: 'gal-7',
    title: 'Surgical Gauze, Dressing, & Bandages',
    category: 'products',
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=600',
    alt: 'Surgical and dressing goods'
  },
  {
    id: 'gal-8',
    title: 'Expert Pharmacists Verifying Prescriptions',
    category: 'store',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600',
    alt: 'Pharmacists at Om Pharma'
  }
];

export const reasonsToTrustUs = [
  {
    title: 'Experienced Pharmacy',
    description: 'We have been serving our local community for years with deep expertise and caring advice.',
    icon: 'Award'
  },
  {
    title: 'Quality Medicines',
    description: 'All our inventory is sourced from approved suppliers with meticulous cold-chain and expiry tracking.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Quick Service',
    description: 'Save valuable time. Reach us online or visit our store for express dispensing and zero delays.',
    icon: 'Zap'
  },
  {
    title: 'Friendly Staff',
    description: 'Our qualified staff treats you with standard professionalism, empathy, and patient discretion.',
    icon: 'Smile'
  },
  {
    title: 'Reasonable Pricing',
    description: 'We strive to provide premium quality pharmaceutical care and medical devices at highly affordable rates.',
    icon: 'Percent'
  },
  {
    title: 'Convenient Location',
    description: 'Easily accessible store right on the Gaya - Patna Main Road in Makhdumpur with dedicated parking space.',
    icon: 'MapPin'
  }
];

export const workingProcess = [
  {
    step: '01',
    title: 'Visit Store / Connect Online',
    description: 'Walk into our well-located store in Titaiganj or connect with us instantly from the comfort of your home.'
  },
  {
    step: '02',
    title: 'Share Prescription',
    description: 'Present your prescription to our licensed pharmacist or simply snap and upload it through our WhatsApp form.'
  },
  {
    step: '03',
    title: 'Get Medicines',
    description: 'Our team verifies, double-checks batch validity, and swiftly dispenses or packs your items.'
  },
  {
    step: '04',
    title: 'Easy Payment',
    description: 'Pay quickly using UPI, card, or cash. We issue a proper invoice to track your therapeutic purchases.'
  }
];
