/**
 * Portfolio Data & Firebase Service
 * Handles Firestore REST endpoints for messages, newsletter, and live projects.
 */

const FIRESTORE_BASE = 'https://firestore.googleapis.com/v1/projects/portfolio-contact-fe911/databases/(default)/documents';

export const CONTACT_INFO = {
  name: 'Lakhvinder Singh',
  role: 'Front-End Web Developer & UI Designer',
  email: 'lakhvinder9567@gmail.com',
  phone: '+91 79883 79885',
  phoneRaw: '917988379885',
  locations: {
    workplace: 'Zirakpur, Punjab (Workplace)',
    hometown: 'Ambala Cantt, Haryana (Roots)',
  },
  socials: {
    linkedin: 'https://www.linkedin.com/in/lakhvinder-singh-dev/',
    github: 'https://github.com/lakhvinder1664',
    whatsapp: 'https://wa.me/917988379885',
  },
};

// Default Curated Real Projects from Lakhvinder's Portfolio
export const DEFAULT_PROJECTS = [
  {
    id: '01',
    title: 'Accubic Labs – Pharmaceutical Website',
    category: 'Live Website',
    badge: 'LIVE PRODUCTION',
    description:
      'Developed a responsive pharmaceutical website for Accubic Labs using WordPress and WooCommerce. Structured product catalogue with compositions, packaging details, and MRP info. Clean mobile-optimized architecture.',
    link: 'https://hivends.org/accubic-labs/',
    tags: ['WordPress', 'WooCommerce', 'Bootstrap 5', 'Pharma Catalog'],
    year: '2026',
    author: 'Lakhvinder Singh',
  },
  {
    id: '02',
    title: 'Granmed Labs – Healthcare Website UI/UX',
    category: 'Approved UI Mockup',
    badge: 'CLIENT APPROVED',
    description:
      'Designed and developed a responsive pharmaceutical website mockup for Granmed Labs, focusing on third-party manufacturing, nutraceutical products, and veterinary healthcare with client testimonials and certifications.',
    link: 'https://hivends.org/mockup/granmed-labs/',
    tags: ['Figma', 'UI/UX Design', 'Pharma Portal', 'Responsive'],
    year: '2026',
    author: 'Lakhvinder Singh',
  },
  {
    id: '03',
    title: 'GMH Pharmaceuticals – Website UI Mockup',
    category: 'Project Announcement',
    badge: 'UI MOCKUP',
    description:
      'Modern responsive website UI mockup for GMH Pharmaceuticals, highlighting third-party manufacturing, PCD franchise opportunities, and product divisions with clean professional layouts.',
    link: 'https://hivends.org/mockup/gmh-pharmaceuticals/',
    tags: ['UI Mockup', 'Pharma Franchise', 'Clean Architecture'],
    year: '2026',
    author: 'Lakhvinder Singh',
  },
  {
    id: '04',
    title: 'Zerdia – Pharmaceutical Website UI/UX',
    category: 'Approved UI Mockup',
    badge: 'FIGMA DESIGN',
    description:
      'Modern healthcare website UI/UX mockup designed in Figma for Zerdia. Features product categories, compliance sections, inquiry forms, team profiles, and intuitive navigation across devices.',
    link: 'https://hivends.org/mockup/zerdia/',
    tags: ['Figma to Code', 'Design System', 'Healthcare UI'],
    year: '2026',
    author: 'Lakhvinder Singh',
  },
  {
    id: '05',
    title: 'Black Mango – Veterinary Healthcare UI',
    category: 'Approved UI Mockup',
    badge: 'ANIMAL HEALTHCARE',
    description:
      'Modern veterinary healthcare website mockup focusing on animal healthcare, veterinary medicines, and livestock wellness with nature-inspired color palette and responsive layout.',
    link: 'https://hivends.org/mockup/black-mango/',
    tags: ['UI/UX', 'Veterinary Healthcare', 'Responsive Web'],
    year: '2026',
    author: 'Lakhvinder Singh',
  },
];

/**
 * Submit contact inquiry to Firestore + FormSubmit email + generate WhatsApp link
 */
