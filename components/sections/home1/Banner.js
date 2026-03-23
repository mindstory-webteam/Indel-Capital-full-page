'use client'
import Link from "next/link"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import LiquidButton from "@/components/LiquidButton"

const swiperOptions = {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}

export default function Banner() {
    const slides = [
        {
            bgImage: 'url(assets/images/banner/banner-1.jpeg)',
            titleLine1: 'Invest With Confidence.',
            titleLine2: 'Grow With Clarity.',
            description: <>Build a secure financial future through disciplined investing and well-designed strategies.</>,
            btnText: 'Get Started',
            btnLink: '/contact-us'
        },
        {
            bgImage: 'url(assets/images/banner/banner-2.jpeg)',
            titleLine1: 'Better Strategies',
            titleLine2: 'for Your Investments',
            description: <>Unlock investment value with specialized asset yield products and strategic credit solutions.</>,
            btnText: 'View Solutions',
            btnLink: '/strategies'
        },
        {
            bgImage: 'url(assets/images/banner/banner-3.jpeg)',
            titleLine1: 'Accelerating Your',
            titleLine2: 'Wealth Journey ',
            description: <>Experience seamless, technology-driven growth with Indel Capital's digital-first platforms.</>,
            btnText: 'Get Started',
            btnLink: '/contact-us'
        }
    ];

    const h2Style = {
        fontSize: 'clamp(32px, 8vw, 60px)',
        fontWeight: '800',
        lineHeight: '1.1',
        marginBottom: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        color: '#ffffff',
    };

    const lineStyle = {
        whiteSpace: 'normal',
        display: 'block',
        fontStyle: 'normal',
        fontWeight: 'inherit',
        color: 'inherit'
    };

    return (
        <>
            <style jsx>{`
                .banner-section,
                .banner-carousel,
                .slide-item {
                    height: 900px !important; 
                    min-height: 900px !important;
                }

                .bg-layer {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-size: cover !important;
                    background-position: center center;
                    background-repeat: no-repeat;
                }

                .liquid-banner-wrapper {
                    width: 220px;
                    height: 60px;
                    position: relative;
                    margin-top: 20px;
                }

                @media (max-width: 767px) {
                    .banner-section,
                    .banner-carousel,
                    .slide-item {
                        height: 500px !important;
                        min-height: 450px !important;
                        max-height: 450px !important;
                    }

                    .content-box {
                        padding-top: 50px !important;
                    }

                    .title-line1,
                    .title-line2 {
                        font-size: 20px !important;
                        line-height: 1.2 !important;
                    }

                    .content-box h2 {
                        font-size: 20px !important;
                        margin-bottom: 10px !important;
                    }

                    .content-box p {
                        font-size: 12px !important;
                        line-height: 1.4 !important;
                        margin-bottom: 8px !important;
                    }

                    .liquid-banner-wrapper {
                        width: 150px !important;
                        height: 44px !important;
                        margin-top: 8px !important;
                    }
                }
            `}</style>

            <section className="banner-section p_relative">
                <Swiper {...swiperOptions} className="banner-carousel">
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="slide-item p_relative">
                            <div className="bg-layer" style={{ backgroundImage: slide.bgImage }}></div>
                            <div className="pattern-layer">
                                <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-1.png)' }}></div>
                            </div>
                            <div className="auto-container">
                                <div className="content-box" style={{ maxWidth: '100%' }}>
                                    <h2 style={h2Style}>
                                        <strong style={lineStyle} className="title-line1">{slide.titleLine1}</strong>
                                        <strong style={lineStyle} className="title-line2">{slide.titleLine2}</strong>
                                    </h2>
                                    <p>{slide.description}</p>
                                    <div className="btn-box">
                                        <div className="liquid-banner-wrapper">
                                            <Link href={slide.btnLink} style={{ textDecoration: 'none' }}>
                                                <LiquidButton text={slide.btnText} bgcolor="#ee3824" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    )
}