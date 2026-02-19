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
                    position: relative;
                }
                
                .sub-title {
                    color: var(--theme-color, #eb2525);
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
                    color: #17479d; /* Deep Blue Theme */
                    margin-bottom: 25px;
                }

                .description-text {
                    font-size: 18px;
                    line-height: 1.8;
                    color: #555;
                    margin-bottom: 30px;
                }

                /* Custom List Design */
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
                    top: 0;
                    width: 24px;
                    height: 24px;
                    background: var(--theme-color, #eb2525);
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                }

                /* Single Image Better Design */
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
                    height: 80%;
                    border: 10px solid #f0f4f9; /* Soft Blue accent */
                    z-index: 0;
                    border-radius: 20px;
                }

                .main-img-wrapper {
                    position: relative;
                    z-index: 1;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 25px 50px rgba(0,0,0,0.15);
                }

                .experience-badge {
                    position: absolute;
                    bottom: -30px;
                    right: 30px;
                    background: #17479d;
                    color: white;
                    padding: 30px;
                    border-radius: 20px;
                    text-align: center;
                    z-index: 2;
                    box-shadow: 0 10px 30px rgba(23, 71, 157, 0.3);
                }

                .experience-badge h3 {
                    font-size: 35px;
                    font-weight: 800;
                    margin: 0;
                    color: #fff;
                }

                .experience-badge span {
                    font-size: 13px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                @media (max-width: 991px) {
                    .image-holder { margin-top: 60px; }
                    .main-title { font-size: 32px; }
                }
            `}</style>

            <section className="philosophy-section">
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_three">
                                <div className="content-box mr_70">
                                    <div className="sec-title">
                                        <span className="sub-title">{data.subTitle}</span>
                                        <h2 className="main-title">{data.title}</h2>
                                    </div>
                                    <div className="text-box">
                                        <p className="description-text">{data.description}</p>
                                        <ul className="philosophy-list">
                                            {data.points.map((point, index) => (
                                                <li key={index}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="/about" className="theme-btn btn-one">
                                            Discover More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image-holder">
                                <div className="main-img-wrapper">
                                    <figure className="image">
                                        <img 
                                            src={data.images.img1} 
                                            alt="Investment Philosophy" 
                                            style={{ width: '100%', display: 'block', transform: 'scale(1.01)' }}
                                        />
                                    </figure>
                                </div>
                                
                           
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}