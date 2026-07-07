"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset animation when out of view
        }
      },
      { threshold: 0.4 } // Increased threshold so it only triggers when actually scrolled into
    );

    // Wait for the page layout to settle (images loading etc.) before observing
    const timer = setTimeout(() => {
      if (currentRef) {
        observer.observe(currentRef);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section ref={sectionRef} className="cta-wrapper">
      <style>{`
        .cta-wrapper {
          padding: 0 20px 40px 20px;
          background-color: #ffffff; 
          position: relative;
          z-index: 10;
        }
        .cta-container {
          position: relative;
          min-height: 700px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 10; 
        }
        /* Black background expanding from center */
        .cta-container::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: #1a1a1a;
          border-radius: 40px;
          z-index: -1;
          transform: scale(0.3); /* Start small behind the text */
          opacity: 0;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease;
        }
        .cta-container.visible::before {
          transform: scale(1);
          opacity: 1;
        }
        .cta-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 800px;
          padding: 0 20px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
        }
        .cta-content.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .cta-heading {
          font-size: 3.5rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 40px;
        }
        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
        }
        .cta-btn-primary, .cta-btn-secondary {
          padding: 15px 35px;
          border-radius: 8px;
          font-weight: 800;
          border: none;
          cursor: pointer;
          font-size: 1.1rem;
          transition: transform 0.2s ease;
        }
        .cta-btn-primary {
          background-color: #f18c00;
          color: #1a1a1a;
        }
        .cta-btn-secondary {
          background-color: #ffffff;
          color: #1a1a1a;
        }
        .cta-btn-primary:hover, .cta-btn-secondary:hover {
          transform: translateY(-2px);
        }
        
        /* Floating images expanding from center */
        .floating-img {
          position: absolute;
          object-fit: cover;
          box-shadow: 0 20px 50px rgba(0,0,0,0.6);
          z-index: 1;
          opacity: 0;
          transition-property: transform, opacity;
          transition-duration: 1s, 0.8s;
          transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1), ease;
        }
        .floating-img.visible {
          transform: translate(0, 0) !important;
          opacity: 1;
        }
        .img-top-left {
          top: 15%; left: 15%; border-radius: 20px;
          transform: translate(150px, 150px);
          transition-delay: 0.6s, 0.6s;
        }
        .img-mid-left {
          top: 45%; left: 10%; border-radius: 50%;
          transform: translate(200px, 0);
          transition-delay: 0.7s, 0.7s;
        }
        .img-bot-left {
          bottom: 10%; left: 25%; border-radius: 50%;
          transform: translate(100px, -150px);
          transition-delay: 0.8s, 0.8s;
        }
        .img-top-right {
          top: 15%; right: 15%; border-radius: 50%;
          transform: translate(-150px, 150px);
          transition-delay: 0.7s, 0.7s;
        }
        .img-mid-right {
          top: 45%; right: 10%; border-radius: 60px;
          transform: translate(-200px, 0);
          transition-delay: 0.8s, 0.8s;
        }
        .img-bot-right {
          bottom: 10%; right: 25%; border-radius: 50%;
          transform: translate(-100px, -150px);
          transition-delay: 0.9s, 0.9s;
        }
        .mascot-peek-container {
          position: absolute;
          top: calc(100% - 80px);
          right: 15%;
          zIndex: 1;
          pointerEvents: none;
          opacity: 0;
          transform: translateY(-50px);
          transition-property: opacity, transform;
          transition-duration: 0.5s, 0.8s;
          transition-timing-function: ease, cubic-bezier(0.34, 1.56, 0.64, 1);
          transition-delay: 1.2s, 1.2s;
        }
        .mascot-peek-container.visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (max-width: 768px) {
          .cta-heading { font-size: 2.5rem; }
          .floating-img { display: none; }
        }
      `}</style>
      <div className={`cta-container ${isVisible ? 'visible' : ''}`}>
        {/* Floating Images */}
        <Image src="/image5.png" alt="Custom apparel" width={200} height={130} className={`floating-img img-top-left ${isVisible ? 'visible' : ''}`} />
        <Image src="/image1.png" alt="Custom apparel" width={180} height={180} className={`floating-img img-mid-left ${isVisible ? 'visible' : ''}`} />
        <Image src="/image2.png" alt="Custom apparel" width={150} height={150} className={`floating-img img-bot-left ${isVisible ? 'visible' : ''}`} />
        
        <Image src="/image3.png" alt="Custom apparel" width={160} height={160} className={`floating-img img-top-right ${isVisible ? 'visible' : ''}`} />
        <Image src="/image4.png" alt="Custom apparel" width={220} height={140} className={`floating-img img-mid-right ${isVisible ? 'visible' : ''}`} />
        <Image src="/thirdsec.png" alt="Custom apparel" width={170} height={170} className={`floating-img img-bot-right ${isVisible ? 'visible' : ''}`} />

        <div className={`cta-content ${isVisible ? 'visible' : ''}`}>
          <h2 className="cta-heading">
            Define your style with<br/>
            custom apparel created<br/>
            exclusively for you.
          </h2>
          <div className="cta-buttons">
            <button className="cta-btn-primary">Let&apos;s Talk</button>
            <button className="cta-btn-secondary">Start Your Order</button>
          </div>
        </div>
      </div>
      
      {/* Upside-down mascot peeking from the bottom */}
      <div className={`mascot-peek-container ${isVisible ? 'visible' : ''}`} style={{
        position: 'absolute',
        top: 'calc(100% - 80px)', 
        right: '15%',
        zIndex: 1, 
        pointerEvents: 'none'
      }}>
        <Image 
          src="/mascot-peek-custom.png" 
          alt="Mascot peeking" 
          width={250} 
          height={250} 
          style={{ objectFit: 'contain' }}
        />
      </div>
    </section>
  );
}
