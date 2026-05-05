"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { FaWhatsapp, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const quickLinks = [
  { label: "Who We Are", href: "/who-we-are" },
  { label: "How we invest", href: "/investment-approach" },
  { label: "FAQ", href: "/faq" },
  { label: "Blogs", href: "/blog-page" },
  { label: "Careers", href: "/career" },
  { label: "Contact", href: "/contact-us" },
];

export default function Footer() {
  const footerRef = useRef(null);
  const indelRef = useRef(null);
  const capitalRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    const indelEl = indelRef.current;
    const capitalEl = capitalRef.current;
    if (!footer || !indelEl || !capitalEl) return;

    // Set initial states
    gsap.set(indelEl, { opacity: 0.08 });
    gsap.set(capitalEl, { opacity: 0 });

    // INDEL: fades out as you scroll through the footer
    const indelTl = gsap.timeline({
      scrollTrigger: {
        trigger: footer,
        start: "top bottom",   // when footer enters viewport
        end: "bottom bottom",  // when footer bottom hits viewport bottom
        scrub: true,
      },
    });

    indelTl
      .to(indelEl, { opacity: 0.08, duration: 0.7, ease: "none" })
      .to(indelEl, { opacity: 0, duration: 0.3, ease: "none" });

    // CAPITAL: fades in after INDEL fades out
    const capitalTl = gsap.timeline({
      scrollTrigger: {
        trigger: footer,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });

    capitalTl
      .to(capitalEl, { opacity: 0, duration: 0.7, ease: "none" })
      .to(capitalEl, { opacity: 0.08, duration: 0.3, ease: "none" });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const cssStyles = `
    .awwwards-footer {
      background: #0c1951;
      color: #ffffff;
      font-family: 'Outfit', sans-serif;
      padding: 120px 0 60px 0;
      position: relative;
      overflow: hidden;
      min-height: 600px;
    }

    .bg-fixed-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }

    .giant-static-text {
      position: absolute;
      top: 35%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: clamp(100px, 20vw, 380px);
      font-weight: 900;
      text-transform: uppercase;
      white-space: nowrap;
      line-height: 1;
      color: transparent;
      -webkit-text-stroke: 1px rgba(255, 255, 255, 1);
      letter-spacing: -0.03em;
      will-change: opacity;
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

    .address-link {
      text-decoration: none;
      display: block;
      transition: all 0.3s ease;
    }

    .address-link:hover {
      opacity: 0.8;
      transform: translateY(-2px);
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

    .legal-links { display: flex; }

    @media (max-width: 1024px) {
      .footer-grid { grid-template-columns: 1fr 1fr; }
      .bg-fixed-container { display: none; }
    }

    @media (max-width: 600px) {
      .footer-grid { grid-template-columns: 1fr; gap: 40px; }

      .footer-bottom {
        flex-direction: column;
        text-align: center;
        gap: 20px;
        margin-top: 60px;
      }

      .legal-links {
        justify-content: center;
        width: 100%;
      }

      .legal-links a {
        margin: 0 15px !important;
      }

      .footer-desc { font-size: 20px; }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />

      <footer ref={footerRef} className="awwwards-footer">
        <div className="bg-fixed-container">
          <div ref={indelRef} className="giant-static-text">INDEL</div>
          <div ref={capitalRef} className="giant-static-text">CAPITAL</div>
        </div>

        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <img
                src="/assets/images/indel-capital-logo-blue.png"
                alt="Indel Logo"
                style={{ height: "45px", marginBottom: "30px" }}
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
              <h4>Quick Links</h4>
              <ul className="nav-list">
                {quickLinks.slice(0, 4).map((link) => (
                  <li key={link.label} className="nav-item">
                    <Link href={link.href} className="nav-link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4>Touch with us</h4>
              <ul className="nav-list">
                {quickLinks.slice(4).map((link) => (
                  <li key={link.label} className="nav-item">
                    <Link href={link.href} className="nav-link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4>Location</h4>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="address-link"
              >
                <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.8", fontSize: "15px" }}>
                  Indel House, Changampuzha Nagar, South Kalamassery, Ernakulam<br />
                  Kerala 682033<br />
                  <span style={{ color: "#fff" }}>+91 90726 06615</span>
                </p>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <div>© 2026 Indel Capital</div>
            <div className="legal-links">
              <Link href="/privacy" style={{ color: "inherit", textDecoration: "none", marginLeft: "30px" }}>Privacy</Link>
              <Link href="/terms" style={{ color: "inherit", textDecoration: "none", marginLeft: "30px" }}>Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}