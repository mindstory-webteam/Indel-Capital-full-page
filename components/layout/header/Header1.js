import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            <header className={`main-header header-style-one ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                <div className="header-top">
                    <div className="large-container">
                        <div className="top-inner">
                        <ul className="links-list clearfix">
                            <li><Link href="/career">Career</Link></li>
                            <li><Link href="/faq">Faq</Link></li>
                            <li><Link href="/">Media</Link></li>
                        </ul>
                        <ul className="info-list clearfix">
                            <li>
                            {/* <i className="icon-1"></i> */}
                            <Link href="mailto:info@example.com">info@example.com</Link>
                            </li>
                            <li>
                            {/* <i className="icon-2"></i> */}
                            +91 3284794327
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="header-lower">
  <div className="large-container">
    <div className="outer-box">
      <div className="logo-box">
        <div className="shape"></div>
        <figure className="logo">
          <Link href="/">
            <img 
              style={{ width: "100px", height: "auto" }} 
              src="assets/images/indel-capital-logo.png" 
              alt="Indel Capital" 
            />
          </Link>
        </figure>
      </div>
      
      <div className="menu-area">
        <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
          <i className="icon-bar"></i>
          <i className="icon-bar"></i>
          <i className="icon-bar"></i>
        </div>
        <nav className="main-menu navbar-expand-md navbar-light clearfix">
          <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
            <Menu />
          </div>
        </nav>
      </div>
    </div>
  </div>
</div>

                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="large-container">
                        <div className="outer-box">
                        <div className="logo-box">
                            <div className="shape"></div>
                            <figure className="logo"><Link href="/"><img style={{width:"120px", height:"50px" , marginLeft:"35px" }}  src="assets/images/indel-capital-logo.png" alt="" /></Link></figure>
                        </div>
                        <div className="menu-area">
                            <nav className="main-menu clearfix">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                            </nav>
                            {/* <div className="menu-right-content ml_70">
                            <Link href="/" className="theme-btn btn-two mr_20">Login</Link>
                            <Link href="/contact" className="theme-btn btn-one">Open Account</Link>
                            </div> */}
                        </div>
                        </div>
                    </div>
                </div>
                {/* End Sticky Menu */}
                {/* Mobile Menu  */}

                <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>
        </>
    )
}
