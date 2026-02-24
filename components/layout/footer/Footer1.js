"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaWhatsapp, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Approach", href: "/approach" },
  { label: "Strategies", href: "/strategies" },
  { label: "Insights", href: "/insights" },
  { label: "IR", href: "/ir" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const footerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  const indelOpacity = useTransform(scrollYProgress, [0, 0.85, 0.95], [0.08, 0.08, 0]);
  const capitalOpacity = useTransform(scrollYProgress, [0, 0.85, 0.95, 1], [0, 0, 0.08, 0.08]);

  const cssStyles = `
    .awwwards-footer {
      background: #020617;
      color: #ffffff;
      font-family: 'Outfit', sans-serif;
      padding: 160px 0 60px 0;
      position: relative;
      overflow: hidden;
      min-height: 600px; 
    }

    .bg-fixed-container {
      position: absolute;
      top: 0px;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      pointer-events: none;
      z-index: 1;
    }

    .giant-static-text {
      position: absolute;
      top: 15%; 
      font-size: clamp(100px, 20vw, 380px);
      font-weight: 900;
      text-transform: uppercase;
      white-space: nowrap;
      line-height: 1;
      color: transparent;
      -webkit-text-stroke: 1px rgba(255, 255, 255, 1);
      letter-spacing: -0.03em;
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 40px;
      position: relative;
      z-index: 2;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 60px;
    }

    .footer-col h4 {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 4px;
      color: #ee3824;
      margin-bottom: 40px;
      font-weight: 800;
    }

    .footer-desc {
      font-size: 24px;
      line-height: 1.4;
      max-width: 450px;
      margin-bottom: 40px;
    }

    .nav-list { list-style: none; padding: 0; margin: 0; }
    .nav-item { margin-bottom: 12px; }
    
    .nav-link {
      font-size: 18px;
      color: rgba(255, 255, 255, 0.5);
      text-decoration: none;
      transition: all 0.4s ease;
      display: inline-block;
    }

    .nav-link:hover {
      color: #ffffff;
      transform: translateX(8px);
    }

    .social-links {
      display: flex;
      gap: 20px;
      margin-top: 20px;
    }

    .social-icon {
      color: rgba(255, 255, 255, 0.6);
      font-size: 22px;
      transition: all 0.3s ease;
    }

    .social-icon:hover {
      color: #ee3824;
      transform: translateY(-3px);
    }

    .footer-bottom {
      margin-top: 120px;
      padding-top: 40px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: rgba(255, 255, 255, 0.3);
    }

    @media (max-width: 1024px) {
      .footer-grid { grid-template-columns: 1fr 1fr; }
      .bg-fixed-container { display: none; }
    }

    @media (max-width: 600px) {
      .footer-grid { grid-template-columns: 1fr; }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      
      <footer ref={footerRef} className="awwwards-footer">
        
        <div className="bg-fixed-container">
          <motion.div 
            style={{ opacity: indelOpacity }} 
            className="giant-static-text"
          >
            INDEL
          </motion.div>
          

          <motion.div 
            style={{ opacity: capitalOpacity }} 
            className="giant-static-text"
          >
            CAPITAL
          </motion.div>
        </div>

        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <img 
                src="/assets/images/indel-capital-logo-blue.png" 
                alt="Indel Logo" 
                style={{ height: '45px', marginBottom: '30px' }} 
              />
              <p className="footer-desc">
                We design financial futures with <span>uncompromising</span> precision.
              </p>
              
              <div className="social-links">
                <Link href="#" className="social-icon"><FaWhatsapp /></Link>
                <Link href="#" className="social-icon"><FaInstagram /></Link>
                <Link href="#" className="social-icon"><FaYoutube /></Link>
                <Link href="#" className="social-icon"><FaXTwitter /></Link>
              </div>
            </div>

            <div className="footer-col">
              <h4>Directives</h4>
              <ul className="nav-list">
                {quickLinks.slice(0, 4).map((link) => (
                  <li key={link.label} className="nav-item">
                    <Link href={link.href} className="nav-link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4>Internal</h4>
              <ul className="nav-list">
                {quickLinks.slice(4).map((link) => (
                  <li key={link.label} className="nav-item">
                    <Link href={link.href} className="nav-link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4>Presence</h4>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', fontSize: '15px' }}>
                Reynolds Neck, <br /> North Helenaville <br />
                <span style={{ color: '#fff' }}>+2 (305) 587-3407</span>
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <div>© 2026 Indel Capital Group</div>
            <div className="legal-links">
              <Link href="/privacy" style={{color: 'inherit', textDecoration: 'none', marginLeft: '30px'}}>Privacy</Link>
              <Link href="/terms" style={{color: 'inherit', textDecoration: 'none', marginLeft: '30px'}}>Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}