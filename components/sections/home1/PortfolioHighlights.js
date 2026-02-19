'use client'
import Link from "next/link"
import { portfolioHighlightsData } from '@/public/assets/assest.js'

export default function PortfolioHighlights() {
    const data = portfolioHighlightsData;

    return (
        <>
            <style jsx>{`
                .portfolio-simple {
                    padding-top: 0px ;
                    padding-bottom: 50px;
                    background-color: #ffffff;
                }

                .simple-card {
                    padding: 40px;
                    border-radius: 20px;
                    background: #fff;
                    border: 1px solid #f0f0f0;
                    transition: all 0.3s ease-in-out;
                    height: 100%;
                    text-align: center; /* Centered content for a balanced look */
                }

                .simple-card:hover {
                    border-color: #17479d; /* Subtle Blue Border */
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
                }

                .icon-circle {
                    width: 80px;
                    height: 80px;
                    margin: 0 auto 25px auto;
                    background: #fdf2f2; /* Light Red tint */
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.3s ease;
                }

                .icon-circle i {
                    font-size: 32px;
                    color: var(--theme-color, #eb2525);
                }

                .simple-card:hover .icon-circle {
                    background: var(--theme-color, #eb2525);
                }

                .simple-card:hover .icon-circle i {
                    color: #fff;
                }

                .simple-card h4 {
                    font-size: 20px;
                    font-weight: 700;
                    margin-bottom: 20px;
                    color: #17479d;
                }

                .simple-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .simple-list li {
                    font-size: 15px;
                    color: #777;
                    margin-bottom: 8px;
                    line-height: 1.6;
                }

                .sec-title h2 {
                    font-size: 36px;
                    font-weight: 800;
                    color: #222;
                }
            `}</style>

            <section className="portfolio-simple">
                <div className="auto-container">
                    <div className="sec-title centred mb_60">
                        <h6 style={{ color: 'var(--theme-color)', fontWeight: '700' }}>{data.subTitle}</h6>
                        <h2>{data.title}</h2>
                    </div>

                    <div className="row">
                        {data.services.map((service, index) => (
                            <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb_30">
                                <div className="simple-card wow fadeIn">
                                    <div className="icon-circle">
                                        <i className={service.icon}></i>
                                    </div>
                                    
                                    <h4>{service.title}</h4>

                                    <ul className="simple-list">
                                        {service.items.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>

                                    <Link href={service.link} style={{marginTop: '20px', display: 'inline-block', color: 'var(--theme-color)', fontWeight: '600', fontSize: '14px'}}>
                                        Learn More 
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}