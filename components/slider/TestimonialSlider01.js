'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.png" alt="" /></figure>
                            <h4>Sandra Bullock</h4>
                            <span className="designation">Manager</span>
                            <ul className="rating mb_6 clearfix">
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            </ul>
                            <p>“Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque etiam nis quis at arcu nunc neque ac integer sit lobortis diam semper nulla duis in blandit.”</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <figure className="thumb-box"><img src="assets/images/resource/testimonial-2.png" alt="" /></figure>
                            <h4>Julien Anthor</h4>
                            <span className="designation">Manager</span>
                            <ul className="rating mb_6 clearfix">
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            </ul>
                            <p>“Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque etiam nis quis at arcu nunc neque ac integer sit lobortis diam semper nulla duis in blandit.”</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <figure className="thumb-box"><img src="assets/images/resource/testimonial-3.png" alt="" /></figure>
                            <h4>Rolier Demonil</h4>
                            <span className="designation">Manager</span>
                            <ul className="rating mb_6 clearfix">
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            </ul>
                            <p>“Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque etiam nis quis at arcu nunc neque ac integer sit lobortis diam semper nulla duis in blandit.”</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.png" alt="" /></figure>
                            <h4>Sandra Bullock</h4>
                            <span className="designation">Manager</span>
                            <ul className="rating mb_6 clearfix">
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            </ul>
                            <p>“Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque etiam nis quis at arcu nunc neque ac integer sit lobortis diam semper nulla duis in blandit.”</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <figure className="thumb-box"><img src="assets/images/resource/testimonial-2.png" alt="" /></figure>
                            <h4>Julien Anthor</h4>
                            <span className="designation">Manager</span>
                            <ul className="rating mb_6 clearfix">
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            </ul>
                            <p>“Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque etiam nis quis at arcu nunc neque ac integer sit lobortis diam semper nulla duis in blandit.”</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <figure className="thumb-box"><img src="assets/images/resource/testimonial-3.png" alt="" /></figure>
                            <h4>Rolier Demonil</h4>
                            <span className="designation">Manager</span>
                            <ul className="rating mb_6 clearfix">
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            <li><i className="icon-26"></i></li>
                            </ul>
                            <p>“Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque etiam nis quis at arcu nunc neque ac integer sit lobortis diam semper nulla duis in blandit.”</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
