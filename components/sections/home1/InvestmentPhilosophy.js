import Link from "next/link";
import { investmentPhilosophyData } from '@/public/assets/assest.js';

export default function InvestmentPhilosophy() {
    const data = investmentPhilosophyData;

    return (
        <>
            <section className="about-style-two pt_120 pb_120">
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_three">
                                <div className="content-box mr_110">
                                    <div className="sec-title mb_20">
                                        <h6>{data.subTitle}</h6>
                                        <h2>{data.title}</h2>
                                    </div>
                                    <div className="text-box mb_40">
                                        <p>{data.description}</p>
                                        <ul className="list-style-one clearfix">
                                            {data.points.map((point, index) => (
                                                <li key={index}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="/about" className="theme-btn btn-one">
                                            Discover More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image_block_two">
                                <div className="image-box">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                            <div className="image-inner">
                                                <figure className="image mb_30">
                                                    <img src={data.images.img1} alt="About" />
                                                </figure>
                                                <div className="experience-box">
                                                    <h2>{data.experience.years}<span>Years</span></h2>
                                                    <h5>{data.experience.text}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                            <div className="image-inner">
                                                <figure className="image pt_115">
                                                    <img src={data.images.img2} alt="About" />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}