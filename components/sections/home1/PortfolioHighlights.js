'use client'
import Link from "next/link"
import { useState } from "react"
import { portfolioHighlightsData } from '@/public/assets/assest.js'

export default function PortfolioHighlights() {
    const data = portfolioHighlightsData;
    const [activeIndex, setActiveIndex] = useState(1);
    
    const handleOnClick = (index) => {
        setActiveIndex(index);
    }

    return (
        <>            
            <section className="service-section pt_120 pb_90">
                <div 
                    className="bg-layer" 
                    style={{ backgroundImage: `url(${data.bgImage})` }}
                ></div>
                <div className="auto-container">
                    <div className="sec-title centred mb_60">
                        <h6>{data.subTitle}</h6>
                        <h2>{data.title}</h2>
                    </div>
                    <div className="row clearfix">
                        {data.services.map((service, index) => (
                            <div key={index} className="col-lg-3 col-md-6 col-sm-12 service-block">
                                <div 
                                    className="service-block-one wow fadeInUp animated" 
                                    data-wow-delay={service.delay} 
                                    data-wow-duration="1500ms"
                                >
                                    <div className="inner-box">
                                        <div className="icon-box">
                                            <i className={service.icon}></i>
                                        </div>
                                        <h4>
                                            <Link href={service.link}>{service.title}</Link>
                                        </h4>
                                        <ul className="list-item clearfix">
                                            {service.items.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}