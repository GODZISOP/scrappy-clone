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
      image: "/image1.png",
      title: "Uniform Systems for ",
      titleBold: "Growing Teams",
      desc: "Sublimated uniforms, polos, hats, and apparel systems built for consistency across teams, locations, and repeat orders",
    },
    {
      header: "Print Merch or Apparel",
      image: "/image2.png",
      title: "Premium Screen Printing & ",
      titleBold: "Merch Programs",
      desc: "High-quality screen printing, oversized graphics, specialty inks, and merch programs designed for brands, events, and seasonal drops.",
    },
    {
      header: "Scrappy Color System",
      image: "/image3.png",
      title: "",
      titleBold: "Pantone-Matched ",
      titleSuffix: "Garments",
      desc: "Premium weight garments with controlled dye processes and specialty washes designed to match your brand's Pantone colors. Built for scalable collections",
    },
    {
      header: "Partner as a Design Agency",
      image: "/image4.png",
      title: "Production Systems for ",
      titleBold: "Design Agencies",
      desc: "A sublimation-first apparel production partner supporting agency-led client work with reliable manufacturing and technical execution",
    },
    {
      header: "Fulfillment Orders & Inventory",
      image: "/image5.png",
      title: "Uniform & Merch ",
      titleBold: "Fulfillment Solutions",
      desc: "Inventory storage, pick-pack-ship, merch drops, and uniform restocks managed through Scrappy's 3PL MGMT platform.",
    }
  ];

  const gatherProgress = Math.min(1, progress / 0.4);
  const invGather = 1 - gatherProgress;
  const expandProgress = Math.max(0, (progress - 0.5) / 0.5);

  return (
    <main>
      <header className="header">
        <Link href="/" className="logo-container">
          <Image src="/logo-transparent.png" alt="Logo" width={40} height={45} style={{ objectFit: 'contain' }} />
          <div className="logo-text-wrapper">
            <span className="logo-main-text">SCRAPPY</span>
            <span className="logo-sub-text">APPAREL COMPANY</span>
          </div>
        </Link>
        
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
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Sublimation-First<br/>Apparel<br/>Manufacturing</h1>
          <p className="hero-description">
            Brand-driven custom apparel programs built for exact color matching, custom color development, uniform systems, and repeatable production.
          </p>
        </div>
        <div className="hero-image-container">
          <Image 
            src="/hero-transparent.png" 
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
                <Image src={card.image} alt={card.titleBold} fill style={{ objectFit: 'cover' }} />
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
          <div className="trusted-bear-wrapper">
            <Image src="/thirdsec.png" alt="Scrappy Mascot" width={300} height={350} className="trusted-bear" style={{ objectFit: 'contain', objectPosition: 'bottom' }} />
          </div>
          <div className="trusted-container">
            <div className="trusted-icon">❤️</div>
            <h2 className="trusted-title">Trusted by 100+ Clients<br/>in All Industries</h2>
            
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
            Is This What<br/>You're Missing?
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
                Quality Apparel<br/>with More Options
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
                A True Full-<br/>Service Apparel<br/>Partner
              </div>
              <div className="pill-desc-container" style={{ opacity: expandProgress }}>
                Scrappy does more than print t-shirts — we're your full-service apparel partner. We take care of everything from sourcing and printing to shipping, so you can focus on growing your brand.
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
                Production That<br/>Grows with Your<br/>Brand
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
              <p>Browse our selection of premium apparel, printed to<br/>perfection and delivered retail-ready.</p>
              <Link href="#" className="btn-white-ps">View Products</Link>
            </div>
            <div className="ps-images ps-images-products">
              {/* Using absolute positioning in CSS for these overlapping items */}
              <Image src="/Sec5image1.png" alt="Apparel 1" width={250} height={300} className="prod-img img-center" style={{ objectFit: 'contain' }} />
              <Image src="/sec5image2.png" alt="Apparel 2" width={220} height={280} className="prod-img img-left" style={{ objectFit: 'contain' }} />
              <Image src="/sec5image3.png" alt="Apparel 3" width={220} height={280} className="prod-img img-right" style={{ objectFit: 'contain' }} />
              <Image src="/sec5image4.png" alt="Apparel Hat" width={120} height={100} className="prod-img img-hat" style={{ objectFit: 'contain' }} />
            </div>
          </div>

          {/* Solutions Card */}
          <div className="ps-card card-dark">
            <div className="ps-content">
              <h2>Solutions</h2>
              <p>Discover our custom apparel and fulfillment solutions,<br/>designed to help you scale to new heights.</p>
              <Link href="#" className="btn-white-ps">View Solutions</Link>
            </div>
            <div className="ps-images ps-images-solutions">
              <Image src="/sec5image1box2.png" alt="Forklift" width={400} height={350} className="sol-img" style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="dominate-section">
        <div className="dominate-container">
          <div className="dominate-left">
            <h2 className="dominate-title">Dominate the<br/>Market with<br/>Scrappy Apparel</h2>
            <p className="dominate-desc">
              Our Brand Building Process (BBP) takes you from pricing to<br/>
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
                <p>Browse our printing, design, and fulfillment options<br/>with clear, upfront pricing.</p>
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
                <p>Once payment is received, we'll send your pre-<br/>production proofs for approval.</p>
              </div>
            </div>
            
            <div className="process-pill">
              <div className="process-icon">
                <Image src="/section6image4.png" alt="Step 4" width={75} height={75} style={{ objectFit: 'contain' }} />
              </div>
              <div className="process-text">
                <h3>Fulfillment & On-Time Delivery</h3>
                <p>After approval, we handle production, packing, and<br/>delivery—on schedule.</p>
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
            top: '10%',
            left: '50%',
            width: '100%',
            textAlign: 'center',
            opacity: Math.max(0, 1 - sec7Progress * 4), // fades out very early
            transform: `translate(-50%, ${-sec7Progress * 150}px)`,
            zIndex: 10,
          }}>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: '#1a1a1a', lineHeight: 1.1, marginBottom: '1rem' }}>
              We Redefine the Bulk<br/>T-Shirt Printing Experience
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: 1.5 }}>
              We've transformed the bulk printing process into<br/>
              a scalable solution that delivers next-level quality and value.
            </p>
          </div>

          <div className="sec7-scene" style={{
            position: 'absolute',
            width: '100%',
            maxWidth: '1200px',
            height: '70%', // leaves top 30% for heading
            top: '30%',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            
            {/* The main polo shirt - stays in center! */}
            <div className="sec7-main-image" style={{
              position: 'absolute',
              zIndex: 5,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}>
              <Image src="/sec7mainimage1.png" alt="Polo Shirt" width={380} height={480} style={{ objectFit: 'contain' }} />
            </div>

            {/* Calculations for sliding progress */}
            {(() => {
              const p2Scale = Math.max(0, Math.min(1, (sec7Progress - 0.15) / 0.15)) - Math.max(0, Math.min(1, (sec7Progress - 0.45) / 0.15));
              const p3Scale = Math.max(0, Math.min(1, (sec7Progress - 0.65) / 0.15));

              return (
                <>
                  {/* Phase 2: Left Images */}
                  <div className="sec7-phase2-left-images" style={{
                    position: 'absolute',
                    left: 0,
                    width: '40%',
                    height: '100%',
                    opacity: p2Scale,
                    // Moves to the left as it fades out/in
                    transform: `translateX(${(1 - p2Scale) * -20}vw)`,
                    zIndex: 4,
                  }}>
                    <Image src="/image5.png" alt="Hoodie" width={240} height={160} style={{ position: 'absolute', top: '5%', left: '35%', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} />
                    <Image src="/image1.png" alt="T-Shirt" width={260} height={180} style={{ position: 'absolute', top: '35%', left: '5%', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} />
                    <Image src="/image2.png" alt="Guy with backpack" width={180} height={260} style={{ position: 'absolute', top: '65%', left: '45%', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} />
                  </div>

                  {/* Phase 2: Right Orange Box (Slides out from behind shirt to the right) */}
                  <div className="sec7-phase2-right-box" style={{
                    position: 'absolute',
                    left: '50%', // Start from center behind the shirt
                    width: `${p2Scale * 45}%`, // Expands to the right
                    height: '280px',
                    backgroundColor: '#f18c00',
                    borderTopRightRadius: '80px',
                    borderBottomRightRadius: '80px',
                    zIndex: 3,
                    display: 'flex',
                    alignItems: 'center',
                    overflow: 'hidden',
                  }}>
                    {/* The content inside needs a fixed min-width so it doesn't squish while expanding */}
                    <div style={{ width: '560px', minWidth: '560px', paddingLeft: '220px', paddingRight: '40px', color: '#ffffff', boxSizing: 'border-box' }}>
                      <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.8rem' }}>End-to-End Oversight</h3>
                      <p style={{ fontSize: '0.95rem', lineHeight: 1.5, opacity: 0.95 }}>
                        Say goodbye to the stress of managing multiple vendors for materials, printing, and fulfillment. With Scrappy, you have one point of contact (us!) overseeing every step of the process. The result? Consistent quality and efficient operations at every step.
                      </p>
                    </div>
                  </div>

                  {/* Phase 3: Left Orange Box (Slides out from behind shirt to the left) */}
                  <div className="sec7-phase3-left-box" style={{
                    position: 'absolute',
                    right: '50%', // Start from center behind the shirt
                    width: `${p3Scale * 45}%`, // Expands to the left
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

                  {/* Phase 3: Right Images */}
                  <div className="sec7-phase3-right-images" style={{
                    position: 'absolute',
                    right: 0,
                    width: '40%',
                    height: '100%',
                    opacity: p3Scale,
                    // Comes up from the bottom!
                    transform: `translateY(${(1 - p3Scale) * 20}vh)`,
                    zIndex: 4,
                  }}>
                    <Image src="/image3.png" alt="Girl in hoodie" width={240} height={160} style={{ position: 'absolute', top: '5%', right: '35%', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} />
                    <Image src="/image4.png" alt="T-Shirt on rock" width={260} height={180} style={{ position: 'absolute', top: '35%', right: '5%', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} />
                    <Image src="/thirdsec.png" alt="Guy holding shirt" width={180} height={260} style={{ position: 'absolute', top: '65%', right: '45%', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} />
                  </div>
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
