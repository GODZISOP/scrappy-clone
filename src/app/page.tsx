"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  const sec7Ref = useRef<HTMLElement>(null);
  const [sec7Progress, setSec7Progress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const maxScroll = rect.height - windowHeight;
      const scrolled = -rect.top;

      if (scrolled < 0) {
        setProgress(0);
      } else if (scrolled > maxScroll) {
        setProgress(1);
      } else {
        setProgress(scrolled / maxScroll);
      }
      if (sec7Ref.current) {
        const rect7 = sec7Ref.current.getBoundingClientRect();
        const maxScroll7 = rect7.height - windowHeight;
        const scrolled7 = -rect7.top;
        if (scrolled7 < 0) setSec7Progress(0);
        else if (scrolled7 > maxScroll7) setSec7Progress(1);
        else setSec7Progress(scrolled7 / maxScroll7);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solutions = [
    {
      header: "Get Uniforms for My Team",
      image: "/mockup-hat.png",
      title: "Uniform Systems for ",
      titleBold: "Growing Teams",
      desc: "Sublimated uniforms, polos, hats, and apparel systems built for consistency across teams, locations, and repeat orders",
    },
    {
      header: "Print Merch or Apparel",
      image: "/mockup-bags.png",
      title: "Premium Screen Printing & ",
      titleBold: "Merch Programs",
      desc: "High-quality screen printing, oversized graphics, specialty inks, and merch programs designed for brands, events, and seasonal drops.",
    },
    {
      header: "Total Printing Solution Color System",
      image: "/mockup-man-box.jpg",
      title: "",
      titleBold: "Pantone-Matched ",
      titleSuffix: "Garments",
      desc: "Premium weight garments with controlled dye processes and specialty washes designed to match your brand's Pantone colors. Built for scalable collections",
    },
    {
      header: "Partner as a Design Agency",
      image: "/mockup-group.jpg",
      title: "Production Systems for ",
      titleBold: "Design Agencies",
      desc: "A sublimation-first apparel production partner supporting agency-led client work with reliable manufacturing and technical execution",
    },
    {
      header: "Fulfillment Orders & Inventory",
      image: "/mockup-box.png",
      title: "Uniform & Merch ",
      titleBold: "Fulfillment Solutions",
      desc: "Inventory storage, pick-pack-ship, merch drops, and uniform restocks managed through Total Printing Solution's 3PL MGMT platform.",
    }
  ];

  const gatherProgress = Math.min(1, progress / 0.4);
  const invGather = 1 - gatherProgress;
  const expandProgress = Math.max(0, (progress - 0.5) / 0.5);

  return (
    <main>
      <header className="header">
        <Link href="/" className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <Image src="/man-logo.jpg" alt="Total Printing Solution Logo" width={isMobile ? 40 : 50} height={isMobile ? 40 : 50} style={{ objectFit: 'contain', borderRadius: '4px' }} unoptimized />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: isMobile ? '16px' : '18px', fontWeight: 900, color: '#1a1a1a', lineHeight: 1.1 }}>M.A.N</span>
            <span style={{ fontSize: isMobile ? '11px' : '13px', fontWeight: 700, color: '#555', letterSpacing: '1px' }}>Custom wear</span>
          </div>
        </Link>

        {!isMobile && (
          <>
            <nav className="nav-links">
              <Link href="#" className="nav-link">Solutions <span className="nav-dot"></span></Link>
              <Link href="#" className="nav-link">Products <span className="nav-dot"></span></Link>
              <Link href="#" className="nav-link">Industries <span className="nav-dot"></span></Link>
              <Link href="#" className="nav-link">Pricing <span className="nav-dot"></span></Link>
              <Link href="#" className="nav-link">About Us</Link>
              <Link href="#" className="nav-link">Resources <span className="nav-dot"></span></Link>
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
              <Link href="#" className="mobile-nav-link">Solutions <span className="arrow">›</span></Link>
              <Link href="#" className="mobile-nav-link">Products <span className="arrow">›</span></Link>
              <Link href="#" className="mobile-nav-link">Industries <span className="arrow">›</span></Link>
              <Link href="#" className="mobile-nav-link">Pricing <span className="arrow">›</span></Link>
              <Link href="#" className="mobile-nav-link">About Us</Link>
              <Link href="#" className="mobile-nav-link">Resources <span className="arrow">›</span></Link>
            </nav>

            <div className="mobile-menu-actions">
              <Link href="#" className="btn btn-yellow mobile-btn-full">Let's Talk</Link>
              <Link href="#" className="btn btn-dark mobile-btn-full">Start Your Order</Link>
            </div>
          </div>
        )}
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Sublimation-First<br />Apparel<br />Manufacturing</h1>
          <p className="hero-description">
            Brand-driven custom apparel programs built for exact color matching, custom color development, uniform systems, and repeatable production.
          </p>
        </div>
        <div className="hero-image-container">
          <Image
            src="/imagenewheader.png"
            alt="Hero Image"
            width={800}
            height={800}
            className="hero-image"
            priority
          />
        </div>
      </section>

      <section className="solutions-section">
        <div className="solutions-header">
          <h2>Find The Right Solution</h2>
          <p>Select the option that best matches what you're here to do.</p>
        </div>

        <div className="solutions-grid">
          {solutions.map((card, index) => (
            <div className="solution-card" key={index}>
              <div className="card-header">{card.header}</div>
              <div className="card-image" style={{ position: 'relative', width: '100%', height: '160px', backgroundColor: '#ddd' }}>
                <Image src={card.image} alt={card.titleBold} fill style={{ objectFit: 'cover' }} quality={100} unoptimized />
              </div>
              <div className="card-body">
                <h3 className="card-title">
                  {card.title}
                  <span>{card.titleBold}</span>
                  {card.titleSuffix && ` ${card.titleSuffix}`}
                </h3>
                <p className="card-desc">{card.desc}</p>
                <Link href="#" className="card-btn">Start Here</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="trusted-section">
        <div className="trusted-section-inner">

          <div className="trusted-container">
            <div className="trusted-icon">❤️</div>
            <h2 className="trusted-title">Trusted by 100+ Clients<br />in All Industries</h2>

            <div className="trusted-logos">
              <div className="marquee-track">
                {/* First Set of Logos */}
                <div className="logo-placeholder">TOMMY'S</div>
                <div className="logo-placeholder">Kroger</div>
                <div className="logo-placeholder">GET YOUR TEACH ON</div>
                <div className="logo-placeholder">SYMBIOTIKA</div>
                <div className="logo-placeholder">YANCEY CAT</div>
                <div className="logo-placeholder">KICKCHARGE</div>
                {/* Duplicated Set for Seamless Marquee */}
                <div className="logo-placeholder">TOMMY'S</div>
                <div className="logo-placeholder">Kroger</div>
                <div className="logo-placeholder">GET YOUR TEACH ON</div>
                <div className="logo-placeholder">SYMBIOTIKA</div>
                <div className="logo-placeholder">YANCEY CAT</div>
                <div className="logo-placeholder">KICKCHARGE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="missing-section-wrapper" style={{ height: '250vh', position: 'relative', backgroundColor: '#ffffff' }}>
        <div className="missing-sticky" style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          <h2
            className="missing-title-animated"
            style={{
              position: 'absolute',
              opacity: Math.max(0, 1 - progress * 5),
              transform: `translateY(${-progress * 150}px)`,
              textAlign: 'center',
              zIndex: 10,
              fontSize: '8rem',
              fontWeight: 900,
              color: '#1c1c1c',
              lineHeight: 1.1
            }}
          >
            Is This What<br />You're Missing?
          </h2>

          <div className="missing-content-stack" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            width: '100%',
            maxWidth: '1150px',
            zIndex: 5,
            padding: '0 20px',
            margin: '0 auto'
          }}>

            {/* Pill 1: Top Right */}
            <div className="animated-pill" style={{
              transform: `translate(${600 * invGather}px, ${-150 * invGather}px)`,
              width: `calc(400px + ${expandProgress} * (100% - 400px))`,
            }}>
              <div className="pill-icon-container">
                <Image src="/sec4image1.png" alt="Quality Apparel" width={80} height={80} style={{ objectFit: 'contain' }} />
              </div>
              <div className="pill-title-container">
                Quality Apparel<br />with More Options
              </div>
              <div className="pill-desc-container" style={{ opacity: expandProgress }}>
                Choose from retail-quality t-shirts, hoodies, polos, and more — with specialty inks and a wide range of fabrics, including upscale options most local print shops don't carry.
              </div>
            </div>

            {/* Pill 2: Bottom Left */}
            <div className="animated-pill" style={{
              transform: `translate(${-150 * invGather}px, ${200 * invGather}px)`,
              width: `calc(400px + ${expandProgress} * (100% - 400px))`,
            }}>
              <div className="pill-icon-container">
                <Image src="/sec4image2.png" alt="Full-Service Partner" width={80} height={80} style={{ objectFit: 'contain' }} />
              </div>
              <div className="pill-title-container">
                A True Full-<br />Service Apparel<br />Partner
              </div>
              <div className="pill-desc-container" style={{ opacity: expandProgress }}>
                Total Printing Solution does more than print t-shirts — we're your full-service apparel partner. We take care of everything from sourcing and printing to shipping, so you can focus on growing your brand.
              </div>
            </div>

            {/* Pill 3: Bottom Right */}
            <div className="animated-pill" style={{
              transform: `translate(${500 * invGather}px, ${100 * invGather}px)`,
              width: `calc(400px + ${expandProgress} * (100% - 400px))`,
            }}>
              <div className="pill-icon-container">
                <Image src="/sec4image3.png" alt="Production Growth" width={80} height={80} style={{ objectFit: 'contain' }} />
              </div>
              <div className="pill-title-container">
                Production That<br />Grows with Your<br />Brand
              </div>
              <div className="pill-desc-container" style={{ opacity: expandProgress }}>
                As your business grows, our supply chain and production systems grow with it — giving you reliable quality and fast turnaround every step of the way.
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="products-solutions-section">
        <div className="ps-container">

          {/* Products Card */}
          <div className="ps-card card-orange">
            <div className="ps-content">
              <h2>Products</h2>
              <p>Browse our selection of premium apparel, printed to<br />perfection and delivered retail-ready.</p>
              <Link href="#" className="btn-white-ps">View Products</Link>
            </div>
            <div className="ps-images ps-images-products" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
              <Image src="/mockup-product-hoodie.png" alt="Hoodie" width={380} height={440} style={{ objectFit: 'contain', objectPosition: 'bottom', transform: 'translateY(100px)' }} unoptimized />
            </div>
          </div>

          {/* Solutions Card */}
          <div className="ps-card card-dark">
            <div className="ps-content">
              <h2>Solutions</h2>
              <p>Discover our custom apparel and fulfillment solutions,<br />designed to help you scale to new heights.</p>
              <Link href="#" className="btn-white-ps">View Solutions</Link>
            </div>
            <div className="ps-images ps-images-solutions">
              <Image src="/mockup-forklift-transparent.png" alt="Forklift" width={400} height={350} className="sol-img" style={{ objectFit: 'contain' }} unoptimized />
            </div>
          </div>
        </div>
      </section>

      <section className="dominate-section">
        <div className="dominate-container">
          <div className="dominate-left">
            <h2 className="dominate-title">Dominate the<br />Market with<br />Total Printing Solution</h2>
            <p className="dominate-desc">
              Our Brand Building Process (BBP) takes you from pricing to<br />
              production with retail-level quality, service, and speed.
            </p>
            <div className="dominate-actions">
              <Link href="#" className="btn btn-yellow">Let's Talk</Link>
              <Link href="#" className="btn btn-dark">Start Your Order</Link>
            </div>
          </div>

          <div className="dominate-right">

            <div className="process-pill">
              <div className="process-icon">
                <Image src="/sec6imge1.png" alt="Step 1" width={75} height={75} style={{ objectFit: 'contain' }} />
              </div>
              <div className="process-text">
                <h3>Get Pricing & Explore Solutions</h3>
                <p>Browse our printing, design, and fulfillment options<br />with clear, upfront pricing.</p>
              </div>
            </div>

            <div className="process-pill">
              <div className="process-icon">
                <Image src="/sec6image2.png" alt="Step 2" width={75} height={75} style={{ objectFit: 'contain' }} />
              </div>
              <div className="process-text">
                <h3>Start Your Order</h3>
                <p>Send your artwork and order info. We'll confirm</p>
              </div>
            </div>

            <div className="process-pill">
              <div className="process-icon">
                <Image src="/section6image3.png" alt="Step 3" width={75} height={75} style={{ objectFit: 'contain' }} />
              </div>
              <div className="process-text">
                <h3>Make Payment & Review Proofs</h3>
                <p>Once payment is received, we'll send your pre-<br />production proofs for approval.</p>
              </div>
            </div>

            <div className="process-pill">
              <div className="process-icon">
                <Image src="/section6image4.png" alt="Step 4" width={75} height={75} style={{ objectFit: 'contain' }} />
              </div>
              <div className="process-text">
                <h3>Fulfillment & On-Time Delivery</h3>
                <p>After approval, we handle production, packing, and<br />delivery—on schedule.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 7 - Bulk T-Shirt Scroll Sequence */}
      <section ref={sec7Ref} className="sec7-wrapper" style={{ height: '400vh', position: 'relative', backgroundColor: '#ffffff', width: '100%' }}>
        <div className="sec7-sticky" style={{ position: 'sticky', top: 0, height: '100vh', width: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

          <div className="sec7-heading" style={{
            position: 'absolute',
            top: isMobile ? '2%' : '10%',
            left: '50%',
            width: '100%',
            textAlign: 'center',
            opacity: Math.max(0, 1 - sec7Progress * 4),
            transform: `translate(-50%, ${-sec7Progress * 150}px)`,
            zIndex: 10,
            padding: '0 1.5rem',
            boxSizing: 'border-box',
          }}>
            <h2 style={{ fontSize: isMobile ? '1.8rem' : '3.5rem', fontWeight: 900, color: '#1a1a1a', lineHeight: 1.2, marginBottom: isMobile ? '0.5rem' : '1rem' }}>
              We Redefine the Bulk{isMobile ? ' ' : <br />}T-Shirt Printing Experience
            </h2>
            <p style={{ fontSize: isMobile ? '0.85rem' : '1.1rem', color: '#4b5563', lineHeight: 1.5 }}>
              We've transformed the bulk printing process into{isMobile ? ' ' : <br />}
              a scalable solution that delivers next-level quality and value.
            </p>
          </div>

          <div className="sec7-scene" style={{
            position: 'absolute',
            width: '100%',
            maxWidth: '1200px',
            height: isMobile ? '75%' : '70%',
            top: isMobile ? '25%' : '30%',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>

            {/* The main polo shirt - stays in center! */}
            <div className="sec7-main-image" style={{
              position: 'absolute',
              zIndex: isMobile ? 10 : 5,
              top: isMobile ? '40%' : '50%',
              left: '50%',
              transform: isMobile ? 'translateX(-50%) translateY(-50%)' : 'translate(-50%, -50%)',
              maxWidth: isMobile ? '85vw' : 'none',
              width: isMobile ? '85vw' : 'auto',
            }}>
              <Image src="/mockup-product-polo.png" alt="Polo Shirt" width={isMobile ? 340 : 380} height={isMobile ? 420 : 480} style={{ objectFit: 'contain', width: '100%', maxWidth: isMobile ? '340px' : 'none', maxHeight: isMobile ? '60vh' : 'none', height: 'auto', filter: isMobile ? 'drop-shadow(0px 10px 30px rgba(0,0,0,0.25))' : 'none' }} unoptimized />
            </div>

            {/* Calculations for sliding progress */}
            {(() => {
              const p2Scale = Math.max(0, Math.min(1, (sec7Progress - 0.15) / 0.15)) - Math.max(0, Math.min(1, (sec7Progress - 0.45) / 0.15));
              const p3Scale = Math.max(0, Math.min(1, (sec7Progress - 0.65) / 0.15));
              const activeMobilePhase = sec7Progress < 0.10 ? 1 : sec7Progress < 0.65 ? 2 : 3;

              return (
                <>
                  {/* Phase 2: Left Images - desktop only */}
                  {!isMobile && (
                    <div className="sec7-phase2-left-images" style={{
                      position: 'absolute',
                      left: 0,
                      width: '40%',
                      height: '100%',
                      opacity: p2Scale,
                      transform: `translateX(${(1 - p2Scale) * -20}vw)`,
                      zIndex: 4,
                    }}>
                      <Image src="/mockup-cup.png" alt="Cup" width={210} height={140} style={{ position: 'absolute', top: '2%', left: '35%', objectFit: 'contain', borderRadius: '12px' }} unoptimized />
                      <Image src="/mockup-bags.png" alt="Bags" width={230} height={160} style={{ position: 'absolute', top: '38%', left: '5%', objectFit: 'contain', borderRadius: '12px' }} unoptimized />
                      <Image src="/mockup-group.jpg" alt="Group" width={150} height={230} style={{ position: 'absolute', top: '72%', left: '45%', objectFit: 'cover', borderRadius: '12px' }} unoptimized />
                    </div>
                  )}

                  {isMobile && (<>
                    {/* Top center image */}
                    <Image src="/mockup-cup.png" alt="Cup" width={140} height={110} style={{
                      position: 'absolute', top: '-40%', left: '50%',
                      width: '35vw', maxWidth: '140px', height: 'auto',
                      transform: activeMobilePhase === 2 ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-20px)',
                      objectFit: 'contain', borderRadius: '16px',
                      boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
                      opacity: activeMobilePhase === 2 ? 1 : 0, zIndex: 4,
                      willChange: 'transform, opacity', transition: 'all 0.5s ease-out', pointerEvents: activeMobilePhase === 2 ? 'auto' : 'none'
                    }} unoptimized />
                    {/* Left image */}
                    <Image src="/mockup-bags.png" alt="Bags" width={110} height={130} style={{
                      position: 'absolute', top: '-15%', left: '0%',
                      width: '30vw', maxWidth: '120px', height: 'auto',
                      transform: activeMobilePhase === 2 ? 'translateX(0) translateY(0)' : 'translateX(-20px) translateY(0)',
                      objectFit: 'contain', borderRadius: '16px',
                      boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
                      opacity: activeMobilePhase === 2 ? 1 : 0, zIndex: 4,
                      willChange: 'transform, opacity', transition: 'all 0.5s ease-out', pointerEvents: activeMobilePhase === 2 ? 'auto' : 'none'
                    }} unoptimized />
                    {/* Right image */}
                    <Image src="/mockup-group.jpg" alt="Group" width={120} height={120} style={{
                      position: 'absolute', top: '-15%', right: '0%',
                      width: '30vw', maxWidth: '120px', height: 'auto',
                      transform: activeMobilePhase === 2 ? 'translateX(0) translateY(0)' : 'translateX(20px) translateY(0)',
                      objectFit: 'cover', borderRadius: '16px',
                      boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
                      opacity: activeMobilePhase === 2 ? 1 : 0, zIndex: 4,
                      willChange: 'transform, opacity', transition: 'all 0.5s ease-out', pointerEvents: activeMobilePhase === 2 ? 'auto' : 'none'
                    }} unoptimized />
                  </>)}

                  {/* Unified Mobile orange card - Box stays same, text changes */}
                  {isMobile && (
                    <div style={{
                      position: 'absolute',
                      bottom: '-10%',
                      left: '4%',
                      width: '92%',
                      backgroundColor: '#f18c00',
                      borderRadius: '24px',
                      padding: '6rem 1.25rem 1.5rem',
                      zIndex: 7,
                      opacity: activeMobilePhase >= 2 ? 1 : 0,
                      color: '#fff',
                      textAlign: 'center',
                      transform: activeMobilePhase >= 2 ? 'translateY(0)' : 'translateY(40px)',
                      willChange: 'transform, opacity',
                      transition: 'all 0.8s ease-out',
                      pointerEvents: activeMobilePhase >= 2 ? 'auto' : 'none',
                      minHeight: '280px',
                    }}>
                      {/* Phase 2 Text */}
                      <div style={{
                        position: 'absolute',
                        left: '1.25rem',
                        right: '1.25rem',
                        opacity: activeMobilePhase === 2 ? 1 : 0,
                        transform: activeMobilePhase === 2 ? 'translateX(0)' : 'translateX(-20px)',
                        transition: 'all 0.8s ease-out',
                        pointerEvents: activeMobilePhase === 2 ? 'auto' : 'none'
                      }}>
                        <h3 style={{ fontSize: 'clamp(1.1rem, 5vw, 1.3rem)', fontWeight: 800, marginBottom: '0.75rem', wordBreak: 'break-word' }}>End-to-End Oversight</h3>
                        <p style={{ fontSize: 'clamp(0.8rem, 4vw, 0.95rem)', lineHeight: 1.6, opacity: 0.95 }}>
                          Say goodbye to the stress of managing multiple vendors for materials, printing, and fulfillment. With Total Printing Solution, you have one point of contact (us!) overseeing every step of the process. The result? Consistent quality and efficient operations at every step.
                        </p>
                      </div>

                      {/* Phase 3 Text */}
                      <div style={{
                        position: 'absolute',
                        left: '1.25rem',
                        right: '1.25rem',
                        opacity: activeMobilePhase === 3 ? 1 : 0,
                        transform: activeMobilePhase === 3 ? 'translateX(0)' : 'translateX(20px)',
                        transition: 'all 0.8s ease-out',
                        pointerEvents: activeMobilePhase === 3 ? 'auto' : 'none'
                      }}>
                        <h3 style={{ fontSize: 'clamp(1.1rem, 5vw, 1.3rem)', fontWeight: 800, marginBottom: '0.75rem', wordBreak: 'break-word' }}>Timely Delivery</h3>
                        <p style={{ fontSize: 'clamp(0.8rem, 4vw, 0.95rem)', lineHeight: 1.6, opacity: 0.95 }}>
                          Brands that break promises don't last long in this industry. That's why we guarantee on-time delivery for all orders, big or small. Our nationwide supply chain offers lightning-fast fulfillment to keep your customers happy.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Phase 2: Right Orange Box - desktop only */}
                  {!isMobile && (
                    <div className="sec7-phase2-right-box" style={{
                      position: 'absolute',
                      left: '50%',
                      width: `${p2Scale * 45}%`,
                      height: '280px',
                      backgroundColor: '#f18c00',
                      borderTopRightRadius: '80px',
                      borderBottomRightRadius: '80px',
                      zIndex: 3,
                      display: 'flex',
                      alignItems: 'center',
                      overflow: 'hidden',
                    }}>
                      <div style={{ width: '560px', minWidth: '560px', paddingLeft: '220px', paddingRight: '40px', color: '#ffffff', boxSizing: 'border-box' }}>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.8rem' }}>End-to-End Oversight</h3>
                        <p style={{ fontSize: '0.95rem', lineHeight: 1.5, opacity: 0.95 }}>
                          Say goodbye to the stress of managing multiple vendors for materials, printing, and fulfillment. With Total Printing Solution, you have one point of contact (us!) overseeing every step of the process. The result? Consistent quality and efficient operations at every step.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Phase 3: Left Orange Box - desktop only */}
                  {!isMobile && (
                    <div className="sec7-phase3-left-box" style={{
                      position: 'absolute',
                      right: '50%',
                      width: `${p3Scale * 45}%`,
                      height: '280px',
                      backgroundColor: '#f18c00',
                      borderTopLeftRadius: '80px',
                      borderBottomLeftRadius: '80px',
                      zIndex: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      overflow: 'hidden',
                    }}>
                      <div style={{ width: '560px', minWidth: '560px', paddingRight: '220px', paddingLeft: '40px', color: '#ffffff', textAlign: 'right', boxSizing: 'border-box' }}>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.8rem' }}>Timely Delivery</h3>
                        <p style={{ fontSize: '0.95rem', lineHeight: 1.5, opacity: 0.95 }}>
                          Brands that break promises don't last long in this industry. That's why we guarantee on-time delivery for all orders, big or small. Our nationwide supply chain offers lightning-fast fulfillment to keep your customers happy.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Phase 3: Mobile - 3 floating images around the shirt */}
                  {isMobile && (<>
                    {/* Top center image */}
                    <Image src="/mockup-hat.png" alt="Hat" width={140} height={110} style={{
                      position: 'absolute', top: '-40%', left: '50%',
                      width: '35vw', maxWidth: '140px', height: 'auto',
                      transform: activeMobilePhase === 3 ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-20px)',
                      objectFit: 'contain', borderRadius: '16px',
                      boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
                      opacity: activeMobilePhase === 3 ? 1 : 0, zIndex: 4,
                      willChange: 'transform, opacity', transition: 'all 0.5s ease-out', pointerEvents: activeMobilePhase === 3 ? 'auto' : 'none'
                    }} unoptimized />
                    {/* Left image */}
                    <Image src="/mockup-man-box.jpg" alt="Man Box" width={110} height={130} style={{
                      position: 'absolute', top: '-15%', left: '0%',
                      width: '30vw', maxWidth: '120px', height: 'auto',
                      transform: activeMobilePhase === 3 ? 'translateX(0) translateY(0)' : 'translateX(-20px) translateY(0)',
                      objectFit: 'cover', borderRadius: '16px',
                      boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
                      opacity: activeMobilePhase === 3 ? 1 : 0, zIndex: 4,
                      willChange: 'transform, opacity', transition: 'all 0.5s ease-out', pointerEvents: activeMobilePhase === 3 ? 'auto' : 'none'
                    }} unoptimized />
                    {/* Right image */}
                    <Image src="/mockup-product-hoodie.png" alt="Hoodie" width={120} height={120} style={{
                      position: 'absolute', top: '-15%', right: '0%',
                      width: '30vw', maxWidth: '120px', height: 'auto',
                      transform: activeMobilePhase === 3 ? 'translateX(0) translateY(0)' : 'translateX(20px) translateY(0)',
                      objectFit: 'contain', borderRadius: '16px',
                      boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
                      opacity: activeMobilePhase === 3 ? 1 : 0, zIndex: 4,
                      willChange: 'transform, opacity', transition: 'all 0.5s ease-out', pointerEvents: activeMobilePhase === 3 ? 'auto' : 'none'
                    }} unoptimized />
                  </>)}



                  {/* Phase 3: Right Images - desktop only */}
                  {!isMobile && (
                    <div className="sec7-phase3-right-images" style={{
                      position: 'absolute',
                      right: 0,
                      width: '40%',
                      height: '100%',
                      opacity: p3Scale,
                      transform: `translateY(${(1 - p3Scale) * 20}vh)`,
                      zIndex: 4,
                    }}>
                      <Image src="/mockup-hat.png" alt="Hat Mockup" width={210} height={140} style={{ position: 'absolute', top: '2%', right: '35%', objectFit: 'contain', borderRadius: '12px' }} unoptimized />
                      <Image src="/mockup-man-box.jpg" alt="Man Box Mockup" width={230} height={160} style={{ position: 'absolute', top: '38%', right: '5%', objectFit: 'cover', borderRadius: '12px' }} unoptimized />
                      <Image src="/mockup-product-hoodie.png" alt="Hoodie Mockup" width={150} height={230} style={{ position: 'absolute', top: '72%', right: '45%', objectFit: 'contain', borderRadius: '12px' }} unoptimized />
                    </div>
                  )}
                </>
              );
            })()}

          </div>
        </div>
      </section>

      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
