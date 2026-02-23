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
        fontSize: '60px', 
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
        whiteSpace: 'nowrap',
        display: 'block',
        fontStyle: 'normal',
        fontWeight: 'inherit',
        color: 'inherit' 
    };

    const highlightStyle = {
        color: '#eb2525',
        fontStyle: 'normal'
    };

    return (
        <>
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
                                    <strong style={lineStyle}>Pioneering Financial</strong>
                                    <strong style={lineStyle}> 
                                        <em style={highlightStyle}>Excellence</em>
                                    </strong>
                                </h2>
                                <p>Part of the Indel Group legacy, providing diversified financial <br/> services through a robust network of over 250 branches.</p>
                                <div className="btn-box">
                                    <Link href="/about" className="theme-btn btn-one">Our Heritage</Link>
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
                                    <strong style={lineStyle}>Empowering Assets</strong>
                                    <strong style={lineStyle}>
                                        Through <em style={highlightStyle}>Smart</em> Capital
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
                                        <em style={highlightStyle}>Wealth</em> Journey Online
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