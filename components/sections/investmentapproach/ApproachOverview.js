"use client";
import Link from "next/link";
import LiquidButton from '@/components/LiquidButton.js';

export default function ApproachOverview() {
    return (
        <>
            <style jsx>{`
                .approach-section {
                    padding: 65px 0;
                    background-color: #fcfdfe;
                    overflow: hidden;
                }
                .approach-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 15px;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                }

                .approach-image-col {
                    flex: 0 0 50%;
                    max-width: 50%;
                    position: relative;
                }

                .img-frame {
                    position: relative;
                    padding: 40px 40px 40px 20px;
                }

                .photo-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: auto auto;
                    gap: 10px;
                    position: relative;
                    z-index: 2;
                }

                .photo-a {
                    grid-column: 1;
                    grid-row: 1 / 3;
                    border-radius: 3px;
                    overflow: hidden;
                }
                .photo-a img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    filter: saturate(0.85);
                    min-height: 320px;
                }

                .photo-b {
                    grid-column: 2;
                    grid-row: 1;
                    border-radius: 3px;
                    overflow: hidden;
                    margin-top: 30px;
                }
                .photo-b img {
                    width: 100%;
                    height: 160px;
                    object-fit: cover;
                    object-position: center top;
                    display: block;
                    filter: saturate(0.85);
                }

                .accent-card {
                    grid-column: 2;
                    grid-row: 2;
                    background: #17479e;
                    border-radius: 3px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    padding: 20px 18px;
                    margin-top: 0;
                }
                .accent-card .ac-icon {
                    width: 32px;
                    height: 32px;
                    margin-bottom: 10px;
                }
                .accent-card .ac-icon svg {
                    width: 32px;
                    height: 32px;
                    stroke: #fff;
                    fill: none;
                    stroke-width: 1.8;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                }
                .accent-card .ac-text {
                    font-size: 13px;
                    font-weight: 700;
                    color: #fff;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    line-height: 1.4;
                }

            

                .approach-content-col {
                    flex: 0 0 50%;
                    max-width: 50%;
                    padding-left: 70px;
                }
                .tagline {
                    color: #eb2525;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    display: block;
                    margin-bottom: 15px;
                }
                .main-title {
                    font-size: 42px;
                    line-height: 1.2;
                    color: #1f2937;
                    margin-bottom: 25px;
                }
                .description {
                    font-size: 18px;
                    color: #4b5563;
                    line-height: 1.7;
                    margin-bottom: 30px;
                }
                .feature-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    margin-bottom: 40px;
                }
                .feature-item {
                    display: flex;
                    align-items: center;
                    font-weight: 600;
                    color: #374151;
                }
                .icon-dot {
                    height: 10px;
                    width: 10px;
                    background-color: #eb2525;
                    border-radius: 50%;
                    margin-right: 12px;
                }

                .btn-wrapper {
                    width: 200px;
                    height: 55px;
                }

                @media (max-width: 991px) {
                    .approach-image-col, .approach-content-col {
                        flex: 0 0 100%;
                        max-width: 100%;
                    }
                    .approach-content-col {
                        padding-left: 15px;
                        margin-top: 50px;
                    }
                    .img-frame {
                        padding: 20px;
                    }
                    .photo-a img {
                        min-height: 220px;
                    }
                    .btn-wrapper {
                        margin: 0 auto;
                    }
                }
            `}</style>

            <section className="approach-section">
                <div className="approach-container">

                    <div className="approach-image-col">
                        <div className="img-frame">

                            <div className="photo-grid">

                                <div className="photo-a">
                                    <img src="assets/images/service/service-1.jpg" alt="Financial Strategy" />
                                </div>

                                <div className="photo-b">
                                    <img src="assets/images/service/service-1.jpg" alt="Market Analysis" />
                                </div>

                                <div className="accent-card">
                                    <div className="ac-icon">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                                            <path d="M2 17l10 5 10-5"/>
                                            <path d="M2 12l10 5 10-5"/>
                                        </svg>
                                    </div>
                                    <span className="ac-text">Structured<br />Investment<br />Framework</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="approach-content-col">
                        <span className="tagline">Our Approach</span>
                        <h2 className="main-title">A Structured Path to Financial Freedom.</h2>
                        <p className="description">
                            We don't just provide advice; we build frameworks. Our methodology is designed to 
                            adapt to market volatility while keeping your long-term goals in clear focus.
                        </p>
                        
                        <div className="feature-grid">
                            <div className="feature-item"><span className="icon-dot"></span> Risk Assessment</div>
                            <div className="feature-item"><span className="icon-dot"></span> Market Analysis</div>
                            <div className="feature-item"><span className="icon-dot"></span> Growth Tracking</div>
                            <div className="feature-item"><span className="icon-dot"></span> Asset Protection</div>
                        </div>

                        <div className="btn-box">
                            <div className="btn-wrapper">
                                <Link href="/" style={{ display: 'block', width: '100%', height: '100%', textDecoration: 'none' }}>
                                    <LiquidButton text="Explore More" bgcolor="#eb2525" />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}