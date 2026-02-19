'use client'
import Link from "next/link"

export default function Features() {
    const featureData = [
        {
            icon: "icon-5",
            title: "Secure International Transaction",
            desc: "Advanced encryption protocols ensuring your global transfers are safe and instantaneous.",
            delay: "0ms"
        },
        {
            icon: "icon-6",
            title: "24/7 Expert Support Team",
            desc: "Our financial specialists are available around the clock to assist with your inquiries.",
            delay: "200ms"
        },
        {
            icon: "icon-7",
            title: "Competitive Processing Fees",
            desc: "Maximize your capital with the industry's lowest rates on all banking transactions.",
            delay: "400ms"
        },
        {
            icon: "icon-8",
            title: "Rapid Loan Approval",
            desc: "Streamlined digital verification for lightning-fast approvals on personal and business loans.",
            delay: "600ms"
        }
    ];

    return (
        <>
            <style jsx>{`
                .feature-section-custom {
                    position: relative;
                    padding: 0;
                    margin-top: -60px;
                    z-index: 10;
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 0; 
                    background: #fff;
                    border-radius: 20px;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
                    overflow: hidden;
                }

                .feature-item {
                    padding: 50px 35px;
                    border-right: 1px solid #f0f0f0;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    background: #fff;
                }

                .feature-item:last-child {
                    border-right: none;
                }

                .feature-item:hover {
                    background: #17479d;
                    transform: translateY(-5px);
                    z-index: 2;
                }

                .icon-box-new {
                    width: 70px;
                    height: 70px;
                    background: #fdf2f2;
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 30px;
                    transition: all 0.4s ease;
                }

                .icon-box-new i {
                    font-size: 35px;
                    color: var(--theme-color, #eb2525);
                }

                .feature-item:hover .icon-box-new {
                    background: var(--theme-color, #eb2525);
                    transform: rotateY(360deg);
                }

                .feature-item:hover .icon-box-new i {
                    color: #fff;
                }

                .feature-item h4 {
                    font-size: 19px;
                    font-weight: 700;
                    line-height: 1.4;
                    margin-bottom: 15px;
                    color: #1a1a1a;
                    transition: color 0.4s ease;
                }

                .feature-item p {
                    font-size: 15px;
                    color: #666;
                    transition: color 0.4s ease;
                    margin-bottom: 0;
                }

                .feature-item:hover h4, 
                .feature-item:hover p {
                    color: #fff;
                }

                @media (max-width: 1200px) {
                    .features-grid { grid-template-columns: repeat(2, 1fr); }
                    .feature-item { border-bottom: 1px solid #f0f0f0; }
                }

                @media (max-width: 768px) {
                    .features-grid { grid-template-columns: 1fr; }
                    .feature-section-custom { margin-top: 20px; padding: 0 15px; }
                }
            `}</style>

            <section className="feature-section-custom">
                <div className="auto-container">
                    <div className="features-grid">
                        {featureData.map((item, index) => (
                            <div 
                                key={index} 
                                className="feature-item wow fadeInUp" 
                                data-wow-delay={item.delay}
                            >
                                <div className="icon-box-new">
                                    <i className={item.icon}></i>
                                </div>
                                <h4>
                                    <Link href="/service" style={{ color: 'inherit' }}>
                                        {item.title}
                                    </Link>
                                </h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}