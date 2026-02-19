import TestimonialSlider02 from '@/components/slider/TestimonialSlider02'
import { featuredStrategiesData } from '@/public/assets/assest.js'

export default function FeaturedStrategies() {
    const data = featuredStrategiesData;

    return (
        <>
            <section className="testimonial-style-two  pb_90">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 title-column">
                            <div className="sec-title mr_70">
                                <h6>{data.subTitle}</h6>
                                <h2>{data.mainTitle}</h2>
                                <p>{data.description}</p>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <TestimonialSlider02 />                        
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}