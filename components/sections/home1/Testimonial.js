import TestimonialSlider01 from '@/components/slider/TestimonialSlider01'

export default function Testimonial() {
    return (
        <>
            <section className="testimonial-section centred pt_60 pb_120">
                <div className="auto-container">
                    <div className="sec-title mb_70">
                        <h6>Testimonials</h6>
                        <h2>Love from Our Clients</h2>
                    </div>
                    <div className="content-box">
                        <TestimonialSlider01 />                        
                    </div>
                </div>
            </section>
        </>
    )
}