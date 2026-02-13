
import Layout from "@/components/layout/Layout"
import TestimonialSlider02 from "@/components/slider/TestimonialSlider02"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Board of Directors">
                <div>
                    {/* Team-section */}
                    <section className="team-section pt_120 pb_75">
                        <div className="auto-container">
                            <div className="sec-title mb_70 centred">
                                <h6>Our People</h6>
                                <h2>Our Board Members</h2>
                            </div>
                            <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div
                                className="team-block-one wow fadeInUp animated"
                                data-wow-delay="00ms"
                                data-wow-duration="1500ms"
                                >
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/team/team-1.jpg" alt="" /></figure>
                                        <ul className="social-links clearfix">
                                            <li><Link href="/team"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="/team"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="/team"><i className="fab fa-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="lower-content">
                                    <h3><Link href="/team-details">Wade Warren</Link></h3>
                                    <span className="designation">Founder</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div
                                    className="team-block-one wow fadeInUp animated"
                                    data-wow-delay="200ms"
                                    data-wow-duration="1500ms"
                                >
                                    <div className="inner-box">
                                    <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-2.jpg" alt="" /></figure>
                                        <ul className="social-links clearfix">
                                            <li><Link href="/team"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="/team"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="/team"><i className="fab fa-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="/team-details">Guy Hawkins</Link></h3>
                                        <span className="designation">Co-Founder</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div
                                    className="team-block-one wow fadeInUp animated"
                                    data-wow-delay="400ms"
                                    data-wow-duration="1500ms"
                                >
                                    <div className="inner-box">
                                        <div className="image-box">
                                        <figure className="image"><img src="assets/images/team/team-3.jpg" alt="" /></figure>
                                            <ul className="social-links clearfix">
                                                <li><Link href="/team"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/team"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/team"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/team-details">Bessie Cooper</Link></h3>
                                            <span className="designation">Chairman</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div
                                    className="team-block-one wow fadeInUp animated"
                                    data-wow-delay="600ms"
                                    data-wow-duration="1500ms"
                                >
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-4.jpg" alt="" /></figure>
                                            <ul className="social-links clearfix">
                                                <li><Link href="/team"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/team"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/team"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/team-details">Devon Lane</Link></h3>
                                            <span className="designation">Vice Chairman</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div
                                    className="team-block-one wow fadeInUp animated"
                                    data-wow-delay="0ms"
                                    data-wow-duration="1500ms"
                                >
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-5.jpg" alt="" /></figure>
                                            <ul className="social-links clearfix">
                                                <li><Link href="/team"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/team"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/team"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/team-details">Brooklyn Simmons</Link></h3>
                                            <span className="designation">Head of Marketing</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div
                                    className="team-block-one wow fadeInUp animated"
                                    data-wow-delay="200ms"
                                    data-wow-duration="1500ms"
                                >
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-6.jpg" alt="" /></figure>
                                            <ul className="social-links clearfix">
                                                <li><Link href="/team"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/team"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/team"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/team-details">Robert Fox</Link></h3>
                                            <span className="designation">Head of Finance</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div
                                    className="team-block-one wow fadeInUp animated"
                                    data-wow-delay="400ms"
                                    data-wow-duration="1500ms"
                                >
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-7.jpg" alt="" /></figure>
                                            <ul className="social-links clearfix">
                                                <li><Link href="/team"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/team"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/team"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                    <div className="lower-content">
                                        <h3><Link href="/team-details">Darlene Robertson</Link></h3>
                                        <span className="designation">Managing Director</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div
                                    className="team-block-one wow fadeInUp animated"
                                    data-wow-delay="600ms"
                                    data-wow-duration="1500ms"
                                >
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-8.jpg" alt="" /></figure>
                                            <ul className="social-links clearfix">
                                                <li><Link href="/team"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="/team"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="/team"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                    <div className="lower-content">
                                        <h3><Link href="/team-details">Albert Flores</Link></h3>
                                        <span className="designation">Chief Marketer</span>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            </div>
                        </div>
                    </section>
                    {/* Team-section end */}

                    {/* testimonial-style-two */}
                    <section className="testimonial-style-two pt_120 pb_120">
                        <div className="auto-container">
                            <div className="row clearfix">
                            <div className="col-lg-4 col-md-12 col-sm-12 title-column">
                                <div className="sec-title mr_70">
                                <h6>Testimonials</h6>
                                <h2>Love from Happy Clients</h2>
                                <p>Amet dui scelerisque habitant eget tincidunt facilisis pretium lorem ipsum dilore. </p>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                <div className="content-box">
                                    {/*Theme Carousel*/}
                                    <TestimonialSlider02 />                        
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                    {/* testimonial-style-two end */}

                    {/* subscribe-section */}
                    <section className="subscribe-section">
                            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-5.png)" }}></div>
                            <div className="auto-container">
                                <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                                    <div className="text-box">
                                    <h2>Subscribe us to Receive Latest Updates</h2>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                                    <div className="form-inner ml_40">
                                    <form method="post" action="contact">
                                        <div className="form-group">
                                        <input type="email" name="email" placeholder="Your email" required />
                                        <button type="submit" className="theme-btn btn-two">Subscribe Now</button>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                                </div>
                            </div>
                    </section>
                    {/* subscribe-section end */}
                </div>

            </Layout>
        </>
    )
}