'use client'
import Link from "next/link"
import { useState } from "react"
import { WhatWeDoData } from '@/public/assets/assest.js'

export default function WhatWeDo() {
    const [activeIndex, setActiveIndex] = useState(1)

    // Handler for hover on desktop
    const handleMouseEnter = (id) => {
        if (window.innerWidth > 991) {
            setActiveIndex(id)
        }
    }

    return (
        <>
            <style jsx>{`
                .wwd-container {
                    padding: 80px 0;
                    background: #fafafa;
                }

                .accordion-wrapper {
                    display: flex;
                    flex-direction: row;
                    height: 600px;
                    gap: 15px;
                    transition: all 0.5s ease;
                }

                .panel {
                    position: relative;
                    flex: 1; 
                    overflow: hidden;
                    border-radius: 24px;
                    transition: all 0.7s cubic-bezier(0.25, 1, 0.5, 1);
                    cursor: pointer;
                    background: #000;
                }

                /* This ensures the expansion is smooth */
                .panel.active { flex: 5; }

                .panel-image {
                    position: absolute;
                    top: 0; left: 0;
                    width: 100%; height: 100%;
                    object-fit: cover;
                    opacity: 0.6; 
                    transition: all 0.6s ease;
                }

                .panel::after {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background: linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,0.8) 100%);
                    z-index: 1;
                }

                .panel-content {
                    position: absolute;
                    bottom: 0; left: 0; width: 100%;
                    padding: 40px;
                    color: white;
                    z-index: 2;
                }

                .panel h3 {
                    font-size: 22px;
                    font-weight: 800;
                    white-space: nowrap;
                    margin: 0;
                    transform: rotate(-90deg);
                    transform-origin: left bottom;
                    position: absolute;
                    bottom: 40px;
                    left: 50px;
                    transition: all 0.5s ease;
                    color: #fff;
                }

                .panel.active h3 {
                    transform: rotate(0);
                    position: relative;
                    bottom: 0; left: 0;
                    font-size: 32px;
                    margin-bottom: 15px;
                    white-space: normal;
                }

                .panel-details {
                    max-width: 600px;
                    opacity: 0;
                    visibility: hidden;
                    height: 0;
                    transition: all 0.5s ease;
                }

                .panel.active .panel-details {
                    opacity: 1;
                    visibility: visible;
                    height: auto;
                    margin-top: 10px;
                }

                .panel-list {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                    margin-bottom: 25px;
                    list-style: none;
                    padding: 0;
                }

                .panel-list li { font-size: 14px; display: flex; align-items: center; }
                .panel-list li::before { content: '●'; font-size: 8px; margin-right: 10px; color: #eb2525; }

                .btn-red {
                    background: #eb2525;
                    color: white !important;
                    padding: 12px 30px;
                    border-radius: 8px;
                    font-weight: 700;
                    display: inline-block;
                }

                @media (max-width: 991px) {
                    .wwd-container { padding: 60px 0; }
                    .accordion-wrapper {
                        flex-direction: column;
                        height: auto;
                        gap: 20px;
                    }

                    .panel {
                        flex: none;
                        height: auto; 
                        background: #fff; 
                        border: 1px solid #eee;
                    }

                    .panel-image {
                        position: relative;
                        height: 250px;
                        opacity: 1;
                    }

                    .panel::after { display: none; }

                    .panel-content {
                        position: relative;
                        padding: 25px;
                        color: #000;
                    }

                    .panel h3 {
                        position: relative;
                        transform: rotate(0);
                        bottom: 0; left: 0;
                        color: #17479d;
                        font-size: 24px;
                        white-space: normal;
                    }

                    .panel-details { 
                        display: none; 
                        height: auto;
                    }

                    .panel.active .panel-details { 
                        display: block; 
                    }

                    .panel-details p { color: #444; margin-top: 10px;}
                    .panel-list { grid-template-columns: 1fr; color: #333; }
                }
            `}</style>

            <section className="wwd-container">
                <div className="container">
                    <div className="sec-title centred mb_60" style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h6 style={{ color: '#eb2525', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>What we do</h6>
                        <h2 style={{ fontSize: 'clamp(30px, 5vw, 42px)', fontWeight: '800', color: '#17479d' }}>Banking Made Simple</h2>
                    </div>

                    <div className="accordion-wrapper">
                        {WhatWeDoData.map((item) => (
                            <div 
                                key={item.id}
                                className={`panel ${activeIndex === item.id ? 'active' : ''}`}
                                onClick={() => setActiveIndex(item.id)} // Keep click for mobile
                                onMouseEnter={() => handleMouseEnter(item.id)} // Add hover for desktop
                            >
                                <img src={item.image} className="panel-image" alt={item.title} />
                                <div className="panel-content">
                                    <h3>{item.title}</h3>
                                    <div className="panel-details">
                                        <p>{item.text}</p>
                                        <ul className="panel-list">
                                            {item.list.slice(0, 4).map((li, idx) => (
                                                <li key={idx} style={{color: 'inherit'}}>{li}</li>
                                            ))}
                                        </ul>
                                        <Link href={item.link} className="btn-red">
                                            Explore Services
                                        </Link>
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