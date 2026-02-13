'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function Home() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Currency Exchange">
                <div>
                    <section className="exchange-section pt_120 pb_90 centred">
                        <div className="auto-container">
                            <div className="sec-title mb_70">
                            <h6>Exchange Currency</h6>
                            <h2>Foreign Exchange Rate</h2>
                            </div>
                            <div className="tabs-box">
                                <div className="tab-btn-box p_relative mb_60">
                                    <ul className="tab-btns tab-buttons" role="tablist">
                                        <li className="nav-link" onClick={() => handleOnClick(1)}>
                                            <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}>Foreign Currency</a>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}>Crypto Currency</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                        <div className="row clearfix">
                                            <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                                <div className="exchange-block-one">
                                                    <div className="inner-box">
                                                    <h5>USD<i className="icon-38"></i></h5>
                                                    <figure className="flag">
                                                        <img src="assets/images/icons/flag-1.png" alt="" />
                                                    </figure>
                                                    <ul className="lower-box clearfix">
                                                        <li>
                                                        <span>Send</span>
                                                        <span>50.30</span>
                                                        </li>
                                                        <li>
                                                        <span>Receive</span>
                                                        <span>45.30</span>
                                                        </li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                                <div className="exchange-block-one red">
                                                    <div className="inner-box">
                                                    <h5>GBP<i className="icon-39"></i></h5>
                                                    <figure className="flag">
                                                        <img src="assets/images/icons/flag-2.png" alt="" />
                                                    </figure>
                                                    <ul className="lower-box clearfix">
                                                        <li>
                                                        <span>Send</span>
                                                        <span>60.30</span>
                                                        </li>
                                                        <li>
                                                        <span>Receive</span>
                                                        <span>55.30</span>
                                                        </li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                                <div className="exchange-block-one red">
                                                    <div className="inner-box">
                                                    <h5>INR<i className="icon-39"></i></h5>
                                                    <figure className="flag">
                                                        <img src="assets/images/icons/flag-3.png" alt="" />
                                                    </figure>
                                                    <ul className="lower-box clearfix">
                                                        <li>
                                                        <span>Send</span>
                                                        <span>20.30</span>
                                                        </li>
                                                        <li>
                                                        <span>Receive</span>
                                                        <span>40.30</span>
                                                        </li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                                <div className="exchange-block-one">
                                                    <div className="inner-box">
                                                    <h5>CAD<i className="icon-38"></i></h5>
                                                    <figure className="flag">
                                                        <img src="assets/images/icons/flag-4.png" alt="" />
                                                    </figure>
                                                    <ul className="lower-box clearfix">
                                                        <li>
                                                        <span>Send</span>
                                                        <span>30.30</span>
                                                        </li>
                                                        <li>
                                                        <span>Receive</span>
                                                        <span>32.30</span>
                                                        </li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                                <div className="exchange-block-one">
                                                    <div className="inner-box">
                                                    <h5>YAN<i className="icon-38"></i></h5>
                                                    <figure className="flag">
                                                        <img src="assets/images/icons/flag-5.png" alt="" />
                                                    </figure>
                                                    <ul className="lower-box clearfix">
                                                        <li>
                                                        <span>Send</span>
                                                        <span>90.30</span>
                                                        </li>
                                                        <li>
                                                        <span>Receive</span>
                                                        <span>95.30</span>
                                                        </li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                                <div className="exchange-block-one red">
                                                    <div className="inner-box">
                                                    <h5>AUD<i className="icon-39"></i></h5>
                                                    <figure className="flag">
                                                        <img src="assets/images/icons/flag-6.png" alt="" />
                                                    </figure>
                                                    <ul className="lower-box clearfix">
                                                        <li>
                                                        <span>Send</span>
                                                        <span>50.30</span>
                                                        </li>
                                                        <li>
                                                        <span>Receive</span>
                                                        <span>45.30</span>
                                                        </li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                                <div className="exchange-block-one">
                                                    <div className="inner-box">
                                                    <h5>BDT<i className="icon-38"></i></h5>
                                                    <figure className="flag">
                                                        <img src="assets/images/icons/flag-7.png" alt="" />
                                                    </figure>
                                                    <ul className="lower-box clearfix">
                                                        <li><span>Send</span><span>45.30</span></li>
                                                        <li><span>Receive</span><span>45.30</span></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                                <div className="exchange-block-one red">
                                                    <div className="inner-box">
                                                    <h5>EUR<i className="icon-39"></i></h5>
                                                    <figure className="flag">
                                                        <img src="assets/images/icons/flag-8.png" alt="" />
                                                    </figure>
                                                    <ul className="lower-box clearfix">
                                                        <li><span>Send</span><span>90.30</span></li>
                                                        <li><span>Receive</span><span>60.30</span></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                                <div className="exchange-block-one red">
                                                    <div className="inner-box">
                                                    <h5>YEN<i className="icon-39"></i></h5>
                                                    <figure className="flag">
                                                        <img src="assets/images/icons/flag-9.png" alt="" />
                                                    </figure>
                                                    <ul className="lower-box clearfix">
                                                        <li><span>Send</span><span>20.30</span></li>
                                                        <li><span>Receive</span><span>60.30</span></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                                <div className="exchange-block-one">
                                                    <div className="inner-box">
                                                    <h5>WON<i className="icon-38"></i></h5>
                                                    <figure className="flag">
                                                        <img src="assets/images/icons/flag-10.png" alt="" />
                                                    </figure>
                                                    <ul className="lower-box clearfix">
                                                        <li><span>Send</span><span>40.30</span></li>
                                                        <li><span>Receive</span><span>32.30</span></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                                <div className="exchange-block-one">
                                                    <div className="inner-box">
                                                    <h5>PKR<i className="icon-38"></i></h5>
                                                    <figure className="flag">
                                                        <img src="assets/images/icons/flag-11.png" alt="" />
                                                    </figure>
                                                    <ul className="lower-box clearfix">
                                                        <li><span>Send</span><span>90.30</span></li>
                                                        <li><span>Receive</span><span>55.30</span></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                                <div className="exchange-block-one red">
                                                    <div className="inner-box">
                                                    <h5>SGD<i className="icon-39"></i></h5>
                                                    <figure className="flag">
                                                        <img src="assets/images/icons/flag-12.png" alt="" />
                                                    </figure>
                                                    <ul className="lower-box clearfix">
                                                        <li><span>Send</span><span>40.30</span></li>
                                                        <li><span>Receive</span><span>45.30</span></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                    <div className="row clearfix">
                                            <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                                <div className="exchange-block-one red">
                                                    <div className="inner-box">
                                                    <h5>INR<i className="icon-39"></i></h5>
                                                    <figure className="flag">
                                                        <img src="assets/images/icons/flag-3.png" alt="" />
                                                    </figure>
                                                    <ul className="lower-box clearfix">
                                                        <li>
                                                        <span>Send</span>
                                                        <span>20.30</span>
                                                        </li>
                                                        <li>
                                                        <span>Receive</span>
                                                        <span>40.30</span>
                                                        </li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                                <div className="exchange-block-one">
                                                    <div className="inner-box">
                                                    <h5>CAD<i className="icon-38"></i></h5>
                                                    <figure className="flag">
                                                        <img src="assets/images/icons/flag-4.png" alt="" />
                                                    </figure>
                                                    <ul className="lower-box clearfix">
                                                        <li>
                                                        <span>Send</span>
                                                        <span>30.30</span>
                                                        </li>
                                                        <li>
                                                        <span>Receive</span>
                                                        <span>32.30</span>
                                                        </li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                                <div className="exchange-block-one">
                                                    <div className="inner-box">
                                                    <h5>YAN<i className="icon-38"></i></h5>
                                                    <figure className="flag">
                                                        <img src="assets/images/icons/flag-5.png" alt="" />
                                                    </figure>
                                                    <ul className="lower-box clearfix">
                                                        <li>
                                                        <span>Send</span>
                                                        <span>90.30</span>
                                                        </li>
                                                        <li>
                                                        <span>Receive</span>
                                                        <span>95.30</span>
                                                        </li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                                <div className="exchange-block-one red">
                                                    <div className="inner-box">
                                                    <h5>AUD<i className="icon-39"></i></h5>
                                                    <figure className="flag">
                                                        <img src="assets/images/icons/flag-6.png" alt="" />
                                                    </figure>
                                                    <ul className="lower-box clearfix">
                                                        <li>
                                                        <span>Send</span>
                                                        <span>50.30</span>
                                                        </li>
                                                        <li>
                                                        <span>Receive</span>
                                                        <span>45.30</span>
                                                        </li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                                <div className="exchange-block-one">
                                                    <div className="inner-box">
                                                    <h5>BDT<i className="icon-38"></i></h5>
                                                    <figure className="flag">
                                                        <img src="assets/images/icons/flag-7.png" alt="" />
                                                    </figure>
                                                    <ul className="lower-box clearfix">
                                                        <li><span>Send</span><span>45.30</span></li>
                                                        <li><span>Receive</span><span>45.30</span></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                                <div className="exchange-block-one red">
                                                    <div className="inner-box">
                                                    <h5>EUR<i className="icon-39"></i></h5>
                                                    <figure className="flag">
                                                        <img src="assets/images/icons/flag-8.png" alt="" />
                                                    </figure>
                                                    <ul className="lower-box clearfix">
                                                        <li><span>Send</span><span>90.30</span></li>
                                                        <li><span>Receive</span><span>60.30</span></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                                <div className="exchange-block-one red">
                                                    <div className="inner-box">
                                                    <h5>YEN<i className="icon-39"></i></h5>
                                                    <figure className="flag">
                                                        <img src="assets/images/icons/flag-9.png" alt="" />
                                                    </figure>
                                                    <ul className="lower-box clearfix">
                                                        <li><span>Send</span><span>20.30</span></li>
                                                        <li><span>Receive</span><span>60.30</span></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                                <div className="exchange-block-one">
                                                    <div className="inner-box">
                                                    <h5>WON<i className="icon-38"></i></h5>
                                                    <figure className="flag">
                                                        <img src="assets/images/icons/flag-10.png" alt="" />
                                                    </figure>
                                                    <ul className="lower-box clearfix">
                                                        <li><span>Send</span><span>40.30</span></li>
                                                        <li><span>Receive</span><span>32.30</span></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                                <div className="exchange-block-one">
                                                    <div className="inner-box">
                                                    <h5>USD<i className="icon-38"></i></h5>
                                                    <figure className="flag">
                                                        <img src="assets/images/icons/flag-1.png" alt="" />
                                                    </figure>
                                                    <ul className="lower-box clearfix">
                                                        <li>
                                                        <span>Send</span>
                                                        <span>50.30</span>
                                                        </li>
                                                        <li>
                                                        <span>Receive</span>
                                                        <span>45.30</span>
                                                        </li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                                <div className="exchange-block-one red">
                                                    <div className="inner-box">
                                                    <h5>GBP<i className="icon-39"></i></h5>
                                                    <figure className="flag">
                                                        <img src="assets/images/icons/flag-2.png" alt="" />
                                                    </figure>
                                                    <ul className="lower-box clearfix">
                                                        <li>
                                                        <span>Send</span>
                                                        <span>60.30</span>
                                                        </li>
                                                        <li>
                                                        <span>Receive</span>
                                                        <span>55.30</span>
                                                        </li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                                <div className="exchange-block-one">
                                                    <div className="inner-box">
                                                    <h5>PKR<i className="icon-38"></i></h5>
                                                    <figure className="flag">
                                                        <img src="assets/images/icons/flag-11.png" alt="" />
                                                    </figure>
                                                    <ul className="lower-box clearfix">
                                                        <li><span>Send</span><span>90.30</span></li>
                                                        <li><span>Receive</span><span>55.30</span></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-4 col-sm-12 exchange-block">
                                                <div className="exchange-block-one red">
                                                    <div className="inner-box">
                                                    <h5>SGD<i className="icon-39"></i></h5>
                                                    <figure className="flag">
                                                        <img src="assets/images/icons/flag-12.png" alt="" />
                                                    </figure>
                                                    <ul className="lower-box clearfix">
                                                        <li><span>Send</span><span>40.30</span></li>
                                                        <li><span>Receive</span><span>45.30</span></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

