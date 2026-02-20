'use client'
import Link from "next/link";
import { investmentPhilosophyData } from '@/public/assets/assest.js';

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
                }
                
                .main-title {
                    font-size: clamp(28px, 5vw, 38px);
                    line-height: 1.2;
                    font-weight: 800;
                    color: #17479d;
                    margin-bottom: 20px;
                }

                .description-text {
                    font-size: 16px; 
                    line-height: 1.7;
                    color: #555;
                    margin-bottom: 25px;
                }

                .philosophy-list {
                    list-style: none;
                    padding: 0;
                    margin-bottom: 35px;
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

                .image-holder {
                    position: relative;
                    padding: 20px; 
                }

                .image-holder::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 80%;
                    height: 85%;
                    border: 8px solid #f0f4f9;
                    border-radius: 30px; 
                    z-index: 0;
                }

                .main-img-wrapper {
                    position: relative;
                    z-index: 1;
                    border-radius: 30px; 
                    overflow: hidden; 
                    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
                }

                .main-img-wrapper img {
                    width: 100%;
                    display: block;
                    border-radius: 30px;
                    transition: transform 0.5s ease;
                }

                .flex-row {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 40px;
                }

                .flex-col {
                    flex: 1;
                    min-width: 300px;
                }

                @media (max-width: 991px) {
                    .philosophy-section { padding: 40px 0; }
                    .image-holder { margin-top: 20px; }
                    .flex-row { gap: 30px; }
                }
            `}</style>

            <section className="philosophy-section">
                <div className="container-compact">
                    <div className="flex-row">
                        <div className="flex-col">
                            <div className="content-box">
                                <span className="sub-title">{data.subTitle}</span>
                                <h2 className="main-title">{data.title}</h2>
                                <p className="description-text">{data.description}</p>
                                <ul className="philosophy-list">
                                    {data.points.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                                <Link href="/about" className="theme-btn btn-one">
                                    Discover More
                                </Link>
                            </div>
                        </div>

                        <div className="flex-col">
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