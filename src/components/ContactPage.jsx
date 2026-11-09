import React, { useState } from 'react';
import { submitContactInquiry, CONTACT_INFO } from '../services/portfolioService';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyType: 'Freelancer with an Established Brand',
    budget: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);

    try {
      const res = await submitContactInquiry(formData);
      setWhatsappUrl(res.whatsappUrl);
      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        companyType: 'Freelancer with an Established Brand',
        budget: '',
        message: '',
      });
    } catch (err) {
      console.error('Contact submission error:', err);
      setErrorMsg('Something went wrong. Please email directly to ' + CONTACT_INFO.email);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="contact-hero-section">
        <div className="contact-hero-inner">
          {/* Left: Headline with Lime Circle behind R */}
          <div className="contact-hero-left">
            <h1 className="contact-hero-title">
              <span className="contact-hero-line">LET&apos;S WORK</span>
              <span className="contact-hero-line-accent">
                TOGETHE<span className="contact-hero-r-wrap">
                  R
                  <span className="contact-hero-lime-circle" aria-hidden="true" />
                </span>
              </span>
            </h1>
          </div>

          {/* Right: Tag and Subtext */}
          <div className="contact-hero-right">
            <div className="contact-hero-badge">
              [ FILL THE FORM BELOW ]
            </div>
            <p className="contact-hero-desc">
              COLLABORATE FOR VISUAL EXCELLENCE, TRANSFORMING IDEAS INTO EXCEPTIONAL DESIGN.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FORM SECTION */}
      <section className="contact-form-section" id="contact-form">
        <div className="contact-form-container">
          {submitted ? (
            <div className="contact-success-card" style={{
              background: '#121212',
              border: '2px solid var(--color-lime, #d4ff00)',
              borderRadius: '16px',
              padding: 'clamp(28px, 4vw, 48px)',
              textAlign: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
              margin: '20px 0'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--color-lime, #d4ff00)',
                color: '#000',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                fontWeight: 'bold',
                marginBottom: '20px'
              }}>
                ✓
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(24px, 3.5vw, 36px)',
                textTransform: 'uppercase',
                color: '#ffffff',
                marginBottom: '12px'
              }}>
                MESSAGE DELIVERED SUCCESSFULLY!
              </h2>
              <p style={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                maxWidth: '560px',
                margin: '0 auto 28px auto',
                lineHeight: 1.6
              }}>
                Thank you! Your message has been saved and sent directly to Lakhvinder Singh. We will get back to you within 24 hours.
              </p>

              {whatsappUrl && (
                <div style={{
                  padding: '20px',
                  background: 'rgba(255,255,255,0.04)',
                  borderRadius: '12px',
                  maxWidth: '520px',
                  margin: '0 auto 28px auto',
                  border: '1px dashed rgba(212, 255, 0, 0.35)'
                }}>
                  <p style={{ color: '#fff', fontSize: '14px', marginBottom: '12px', fontWeight: '500' }}>
                    Need a quick response right now?
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      background: '#25D366',
                      color: '#000',
                      padding: '12px 24px',
                      borderRadius: '50px',
                      fontWeight: '700',
                      fontSize: '14px',
                      letterSpacing: '0.5px',
                      textDecoration: 'none',
                      transition: 'transform 0.2s ease',
                    }}
                  >
                    <span>💬 Chat On WhatsApp (+91 79883 79885)</span>
                    <span>↗</span>
                  </a>
                </div>
              )}

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="contact-submit-btn"
                style={{ maxWidth: '280px', margin: '0 auto' }}
              >
                SEND ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <form className="contact-main-form" onSubmit={handleSubmit}>
              {/* Row 1: First Name & Last Name */}
              <div className="contact-form-row-2">
                <div className="contact-input-group">
                  <label htmlFor="firstName" className="contact-label-with-circle">
                    <span className="contact-lime-dot" aria-hidden="true" />
                    FIRST NAME *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Lakhvinder"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="contact-text-input"
                  />
                </div>

                <div className="contact-input-group">
                  <label htmlFor="lastName" className="contact-label-with-circle">
                    <span className="contact-lime-dot" aria-hidden="true" />
                    LAST NAME
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Singh"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="contact-text-input"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="contact-form-row-2">
                <div className="contact-input-group">
                  <label htmlFor="email" className="contact-label-with-circle">
                    <span className="contact-lime-dot" aria-hidden="true" />
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your-email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-text-input"
                  />
                </div>

                <div className="contact-input-group">
                  <label htmlFor="phone" className="contact-label-with-circle">
                    <span className="contact-lime-dot" aria-hidden="true" />
                    PHONE / WHATSAPP NUMBER
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="contact-text-input"
                  />
                </div>
              </div>

              {/* Row 3: Company Type & Budget */}
              <div className="contact-form-row-2">
                <div className="contact-input-group">
                  <label htmlFor="companyType" className="contact-label-with-circle">
                    <span className="contact-lime-dot" aria-hidden="true" />
                    WHAT&apos;S THE TYPE OF YOUR COMPANY
                  </label>
                  <div className="contact-select-wrap">
                    <select
                      id="companyType"
                      name="companyType"
                      value={formData.companyType}
                      onChange={handleChange}
                      className="contact-select-input"
                    >
                      <option value="Freelancer with an Established Brand">
                        Freelancer with an Established Brand
                      </option>
                      <option value="Pharmaceutical & Healthcare Business">
                        Pharmaceutical &amp; Healthcare Business
                      </option>
                      <option value="Sole Proprietorship Design Business">
                        Sole Proprietorship Design Business
                      </option>
                      <option value="Small-scale Design Agency Operating Individually">
                        Small-scale Design Agency Operating Individually
                      </option>
                      <option value="Independent Creative Studio">
                        Independent Creative Studio
                      </option>
                      <option value="Corporate / Enterprise Brand">
                        Corporate / Enterprise Brand
                      </option>
                    </select>
                    <span className="contact-select-arrow" aria-hidden="true">
                      &#9662;
                    </span>
                  </div>
                </div>

                <div className="contact-input-group">
                  <label htmlFor="budget" className="contact-label-with-circle">
                    <span className="contact-lime-dot" aria-hidden="true" />
                    YOUR BUDGET (OPTIONAL)
                  </label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    placeholder="e.g. ₹15,000 - ₹50,000 / $500 - $2000"
                    value={formData.budget}
                    onChange={handleChange}
                    className="contact-text-input"
                  />
                </div>
              </div>

              {/* Row 4: Message */}
              <div className="contact-input-group">
                <label htmlFor="message" className="contact-label-with-circle">
                  <span className="contact-lime-dot" aria-hidden="true" />
                  MESSAGE *
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Describe your project, website requirements, or questions..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="contact-textarea-input"
                />
              </div>

              {errorMsg && (
                <div style={{
                  color: '#ff4d4f',
                  background: 'rgba(255, 77, 79, 0.1)',
                  padding: '12px 18px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                  ⚠ {errorMsg}
                </div>
              )}

              {/* Row 5: Submit Button */}
              <div className="contact-submit-row">
                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={isSubmitting}
                  style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'wait' : 'pointer' }}
                >
                  {isSubmitting ? 'SENDING INQUIRY...' : 'SUBMIT INQUIRY ↗'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 3. DETAILS & METADATA GRID */}
      <section className="contact-details-section">
        <div className="contact-details-container">
          <div className="contact-details-grid">
            {/* Column 1: Follow Me */}
            <div className="contact-widget">
              <h3 className="contact-widget-title">CONNECT WITH ME</h3>
              <ul className="contact-widget-list contact-socials-list">
                <li>
                  <a
                    href={CONTACT_INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-detail-link"
                  >
                    LINKEDIN &#8599;
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT_INFO.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-detail-link"
                  >
                    GITHUB &#8599;
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT_INFO.socials.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-detail-link"
                  >
                    WHATSAPP &#8599;
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Current Location */}
            <div className="contact-widget">
              <h3 className="contact-widget-title">LOCATIONS</h3>
              <ul className="contact-widget-list">
                <li>{CONTACT_INFO.locations.workplace}</li>
                <li>{CONTACT_INFO.locations.hometown}</li>
              </ul>
            </div>

            {/* Column 3: Phone */}
            <div className="contact-widget">
              <h3 className="contact-widget-title">PHONE / WHATSAPP</h3>
              <ul className="contact-widget-list">
                <li className="contact-phone-item">
                  <span className="contact-phone-tag">CALL</span>
                  <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="contact-detail-link">
                    {CONTACT_INFO.phone}
                  </a>
                </li>
                <li className="contact-phone-item">
                  <span className="contact-phone-tag">CHAT</span>
                  <a href={CONTACT_INFO.socials.whatsapp} target="_blank" rel="noreferrer" className="contact-detail-link">
                    Direct on WhatsApp &#8599;
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Email */}
            <div className="contact-widget">
              <h3 className="contact-widget-title">DIRECT EMAIL</h3>
              <ul className="contact-widget-list">
                <li>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="contact-detail-link">
                    {CONTACT_INFO.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
