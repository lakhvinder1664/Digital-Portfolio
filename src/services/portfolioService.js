/**
 * Portfolio Data & Firebase Service
 * Handles Firestore REST endpoints for messages, newsletter, and live projects.
 */

const FIRESTORE_BASE = 'https://firestore.googleapis.com/v1/projects/portfolio-contact-fe911/databases/(default)/documents';
const FIREBASE_API_KEY = 'AIzaSyDEhANm35w2A6i3b5VJjDK92pboIKESHQU';

export const CONTACT_INFO = {
  name: 'Lakhvinder Singh',
  role: 'Frontend Developer, WordPress Developer & UI Designer',
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
    category: 'WordPress Website',
    badge: 'PHARMACEUTICAL WEBSITE',
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
    category: 'UI/UX Mockup',
    badge: 'HEALTHCARE MOCKUP',
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
    category: 'UI/UX Mockup',
    badge: 'PHARMA MOCKUP',
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
    category: 'UI/UX Mockup',
    badge: 'FIGMA TO WEBPAGE',
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
    category: 'UI/UX Mockup',
    badge: 'VETERINARY UI',
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
      const docId = doc.name ? doc.name.split('/').pop() : `post-${idx + 1}`;

      // Parse tags (support arrayValue or comma-separated string)
      let tags = [];
      if (f.tags?.arrayValue?.values) {
        tags = f.tags.arrayValue.values.map((v) => v.stringValue).filter(Boolean);
      } else if (f.tags?.stringValue) {
        tags = f.tags.stringValue.split(',').map((s) => s.trim()).filter(Boolean);
      }
      if (!tags.length) {
        const cat = f.category?.stringValue;
        tags = cat ? [cat, 'Responsive Web', 'Delivered'] : ['Web Project', 'Delivered'];
      }

      const category = f.category?.stringValue || 'Web Project';
      const badge = f.badge?.stringValue || (category.toUpperCase().includes('LIVE') ? 'LIVE WEBSITE' : category.toUpperCase());

      return {
        id: String(idx + 1).padStart(2, '0'),
        docId,
        title: f.title?.stringValue || 'Untitled Project',
        category,
        cost: badge,
        badge,
        description:
          f.description?.stringValue ||
          'Verified project delivered with clean responsive architecture.',
        link: f.link?.stringValue || '#',
        imageUrl: f.imageUrl?.stringValue || '',
        tags,
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

/**
 * Admin Authentication via Firebase Identity Toolkit REST
 */
export async function adminLogin(email, password) {
  const cleanEmail = (email || '').trim();
  if (!cleanEmail || !password) {
    throw new Error('Please enter both email and password.');
  }

  const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: cleanEmail,
      password,
      returnSecureToken: true,
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    let msg = 'Authentication failed.';
    if (data.error?.message?.includes('EMAIL_NOT_FOUND') || data.error?.message?.includes('INVALID_LOGIN_CREDENTIALS')) {
      msg = 'Incorrect credentials or account not registered.';
    } else if (data.error?.message?.includes('INVALID_PASSWORD')) {
      msg = 'Invalid password. Please try again.';
    } else if (data.error?.message?.includes('TOO_MANY_ATTEMPTS')) {
      msg = 'Too many attempts. Access temporarily locked.';
    }
    throw new Error(msg);
  }

  const user = {
    email: data.email,
    idToken: data.idToken,
    localId: data.localId,
    loggedInAt: Date.now(),
  };
  localStorage.setItem('portfolio_admin_auth', JSON.stringify(user));
  return user;
}

export function getStoredAdmin() {
  try {
    const raw = localStorage.getItem('portfolio_admin_auth');
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function adminLogout() {
  localStorage.removeItem('portfolio_admin_auth');
}

/**
 * Admin Projects CRUD
 */
export async function saveAdminProject(projectData, docId = null) {
  const fields = {
    title: { stringValue: projectData.title || '' },
    category: { stringValue: projectData.category || 'WordPress Website' },
    badge: { stringValue: projectData.badge || 'CLIENT PROJECT' },
    link: { stringValue: projectData.link || '#' },
    imageUrl: { stringValue: projectData.imageUrl || '' },
    description: { stringValue: projectData.description || '' },
    author: { stringValue: projectData.author || 'Lakhvinder Singh' },
    createdAt: { timestampValue: new Date().toISOString() },
  };

  const tagList = Array.isArray(projectData.tags)
    ? projectData.tags
    : (projectData.tags || '').split(',').map((t) => t.trim()).filter(Boolean);

  if (tagList.length > 0) {
    fields.tags = {
      arrayValue: {
        values: tagList.map((t) => ({ stringValue: t })),
      },
    };
  }

  const url = docId ? `${FIRESTORE_BASE}/posts/${docId}` : `${FIRESTORE_BASE}/posts`;
  const method = docId ? 'PATCH' : 'POST';

  const res = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || 'Failed to save project.');
  }

  return true;
}

export async function deleteAdminProject(docId) {
  if (!docId) throw new Error('Document ID required for deletion.');
  const res = await fetch(`${FIRESTORE_BASE}/posts/${docId}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete project.');
  return true;
}

/**
 * Admin Inbox Messages
 */
export async function fetchAdminMessages() {
  try {
    const res = await fetch(`${FIRESTORE_BASE}/messages`);
    if (!res.ok) return [];
    const data = await res.json();
    if (!data.documents) return [];

    return data.documents.map((doc) => {
      const f = doc.fields || {};
      const docId = doc.name ? doc.name.split('/').pop() : '';
      return {
        docId,
        name: f.name?.stringValue || 'Anonymous',
        email: f.email?.stringValue || '',
        phone: f.phone?.stringValue || '',
        companyType: f.companyType?.stringValue || '',
        budget: f.budget?.stringValue || '',
        message: f.message?.stringValue || '',
        read: f.read?.booleanValue || false,
        time: f.time?.timestampValue || '',
      };
    }).sort((a, b) => new Date(b.time || 0) - new Date(a.time || 0));
  } catch (err) {
    console.error('Error fetching admin messages:', err);
    return [];
  }
}

export async function markAdminMessageRead(docId) {
  if (!docId) return;
  await fetch(`${FIRESTORE_BASE}/messages/${docId}?updateMask.fieldPaths=read`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields: { read: { booleanValue: true } },
    }),
  }).catch(() => {});
}

export async function deleteAdminMessage(docId) {
  if (!docId) return;
  const res = await fetch(`${FIRESTORE_BASE}/messages/${docId}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete message.');
  return true;
}

/**
 * Admin Newsletter Subscribers
 */
export async function fetchAdminSubscribers() {
  try {
    const res = await fetch(`${FIRESTORE_BASE}/newsletter`);
    if (!res.ok) return [];
    const data = await res.json();
    if (!data.documents) return [];

    return data.documents.map((doc) => {
      const f = doc.fields || {};
      const docId = doc.name ? doc.name.split('/').pop() : '';
      return {
        docId,
        email: f.email?.stringValue || '',
        time: f.time?.timestampValue || '',
      };
    }).sort((a, b) => new Date(b.time || 0) - new Date(a.time || 0));
  } catch (err) {
    console.error('Error fetching admin subscribers:', err);
    return [];
  }
}

export async function deleteAdminSubscriber(docId) {
  if (!docId) return;
  const res = await fetch(`${FIRESTORE_BASE}/newsletter/${docId}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete subscriber.');
  return true;
}

