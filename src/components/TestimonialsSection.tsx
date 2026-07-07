"use client";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Scrappy Apparel Company's uniforms have been a fantastic addition to our team. They're high-quality, comfortable, and durable, keeping us cool in summer. The fit is perfect and the professional design aligns well with our brand.",
    name: "Maynor Gutierrez",
    title: "Owner - Macawsome Heating and Cooling",
    avatar: "https://i.pravatar.cc/150?u=maynor"
  },
  {
    quote: "We at Park Slope United Soccer Club are very happy customers of Scrappy Apparel. Scrappy and his team have designed, sourced, and produced high quality products at low cost with a very fast turnaround.",
    name: "Nathan Bell",
    title: "Executive Director - Park Slope United Soccer Club",
    avatar: "https://i.pravatar.cc/150?u=nathan"
  },
  {
    quote: "Working with Scrappy Apparel has been a game changer for our merchandise line. The attention to detail and quality is unmatched. Our customers love the new designs!",
    name: "Sarah Jenkins",
    title: "Founder - Urban Threads",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    quote: "The ordering process was incredibly smooth, and the team was highly responsive to all our custom requirements. We received our bulk order right on schedule.",
    name: "Marcus Thorne",
    title: "Events Manager - TechCon",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    quote: "Scrappy Apparel delivers every single time. From screen printing to custom embroidery, they handle it all with true professionalism. Highly recommended!",
    name: "Emily Chen",
    title: "Creative Director - Studio Blanc",
    avatar: "https://i.pravatar.cc/150?u=emily"
  }
];

// Add a 6th card (duplicate of the first) to make the carousel math easy for 2 visible cards
const carouselItems = [...testimonials, testimonials[0]];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Loop between 0 and 4 (since there are 5 unique dots)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonials-section">
      <style>{`
        .testimonials-section {
          padding: 100px 20px;
          background-color: #ffffff;
          overflow: hidden;
        }
        .testimonials-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .testimonials-title {
          font-size: 2.5rem;
          font-weight: 900;
          margin-bottom: 40px;
          color: #1a1a1a;
        }
        .testimonials-track-wrapper {
          overflow: hidden;
          width: 100%;
        }
        .testimonials-track {
          display: flex;
          transition: transform 0.5s ease-in-out;
          --slide-percent: 50%;
          transform: translateX(calc(var(--slide-percent) * -1 * var(--current-index)));
        }
        .testimonial-card-wrapper {
          flex: 0 0 50%;
          padding: 0 15px;
          box-sizing: border-box;
        }
        .testimonial-card {
          background-color: #f3f4f6;
          border-radius: 16px;
          padding: 40px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .testimonial-quote {
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.6;
          margin-bottom: 30px;
        }
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .testimonial-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }
        .testimonial-name {
          font-weight: 800;
          color: #1a1a1a;
          margin: 0;
          font-size: 1rem;
        }
        .testimonial-title {
          color: #4b5563;
          margin: 0;
          font-size: 0.85rem;
        }
        .testimonials-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 40px;
        }
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #d1d5db;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .dot.active {
          background-color: #f18c00;
        }
        @media (max-width: 768px) {
          .testimonials-section {
            padding: 60px 15px;
          }
          .testimonials-title {
            font-size: 2rem;
            margin-bottom: 30px;
            text-align: center;
          }
          .testimonials-track {
            --slide-percent: 100%;
            transform: none !important;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
            padding-bottom: 20px;
          }
          .testimonials-track::-webkit-scrollbar {
            display: none;
          }
          .testimonial-card-wrapper {
            flex: 0 0 85%;
            scroll-snap-align: center;
          }
          .testimonial-card {
            padding: 30px 20px;
          }
          .testimonial-quote {
            font-size: 1rem;
          }
          .testimonials-dots {
            display: none; /* Hide dots since it's native scroll */
          }
        }
      `}</style>

      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Partners Say</h2>
        
        <div className="testimonials-track-wrapper">
          <div 
            className="testimonials-track"
            style={{ '--current-index': currentIndex } as React.CSSProperties}
          >
            {carouselItems.map((t, i) => (
              <div key={i} className="testimonial-card-wrapper">
                <div className="testimonial-card">
                  <p className="testimonial-quote">
                    "{t.quote}"
                  </p>
                  <div className="testimonial-author">
                    <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                    <div>
                      <h4 className="testimonial-name">{t.name}</h4>
                      <p className="testimonial-title">{t.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="testimonials-dots">
          {testimonials.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentIndex(i)}
              className={`dot ${i === currentIndex ? 'active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
