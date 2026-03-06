'use client'
import Link from "next/link";
import { investmentPhilosophyData } from '@/public/assets/assest.js';
import LiquidButton from '@/components/LiquidButton.js';

export default function InvestmentPhilosophy() {
    const data = investmentPhilosophyData;

    return (
        <>
            <style jsx>{`
                .philosophy-section {
                    padding: 80px 0;
                    background-color: #ffffff;
                }
                
                .container-compact {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 24px;
                }

                .sub-title {
                    color: #eb2525;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    display: block;
                    margin-bottom: 10px;
                    font-size: 13px;
                    text-align: left;
                }
                
                .main-title {
                    font-size: clamp(28px, 5vw, 38px);
                    line-height: 1.2;
                    font-weight: 800;
                    color: #17479d;
                    margin-bottom: 20px;
                    text-align: left; 
                }

                .description-text {
                    font-size: 16px; 
                    line-height: 1.7;
                    color: #555;
                    margin-bottom: 25px;
                    text-align: left; 
                }

                .philosophy-list {
                    list-style: none;
                    padding: 0;
                    margin-bottom: 35px;
                    text-align: left; 
                }

                .philosophy-list li {
                    position: relative;
                    padding-left: 32px;
                    margin-bottom: 12px;
                    font-weight: 600;
                    color: #222;
                    font-size: 16px;
                }

                .philosophy-list li::before {
                    content: '✓';
                    position: absolute;
                    left: 0;
                    top: 2px;
                    width: 22px;
                    height: 22px;
                    background: #eb2525;
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 10px;
                }

                .btn-wrapper {
                    width: 200px;
                    height: 55px;
                    margin-top: 10px;
                }

                .main-img-wrapper {
                    position: relative;
                    z-index: 1;
                    border-radius: 30px; 
                    overflow: hidden; 
                    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
                    height: 450px; 
                    width: 100%;
                }

                .main-img-wrapper img {
                    width: 100%;
                    height: 100%; 
                    display: block;
                    border-radius: 30px;
                    transition: transform 0.5s ease;
                    object-fit: cover; 
                }

                .flex-row {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 40px;
                    justify-content: flex-start; 
                }

                .flex-col {
                    flex: 1;
                    min-width: 300px;
                }

                @media (max-width: 991px) {
                    .philosophy-section { padding: 60px 0; }
                    .flex-row { 
                        flex-direction: column; 
                        align-items: flex-start; 
                        gap: 30px; 
                    }
                    .flex-col { width: 100%; }
                    
                    .img-col {
                        order: -1;
                    }

                    .sub-title, .main-title, .description-text, .philosophy-list {
                        text-align: left !important;
                    }
                    .btn-wrapper { margin: 0; }
                    .main-img-wrapper { height: 350px; }
                }

                @media (max-width: 576px) {
                    .main-title { font-size: 26px; }
                    .main-img-wrapper { height: 280px; }
                }
            `}</style>

            <section className="philosophy-section">
                <div className="container-compact">
                    <div className="flex-row">
                        <div className="flex-col content-col">
                            <div className="content-box">
                                <span className="sub-title">{data.subTitle}</span>
                                <h2 className="main-title">{data.title}</h2>
                                <p className="description-text">{data.description}</p>
                                <ul className="philosophy-list">
                                    {data.points.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                                
                                <div className="btn-wrapper">
                                    <Link href="/investment-approach" style={{ display: 'block', width: '100%', height: '100%', textDecoration: 'none' }}>
                                        <LiquidButton text="Discover More" bgcolor="#eb2525" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex-col img-col">
                            <div className="image-holder">
                                <div className="main-img-wrapper">
                                    <img src={data.images.img1} alt="Investment Philosophy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}