"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ServicesSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entry animation
    requestAnimationFrame(() => {
      setIsLoaded(true);
    });
    let animationFrameId: number;
    
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const maxScroll = rect.height - windowHeight;
      const scrolled = -rect.top;
      
      let progress = 0;
      if (scrolled > maxScroll) {
        progress = 1;
      } else if (scrolled > 0) {
        progress = scrolled / maxScroll;
      }
      
      // Use requestAnimationFrame for buttery smooth state updates
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setScrollProgress(progress);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const services = [
    { 
      id: 1, title: "Vinyl Lettering", 
      desc: "Durable, high-quality vinyl applications perfect for storefront signage, custom vehicle wraps, and personalized apparel.", 
      tags: ["Signage", "Decals", "T-shirts", "Car Wraps"], 
      bg: "#fef08a", color: "#111111", icon: "🔤" 
    },
    { 
      id: 2, title: "Embroidery", 
      desc: "Professional and intricate thread embroidery giving a premium, long-lasting finish to your corporate apparel and headwear.", 
      tags: ["T-shirts", "Hats", "Jackets", "Accessories"], 
      bg: "#111111", color: "#ffffff", icon: "🧵" 
    },
    { 
      id: 3, title: "Consumer Products", 
      desc: "Essential branded merchandise and everyday business necessities custom-tailored to fit all your daily operational needs.", 
      tags: ["Business Necessities", "Custom Items"], 
      bg: "#fef08a", color: "#111111", icon: "📦" 
    },
    { 
      id: 4, title: "Promo Materials", 
      desc: "Eye-catching, customizable specialty items designed specifically for your marketing campaigns and advertising efforts.", 
      tags: ["Marketing", "Advertising", "Specialty Items"], 
      bg: "#111111", color: "#ffffff", icon: "📣" 
    },
    { 
      id: 5, title: "Digital Printing", 
      desc: "Vibrant, high-resolution full-color printing for everything from massive lawn signs to detailed brochures and tickets.", 
      tags: ["Stickers", "Lawn Signs", "Postcards", "Event Tickets", "Posters", "Brochures", "Labels", "Calendars", "Gift Cards", "Menus", "Catalogs", "Canvas Prints", "Hangtags", "Flyers"], 
      bg: "#fef08a", color: "#111111", icon: "🖨️" 
    },
    { 
      id: 6, title: "Design Services", 
      desc: "Expert in-house graphic design bringing your ideas to life through custom logos, 3D designs, and professional layouts.", 
      tags: ["Logos", "3D Design", "Graphic Design", "Animations", "Illustrations", "Layouts", "Canvas Repair"], 
      bg: "#111111", color: "#ffffff", icon: "🎨" 
    },
  ];

  return (
    <section ref={containerRef} style={{ height: '300vh', position: 'relative', backgroundColor: '#ffffff' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 20px' }}>
        
        {/* Headline */}
        <div style={{ 
          textAlign: 'center', 
          maxWidth: '900px', 
          marginBottom: '10px', // Very small margin
          marginTop: '10px', 
          transform: `translateY(${isLoaded ? 0 : 20}px)`, // Removed negative translation so it stays on screen
          opacity: isLoaded ? 1 : 0,
          transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
          willChange: 'transform, opacity'
        }}>
          {(() => {
            const op1 = 0.2 + 0.8 * Math.min(Math.max(scrollProgress / 0.1, 0), 1);
            const op2 = 0.2 + 0.8 * Math.min(Math.max((scrollProgress - 0.1) / 0.1, 0), 1);
            const op3 = 0.2 + 0.8 * Math.min(Math.max((scrollProgress - 0.2) / 0.1, 0), 1);
            
            return (
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 800, color: '#111', lineHeight: 1.2, letterSpacing: '-1px' }}>
                <span style={{ display: 'block', opacity: op1, transition: 'opacity 0.1s' }}>
                  We're revolutionizing <span style={{ backgroundColor: '#fef08a', padding: '0 10px', borderRadius: '12px', whiteSpace: 'nowrap' }}>custom printing</span>
                </span>
                <span style={{ display: 'block', opacity: op2, transition: 'opacity 0.1s' }}>
                  delivery by bringing expertise <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#111', color: '#fff', borderRadius: '50%', fontSize: '1.2rem', verticalAlign: 'middle', margin: '0 8px', transform: 'translateY(-4px)' }}>🎨</span>
                </span>
                <span style={{ display: 'block', opacity: op3, transition: 'opacity 0.1s' }}>
                  to your doorstep.
                </span>
              </h2>
            );
          })()}
        </div>

        {/* Cards Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '16px', 
          width: '100%', 
          maxWidth: '1200px'
        }}>
          {services.map((service, index) => {
            // Stagger animation based on row and column
            const rowIndex = Math.floor(index / 3);
            const colIndex = index % 3;
            const threshold = 0.15 + (rowIndex * 0.2) + (colIndex * 0.08);
            const rawProgress = (scrollProgress - threshold) / 0.25;
            const cardProgress = Math.min(Math.max(rawProgress, 0), 1);
            
            // Smooth easing function for buttery effect (ease-out cubic)
            const easeOut = 1 - Math.pow(1 - cardProgress, 3);
            
            const translateY = 200 * (1 - easeOut);
            const opacity = easeOut;
            const scale = 0.9 + (0.1 * easeOut);

            // Internal staggers for text inside cards - using time-based CSS transitions instead of scroll sync
            const isVisible = cardProgress > 0.1;
            
            const textStyle1 = {
              opacity: isVisible ? 1 : 0,
              transform: `translateY(${isVisible ? 0 : 20}px)`,
              transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
            };
            const textStyle2 = {
              opacity: isVisible ? 1 : 0,
              transform: `translateY(${isVisible ? 0 : 20}px)`,
              transition: 'opacity 0.6s ease-out 0.25s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.25s'
            };
            const textStyle3 = {
              opacity: isVisible ? 1 : 0,
              transform: `translateY(${isVisible ? 0 : 20}px)`,
              transition: 'opacity 0.6s ease-out 0.4s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s'
            };

            return (
              <div key={service.id} style={{
                position: 'relative',
                backgroundColor: service.bg || '#fff',
                color: service.color || '#fff',
                borderRadius: '24px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                transform: `translateY(${translateY}px) scale(${scale})`,
                opacity: opacity,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                willChange: 'transform, opacity',
                overflow: 'hidden',
                minHeight: '260px',
                height: '100%'
              }}>
                <div style={{ padding: '20px 15px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                  <div style={{ 
                    fontSize: '1.2rem', 
                    width: '36px', height: '36px', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(0,0,0,0.05)', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '20px',
                    ...textStyle1
                  }}>
                    {service.icon}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '6px', ...textStyle2 }}>{service.title}</h3>
                    <p style={{ fontSize: '0.85rem', fontWeight: 500, lineHeight: 1.3, ...textStyle2 }}>{service.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '10px', ...textStyle3 }}>
                      {service.tags.map(tag => (
                        <span key={tag} style={{ 
                          fontSize: '0.6rem', 
                          padding: '2px 6px', 
                          borderRadius: '8px', 
                          backgroundColor: service.bg === '#111111' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                          fontWeight: 600,
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  );
}
