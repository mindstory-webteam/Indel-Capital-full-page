"use client";
import Link from "next/link";

export default function ValueCreation() {
    return (
        <>
            <style jsx>{`
                .value-section {
                    padding: 60px 0;
                    background-color: #fff; 
                    position: relative;
                }
                .value-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 15px;
                }
                .section-header {
                    text-align: center;
                    max-width: 700px;
                    margin: 0 auto 60px;
                }
                .tagline {
                    color: #eb2525;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    display: block;
                    margin-bottom: 10px;
                }
                .main-title {
                    font-size: 40px;
                    font-weight: 800;
                    color: #1f2937;
                    line-height: 1.2;
                }

                .value-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                }
                .value-item {
                    background: #ffffff;
                    padding: 40px 30px;
                    border-radius: 20px;
                    transition: all 0.3s ease;
                    border: 1px solid transparent;
                    height: 100%;
                }
                .value-item:hover {
                    transform: translateY(-10px);
                    border-color: #eb2525;
                }
                .icon-box {
                    width: 60px;
                    height: 60px;
                    background: #fdf2f2;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 25px;
                }
                .icon-box svg {
                    width: 30px;
                    height: 30px;
                    stroke: #eb2525;
                    fill: none;
                    stroke-width: 2;
                }
                .value-item h4 {
                    font-size: 22px;
                    font-weight: 700;
                    color: #1f2937;
                    margin-bottom: 15px;
                }
                .value-item p {
                    font-size: 16px;
                    color: #6b7280;
                    line-height: 1.6;
                }

                @media (max-width: 991px) {
                    .value-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 767px) {
                    .value-grid { grid-template-columns: 1fr; }
                    .main-title { font-size: 32px; }
                }
            `}</style>

            <section className="value-section">
                <div className="value-container">
                    <div className="section-header">
                        <span className="tagline">Value Creation</span>
                        <h2 className="main-title">Driving Sustainable Growth Through Expert Guidance</h2>
                    </div>

                    <div className="value-grid">
                        <div className="value-item">
                            <div className="icon-box">
                                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                            </div>
                            <h4>Operational Support</h4>
                            <p>Streamlining internal processes and enhancing workflow efficiency to ensure peak organizational performance.</p>
                        </div>

                        <div className="value-item">
                            <div className="icon-box">
                                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            </div>
                            <h4>Governance</h4>
                            <p>Implementing robust oversight frameworks and ethical standards to protect stakeholder interests and brand integrity.</p>
                        </div>

                        <div className="value-item">
                            <div className="icon-box">
                                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8l4 4-4 4M8 12h8"/></svg>
                            </div>
                            <h4>Strategic Guidance</h4>
                            <p>Providing data-driven insights and long-term roadmap planning to navigate complex market expansions.</p>
                        </div>
                    </div>

                    <div style={{textAlign: 'center', marginTop: '50px'}}>
                        <Link href="/services" className="theme-btn btn-one">Discover Our Impact</Link>
                    </div>
                </div>
            </section>
        </>
    );
}