'use client'
import { useState, useEffect } from "react"
import Link from "next/link"
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import styles from "./Header1.module.css"

const NAV_ITEMS = [
  {
    label: "About us",
    href: "/",
    children: [
      { label: "Who we are", href: "/who-we-are" },
      { label: "How we invest", href: "/investment-approach" },
      // { label: "FAQ", href: "/faq" },
    ],
  },
  // { label: "Strategies", href: "/strategies" },
  {
    label: "Insights",
    href: "/",
    children: [{ label: "Blog", href: "/blog-details" }],
  },
  {
    label: "Contact Us",
    href: "/",
    children: [
      { label: "Contact", href: "/contact-us" },
      { label: "Career", href: "/career" },
    ],
  },
  {
    label: "FAQ",
    href: "/faq",
  },
]

function NavItem({ item, linkColor }) {
  const [open, setOpen] = useState(false)
  const hasChildren = !!item.children

  return (
    <li
      className={`${styles.navListItem} ${hasChildren ? styles.hasDropdown : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className={styles.navLink}
        style={{ color: linkColor }}
      >
        {item.label}
        {hasChildren && (
          <span className={styles.dropdownArrow}>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
      </Link>

      {hasChildren && open && (
        <ul className={styles.subMenu}>
          {item.children.map((child) => (
            <li key={child.href} className={styles.subMenuItem}>
              <Link href={child.href} className={styles.subLink}>
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

function MobileDrawer({ open, onClose }) {
  const [openKey, setOpenKey] = useState(null)
  const toggle = (label) => setOpenKey(openKey === label ? null : label)

  return (
    <>
      <div
        className={`${styles.mobileBackdrop} ${open ? styles.mobileBackdropActive : ""}`}
        onClick={onClose}
      />
      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuActive : ""}`}>

        <button className={styles.mobileCloseBtn} onClick={onClose} aria-label="Close menu">
          <i className="fas fa-times" />
        </button>

        <div className={styles.mobileNavLogo}>
          <Link href="/" onClick={onClose}>
            <img
              src="/assets/images/indel-capital-logo-blue.png"
              alt="Indel Capital"
              width={120}
              height="auto"
              style={{ display: "block" }}
            />
          </Link>
        </div>

        <div className={styles.mobileMenuOuter}>
          <ul className={styles.mobileNavList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className={styles.mobileNavItem}>
                <div
                  className={styles.mobileNavRow}
                  onClick={() => item.children && toggle(item.label)}
                  style={{ cursor: item.children ? "pointer" : "default" }}
                >
                  <Link
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={(e) => {
                      if (item.children) {
                        e.preventDefault()
                      } else {
                        onClose()
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <span
                      className={`${styles.mobileAccordionBtn} ${openKey === item.label ? styles.mobileAccordionBtnOpen : ""}`}
                    >
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </div>
                {item.children && (
                  <ul className={`${styles.mobileSubMenu} ${openKey === item.label ? styles.mobileSubMenuOpen : ""}`}>
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className={styles.mobileSubLink} onClick={onClose}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.mobileContactInfo}>
          <h4>Contact Info</h4>
          <ul>
            <li><Link href="tel:+919072606615">+91 90726 06615</Link></li>
            <li><Link href="mailto:info@indelcapital.com">info@indelcapital.com</Link></li>
          </ul>
        </div>

        <div className={styles.mobileSocialLinks}>
          <Link href="#" className={styles.mobileSocialIcon}><FaWhatsapp /></Link>
          <Link href="#" className={styles.mobileSocialIcon}><FaInstagram /></Link>
          <Link href="#" className={styles.mobileSocialIcon}><FaYoutube /></Link>
          <Link href="#" className={styles.mobileSocialIcon}><FaXTwitter /></Link>
        </div>

      </div>
    </>
  )
}

export default function Header1({ scroll }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMobile = () => setMobileOpen((p) => !p)

  const isScrolled = mounted && scroll
  const linkColor = isScrolled ? "#333333" : "#ffffff"
  const logoSrc = isScrolled
    ? "/assets/images/indel-capital-logo-blue.png"
    : "/assets/images/indel-capital-logo.png"
  const togglerColor = isScrolled ? "#000" : "#fff"

  return (
    <header className={`${styles.mainHeader} ${isScrolled ? styles.fixedHeader : ""}`}>
      <div className={styles.headerLower}>
        <div className={styles.customContainer}>
          <div className={styles.outerBox}>

            <div className={styles.logoWrap}>
              <Link href="/">
                <img
                  className={styles.logoImg}
                  src={logoSrc}
                  alt="Indel Capital"
                  width={120}
                  height="auto"
                />
              </Link>
            </div>

            <div className={styles.menuArea}>
              <div
                className={styles.mobileNavToggler}
                onClick={toggleMobile}
                style={{ color: togglerColor }}
              >
                <span className={styles.iconBar} />
                <span className={styles.iconBar} />
                <span className={styles.iconBar} />
              </div>

              <nav className={styles.mainMenu}>
                <ul className={styles.navigation}>
                  {NAV_ITEMS.map((item) => (
                    <NavItem key={item.label} item={item} linkColor={linkColor} />
                  ))}
                </ul>
              </nav>
            </div>

          </div>
        </div>
      </div>

      <MobileDrawer open={mobileOpen} onClose={toggleMobile} />
    </header>
  )
}