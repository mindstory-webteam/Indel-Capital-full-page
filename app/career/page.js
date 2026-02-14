'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
    

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Career Page">
                <div>
                     {/* About-section  */}
                    <section className="about-style-two pt_120 pb_120">
                        <div className="auto-container">
                            <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content_block_three">
                                <div className="content-box mr_110">
                                    <div className="sec-title mb_20">
                                    <h6>About US</h6>
                                    <h2>The Finance Guide on All Stage of Life.</h2>
                                    </div>
                                    <div className="text-box mb_40">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take action against
                                        fraud. See it the Security Center for and Mobile and Online Banking.
                                    </p>
                                    <ul className="list-style-one clearfix">
                                        <li>Improving all types of opportunities</li>
                                        <li>Quick solutions for daily problems</li>
                                        <li>Community that grows larger</li>
                                    </ul>
                                    </div>
                                    <div className="btn-box">
                                    <Link href="/about" className="theme-btn btn-one">
                                        Discover More
                                    </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                <div className="image_block_two">
                                <div className="image-box">
                                
                                    <div className="row clearfix">
                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                        <div className="image-inner">
                                        <figure className="image mb_30">
                                            <img src="assets/images/resource/about-2.jpg" alt="" />
                                        </figure>
                                        <div className="experience-box">
                                            <h2>
                                            25<span>Years</span>
                                            </h2>
                                            <h5>of Experience in the Finance Service</h5>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                        <div className="image-inner">
                                        <figure className="image pt_115">
                                            <img src="assets/images/resource/about-3.jpg" alt="" />
                                        </figure>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                     {/* About-section end */}

                    {/* Career-section  */}
                     <section className="career-section pt_120 pb_90">
                        <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/career-bg.jpg)' }}></div>
                        <div className="auto-container">
                            <div className="sec-title centred mb_70">
                            <h6>Current JObs</h6>
                            <h2>Current Job Positions</h2>
                            </div>
                            <div className="inner-container">
                                <div className="career-block-one">
                                    <div className="inner-box">
                                    <div className="author-box">
                                        <figure className="thumb-box"><img src="assets/images/resource/career-1.jpg" alt="" /></figure>
                                        <div className="text-box">
                                        <h3>Application Technical Analyst</h3>
                                        <span className="designation">Marketing Department</span>
                                        </div>
                                    </div>
                                    <ul className="info-box clearfix">
                                        <li><i className="icon-34"></i>Manhattan, New York</li>
                                        <li><i className="icon-35"></i>22th July, 2023</li>
                                    </ul>
                                    <div className="btn-box">
                                        <Link href="/career-details">Apply Now</Link>
                                    </div>
                                    </div>
                                </div>
                                <div className="career-block-one">
                                    <div className="inner-box">
                                    <div className="author-box">
                                        <figure className="thumb-box"><img src="assets/images/resource/career-2.jpg" alt="" /></figure>
                                        <div className="text-box">
                                        <h3>Marketing Coordinator</h3>
                                        <span className="designation">Marketing Department</span>
                                        </div>
                                    </div>
                                    <ul className="info-box clearfix">
                                        <li><i className="icon-34"></i>Manhattan, New York</li>
                                        <li><i className="icon-35"></i>22th July, 2023</li>
                                    </ul>
                                    <div className="btn-box">
                                        <Link href="/career-details">Apply Now</Link>
                                    </div>
                                    </div>
                                </div>
                                <div className="career-block-one">
                                    <div className="inner-box">
                                    <div className="author-box">
                                        <figure className="thumb-box"><img src="assets/images/resource/career-3.jpg" alt="" /></figure>
                                        <div className="text-box">
                                        <h3>Software Development Manager</h3>
                                        <span className="designation">Marketing Department</span>
                                        </div>
                                    </div>
                                    <ul className="info-box clearfix">
                                        <li><i className="icon-34"></i>Manhattan, New York</li>
                                        <li><i className="icon-35"></i>22th July, 2023</li>
                                    </ul>
                                    <div className="btn-box">
                                        <Link href="/career-details">Apply Now</Link>
                                    </div>
                                    </div>
                                </div>
                                <div className="career-block-one">
                                    <div className="inner-box">
                                    <div className="author-box">
                                        <figure className="thumb-box"><img src="assets/images/resource/career-4.jpg" alt="" /></figure>
                                        <div className="text-box">
                                        <h3>Shell - Cardamon - DC-01</h3>
                                        <span className="designation">Marketing Department</span>
                                        </div>
                                    </div>
                                    <ul className="info-box clearfix">
                                        <li><i className="icon-34"></i>Manhattan, New York</li>
                                        <li><i className="icon-35"></i>22th July, 2023</li>
                                    </ul>
                                    <div className="btn-box">
                                        <Link href="/career-details">Apply Now</Link>
                                    </div>
                                    </div>
                                </div>
                                <div className="career-block-one">
                                    <div className="inner-box">
                                    <div className="author-box">
                                        <figure className="thumb-box"><img src="assets/images/resource/career-5.jpg" alt="" /></figure>
                                        <div className="text-box">
                                        <h3>Office Manager</h3>
                                        <span className="designation">Marketing Department</span>
                                        </div>
                                    </div>
                                    <ul className="info-box clearfix">
                                        <li><i className="icon-34"></i>Manhattan, New York</li>
                                        <li><i className="icon-35"></i>22th July, 2023</li>
                                    </ul>
                                    <div className="btn-box">
                                        <Link href="/career-details">Apply Now</Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Career-section end */}

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