"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ServicesSection from "@/components/ServicesSection";
import KeyFeaturesSection from "@/components/KeyFeaturesSection";
import StatsGraphSection from "@/components/StatsGraphSection";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main>
      <header className="header">
        <Link href="/" className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <Image src="/man-logo.jpg" alt="M.A.N Custom wear Logo" width={isMobile ? 40 : 50} height={isMobile ? 40 : 50} style={{ objectFit: 'contain', borderRadius: '4px' }} unoptimized />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: isMobile ? '16px' : '18px', fontWeight: 900, color: '#1a1a1a', lineHeight: 1.1 }}>M.A.N</span>
            <span style={{ fontSize: isMobile ? '11px' : '13px', fontWeight: 700, color: '#555', letterSpacing: '1px' }}>Custom wear</span>
          </div>
        </Link>

        {!isMobile && (
          <>
            <nav className="nav-links">
              <Link href="/services" className="nav-link">Services <span className="nav-dot"></span></Link>
              <Link href="/#" className="nav-link">Vinyl Lettering <span className="nav-dot"></span></Link>
              <Link href="/#" className="nav-link">Embroidery <span className="nav-dot"></span></Link>
              <Link href="/#" className="nav-link">Design Services <span className="nav-dot"></span></Link>
              <Link href="/#" className="nav-link">Promotional</Link>
              <Link href="/#" className="nav-link">Contact Us <span className="nav-dot"></span></Link>
            </nav>

            <div className="header-actions">
              <Link href="#" className="btn btn-yellow">Let's Talk</Link>
              <Link href="#" className="btn btn-dark">Start Your Order</Link>
            </div>
          </>
        )}

        {isMobile && (
          <button className="hamburger-btn" onClick={() => setIsMenuOpen(true)}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </button>
        )}

        {/* Mobile Menu Overlay */}
        {isMobile && (
          <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
            <div className="mobile-menu-header">
              <span className="mobile-menu-title">Menu</span>
              <button className="mobile-menu-close" onClick={() => setIsMenuOpen(false)}>✕</button>
            </div>

            <nav className="mobile-nav-links">
              <Link href="/services" className="mobile-nav-link">Services <span className="arrow">›</span></Link>
              <Link href="/#" className="mobile-nav-link">Vinyl Lettering <span className="arrow">›</span></Link>
              <Link href="/#" className="mobile-nav-link">Embroidery <span className="arrow">›</span></Link>
              <Link href="/#" className="mobile-nav-link">Design Services <span className="arrow">›</span></Link>
              <Link href="/#" className="mobile-nav-link">Promotional</Link>
              <Link href="/#" className="mobile-nav-link">Contact Us <span className="arrow">›</span></Link>
            </nav>

            <div className="mobile-menu-actions">
              <Link href="#" className="btn btn-yellow mobile-btn-full">Let's Talk</Link>
              <Link href="#" className="btn btn-dark mobile-btn-full">Start Your Order</Link>
            </div>
          </div>
        )}
      </header>

      {/* The scrolling animation section */}
      <div style={{ backgroundColor: '#ffffff', position: 'relative', zIndex: 1 }}>
        <ServicesSection />
      </div>
      
      {/* The new Key Features Section */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <KeyFeaturesSection />
      </div>

      {/* The new Stats Graph Section */}
      <div style={{ position: 'relative', zIndex: 3 }}>
        <StatsGraphSection />
      </div>

      {/* Some extra padding at bottom so scrolling feels natural before footer */}
      <div style={{ height: '10vh', backgroundColor: '#ffffff' }}></div>

      <Footer />
    </main>
  );
}
