'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {
    
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Career Details">
                <div>

                    <section className="career-details pt_120 pb_120">
                        <div className="auto-container">
                            <div className="row clearfix">
                            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                                <div className="career-details-content">
                                <div className="content-one mb_60">
                                    <h2>Application Technical Analyst</h2>
                                    <span>Marketing Department</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take action against fraud. See it the Security Center for and Mobile and Online Banking. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo semila diam et, sollicitudin eget. Tellus velit etiam elit, mi pretium eu. Suspendisse imperdiet enim ore elit, eu vestibulum enim imperdiet viverra. Element um habitant.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take action against fraud. See it the Security Center for and Mobile and Online Banking. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo semila diam et, sollicitudin eget. Tellus velit etiam elit,</p>
                                </div>
                                <div className="content-two mb_60">
                                    <h3>What will You be Doing?</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take action against fraud. See it the Security Center for and Mobile and Online Banking. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo semila diam et, sollicitudin eget. Tellus velit etiam elit, mi pretium eu. Suspendisse imperdiet enim ore elit, eu vestibulum enim imperdiet viverra. Element um habitant</p>
                                    <ul className="list-style-one clearfix">
                                    <li>Assisting in the development of an optimized operating model between Cyber, Fraud, and Financial Crime teams in intelligence-driven defense, prevention, and detection</li>
                                    <li>Review and approval of client communications, transactions, account openings, non-target customer leads, cross-border travel, and policy exception requests</li>
                                    <li>Review, approval, and maintenance of relevant Policies and Procedures (WSPs, KODs)</li>
                                    <li>Risk Management Information System / report review, resolution, escalations</li>
                                    </ul>
                                </div>
                                <div className="content-three mb_80">
                                    <h3>Skills You’ll Need</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take action against fraud. See it the Security Center for and Mobile and Online Banking.</p>
                                    <ul className="list-style-one clearfix">
                                    <li>Experience and understanding of working in either cyber-fraud intelligence collection & analysis or cyber-enabled fraud prevention and detection</li>
                                    <li>Understanding of malicious tools used by cyber adversaries to target the financial sector</li>
                                    <li>Significant Understanding of eBanking Trojans, POS/ATM malware, mobile malware, webinjects, and phishing kits</li>
                                    <li>Excellent Experience and understanding of managing external vendors to ensure optimal use of the service</li>
                                    </ul>
                                </div>
                                <div className="content-four">
                                    <div className="btn-box"><Link href="/career-details" className="theme-btn btn-one">Apply For Job</Link></div>
                                    <ul className="social-links clearfix">
                                    <li><Link href="/career-details"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="/career-details"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href="/career-details"><i className="fab fa-pinterest-p"></i></Link></li>
                                    <li><Link href="/career-details"><i className="fab fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                <div className="career-sidebar ml_40">
                                <h4>Information</h4>
                                <ul className="info-list clearfix">
                                    <li>
                                    <i className="icon-22"></i>
                                    <h6>Salary</h6>
                                    <p>$90,000 - $ 100,000 Per Year</p>
                                    </li>
                                    <li>
                                    <i className="icon-36"></i>
                                    <h6>Application Period</h6>
                                    <p>12 Jun 2023 - 25 July 2023</p>
                                    </li>
                                    <li>
                                    <i className="icon-37"></i>
                                    <h6>Experience</h6>
                                    <p>At least 05 years in Banking</p>
                                    </li>
                                    <li>
                                    <i className="icon-34"></i>
                                    <h6>Job Location</h6>
                                    <p>Manhattan, New York, USA</p>
                                    </li>
                                    <li>
                                    <i className="icon-32"></i>
                                    <h6>Age Limit</h6>
                                    <p>Age 25 to 32 years old</p>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
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