'use client'
import Link from "next/link"
import { useState } from "react"
import { WhatWeDoData } from '@/public/assets/assest.js'

export default function WhatWeDo() {
    const [activeIndex, setActiveIndex] = useState(1)

    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <>
            <section className="service-style-two pb_120">
                <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/service-bg-2.jpg)' }}></div>
                <div className="auto-container">
                    <div className="sec-title centred mb_70">
                        <h6>What we do</h6>
                        <h2>Online Banking at Fingertips</h2>
                    </div>
                    
                    <div className="tabs-box">
                        <div className="tab-btn-box p_relative mb_100">
                            <ul className="tab-btns tab-buttons" role="tablist">
                                {WhatWeDoData.map((tab) => (
                                    <li 
                                        key={tab.id} 
                                        className={tab.id === activeIndex ? "nav-item active-btn" : "nav-item"} 
                                        onClick={() => handleOnClick(tab.id)}
                                    >
                                        <a className={activeIndex === tab.id ? "nav-link active" : "nav-link"}>
                                            <span>{tab.title}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                            {WhatWeDoData.map((tab) => (
                                <div 
                                    key={tab.id}
                                    className={activeIndex === tab.id ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}
                                >
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                            <div className="content_block_four">
                                                <div className="content-box mr_110">
                                                    <h2>{tab.title}</h2>
                                                    <p>{tab.text}</p>
                                                    <ul className="list-item mb_40 clearfix">
                                                        {tab.list.map((item, index) => (
                                                            <li key={index}>{item}</li>
                                                        ))}
                                                    </ul>
                                                    <Link href={tab.link} className="theme-btn btn-one">
                                                        Discover More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                            <div className="image-box ml_40">
                                                <figure className="image">
                                                    <img src={tab.image} alt={tab.title} />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}