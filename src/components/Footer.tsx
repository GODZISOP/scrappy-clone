import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <style>{`
        .footer-wrapper {
          background-color: #ffffff;
          padding-top: 60px;
          position: relative;
          z-index: 2;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .footer-top {
          margin-bottom: 60px;
        }
        .footer-columns {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 80px;
          max-width: 900px; /* keeps columns relatively close to each other */
        }
        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .footer-column-title {
          font-weight: 800;
          font-size: 1.1rem;
          color: #1a1a1a;
          margin-bottom: 10px;
        }
        .footer-link {
          color: #4b5563;
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: #f18c00;
        }
        .footer-bottom {
          background-color: #1a1a1a;
          padding: 20px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #ffffff;
          font-size: 0.85rem;
        }
        .social-icons {
          display: flex;
          gap: 20px;
        }
        .social-icon {
          color: #ffffff;
          text-decoration: none;
          transition: color 0.2s;
        }
        .social-icon:hover {
          color: #f18c00;
        }
        .footer-bottom-text {
          color: #d1d5db;
        }
        .leo9 {
          font-weight: 700;
          color: #ffffff;
        }
        @media (max-width: 768px) {
          .footer-wrapper {
            padding-top: 40px;
          }
          .footer-content {
            padding: 0 20px;
          }
          .footer-columns {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
            padding: 20px;
          }
        }
      `}</style>

      <div className="footer-content">
        <div className="footer-top">
          <Image src="/logo.png" alt="Scrappy Apparel Company" width={200} height={60} style={{ objectFit: 'contain' }} />
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h4 className="footer-column-title">Quick links</h4>
            <Link href="#" className="footer-link">Contact Us</Link>
            <Link href="#" className="footer-link">Start Your Order</Link>
            <Link href="#" className="footer-link">About Us</Link>
            <Link href="#" className="footer-link">Portfolio</Link>
            <Link href="#" className="footer-link">Pricing</Link>
            <Link href="#" className="footer-link">Resources</Link>
            <Link href="#" className="footer-link">Terms &amp; Conditions</Link>
            <Link href="#" className="footer-link">Privacy Policy</Link>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-column-title">Products</h4>
            <Link href="#" className="footer-link">T-Shirts</Link>
            <Link href="#" className="footer-link">Long Sleeves</Link>
            <Link href="#" className="footer-link">Polos</Link>
            <Link href="#" className="footer-link">Sweatshirts</Link>
            <Link href="#" className="footer-link">Hoodies</Link>
            <Link href="#" className="footer-link">Zip Ups</Link>
            <Link href="#" className="footer-link">Pants &amp; Shorts</Link>
            <Link href="#" className="footer-link">Hats</Link>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Solutions</h4>
            <Link href="#" className="footer-link">Apparel Manufacturing</Link>
            <Link href="#" className="footer-link">Fulfillment Solutions</Link>
            <Link href="#" className="footer-link">Design Services</Link>
            <Link href="#" className="footer-link">Agency Partners</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-text">2026 All Rights Reserved &ndash; Scrappy Apparel Company</div>
        
        <div className="social-icons">
          <Link href="#" className="social-icon" aria-label="Facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </Link>
          <Link href="#" className="social-icon" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </Link>
          <Link href="#" className="social-icon" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </Link>
        </div>

        <div className="footer-bottom-text">Designed &amp; Developed &ndash; <span className="leo9">Leo9Studio</span></div>
      </div>
    </footer>
  );
}
