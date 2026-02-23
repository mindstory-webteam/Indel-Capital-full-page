'use client'
import Link from "next/link"
import { useState } from "react"
import { WhatWeDoData } from '@/public/assets/assest.js'

export default function WhatWeDo() {
    const [activeIndex, setActiveIndex] = useState(1)

    const handleMouseEnter = (id) => {
        if (window.innerWidth > 991) {
            setActiveIndex(id)
        }
    }

    return (
        <>
            <style jsx>{`
                .wwd-container {
                    padding: 20px 0;
                    background: #ffffff;
                }

                .accordion-wrapper {
                    display: flex;
                    flex-direction: row;
                    height: 550px;
                    gap: 12px;
                    transition: all 0.5s ease;
                }

                .panel {
                    position: relative;
                    flex: 1; 
                    overflow: hidden; /* Crucial: Keeps content inside during shrink */
                    border-radius: 16px;
                    transition: all 0.7s cubic-bezier(0.25, 1, 0.5, 1);
                    cursor: pointer;
                    background: #000;
                }

                .panel.active { flex: 4; }

                .panel-image {
                    position: absolute;
                    top: 0; left: 0;
                    width: 100%; height: 100%;
                    object-fit: cover;
                    opacity: 0.5; 
                    transition: all 0.6s ease;
                }

                .panel.active .panel-image { opacity: 0.7; scale: 1.05; }

                .panel::after {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background: linear-gradient(to top, rgba(0,0,0,0.9) 10%, rgba(0,0,0,0) 100%);
                    z-index: 1;
                }

                .panel-content {
                    position: absolute;
                    bottom: 0; left: 0; width: 100%;
                    padding: 35px;
                    color: white;
                    z-index: 2;
                    /* Prevent content from shifting during flex change */
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    height: 100%;
                }

                .panel h3 {
                    font-size: 20px;
                    font-weight: 700;
                    white-space: nowrap;
                    margin: 0;
                    transform: rotate(-90deg);
                    transform-origin: left bottom;
                    position: absolute;
                    bottom: 35px;
                    left: 45px;
                    transition: all 0.5s ease;
                    color: #fff;
                    letter-spacing: 1px;
                }

                .panel.active h3 {
                    transform: rotate(0);
                    position: relative;
                    bottom: 0; left: 0;
                    font-size: 28px;
                    margin-bottom: 12px;
                    white-space: normal;
                    line-height: 1.2;
                }

                .panel-details {
                    max-width: 520px;
                    opacity: 0;
                    visibility: hidden;
                    height: 0;
                    overflow: hidden; 
                    transform: translateY(10px);
                    transition: opacity 0.3s ease, transform 0.3s ease, height 0.3s ease, visibility 0.3s;
                }

                .panel.active .panel-details {
                    opacity: 1;
                    visibility: visible;
                    height: auto;
                    transform: translateY(0);
                    margin-top: 5px;
                    transition: opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s, height 0.5s ease;
                }

                .panel-details p {
                    font-size: 15px;
                    line-height: 1.6;
                    color: #b2a0a0;
                    margin-bottom: 20px;
                }

                .panel-list {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 8px 20px;
                    margin-bottom: 30px;
                    list-style: none;
                    padding: 0;
                }

                .panel-list li { 
                    font-size: 13px; 
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-weight: 500;
                    color: rgba(255,255,255,0.9); 
                }

                .btn-red {
                    background: #eb2525;
                    color: white !important;
                    padding: 10px 24px;
                    border-radius: 4px;
                    font-size: 14px;
                    font-weight: 600;
                    display: inline-block;
                    transition: 0.3s;
                }

                .btn-red:hover { background: #c11e1e; transform: translateY(-2px); }

                @media (max-width: 991px) {
                    .wwd-container { padding: 40px 20px; }
                    .accordion-wrapper {
                        flex-direction: column;
                        height: auto;
                        gap: 20px;
                    }
                    .panel { flex: none; height: auto; background: #fff; border: 1px solid #f0f0f0; }
                    .panel-image { position: relative; height: 220px; opacity: 1; }
                    .panel::after { display: none; }
                    .panel-content { position: relative; padding: 20px; color: #000; height: auto; }
                    .panel h3 { position: relative; transform: rotate(0); bottom: 0; left: 0; color: #17479d; font-size: 22px; white-space: normal; }
                    .panel-details { display: none; height: auto; opacity: 1; visibility: visible; }
                    .panel.active .panel-details { display: block; }
                    .panel-details p { color: #555; }
                    .panel-list { grid-template-columns: 1fr; }
                }
            `}</style>

            <section className="wwd-container">
                <div className="container">
                    <div className="sec-title centred mb_60" style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h6 style={{ color: '#eb2525', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '700', fontSize: '14px', marginBottom: '10px' }}>What we do</h6>
                        <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#17479d', letterSpacing: '-0.5px' }}>Strategic Investment Solutions</h2>
                    </div>

                    <div className="accordion-wrapper">
                        {WhatWeDoData.map((item) => (
                            <div 
                                key={item.id}
                                className={`panel ${activeIndex === item.id ? 'active' : ''}`}
                                onClick={() => setActiveIndex(item.id)} 
                                onMouseEnter={() => handleMouseEnter(item.id)}
                            >
                                <img src={item.image} className="panel-image" alt={item.title} />
                                <div className="panel-content">
                                    <h3>{item.title}</h3>
                                    <div className="panel-details">
                                        <p>{item.text}</p>
                                        <ul className="panel-list">
                                            {item.list.slice(0, 4).map((li, idx) => (
                                                <li key={idx}>{li}</li>
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