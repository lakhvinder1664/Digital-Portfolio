import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BannerSection from './components/BannerSection';
import SelectedWork from './components/SelectedWork';
import AboutSection from './components/AboutSection';
import ClientTicker from './components/ClientTicker';
import WorkMethod from './components/WorkMethod';
import GraffitiBanner from './components/GraffitiBanner';
import ServicesSection from './components/ServicesSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsStackSection from './components/SkillsStackSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import ServicePage from './components/ServicePage';
import ContactPage from './components/ContactPage';
import ProjectsPage from './components/ProjectsPage';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'services' | 'projects' | 'contact'
  const [isPreloaderActive, setIsPreloaderActive] = useState(true);
  const [preloaderKey, setPreloaderKey] = useState(1);

  // Hash-based routing to allow direct URLs and browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      let targetPage = 'home';
      if (hash.includes('project') || hash.includes('work')) {
        targetPage = 'projects';
      } else if (hash.includes('contact')) {
        targetPage = 'contact';
      } else if (hash.includes('service')) {
        targetPage = 'services';
      } else {
        targetPage = 'home';
      }

      setCurrentPage((prevPage) => {
        if (prevPage !== targetPage) {
          setPreloaderKey((k) => k + 1);
          setIsPreloaderActive(true);
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
        return targetPage;
      });
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page, hashTarget) => {
    // Trigger preloader with fresh key on every navigation / page change
    setPreloaderKey((k) => k + 1);
    setIsPreloaderActive(true);

    // Switch underlying page and reset scroll while preloader covers screen
    setTimeout(() => {
      setCurrentPage(page);
      if (page === 'projects') {
        window.location.hash = '/projects';
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (page === 'contact') {
        window.location.hash = '/contact';
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (page === 'services') {
        window.location.hash = '/services';
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        if (hashTarget) {
          window.location.hash = hashTarget;
          setTimeout(() => {
            const el = document.querySelector(hashTarget);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
          window.location.hash = '/';
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }
    }, 200);
  };

  return (
    <div className="portfolio-app-root">
      {/* Brand Preloader Overlay (Plays on initial enter & page changes) */}
      <Preloader
        key={preloaderKey}
        isActive={isPreloaderActive}
        onFinish={() => setIsPreloaderActive(false)}
      />

      {/* Magic Cursor Follower (Circle ring without middle dot) */}
      <CustomCursor />

      {/* Dynamic Shared Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main>
        {currentPage === 'projects' ? (
          <ProjectsPage onStartProject={() => handleNavigate('contact')} />
        ) : currentPage === 'contact' ? (
          <ContactPage />
        ) : currentPage === 'services' ? (
          <ServicePage onStartProject={() => handleNavigate('contact')} />
        ) : (
          <>
            <Hero onStartProject={() => handleNavigate('contact')} />
            <BannerSection />
            <SelectedWork onExplore={() => handleNavigate('projects')} />
            <AboutSection />
            <ClientTicker />
            <WorkMethod />
            <GraffitiBanner />
            <ServicesSection onNavigateToServices={() => handleNavigate('services')} />
            <ExperienceSection />
            <SkillsStackSection />
            <TestimonialsSection />
            <FaqSection />
            <CtaSection onStartProject={() => handleNavigate('contact')} />
          </>
        )}
      </main>

      {/* Dynamic Shared Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
