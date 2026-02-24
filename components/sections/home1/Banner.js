'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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
        // clamp(min, preferred, max) 
        // 32px on mobile, grows with screen width, maxes at 60px on desktop
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
        whiteSpace: 'normal', // Changed from nowrap so long words wrap on tiny screens
        display: 'block',
        fontStyle: 'normal',
        fontWeight: 'inherit',
        color: 'inherit' 
    };

    return (
        <>
            {/* Adding a small global style for the paragraph responsiveness too */}
            <style jsx>{`
                @media (max-width: 767px) {
                    .content-box p br {
                        display: none;
                    }
                    .content-box p {
                        font-size: 16px;
                    }
                }
            `}</style>

            <section className="banner-section p_relative">
                <Swiper {...swiperOptions} className="banner-carousel">
                    
                    <SwiperSlide className="slide-item p_relative">
                        <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/banner/banner-1.jpg)' }}></div>
                        <div className="pattern-layer">
                            <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-1.png)' }}></div>
                        </div>
                        <div className="auto-container">
                            <div className="content-box" style={{ maxWidth: '100%' }}>
                                <h2 style={h2Style}>
                                    <strong style={lineStyle}> Invest With Confidence.</strong>
                                    <strong style={lineStyle}> 
                                        Grow With Clarity.
                                    </strong>
                                </h2>
                                <p> At Indel Capital, we help individuals and businesses build a stronger financial future <br/>through disciplined investing, transparent practices, and well-designed financial strategies.</p>
                                <div className="btn-box">
                                    <Link href="/about" className="theme-btn btn-one">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="slide-item p_relative">
                        <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/banner/banner-2.jpg)' }}></div>
                        <div className="pattern-layer">
                            <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-1.png)' }}></div>
                        </div>
                        <div className="auto-container">
                            <div className="content-box" style={{ maxWidth: '100%' }}>
                                <h2 style={h2Style}>
                                    <strong style={lineStyle}>Structured Investing for a </strong>
                                    <strong style={lineStyle}>
                                        Strong Financial Future.
                                    </strong>
                                </h2>
                                <p>Unlock the value of your investments with our specialized <br/> gold loan products and strategic credit solutions.</p>
                                <div className="btn-box">
                                    <Link href="/services" className="theme-btn btn-one">View Solutions</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="slide-item p_relative">
                        <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/banner/banner-3.jpg)' }}></div>
                        <div className="pattern-layer">
                            <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-1.png)' }}></div>
                        </div>
                        <div className="auto-container">
                            <div className="content-box" style={{ maxWidth: '100%' }}>
                                <h2 style={h2Style}>
                                    <strong style={lineStyle}>Accelerating Your</strong>
                                    <strong style={lineStyle}>
                                        Wealth Journey Online
                                    </strong>
                                </h2>
                                <p>Experience seamless, technology-driven financial growth <br/> with Indel Capital's digital-first investment platforms.</p>
                                <div className="btn-box">
                                    <Link href="/contact" className="theme-btn btn-one">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <div className="owl-nav">
                        <button type="button" className="owl-prev h1p"><span className="icon-3"></span></button>
                        <button type="button" className="owl-next h1n"><span className="icon-4"></span></button>
                    </div>
                </Swiper>
            </section>
        </>
    )
}