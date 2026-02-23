'use client'
import { useState, useEffect } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { testimonialSliderOneData } from '@/public/assets/assest.js'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: { slidesPerView: 1 },
        767: { slidesPerView: 2 },
        991: { slidesPerView: 3 },
        1200: { slidesPerView: 3 },
    }
}

export default function TestimonialSlider1() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            <style jsx>{`
                .slider-wrapper {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 24px;
                }
                .theme_carousel {
                    width: 100%;
                }
            `}</style>

            <div className="slider-wrapper">
                <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                    {testimonialSliderOneData.map((item, index) => (
                        <SwiperSlide className="slide" key={`${item.id}-${index}`}>
                            <div className="testimonial-block-one">
                                <div className="inner-box">
                                    <figure className="thumb-box">
                                        <img src={item.image} alt={item.name} />
                                    </figure>
                                    <h4>{item.name}</h4>
                                    <span className="designation">{item.designation}</span>
                                    <ul className="rating mb_6 clearfix">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <li key={`star-${item.id}-${index}-${i}`}><i className="icon-26"></i></li>
                                        ))}
                                    </ul>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}