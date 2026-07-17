"use client";
import { useEffect, useRef, useState } from "react";

export default function StatsGraphSection() {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        const maxScroll = rect.height - windowHeight; 
        const scrolled = -rect.top;
        
        let p = 0;
        if (scrolled < 0) p = 0;
        else if (scrolled > maxScroll) p = 1;
        else p = scrolled / maxScroll;
        
        setProgress(p);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const stats = [
    { label: "Faster delivery times by", value: "32%", height: "60%" },
    { label: "Reduced production costs by", value: "40%", height: "100%" },
    { label: "Increased bulk order savings by", value: "22%", height: "45%" },
    { label: "Improved brand recognition by", value: "18%", height: "35%" },
  ];

  const clients = ["Local Businesses", "Schools & Teams", "Event Organizers", "Corporate Brands", "Retail Shops"];

  // Helper function to map a global progress (0-1) to a specific staggered range
  const mapProgress = (globalProgress: number, start: number, end: number) => {
    const p = (globalProgress - start) / (end - start);
    return Math.min(Math.max(p, 0), 1);
  };

  const titleProgress = mapProgress(progress, 0.0, 0.4);
  const subtitleProgress = mapProgress(progress, 0.1, 0.5);
  const tagsProgress = mapProgress(progress, 0.2, 0.6);
  const linkProgress = mapProgress(progress, 0.3, 0.7);

  return (
    <section ref={sectionRef} style={{ height: '250vh', position: 'relative', backgroundColor: '#111111' }}>
      <div style={{ 
        position: 'sticky', 
        top: 0, 
        height: '100vh', 
        overflow: 'hidden',
        color: '#ffffff', 
        padding: '0 5%',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '60px',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: 'sans-serif'
      }}>
      {/* Left Content */}
      <div style={{ flex: '1 1 400px', maxWidth: '500px', marginBottom: '20px' }}>
        <h2 style={{ 
          fontSize: 'clamp(3rem, 6vw, 4.5rem)', 
          fontWeight: 800, 
          letterSpacing: '-0.04em',
          lineHeight: 1.0,
          marginBottom: '40px',
          opacity: titleProgress,
          transform: `translateY(${30 * (1 - titleProgress)}px)`,
          willChange: 'transform, opacity'
        }}>
          Proven<br/>Results
        </h2>
        
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#a0a0a0', 
          marginBottom: '20px',
          opacity: subtitleProgress,
          transform: `translateY(${20 * (1 - subtitleProgress)}px)`,
          willChange: 'transform, opacity'
        }}>
          Trusted by top-tier industries & partners:
        </p>
        
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '12px',
          opacity: tagsProgress,
          transform: `translateY(${20 * (1 - tagsProgress)}px)`,
          willChange: 'transform, opacity'
        }}>
          {clients.map((client, i) => (
            <span key={i} style={{
              padding: '8px 16px',
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: 500,
              color: '#d1d5db'
            }}>
              {client}
            </span>
          ))}
        </div>
        
        <div style={{ 
          marginTop: '60px', 
          fontSize: '1.5rem', 
          fontWeight: 700, 
          display: 'flex', 
          alignItems: 'center', 
          gap: '10px',
          opacity: linkProgress,
          transform: `translateY(${20 * (1 - linkProgress)}px)`,
          willChange: 'transform, opacity'
        }}>
          See The Impact <span style={{ color: '#fef08a' }}>→</span>
        </div>
      </div>

      {/* Right Content - Graph */}
      <div style={{ 
        flex: '1 1 500px', 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: '400px',
        position: 'relative'
      }}>
        {stats.map((stat, i) => {
          // Stagger each bar's animation based on its index
          const barStart = 0.3 + (i * 0.1);
          const barEnd = 0.7 + (i * 0.1);
          const barProgress = mapProgress(progress, barStart, barEnd);
          
          return (
            <div key={i} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              width: '20%',
              height: '100%',
              justifyContent: 'flex-end'
            }}>
              {/* Text above bar */}
              <div style={{ 
                textAlign: 'center', 
                marginBottom: '16px',
                opacity: barProgress,
                transform: `translateY(${20 * (1 - barProgress)}px)`,
                willChange: 'transform, opacity'
              }}>
                <div style={{ 
                  fontSize: '0.8rem', 
                  color: '#a0a0a0', 
                  marginBottom: '4px', 
                  lineHeight: 1.2,
                  maxWidth: '120px'
                }}>
                  {stat.label}
                </div>
                <div style={{ 
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)', 
                  fontWeight: 800, 
                  color: '#ffffff',
                  letterSpacing: '-1px'
                }}>
                  {stat.value}
                </div>
              </div>
              
              {/* The Glowing Bar */}
              <div style={{
                width: '100%',
                maxWidth: '80px',
                height: `calc(${stat.height} * ${barProgress})`,
                borderRadius: '16px 16px 0 0',
                background: 'linear-gradient(180deg, #fef08a 0%, rgba(254, 240, 138, 0.1) 100%)',
                boxShadow: barProgress > 0.1 ? '0 -10px 40px rgba(254, 240, 138, 0.2)' : 'none',
                willChange: 'height, box-shadow'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '10%',
                  width: '80%',
                  height: '4px',
                  backgroundColor: '#ffffff',
                  borderRadius: '4px',
                  opacity: 0.8 * barProgress
                }} />
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}
