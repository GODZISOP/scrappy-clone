"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What Is Your Turnaround Time For Bulk Custom T-Shirt Printing?",
    answer: "Our standard turnaround time is 10-14 business days after proof approval. We also offer rush services if you need your order sooner."
  },
  {
    question: "Does Scrappy Apparel Offer Design Services?",
    answer: "Yes, Scrappy Apparel offers basic branding and design services based on your existing logos and branding guidelines. We do not provide logo design or rebranding services, but can connect you with our affiliate partner agencies and freelancers if needed."
  },
  {
    question: "Do You Offer International Shipping For Apparel Products?",
    answer: "Yes, we ship internationally. Shipping rates and delivery times will vary depending on your location."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1); // 2nd item open by default like screenshot

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <style>{`
        .faq-section {
          padding: 100px 20px 150px 20px; /* Extra bottom padding before the dark footer section */
          background-color: #ffffff;
        }
        .faq-container {
          max-width: 900px;
          margin: 0 auto;
        }
        .faq-main-title {
          font-size: 2.5rem;
          font-weight: 900;
          color: #1a1a1a;
          margin-bottom: 40px;
        }
        .faq-item {
          border-bottom: 1px solid #e5e7eb;
          padding: 25px 0;
        }
        .faq-item:first-of-type {
          border-top: 1px solid #e5e7eb;
        }
        .faq-question-btn {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          text-align: left;
        }
        .faq-question-text {
          font-size: 1.25rem;
          font-weight: 800;
          transition: color 0.3s ease;
          padding-right: 20px;
        }
        .faq-question-text.active {
          color: #1a1a1a;
        }
        .faq-question-text.inactive {
          color: #9ca3af;
        }
        .faq-icon {
          flex-shrink: 0;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 2px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .faq-icon.active {
          border-color: #f18c00;
          color: #f18c00;
        }
        .faq-icon.inactive {
          border-color: #9ca3af;
          color: #9ca3af;
        }
        .faq-answer-container {
          overflow: hidden;
          transition: max-height 0.4s ease, margin-top 0.4s ease, opacity 0.4s ease;
        }
        .faq-answer-container.active {
          max-height: 200px;
          margin-top: 15px;
          opacity: 1;
        }
        .faq-answer-container.inactive {
          max-height: 0;
          margin-top: 0;
          opacity: 0;
        }
        .faq-answer-text {
          font-size: 0.95rem;
          color: #4b5563;
          line-height: 1.6;
          margin: 0;
        }
      `}</style>

      <div className="faq-container">
        <h2 className="faq-main-title">FAQs</h2>
        
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div key={index} className="faq-item">
                <button 
                  className="faq-question-btn" 
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isActive}
                >
                  <span className={`faq-question-text ${isActive ? 'active' : 'inactive'}`}>
                    {faq.question}
                  </span>
                  
                  <div className={`faq-icon ${isActive ? 'active' : 'inactive'}`}>
                    {isActive ? (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    ) : (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    )}
                  </div>
                </button>
                
                <div className={`faq-answer-container ${isActive ? 'active' : 'inactive'}`}>
                  <p className="faq-answer-text">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
