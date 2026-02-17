import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer className="main-footer">
                <div className="widget-section">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget logo-widget">
                                    <figure className="footer-logo"><Link href="/"><img style={{height: '70px', width:"150px"}} src="assets/images/indel-capital-logo-blue.png" alt="" /></Link></figure>
                                    <p>Tincidunt neque pretium lectus donec risus. Mauris mi tempor nunc orc leo consequat vitae erat gravida lobortis nec et sagittis.</p>
                                    <ul className="social-links">
                                        <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="/"><i className="fab fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget links-widget ml_40">
                                    <div className="widget-title">
                                        <h4>Quick links</h4>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li><Link href="/about">About</Link></li>
                                            <li><Link href="/">Approach</Link></li>
                                            <li><Link href="/career">Strategies</Link></li>
                                            <li><Link href="/career-details">Insights</Link></li>
                                            <li><Link href="/faq">IR</Link></li>
                                            <li><Link href="/faq">Careers</Link></li>
                                            <li><Link href="/faq">Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h4>Disclosures</h4>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            <li><Link href="/">Privacy policy</Link></li>
                                            <li><Link href="/">Terms & condition</Link></li>
                                            <li><Link href="/">Credit Card</Link></li>
                                            <li><Link href="/">Saving Account</Link></li>
                                            <li><Link href="/">Digital Gift Cards</Link></li>
                                            <li><Link href="/">Apply for Loans</Link></li>
                                            <li><Link href="/">Mobile Application</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget contact-widget">
                                    <div className="widget-title">
                                        <h4>Contact Us</h4>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="info-list clearfix">
                                            <li className="mb_20">
                                                <i className="fas fa-map-marker-alt"></i>
                                                <p>Flat 20, Reynolds Neck, North Helenaville, FV77 8BT</p>
                                            </li>
                                            <li className="mb_20">
                                                <i className="fas fa-phone"></i>
                                                <p><Link href="tel:23055873407">+2(305) 587-3407</Link></p>
                                            </li>
                                            <li>
                                                <i className="fas fa-envelope"></i>
                                                <p><Link href="mailto:info@example.com">info@example.com</Link></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom centred">
                    <div className="auto-container">
                        <div className="copyright"><p>Copyright 2026 by <Link href="/">Indel Capital</Link>. All Right Reserved.</p></div>
                    </div>
                </div>
            </footer>


        </>
    )
}
