import React from 'react';
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Director Details">
                <div>
                     {/* Team-section */}
                    <section className="team-details pt_120 pb_120">
                        <div className="auto-container">
                            <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content-box mr_25">
                                <h2>Brendan Fraser</h2>
                                <span className="designation">Head of Marketing</span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo semila diam et, sollicitudin eget. Tellus
                                    velit etiam elit, mi pretium eu. Suspendisse imperdiet enim ornare elit, eu vestibulum enim imperdiet
                                    viverra.
                                </p>
                                <figure className="signature">
                                    <img src="assets/images/icons/signature-1.png" alt="" />
                                </figure>
                                <h3>Contact Details</h3>
                                <ul className="info-list mb_30 clearfix">
                                    <li>
                                    <span>Expertise:</span> Strategy, Leadership
                                    </li>
                                    <li>
                                    <span>Email:</span> <Link href="mailto:brendan@gmail.com">brendan@gmail.com</Link>
                                    </li>
                                    <li>
                                    <span>Phone:</span> <Link href="tel:913336660021">(+91) 333 666 0021</Link>
                                    </li>
                                </ul>
                                <ul className="social-links clearfix">
                                    <li>
                                    <Link href="/team-details">
                                        <i className="fab fa-facebook-f"></i>
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="/team-details">
                                        <i className="fab fa-twitter"></i>
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href="/team-details">
                                        <i className="fab fa-instagram"></i>
                                    </Link>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                <div className="image_block_three">
                                <div className="image-box pl_80">
                                    <div className="image-shape">
                                    <div className="shape-1" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                                    <div className="shape-2" style={{ backgroundImage: 'url(assets/images/shape/shape-11.png)' }}></div>
                                    </div>
                                    <figure className="image">
                                    <img src="assets/images/team/team-9.jpg" alt="" />
                                    </figure>
                                    <div className="experience-box">
                                    <div className="inner">
                                        <h2>
                                        25+<span>Years</span>
                                        </h2>
                                        <h5>of Experience <br/> in the Finance <br/> Service</h5>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                    {/* Team-section end */}

                    {/* App-section */}
                    <section className="apps-section alternat-2 pt_120 pb_120">
                        <div className="pattern-layer">
                            <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                            <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-16.png)' }}></div>
                        </div>
                        <div className="image-layer">
                            <figure className="image-1">
                            <img src="assets/images/resource/mockup-1.png" alt="" />
                            </figure>
                            <figure className="image-2">
                            <img src="assets/images/resource/mockup-2.png" alt="" />
                            </figure>
                        </div>
                        <div className="auto-container">
                            <div className="row clearfix">
                            <div className="col-xl-6 col-lg-12 col-md-12 offset-xl-6 content-column">
                                <div className="content-box ml_50">
                                <div className="sec-title light mb_20">
                                    <h6>Mobile App</h6>
                                    <h2>Get the Fastest and Most Secure Banking</h2>
                                </div>
                                <div className="text-box mb_50">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take action against
                                    fraud. See it the Security Center for and Mobile and Online Banking.
                                    </p>
                                </div>
                                <div className="btn-box">
                                    <Link href="/" className="play-store mr_20">
                                    <img src="assets/images/icons/icon-2.png" alt="" />
                                    <span>get it on</span>
                                    Google Play
                                    </Link>
                                    <Link href="/" className="play-store">
                                    <img src="assets/images/icons/icon-3.png" alt="" />
                                    <span>Download on the</span>
                                    App Store
                                    </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                    {/* App-section end */}

                </div>
               
            </Layout>
        </>
    )
}

