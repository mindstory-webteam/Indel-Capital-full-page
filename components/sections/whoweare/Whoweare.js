'use client'
import Link from "next/link";
import { whoweareData } from "@/public/assets/assest";

export default function Whoweare() {
 
    return (
        <>
            <style jsx>{`
                .about-section {
                    position: relative;
                    background: #ffffff;
                }

                .clipped-image {
                    clip-path: polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%);
                    box-shadow: 20px 20px 60px rgba(0, 0, 0, 0.05);
                    transition: all 0.5s ease-in-out;
                }

                .clipped-image:hover {
                    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
                }

                .image-wrapper {
                    position: relative;
                    padding: 20px;
                }

                .image-wrapper::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2317479d' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                    z-index: 0;
                    transform: translate(-30px, 30px);
                }

                .framework-list {
                    list-style: none;
                    padding: 0;
                }

                .framework-list li {
                    position: relative;
                    padding-left: 30px;
                    margin-bottom: 15px;
                    font-weight: 500;
                    color: #333;
                    font-size: 16px;
                }

                .framework-list li::before {
                    content: '✓';
                    position: absolute;
                    padding-top:4px;
                    left: 0;
                    color: #eb2525;
                    font-weight: 900;
                    font-size: 18px;
                    line-height: 1;
                }
            `}</style>

            <section className="about-style-two pt_120 about-section">
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_three">
                                <div className="content-box mr_110">
                                    <div className="sec-title mb_20">
                                        <h6 style={{ color: '#eb2525', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700', marginBottom: '10px' }}>
                                            {whoweareData.subTitle}
                                        </h6>
                                        <h2 style={{ color: '#17479d', fontSize: '42px', fontWeight: '800', lineHeight: '1.2' }}>
                                            {whoweareData.mainTitle}
                                        </h2>
                                    </div>
                                    <div className="text-box mb_40">
                                        <p style={{ fontSize: '17px', color: '#555', marginBottom: '20px' }}>
                                            {whoweareData.descriptionMain}
                                        </p>
                                        <p style={{ fontSize: '16px', color: '#777', fontStyle: 'italic', borderLeft: '3px solid #eb2525', paddingLeft: '15px', marginBottom: '30px' }}>
                                            {whoweareData.descriptionQuote}
                                        </p>
                                        <ul className="framework-list">
                                            {whoweareData.points.map((point, index) => (
                                                <li key={index}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="/about" className="theme-btn btn-one">Discover More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image_block_two">
                                <div className="image-wrapper">
                                    <figure className="image clipped-image">
                                        <img src={whoweareData.imagePath} alt="About Indel Capital" style={{ width: '100%', display: 'block' }} />
                                    </figure>
                                    
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '40px',
                                        right: '-20px',
                                        backgroundColor: '#fff',
                                        padding: '20px',
                                        borderRadius: '5px',
                                        zIndex: '2',
                                        boxShadow: '10px 10px 30px rgba(0,0,0,0.1)',
                                        textAlign: 'center',
                                        minWidth: '150px'
                                    }}>
                                        <h3 style={{ color: '#eb2525', margin: 0, fontSize: '36px', fontWeight: '800' }}>{whoweareData.experienceYears}</h3>
                                        <p style={{ color: '#17479d', margin: 0, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700' }}>{whoweareData.experienceText}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}