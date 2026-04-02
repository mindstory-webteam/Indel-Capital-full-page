"use client";
import Link from "next/link";
import LiquidButton from '@/components/LiquidButton.js';

export default function RiskManagement() {
    return (
        <>
            <style jsx>{`
                .risk-section {
                    padding: 32px 0;
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
                    border: 1px solid #f1f5f9;
                    transition: border-color 0.4s ease;
                    box-sizing: border-box;
                }
                .pillar-card:nth-child(even) {
                    transform: translateY(30px);
                }
                .pillar-card:hover {
                    border-color: #eb2525;
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
                    font-size: 38px;
                    line-height: 1.2;
                    color: #1f2937;
                    margin-bottom: 20px;
                    font-weight: 800;
                }
                .description {
                    font-size: 15px;
                    color: #4b5563;
                    line-height: 1.75;
                    margin-bottom: 16px;
                }
                .description-secondary {
                    font-size: 15px;
                    color: #4b5563;
                    line-height: 1.75;
                    margin-bottom: 0;
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

                @media (max-width: 575px) {
                    .main-title { font-size: 28px; }
                }
            `}</style>

            <section className="risk-section">
                <div className="risk-container">

                    {/* ── Cards column ── */}
                    <div className="risk-pillars-col">
                        <div className="pillar-card">
                            <div className="pillar-icon">01</div>
                            <h5>Secured Assets</h5>
                            <p>Instruments structured against immovable assets for strong underlying security.</p>
                        </div>
                        <div className="pillar-card">
                            <div className="pillar-icon">02</div>
                            <h5>Disciplined Evaluation</h5>
                            <p>Every lending opportunity assessed through rigorous credit and asset frameworks.</p>
                        </div>
                        <div className="pillar-card">
                            <div className="pillar-icon">03</div>
                            <h5>Capital Protection</h5>
                            <p>Balanced approach to growth that prioritises preservation of investor capital.</p>
                        </div>
                        <div className="pillar-card">
                            <div className="pillar-icon">04</div>
                            <h5>Financial Resilience</h5>
                            <p>Lower risk profile compared to unsecured or portfolio-linked structures.</p>
                        </div>
                    </div>

                    {/* ── Content column ── */}
                    <div className="risk-content-col">
                        <span className="tagline">Risk Management</span>
                        <h2 className="main-title">Structured for Stability.</h2>
                        <p className="description">
                            Our investment and lending philosophy is built around disciplined risk management.
                            By structuring our instruments on secured assets and deploying funds through carefully
                            evaluated lending opportunities, we aim to maintain a strong balance between growth
                            and capital protection.
                        </p>
                        <p className="description-secondary">
                            This asset-backed model supports a lower risk profile compared to many traditional
                            unsecured or portfolio-linked structures, ensuring that both investors and stakeholders
                            benefit from greater financial resilience.
                        </p>
                    </div>

                </div>
            </section>
        </>
    );
}