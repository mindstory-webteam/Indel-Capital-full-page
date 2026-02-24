"use client";
import Link from "next/link";

export default function RiskManagement() {
    return (
        <>
            <style jsx>{`
                .risk-section {
                    padding: 60px 0;
                    background-color: #ffffff;
                    position: relative;
                    overflow: hidden;
                }
                .risk-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 15px;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    flex-direction: row-reverse; 
                }
                
                .risk-pillars-col {
                    flex: 0 0 50%;
                    max-width: 50%;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 20px;
                    position: relative;
                }
                .pillar-card {
                    background: #fcfdfe;
                    padding: 30px 20px;
                    border-radius: 15px;
                    text-align: center;
                    /* Use a transparent border initially to prevent layout jumping */
                    border: 1px solid #f1f5f9;
                    transition: border-color 0.4s ease;
                    box-sizing: border-box;
                }
                .pillar-card:nth-child(even) {
                    transform: translateY(30px); /* Keep the initial staggered layout */
                }

                /* UPDATED HOVER STATE */
                .pillar-card:hover {
                    /* Only changing the border color */
                    border-color: #eb2525;
                    /* Removed transform, background, and scale */
                }

                .pillar-icon {
                    width: 50px;
                    height: 50px;
                    background: #fff1f1;
                    color: #eb2525;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 15px;
                    font-size: 20px;
                    font-weight: bold;
                }
                .pillar-card h5 {
                    font-size: 16px;
                    font-weight: 700;
                    color: #1f2937;
                    margin-bottom: 8px;
                }
                .pillar-card p {
                    font-size: 13px;
                    color: #6b7280;
                    line-height: 1.4;
                    margin: 0;
                }

                .risk-content-col {
                    flex: 0 0 50%;
                    max-width: 50%;
                    padding-right: 60px; 
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
                    font-weight: 800;
                }
                .description {
                    font-size: 18px;
                    color: #4b5563;
                    line-height: 1.7;
                    margin-bottom: 35px;
                }
                
                .framework-list {
                    list-style: none;
                    padding: 0;
                    margin-bottom: 40px;
                }
                .framework-list li {
                    position: relative;
                    padding-left: 28px;
                    margin-bottom: 12px;
                    color: #1f2937;
                    font-weight: 600;
                }
                .framework-list li::before {
                    content: '✓';
                    position: absolute;
                    left: 0;
                    color: #eb2525;
                    font-weight: 900;
                }

                @media (max-width: 991px) {
                    .risk-container { flex-direction: column; }
                    .risk-pillars-col, .risk-content-col {
                        flex: 0 0 100%;
                        max-width: 100%;
                        padding-right: 0;
                    }
                    .risk-pillars-col { margin-bottom: 80px; }
                    .pillar-card:nth-child(even) { transform: translateY(0); }
                }
            `}</style>

            <section className="risk-section">
                <div className="risk-container">
                    
                    <div className="risk-pillars-col">
                        <div className="pillar-card">
                            <div className="pillar-icon">01</div>
                            <h5>Identify</h5>
                            <p>Continuous monitoring of market threats.</p>
                        </div>
                        <div className="pillar-card">
                            <div className="pillar-icon">02</div>
                            <h5>Analyze</h5>
                            <p>Deep-dive impact assessment and modeling.</p>
                        </div>
                        <div className="pillar-card">
                            <div className="pillar-icon">03</div>
                            <h5>Mitigate</h5>
                            <p>Executing strategic defensive maneuvers.</p>
                        </div>
                        <div className="pillar-card">
                            <div className="pillar-icon">04</div>
                            <h5>Review</h5>
                            <p>Regular auditing for compliance & safety.</p>
                        </div>
                    </div>

                    <div className="risk-content-col">
                        <span className="tagline">Risk Management</span>
                        <h2 className="main-title">A Multi-Layered Defense For Your Capital.</h2>
                        <p className="description">
                            Our risk framework pillars are designed to provide institutional-grade 
                            protection for private portfolios, ensuring stability even during 
                            high-velocity market shifts.
                        </p>
                        
                        <ul className="framework-list">
                            <li>Real-time Volatility Tracking</li>
                            <li>Automated Compliance Guardrails</li>
                            <li>Strategic Asset Correlation Analysis</li>
                        </ul>

                        <div className="btn-box">
                            <Link href="/framework" className="theme-btn btn-one">Explore Framework</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}