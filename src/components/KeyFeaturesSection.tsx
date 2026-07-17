"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function KeyFeaturesSection() {
  const [progresses, setProgresses] = useState<number[]>([0, 0, 0, 0]);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let animationFrameId: number;
    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const newProgresses = rowRefs.current.map(row => {
          if (!row) return 0;
          const rect = row.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Animation starts when the top of the element is 80% down the screen (20% inside)
          const start = windowHeight * 0.8;
          // Animation completes when the top of the element is near the top of the screen
          const end = windowHeight * 0.1;
          
          let p = (start - rect.top) / (start - end);
          
          if (p < 0) p = 0;
          if (p > 1) p = 1;
          
          return p;
        });
        setProgresses(newProgresses);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const features = [
    {
      id: 0,
      title: "No Orders Too Small",
      desc: "Whether you need a single custom t-shirt or a thousand promotional items, we handle projects of any scale.",
      list: ["Single Item Printing", "Small Batch Orders", "Massive Bulk Orders", "Flexible Customization", "No Hidden Fees"],
      bg: "#fef08a",
      color: "#111111",
      image: "/mockup-bags.png"
    },
    {
      id: 1,
      title: "Unmatched Quality",
      desc: "We use top-tier materials and state-of-the-art digital printing and embroidery tech to ensure vibrant, lasting results.",
      list: ["Premium Apparel", "Vibrant Digital Prints", "Durable Embroidery", "Expert Craftsmanship", "Strict Quality Checks"],
      bg: "#111111",
      color: "#ffffff",
      image: "/mockup-man-box.jpg"
    },
    {
      id: 2,
      title: "End-to-End Design",
      desc: "Don't have a design ready? Our expert in-house team handles 3D designs, logos, and layouts to perfect your vision.",
      list: ["Logo Creation", "3D Modeling", "Vector Illustrations", "Print-ready Layouts", "Canvas Repair"],
      bg: "#fef08a",
      color: "#111111",
      image: "/mockup-forklift.png"
    },
    {
      id: 3,
      title: "Fast Turnaround",
      desc: "We understand strict business deadlines and offer expedited production options so you get your custom materials on time.",
      list: ["Rush Options Available", "On-time Delivery", "Streamlined Workflow", "Global Shipping", "Reliable Support"],
      bg: "#111111",
      color: "#ffffff",
      image: "/mockup-group.jpg"
    }
  ];

  const mapProgress = (globalProgress: number, start: number, end: number) => {
    const p = (globalProgress - start) / (end - start);
    return Math.min(Math.max(p, 0), 1);
  };

  return (
    <section style={{ width: '100%', overflow: 'hidden' }}>
      {features.map((feat, index) => {
        const progress = progresses[index] || 0;
        
        // Staggered scrub sequence with NO overlap:
        // Heading -> Description -> List -> Image
        const titleProgress = mapProgress(progress, 0.0, 0.25);
        const descProgress  = mapProgress(progress, 0.25, 0.50);
        const listProgress  = mapProgress(progress, 0.50, 0.75);
        const imageProgress = mapProgress(progress, 0.75, 1.0);

        return (
          <div
            key={feat.id}
            className="feature-row"
            ref={(el) => { rowRefs.current[index] = el; }}
            style={{
              backgroundColor: feat.bg,
              color: feat.color,
              padding: '100px 5%',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '60px',
              alignItems: 'center'
            }}
          >
            {/* Text Content */}
            <div style={{
              flex: '1 1 500px',
              display: 'flex',
              flexDirection: 'column',
              order: index % 2 !== 0 ? 2 : 1
            }}>
              <h2 style={{
                fontSize: 'clamp(3.5rem, 7vw, 6rem)',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                lineHeight: 1.1,
                marginBottom: '80px',
                fontFamily: 'sans-serif',
                display: 'flex',
                flexWrap: 'wrap',
                columnGap: '0.25em',
                rowGap: '0em',
              }}>
                {feat.title.split(' ').map((word: string, wIndex: number, arr: string[]) => {
                  // Calculate staggered progress for each word
                  const staggerStep = 0.5 / Math.max(1, arr.length - 1);
                  const wordStart = wIndex * staggerStep;
                  const wordEnd = wordStart + 0.5;
                  
                  // Local linear progress (0 to 1) for this specific word
                  const localP = Math.min(Math.max((titleProgress - wordStart) / (wordEnd - wordStart), 0), 1);
                  
                  // Power4.out ease: fast at start, slow at end
                  const easedP = 1 - Math.pow(1 - localP, 4);
                  
                  return (
                    <span 
                      key={wIndex} 
                      style={{ 
                        display: 'inline-block', 
                        overflow: 'hidden', 
                        paddingBottom: '0.15em', 
                        marginBottom: '-0.15em' 
                      }}
                    >
                      <span style={{ 
                        display: 'inline-block', 
                        transform: `translateY(${110 * (1 - easedP)}%)`,
                        willChange: 'transform'
                      }}>
                        {word}
                      </span>
                    </span>
                  );
                })}
              </h2>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '40px'
              }}>
                <p style={{
                  flex: '1 1 250px',
                  fontSize: '1.05rem',
                  lineHeight: 1.5,
                  margin: 0,
                  maxWidth: '350px',
                  opacity: descProgress,
                  transform: `translateY(${40 * (1 - descProgress)}px)`,
                  willChange: 'transform, opacity'
                }}>
                  {feat.desc}
                </p>
                <div style={{
                  flex: '1 1 150px',
                  fontSize: '0.8rem',
                  lineHeight: 1.8,
                  fontWeight: 500,
                  opacity: listProgress,
                  transform: `translateY(${30 * (1 - listProgress)}px)`,
                  willChange: 'transform, opacity'
                }}>
                  {feat.list.map((item, i) => (
                    <div key={i}>{item}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div style={{
              flex: '1 1 450px',
              position: 'relative',
              height: '450px',
              order: index % 2 !== 0 ? 1 : 2,
              opacity: imageProgress,
              transform: `translateY(${40 * (1 - imageProgress)}px) scale(${0.95 + 0.05 * imageProgress})`,
              willChange: 'transform, opacity, scale'
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: feat.bg === '#ffffff' ? '0 20px 40px rgba(0,0,0,0.08)' : '0 20px 40px rgba(0,0,0,0.2)'
              }}>
                <Image
                  src={feat.image}
                  alt={feat.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  unoptimized
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
