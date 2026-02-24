"use client";
import Link from "next/link";

export default function ApproachOverview() {
    return (
        <>
            <style jsx>{`
                .approach-section {
                    padding: 80px 0;
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

                .img-wrapper {
                    position: relative;
                    padding: 40px;
                }
                .img-wrapper img {
                    width: 100%;
                    height: auto;
                    border-radius: 60px 5px 60px 5px;
                    z-index: 2;
                    position: relative;
                    object-fit: cover;
                    display: block;
                }
                .img-shape {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    right: 70px;
                    bottom: 10px;
                    border: 2px solid #eb2525;
                    border-radius: 60px 5px 60px 5px;
                    z-index: 1;
                }
                .img-wrapper::after {
                    content: "";
                    position: absolute;
                    top: 70px;
                    left: 70px;
                    right: 10px;
                    bottom: -20px;
                    background: #f1f5f9; 
                    border-radius: 60px 5px 60px 5px;
                    z-index: 0;
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
                
                @media (max-width: 991px) {
                    .approach-image-col, .approach-content-col {
                        flex: 0 0 100%;
                        max-width: 100%;
                    }
                    .approach-content-col {
                        padding-left: 15px;
                        margin-top: 50px;
                    }
                    .img-wrapper {
                        padding: 20px;
                    }
                }
            `}</style>

            <section className="approach-section">
                <div className="approach-container">
                    <div className="approach-image-col">
                        <div className="img-wrapper">
                            <div className="img-shape"></div>
                            <img src="assets/images/service/service-1.jpg" alt="Our Approach Strategy" />
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
                            <Link href="/" className="theme-btn btn-one">Explore More</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}