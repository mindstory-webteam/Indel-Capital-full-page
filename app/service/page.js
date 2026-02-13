'use client'
import TestimonialSlider03 from "@/components/slider/TestimonialSlider03"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
   

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Services">
                <div>
                    {/* service-style-two */}
                    <section className="service-section pt_120 pb_90">
                        <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/service-bg.jpg)' }}></div>
                        <div className="auto-container">
                            <div className="sec-title centred mb_60">
                            <h6>Our Services</h6>
                            <h2>Online Banking at Your <br />Fingertips</h2>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                            <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                            <div className="inner-box">
                                                <div className="shape"></div>
                                                <div className="icon-box"><i className="icon-12"></i></div>
                                                <h4><Link href="/service-details">Digital Banking</Link></h4>
                                                <ul className="list-item clearfix">
                                                <li>Bank & savings accounts</li>
                                                <li>Credit cards</li>
                                                <li>Personal loans</li>
                                                </ul>
                                            </div>
                                            </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="shape"></div>
                                        <div className="icon-box"><i className="icon-13"></i></div>
                                        <h4><Link href="/service-details-2">Mobile & Web Banking</Link></h4>
                                        <ul className="list-item clearfix">
                                            <li>Instant Access</li>
                                            <li>Savings Fixed Term</li>
                                            <li>Savings Instant</li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="shape"></div>
                                        <div className="icon-box"><i className="icon-14"></i></div>
                                        <h4><Link href="/service-details-3">Insurance Policies</Link></h4>
                                        <ul className="list-item clearfix">
                                            <li>Pet insurance</li>
                                            <li>Transport Insurance</li>
                                            <li>Accident insurance</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one wow fadeInUp animated" data-wow-delay="900ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="shape"></div>
                                        <div className="icon-box"><i className="icon-15"></i></div>
                                        <h4><Link href="/service-details-4">Home & Property Loan</Link></h4>
                                        <ul className="list-item clearfix">
                                            <li>Residential Mortgages</li>
                                            <li>Buy-to-let Mortgages</li>
                                            <li>Building Mortgages</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="shape"></div>
                                        <div className="icon-box"><i className="icon-16"></i></div>
                                        <h4><Link href="/service-details-5">All Bank Account</Link></h4>
                                        <ul className="list-item clearfix">
                                            <li>nstant Access Savings</li>
                                            <li>Instant Access Cash</li>
                                            <li>Young Savers Account</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="shape"></div>
                                        <div className="icon-box"><i className="icon-17"></i></div>
                                        <h4><Link href="/service-details-6">borrowing accounts</Link></h4>
                                        <ul className="list-item clearfix">
                                            <li>Bank Credit Card</li>
                                            <li>Setter personal loan</li>
                                            <li>Overdraft</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="shape"></div>
                                        <div className="icon-box"><i className="icon-18"></i></div>
                                        <h4><Link href="/service-details-7">Private Banking</Link></h4>
                                        <ul className="list-item clearfix">
                                            <li>Dedicated personal service</li>
                                            <li>Specialist teams</li>
                                            <li>Tailored products</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one wow fadeInUp animated" data-wow-delay="900ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="shape"></div>
                                        <div className="icon-box"><i className="icon-19"></i></div>
                                        <h4><Link href="/service-details-8">Fixed term accounts</Link></h4>
                                        <ul className="list-item clearfix">
                                            <li>Fixed Term Saving</li>
                                            <li>Fixed Rate Cash</li>
                                            <li>Resume your Current</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* service-style-two end */}
 
                    {/* testimonial-style-two */}
                    <section className="testimonial-style-two service-page-one pt_120 pb_120">
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
                                    <TestimonialSlider03 />                        
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
                                <form method="post" action="/contact">
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