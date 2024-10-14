// utils/constants.js

// API Endpoints
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

// Social Media Links
export const SOCIAL_MEDIA_LINKS = {
  facebook: 'https://www.facebook.com/yourprofile',
  twitter: 'https://twitter.com/yourprofile',
  linkedin: 'https://www.linkedin.com/in/yourprofile',
  instagram: 'https://www.instagram.com/yourprofile',
};

// Company Information
export const COMPANY_INFO = {
  name: 'CollectPro Banking Support Agency',
  email: 'support@collectpros.in',
  phone: '+91 7696330288',
  address: {
    line1: 'Office No. 1471-B, 14th Floor',
    line2: 'Block D & E, CCC',
    city: 'Zirakpur',
    state: 'Punjab',
    postalCode: '140603',
    country: 'India',
  },
};

// Frequently Used Strings
export const STRINGS = {
  heroTitle: 'Leave Your Financial Worries to Us!',
  heroSubtitle: 'Your partner in effective debt resolution and financial recovery.',
  ctaButtonText: 'Get Started',
  emailSubject: 'Inquiry from Website',
};

// Other Constants
export const MAX_TESTIMONIALS_DISPLAY = 3; // Maximum testimonials to display on the homepage
export const MAX_BLOG_POSTS_DISPLAY = 5; // Maximum blog posts to display on the blog index page

// Export any additional constants as needed
