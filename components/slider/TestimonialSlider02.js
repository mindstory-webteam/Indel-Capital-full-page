'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { testimonialData } from '@/public/assets/assest.js'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
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

    breakpoints: {
        320: { slidesPerView: 1 },
        575: { slidesPerView: 1 },
        767: { slidesPerView: 2 },
        991: { slidesPerView: 2 },
        1199: { slidesPerView: 2 },
        1350: { slidesPerView: 2 },
    }
}

export default function TestimonialSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                {testimonialData.map((item) => (
                    <SwiperSlide className="slide" key={item.id}>
                        <div className="testimonial-block-two">
                            <div className="inner-box">
                                <div className="author-box">
                                    <figure className="thumb-box">
                                        <img src={item.image} alt={item.name} />
                                    </figure>
                                    <h4>{item.name}</h4>
                                    <span className="designation">{item.designation}</span>
                                </div>
                                <ul className="rating mb_15 clearfix">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <li key={i}><i className="icon-9"></i></li>
                                    ))}
                                </ul>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}