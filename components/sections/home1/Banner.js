'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import LiquidButton from "@/components/LiquidButton"
import { slides } from "@/public/assets/assest"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}



export default function Banner() {

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
                    height: 700px;
                    min-height: 600px;
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

                @media (max-width: 767px) {
                    .banner-section,
                    .banner-carousel,
                    .slide-item {
                        height: 500px !important;
                        min-height: 450px !important;
                        max-height: 450px !important;
                    }
                    .content-box p br {
                        display: none;
                    }
                    .content-box p {
                        font-size: 16px;
                        line-height: 1.4;
                        margin-bottom: 20px;
                    }
                    .title-line1 {
                        font-size: clamp(18px, 4.5vw, 28px) !important;
                        font-weight: 700 !important;
                    }
                    .title-line2 {
                        font-size: clamp(18px, 4.5vw, 28px) !important;
                    }
                }

                .liquid-banner-wrapper {
                    width: 220px;
                    height: 60px;
                    position: relative;
                    margin-top: 20px;
                }

                @media (max-width: 575px) {
                    .liquid-banner-wrapper {
                        width: 180px;
                        height: 50px;
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
                                        <strong style={lineStyle} className="title-line2">
                                            {slide.titleLine2}
                                        </strong>
                                    </h2>
                                    <p>{slide.description}</p>

                                    <div className="btn-box">
                                        <div className="liquid-banner-wrapper">
                                            <Link href={slide.btnLink} style={{ textDecoration: 'none' }}>
                                                <LiquidButton
                                                    text={slide.btnText}
                                                    bgcolor="#ee3824"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    <div className="owl-nav">
                        <button type="button" className="owl-prev h1p"><span className="icon-3"></span></button>
                        <button type="button" className="owl-next h1n"><span className="icon-4"></span></button>
                    </div>
                </Swiper>
            </section>
        </>
    )
}