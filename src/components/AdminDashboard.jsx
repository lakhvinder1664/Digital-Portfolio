import React, { useState, useEffect } from 'react';
import {
  adminLogin,
  getStoredAdmin,
  adminLogout,
  fetchLiveProjects,
  saveAdminProject,
  deleteAdminProject,
  fetchAdminMessages,
  markAdminMessageRead,
  deleteAdminMessage,
  fetchAdminSubscribers,
  deleteAdminSubscriber,
} from '../services/portfolioService';

import proj1 from '../assets/project-1.jpg';
import proj2 from '../assets/project-2.jpg';
import proj3 from '../assets/project-3.jpg';
import proj4 from '../assets/project-4.jpg';
import proj5 from '../assets/project-5.jpg';
import proj6 from '../assets/project-6.jpg';

const PRESET_IMAGES = [
  { label: 'Project 1 (Pharma Lab)', url: proj1 },
  { label: 'Project 2 (Healthcare UI)', url: proj2 },
  { label: 'Project 3 (Manufacturing)', url: proj3 },
  { label: 'Project 4 (Portal UI)', url: proj4 },
  { label: 'Project 5 (Veterinary)', url: proj5 },
  { label: 'Project 6 (Client Themes)', url: proj6 },
];

export default function AdminDashboard({ onNavigate }) {
  const [adminUser, setAdminUser] = useState(() => getStoredAdmin());
  const [activeTab, setActiveTab] = useState('projects'); // 'projects' | 'add' | 'messages' | 'subscribers'

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  // Data states
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [statusAlert, setStatusAlert] = useState({ type: '', text: '' });

  // Project Editor / Form state
  const [editingDocId, setEditingDocId] = useState(null);
  const [projectForm, setProjectForm] = useState({
    title: '',
    category: 'WordPress Website',
    badge: 'PHARMACEUTICAL WEBSITE',
    link: '',
    imageUrl: '',
    description: '',
    tags: 'WordPress, Bootstrap 5, PHP',
  });
  const [formSaving, setFormSaving] = useState(false);

  // Load dashboard data when authenticated
  useEffect(() => {
    if (!adminUser) return;
    loadAllData();
  }, [adminUser]);

  const loadAllData = async () => {
    setLoading(true);
    try {
      const [pData, mData, sData] = await Promise.all([
        fetchLiveProjects(),
        fetchAdminMessages(),
        fetchAdminSubscribers(),
      ]);
      setProjects(pData || []);
      setMessages(mData || []);
      setSubscribers(sData || []);
    } catch (err) {
      console.warn('Dashboard load notice:', err);
    } finally {
      setLoading(false);
    }
  };

  const showAlert = (type, text) => {
    setStatusAlert({ type, text });
    setTimeout(() => setStatusAlert({ type: '', text: '' }), 4000);
  };

  // Login submit handler
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);

    try {
      const user = await adminLogin(loginEmail, loginPassword);
      setAdminUser(user);
    } catch (err) {
      setLoginError(err.message || 'Login failed.');
    } finally {
      setLoginLoading(false);
    }
  };

  // Logout handler
  const handleLogout = () => {
    adminLogout();
    setAdminUser(null);
  };

  // Project Form Submit (Create or Update)
  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    if (!projectForm.title.trim()) {
      showAlert('error', 'Please enter a project title.');
      return;
    }

    setFormSaving(true);
    try {
      await saveAdminProject(projectForm, editingDocId);
      showAlert('success', editingDocId ? 'Project updated successfully!' : 'Project published successfully!');
      setEditingDocId(null);
      setProjectForm({
        title: '',
        category: 'WordPress Website',
        badge: 'PHARMACEUTICAL WEBSITE',
        link: '',
        imageUrl: '',
        description: '',
        tags: 'WordPress, Bootstrap 5, PHP',
      });
      setActiveTab('projects');
      loadAllData();
    } catch (err) {
      showAlert('error', err.message || 'Error saving project.');
    } finally {
      setFormSaving(false);
    }
  };

  // Populate form for editing a project
  const handleEditClick = (proj) => {
    setEditingDocId(proj.docId || proj.id);
    setProjectForm({
      title: proj.title || '',
      category: proj.category || 'WordPress Website',
      badge: proj.badge || proj.cost || 'CLIENT PROJECT',
      link: proj.link || '',
      imageUrl: proj.imageUrl || '',
      description: proj.description || '',
      tags: Array.isArray(proj.tags) ? proj.tags.join(', ') : (proj.tags || ''),
    });
    setActiveTab('add');
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  // Delete Project
  const handleDeleteProject = async (proj) => {
    if (!window.confirm(`Delete project "${proj.title}"? This cannot be undone.`)) return;
    try {
      await deleteAdminProject(proj.docId || proj.id);
      showAlert('success', 'Project removed.');
      loadAllData();
    } catch (err) {
      showAlert('error', err.message || 'Could not delete project.');
    }
  };

  // Mark Message Read
  const handleMarkRead = async (msg) => {
    try {
      await markAdminMessageRead(msg.docId);
      setMessages((prev) =>
        prev.map((m) => (m.docId === msg.docId ? { ...m, read: true } : m))
      );
      showAlert('success', 'Message marked as read.');
    } catch (err) {
      console.warn(err);
    }
  };

  // Delete Message
  const handleDeleteMessage = async (msg) => {
    if (!window.confirm('Delete this inquiry message?')) return;
    try {
      await deleteAdminMessage(msg.docId);
      setMessages((prev) => prev.filter((m) => m.docId !== msg.docId));
      showAlert('success', 'Message deleted.');
    } catch (err) {
      showAlert('error', 'Could not delete message.');
    }
  };

  // Delete Subscriber
  const handleDeleteSubscriber = async (sub) => {
    if (!window.confirm(`Remove subscriber "${sub.email}"?`)) return;
    try {
      await deleteAdminSubscriber(sub.docId);
      setSubscribers((prev) => prev.filter((s) => s.docId !== sub.docId));
      showAlert('success', 'Subscriber removed.');
    } catch (err) {
      showAlert('error', 'Could not remove subscriber.');
    }
  };

  // Copy all subscriber emails to clipboard
  const handleCopySubscribers = () => {
    const list = subscribers.map((s) => s.email).filter(Boolean).join(', ');
    if (!list) return;
    navigator.clipboard.writeText(list);
    showAlert('success', `Copied ${subscribers.length} email addresses to clipboard!`);
  };

  const unreadCount = messages.filter((m) => !m.read).length;

  // ----------------------------------------------------
  // VIEW A: If NOT logged in, show brutalist Login Box
  // ----------------------------------------------------
  if (!adminUser) {
    return (
      <div className="admin-page-wrapper">
        <section className="admin-hero-section">
          <div className="admin-hero-inner">
            <div className="admin-hero-left">
              <span className="admin-console-badge">[ RESTRICTED ACCESS ]</span>
              <h1 className="admin-hero-title">
                <span>ADMIN</span>
                <span className="admin-hero-accent">
                  CONSOLE
                  <span className="admin-hero-lime-circle" aria-hidden="true" />
                </span>
              </h1>
            </div>
            <div className="admin-hero-right">
              <p className="admin-hero-desc">
                AUTHORIZED ADMINISTRATOR LOGIN FOR LAKHVINDER SINGH. MANAGE REAL CLIENT PROJECTS, PORTFOLIO CONTENT &amp; CLIENT INQUIRIES.
              </p>
            </div>
          </div>
        </section>

        <section className="admin-content-section">
          <div className="admin-login-box">
            <h2 className="admin-card-title mb-3">ADMIN AUTHENTICATION</h2>
            <p className="admin-muted-text mb-4">
              Enter your credentials to access the portfolio control center.
            </p>

            {loginError && (
              <div className="admin-alert-error mb-4">
                ⚠ {loginError}
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="admin-form">
              <div className="admin-form-group">
                <label className="admin-form-label">ADMINISTRATOR EMAIL</label>
                <input
                  type="email"
                  className="admin-form-input"
                  placeholder="lakhvinder9567@gmail.com"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">PASSWORD</label>
                <input
                  type="password"
                  className="admin-form-input"
                  placeholder="••••••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="admin-btn-primary w-100"
                disabled={loginLoading}
                style={{ opacity: loginLoading ? 0.7 : 1 }}
              >
                {loginLoading ? 'AUTHENTICATING...' : 'ACCESS CONSOLE ↗'}
              </button>
            </form>
          </div>
        </section>
      </div>
    );
  }

  // ----------------------------------------------------
  // VIEW B: AUTHENTICATED DASHBOARD
  // ----------------------------------------------------
  return (
    <div className="admin-page-wrapper">
      {/* 1. Hero Header */}
      <section className="admin-hero-section">
        <div className="admin-hero-inner">
          <div className="admin-hero-left">
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="admin-pulse-dot" />
              <span className="admin-console-badge">[ CONTROL CONSOLE ]</span>
            </div>
            <h1 className="admin-hero-title">
              <span>ADMIN</span>
              <span className="admin-hero-accent">
                DASHBOARD
                <span className="admin-hero-lime-circle" aria-hidden="true" />
              </span>
            </h1>
          </div>

          <div className="admin-hero-right">
            <div className="admin-user-info-row">
              <span className="admin-user-pill">
                ● {adminUser.email || 'Authenticated Admin'}
              </span>
              <button
                type="button"
                onClick={handleLogout}
                className="admin-btn-danger"
              >
                LOGOUT
              </button>
            </div>
            <p className="admin-hero-desc">
              LIVE CLOUD DATA SYNCED WITH FIRESTORE. CHANGES PUBLISH INSTANTLY TO SELECTED WORK AND THE PROJECTS PAGE.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Global Status Toast */}
      {statusAlert.text && (
        <div className="admin-status-toast-wrap">
          <div className={`admin-toast ${statusAlert.type === 'error' ? 'is-error' : 'is-success'}`}>
            {statusAlert.type === 'error' ? '⚠ ' : '✓ '}
            {statusAlert.text}
          </div>
        </div>
      )}

      {/* 3. Stat Cards Row */}
      <section className="admin-stats-section">
        <div className="admin-stats-grid">
          <div className="admin-stat-card" onClick={() => setActiveTab('projects')}>
            <span className="admin-stat-label">PUBLISHED PROJECTS</span>
            <div className="admin-stat-val">{projects.length}</div>
            <span className="admin-stat-sub">Live on Portfolio</span>
          </div>

          <div className="admin-stat-card" onClick={() => setActiveTab('messages')}>
            <div className="d-flex justify-content-between align-items-center">
              <span className="admin-stat-label">INBOX MESSAGES</span>
              {unreadCount > 0 && (
                <span className="admin-unread-pill">{unreadCount} PENDING</span>
              )}
            </div>
            <div className="admin-stat-val">{messages.length}</div>
            <span className="admin-stat-sub">Total Client Inquiries</span>
          </div>

          <div className="admin-stat-card" onClick={() => setActiveTab('subscribers')}>
            <span className="admin-stat-label">SUBSCRIBERS</span>
            <div className="admin-stat-val">{subscribers.length}</div>
            <span className="admin-stat-sub">Newsletter Contacts</span>
          </div>
        </div>
      </section>

      {/* 4. Filter / Navigation Tabs Bar */}
      <section className="admin-tabs-section">
        <div className="admin-tabs-row">
          <button
            type="button"
            className={`admin-tab-pill ${activeTab === 'projects' ? 'is-active' : ''}`}
            onClick={() => {
              setActiveTab('projects');
              setEditingDocId(null);
            }}
          >
            MANAGE PROJECTS ({projects.length})
          </button>

          <button
            type="button"
            className={`admin-tab-pill ${activeTab === 'add' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('add')}
          >
            {editingDocId ? '✏ EDIT PROJECT' : '+ PUBLISH NEW PROJECT'}
          </button>

          <button
            type="button"
            className={`admin-tab-pill ${activeTab === 'messages' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('messages')}
          >
            INBOX MESSAGES {unreadCount > 0 ? `(${unreadCount} NEW)` : `(${messages.length})`}
          </button>

          <button
            type="button"
            className={`admin-tab-pill ${activeTab === 'subscribers' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('subscribers')}
          >
            SUBSCRIBERS ({subscribers.length})
          </button>
        </div>
      </section>

      {/* 5. Main Tab Panels */}
      <section className="admin-content-section">
        {loading && (
          <div className="admin-loading-indicator">
            [ SYNCING WITH FIRESTORE... ]
          </div>
        )}

        {/* TAB 1: MANAGE PROJECTS */}
        {activeTab === 'projects' && (
          <div className="admin-projects-list">
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
              <h2 className="admin-section-heading">CURRENT LIVE PROJECTS</h2>
              <button
                type="button"
                className="admin-btn-primary"
                onClick={() => {
                  setEditingDocId(null);
                  setProjectForm({
                    title: '',
                    category: 'WordPress Website',
                    badge: 'PHARMACEUTICAL WEBSITE',
                    link: '',
                    imageUrl: '',
                    description: '',
                    tags: 'WordPress, Bootstrap 5, PHP',
                  });
                  setActiveTab('add');
                }}
              >
                + ADD NEW PROJECT
              </button>
            </div>

            <div className="admin-projects-grid">
              {projects.map((proj, idx) => (
                <div key={proj.docId || proj.id || idx} className="admin-project-card">
                  <div className="admin-project-media">
                    <img
                      src={proj.imageUrl || proj1}
                      alt={proj.title}
                      className="admin-project-thumb"
                      onError={(e) => {
                        e.target.src = proj1;
                      }}
                    />
                    <span className="admin-project-badge">{proj.badge || proj.category}</span>
                  </div>

                  <div className="admin-project-details">
                    <div className="d-flex justify-content-between align-items-start gap-2">
                      <h3 className="admin-project-title">{proj.title}</h3>
                      <span className="admin-project-index">[{proj.id || String(idx + 1).padStart(2, '0')}]</span>
                    </div>

                    <div className="admin-project-meta">
                      <span className="admin-project-cat">{proj.category}</span>
                      {proj.link && proj.link !== '#' && (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noreferrer"
                          className="admin-project-link"
                        >
                          Visit Live ↗
                        </a>
                      )}
                    </div>

                    {proj.tags && proj.tags.length > 0 && (
                      <div className="admin-tags-row">
                        {proj.tags.map((t, i) => (
                          <span key={i} className="admin-tag-pill">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="admin-card-actions">
                      <button
                        type="button"
                        onClick={() => handleEditClick(proj)}
                        className="admin-btn-outline"
                      >
                        ✏ EDIT
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteProject(proj)}
                        className="admin-btn-danger"
                      >
                        DELETE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: ADD / EDIT PROJECT FORM */}
        {activeTab === 'add' && (
          <div className="admin-form-card">
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
              <h2 className="admin-section-heading">
                {editingDocId ? 'EDIT PROJECT DETAILS' : 'PUBLISH NEW PROJECT'}
              </h2>
              {editingDocId && (
                <button
                  type="button"
                  className="admin-btn-outline"
                  onClick={() => {
                    setEditingDocId(null);
                    setActiveTab('projects');
                  }}
                >
                  CANCEL EDIT
                </button>
              )}
            </div>

            <form onSubmit={handleProjectSubmit} className="admin-form">
              <div className="admin-form-row">
                <div className="admin-form-group flex-1">
                  <label className="admin-form-label">PROJECT TITLE *</label>
                  <input
                    type="text"
                    className="admin-form-input"
                    placeholder="e.g. Accubic Labs – Pharmaceutical Website"
                    value={projectForm.title}
                    onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                    required
                  />
                </div>

                <div className="admin-form-group flex-1">
                  <label className="admin-form-label">CATEGORY</label>
                  <select
                    className="admin-form-input"
                    value={projectForm.category}
                    onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                  >
                    <option value="WordPress Website">WordPress Website</option>
                    <option value="UI/UX Mockup">UI/UX Mockup</option>
                    <option value="Frontend & WordPress">Frontend &amp; WordPress</option>
                    <option value="Figma to Code">Figma to Code</option>
                  </select>
                </div>
              </div>

              <div className="admin-form-row">
                <div className="admin-form-group flex-1">
                  <label className="admin-form-label">BADGE LABEL</label>
                  <input
                    type="text"
                    className="admin-form-input"
                    placeholder="e.g. PHARMACEUTICAL WEBSITE"
                    value={projectForm.badge}
                    onChange={(e) => setProjectForm({ ...projectForm, badge: e.target.value })}
                  />
                </div>

                <div className="admin-form-group flex-1">
                  <label className="admin-form-label">LIVE WEBSITE LINK</label>
                  <input
                    type="url"
                    className="admin-form-input"
                    placeholder="https://hivends.org/accubic-labs/"
                    value={projectForm.link}
                    onChange={(e) => setProjectForm({ ...projectForm, link: e.target.value })}
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">PROJECT IMAGE URL OR PRESET ASSET</label>
                <div className="d-flex gap-2 mb-2 flex-wrap">
                  {PRESET_IMAGES.map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      className="admin-tag-pill"
                      style={{ cursor: 'pointer' }}
                      onClick={() => setProjectForm({ ...projectForm, imageUrl: img.url })}
                    >
                      {img.label}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  className="admin-form-input"
                  placeholder="https://example.com/project-image.jpg or select preset above"
                  value={projectForm.imageUrl}
                  onChange={(e) => setProjectForm({ ...projectForm, imageUrl: e.target.value })}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">TAGS (COMMA SEPARATED)</label>
                <input
                  type="text"
                  className="admin-form-input"
                  placeholder="WordPress, WooCommerce, Bootstrap 5, Pharma Catalog"
                  value={projectForm.tags}
                  onChange={(e) => setProjectForm({ ...projectForm, tags: e.target.value })}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">INTERNAL NOTES / DESCRIPTION</label>
                <textarea
                  className="admin-form-input"
                  rows={3}
                  placeholder="Details about client requirements, pharmaceutical products, theme customizations..."
                  value={projectForm.description}
                  onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="admin-btn-primary"
                disabled={formSaving}
                style={{ opacity: formSaving ? 0.7 : 1 }}
              >
                {formSaving
                  ? 'SAVING TO FIRESTORE...'
                  : editingDocId
                  ? 'SAVE PROJECT CHANGES ↗'
                  : 'PUBLISH TO LIVE WEBSITE ↗'}
              </button>
            </form>
          </div>
        )}

        {/* TAB 3: INBOX MESSAGES */}
        {activeTab === 'messages' && (
          <div className="admin-messages-wrap">
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
              <h2 className="admin-section-heading">CLIENT INBOX INQUIRIES</h2>
              <span className="admin-muted-text">
                {messages.length} total message(s) received from contact form
              </span>
            </div>

            {messages.length === 0 ? (
              <div className="admin-empty-state">
                NO INQUIRIES FOUND IN INBOX.
              </div>
            ) : (
              <div className="admin-messages-list">
                {messages.map((msg) => (
                  <div
                    key={msg.docId}
                    className={`admin-message-card ${msg.read ? 'is-read' : 'is-unread'}`}
                  >
                    <div className="admin-msg-header">
                      <div>
                        <div className="d-flex align-items-center gap-2">
                          <h3 className="admin-msg-name">{msg.name}</h3>
                          {!msg.read && <span className="admin-unread-pill">NEW</span>}
                        </div>
                        <div className="admin-msg-contact">
                          <a href={`mailto:${msg.email}`} className="admin-msg-link">
                            ✉ {msg.email}
                          </a>
                          {msg.phone && msg.phone !== 'Not provided' && (
                            <a href={`tel:${msg.phone}`} className="admin-msg-link">
                              📞 {msg.phone}
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="admin-msg-meta-right">
                        <span className="admin-msg-time">
                          {msg.time ? new Date(msg.time).toLocaleString() : 'Recent'}
                        </span>
                        {msg.budget && msg.budget !== 'Not specified' && (
                          <span className="admin-tag-pill">Budget: {msg.budget}</span>
                        )}
                        {msg.companyType && msg.companyType !== 'Not specified' && (
                          <span className="admin-tag-pill">{msg.companyType}</span>
                        )}
                      </div>
                    </div>

                    <div className="admin-msg-body">
                      {msg.message}
                    </div>

                    <div className="admin-card-actions">
                      <a
                        href={`mailto:${msg.email}?subject=Re:%20Website%20Inquiry%20-%20Lakhvinder%20Singh`}
                        className="admin-btn-outline"
                      >
                        REPLY VIA EMAIL ↗
                      </a>
                      {!msg.read && (
                        <button
                          type="button"
                          onClick={() => handleMarkRead(msg)}
                          className="admin-btn-outline"
                        >
                          ✓ MARK AS READ
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => handleDeleteMessage(msg)}
                        className="admin-btn-danger"
                      >
                        DELETE
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 4: NEWSLETTER SUBSCRIBERS */}
        {activeTab === 'subscribers' && (
          <div className="admin-subscribers-wrap">
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
              <h2 className="admin-section-heading">NEWSLETTER SUBSCRIBERS</h2>
              <button
                type="button"
                className="admin-btn-primary"
                onClick={handleCopySubscribers}
                disabled={subscribers.length === 0}
              >
                📋 COPY ALL EMAILS
              </button>
            </div>

            {subscribers.length === 0 ? (
              <div className="admin-empty-state">
                NO NEWSLETTER SUBSCRIBERS FOUND.
              </div>
            ) : (
              <div className="admin-subscribers-table-box">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>EMAIL ADDRESS</th>
                      <th>DATE SUBSCRIBED</th>
                      <th style={{ textAlign: 'right' }}>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscribers.map((sub, i) => (
                      <tr key={sub.docId || i}>
                        <td>{String(i + 1).padStart(2, '0')}</td>
                        <td style={{ fontWeight: 600 }}>{sub.email}</td>
                        <td style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                          {sub.time ? new Date(sub.time).toLocaleDateString() : 'Recent'}
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <button
                            type="button"
                            className="admin-btn-danger"
                            onClick={() => handleDeleteSubscriber(sub)}
                            style={{ padding: '4px 10px', fontSize: '11px' }}
                          >
                            REMOVE
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