export async function submitContactInquiry({
  firstName,
  lastName = '',
  email,
  phone = '',
  companyType = '',
  budget = '',
  message,
}) {
  const fullName = [firstName, lastName].filter(Boolean).join(' ').trim() || 'Website Visitor';
  const timestamp = new Date().toISOString();

  // 1. Save to Firebase Firestore collection "messages"
  let firestoreSuccess = false;
  try {
    const res = await fetch(`${FIRESTORE_BASE}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: {
          name: { stringValue: fullName },
          email: { stringValue: email },
          phone: { stringValue: phone || 'Not provided' },
          companyType: { stringValue: companyType || 'Not specified' },
          budget: { stringValue: budget || 'Not specified' },
          message: { stringValue: message },
          subject: { stringValue: 'Direct Portfolio Inquiry (React App)' },
          read: { booleanValue: false },
          time: { timestampValue: timestamp },
        },
      }),
    });
    firestoreSuccess = res.ok;
  } catch (err) {
    console.warn('Firestore message save error:', err);
  }

  // 2. Trigger Instant Email Alert via FormSubmit to Lakhvinder's email
  try {
    fetch('https://formsubmit.co/ajax/lakhvinder9567@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        'Client Name': fullName,
        'Client Email': email,
        'Phone Number': phone || 'Not provided',
        'Company Type': companyType || 'Not specified',
        Budget: budget || 'Not specified',
        Message: message,
        _subject: `🚨 NEW PORTFOLIO INQUIRY: ${fullName}`,
        _template: 'table',
        _captcha: 'false',
      }),
    }).catch((e) => console.log('FormSubmit notice:', e));
  } catch (e) {
    console.log('Email alert exception:', e);
  }

  // 3. Build WhatsApp Pre-filled Chat Link for client convenience
  const waLines = [
    'Hello Lakhvinder! 👋',
    'I just submitted an inquiry on your portfolio:',
    '',
    `👤 Name: ${fullName}`,
    `📧 Email: ${email}`,
    phone ? `📞 Phone: ${phone}` : null,
    budget ? `💰 Budget: ${budget}` : null,
    companyType ? `🏢 Type: ${companyType}` : null,
    `💬 Message: ${message}`,
  ]
    .filter(Boolean)
    .join('\n');

  const waUrl = `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(waLines)}`;

  return {
    success: true,
    firestoreSuccess,
    whatsappUrl: waUrl,
  };
}

/**
 * Subscribe email to newsletter in Firestore collection "newsletter"
 */
export async function subscribeNewsletter(email) {
  const cleanEmail = (email || '').trim();
  if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
    throw new Error('Please enter a valid email address.');
  }

  const res = await fetch(`${FIRESTORE_BASE}/newsletter`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields: {
        email: { stringValue: cleanEmail },
        time: { timestampValue: new Date().toISOString() },
      },
    }),
  });

  if (!res.ok) {
    throw new Error('Unable to subscribe right now. Please try again.');
  }

  return true;
}

/**
 * Fetch projects from Firestore collection "posts", falls back to DEFAULT_PROJECTS
 */
export async function fetchLiveProjects() {
  try {
    const res = await fetch(`${FIRESTORE_BASE}/posts`);
    if (!res.ok) return DEFAULT_PROJECTS;

    const data = await res.json();
    if (!data.documents || data.documents.length === 0) {
      return DEFAULT_PROJECTS;
    }

    const fetched = data.documents.map((doc, idx) => {
      const f = doc.fields || {};
      return {
        id: String(idx + 1).padStart(2, '0'),
        title: f.title?.stringValue || 'Untitled Project',
        category: f.category?.stringValue || 'Client Project',
        badge: f.category?.stringValue || 'DELIVERED',
        description:
          f.description?.stringValue ||
          'Verified project delivered with clean responsive architecture.',
        link: f.link?.stringValue || '#',
        tags: [f.category?.stringValue || 'Web Project', 'Responsive', 'Delivered'],
        year: f.createdAt?.timestampValue
          ? new Date(f.createdAt.timestampValue).getFullYear().toString()
          : '2026',
        author: f.author?.stringValue || 'Lakhvinder Singh',
      };
    });

    return fetched.length > 0 ? fetched : DEFAULT_PROJECTS;
  } catch (err) {
    console.warn('Error fetching live projects from Firestore, using default projects:', err);
    return DEFAULT_PROJECTS;
  }
}
