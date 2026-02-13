import Link from "next/link"

export default function Footer1() {
    return (
        <>            
            <footer className="main-footer">
                <div className="widget-section">
                    <div className="pattern-layer">
                    <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-8.png)' }}></div>
                    <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-9.png)' }}></div>
                    </div>
                    <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget logo-widget">
                                <figure className="footer-logo"><Link href="/"><img src="assets/images/logo-2.png" alt="" /></Link></figure>
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
                                <h4>Explore</h4>
                                </div>
                                <div className="widget-content">
                                <ul className="links-list clearfix">
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/">Testimonials</Link></li>
                                    <li><Link href="/career">Careers</Link></li>
                                    <li><Link href="/career-details">Career Detail</Link></li>
                                    <li><Link href="/faq">Faq’s</Link></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <div className="widget-title">
                                <h4>Usefull Links</h4>
                                </div>
                                <div className="widget-content">
                                <ul className="links-list clearfix">
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
                                <h4>Find Our Branch & ATM</h4>
                                </div>
                                <div className="form-inner">
                                <form method="post" action="index">
                                    <div className="form-group">
                                    <div className="select-box">
                                        <select className="wide">
                                        <option data-display="Branch">Branch</option>
                                        <option value="1">California</option>
                                        <option value="2">Man City</option>
                                        <option value="3">New York</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className="form-group">
                                    <input type="text" name="location" placeholder="Location" />
                                    </div>
                                    <div className="form-group">
                                    <button type="submit" className="theme-btn btn-one">Find on Map</button>
                                    </div>
                                </form>
                                </div>
                            </div>
                        </div>    
                    </div>
                    </div>
                </div>
                <div className="footer-bottom centred">
                    <div className="auto-container">
                    <div className="copyright"><p>Copyright 2023 by <Link href="/">MertoBank</Link>. All Right Reserved.</p></div>
                    </div>
                </div>
            </footer>


        </>
    )
}
