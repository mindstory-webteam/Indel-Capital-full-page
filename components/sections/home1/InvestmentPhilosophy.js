'use client'
import Link from "next/link";
import { investmentPhilosophyData } from '@/public/assets/assest.js';

export default function InvestmentPhilosophy() {
    const data = investmentPhilosophyData;

    return (
        <>
            <style jsx>{`
                .philosophy-section {
                    padding: 120px 0;
                    background-color: #ffffff;
                }
                
                .sub-title {
                    color: #eb2525;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    display: block;
                    margin-bottom: 10px;
                }
                
                .main-title {
                    font-size: 42px;
                    line-height: 1.2;
                    font-weight: 800;
                    color: #17479d;
                    margin-bottom: 25px;
                }

                .description-text {
                    font-size: 18px;
                    line-height: 1.8;
                    color: #555;
                    margin-bottom: 30px;
                }

                .philosophy-list {
                    list-style: none;
                    padding: 0;
                    margin-bottom: 40px;
                }

                .philosophy-list li {
                    position: relative;
                    padding-left: 35px;
                    margin-bottom: 15px;
                    font-weight: 600;
                    color: #222;
                    font-size: 17px;
                }

                .philosophy-list li::before {
                    content: '✓';
                    position: absolute;
                    left: 0;
                    top: 2px;
                    width: 24px;
                    height: 24px;
                    background: #eb2525;
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                }

                .image-holder {
                    position: relative;
                    padding: 30px;
                }

                .image-holder::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 85%;
                    height: 85%;
                    border: 10px solid #f0f4f9;
                    border-radius: 40px; 
                    z-index: 0;
                }

                .main-img-wrapper {
                    position: relative;
                    z-index: 1;
                    border-radius: 40px; 
                    overflow: hidden; 
                    box-shadow: 0 25px 50px rgba(0,0,0,0.1);
                }

                .main-img-wrapper img {
                    width: 100%;
                    display: block;
                    border-radius: 40px;
                    transition: transform 0.5s ease;
                }

                .main-img-wrapper:hover img {
                    transform: scale(1.05);
                }

                .experience-badge {
                    position: absolute;
                    bottom: -20px;
                    right: 10px;
                    background: #17479d;
                    color: white;
                    padding: 35px;
                    border-radius: 40px; 
                    text-align: center;
                    z-index: 2;
                    box-shadow: 0 15px 35px rgba(23, 71, 157, 0.3);
                    min-width: 180px;
                }

                .experience-badge h3 {
                    font-size: 40px;
                    font-weight: 800;
                    margin: 0;
                    color: #fff;
                    line-height: 1;
                }

                .experience-badge span {
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-weight: 700;
                }

                @media (max-width: 991px) {
                    .image-holder { margin-top: 50px; }
                    .main-title { font-size: 32px; }
                    .experience-badge { padding: 25px; min-width: 150px; }
                }
            `}</style>

            <section className="philosophy-section">
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="content-box mr_70">
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

                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="image-holder">
                                <div className="main-img-wrapper">
                                    <img 
                                        src={data.images.img1} 
                                        alt="Investment Philosophy" 
                                    />
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}