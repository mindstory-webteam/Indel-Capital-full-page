'use client'
import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({ status: false, key: "" });
    } else {
      setIsActive({ status: true, key });
    }
  };

  return (
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}>
          <i className="fas fa-times"></i>
        </div>
        
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <img 
                style={{ width: "120px", height: "auto" }} 
                src="assets/images/indel-capital-logo-blue.png" 
                alt="Indel Capital" 
              />
            </Link>
          </div>

          <div className="menu-outer">
            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
              <ul className="navigation clearfix">
                
                {/* <li className="dropdown"> */}
                <li>
                  <Link href="/who-we-are" onClick={handleMobileMenu}>Who We Are</Link>
                </li>

                {/* <li className="dropdown"> */}
                <li>
                  <Link href="/investment-approach" onClick={handleMobileMenu}>Investment Approach</Link>
                </li>

                {/* <li className="dropdown"> */}
                <li>
                  <Link href="/strategies" onClick={handleMobileMenu}>Strategies</Link>
                </li>

                <li>
                  <Link href="/contact-us" onClick={handleMobileMenu}>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li><Link href="tel:+919072606615">+91 90726 06615</Link></li>
              <li><Link href="mailto:info@indelcapital.com">your@domain.com</Link></li>
            </ul>
          </div>

          <div className="social-links">
            <Link href="#" className="social-icon"><FaWhatsapp /></Link>
            <Link href="#" className="social-icon"><FaInstagram /></Link>
            <Link href="#" className="social-icon"><FaYoutube /></Link>
            <Link href="#" className="social-icon"><FaXTwitter /></Link>
          </div>
        </nav>
      </div>
      
      <div 
        className="nav-overlay" 
        style={{ display: `${isSidebar ? "block" : "none"}` }} 
        onClick={handleSidebar} 
      />

      <style jsx>{`
        .social-links {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px 25px;
        }
        :global(.social-icon) {
          font-size: 20px;
          color: #1a1a1a;
          transition: color 0.3s ease;
        }
        :global(.social-icon:hover) {
          color: #17479e; 
        }
      `}</style>
    </>
  )
}

export default MobileMenu;