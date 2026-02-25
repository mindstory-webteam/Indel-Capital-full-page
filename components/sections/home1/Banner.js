'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { slides } from "@/public/assets/assest"
import LiquidButton from "@/components/LiquidButton" // Adjust path as needed

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
                @media (max-width: 767px) {
                    .content-box p br {
                        display: none;
                    }
                    .content-box p {
                        font-size: 16px;
                    }
                }

                /* Liquid Button Integration */
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
                                        <strong style={lineStyle}>{slide.titleLine1}</strong>
                                        <strong style={lineStyle}> 
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