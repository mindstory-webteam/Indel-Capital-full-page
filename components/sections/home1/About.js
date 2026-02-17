import Link from "next/link";
import { AboutFeatures, aboutData } from '@/public/assets/assest.js';

export default function About() {
  return (
    <>
      <section className="about-section pt_120 pb_120">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image_block_one">
                <div className="image-box pr_90 mr_40">
                  <figure className="image">
                    <img src="assets/images/resource/about-1.jpg" alt="About Us" />
                  </figure>
                  <div className="rating-box">
                    <ul className="rating mb_5 clearfix">
                      {[...Array(5)].map((_, i) => (
                        <li key={i}><i className="icon-9"></i></li>
                      ))}
                    </ul>
                    <h6>{aboutData.ratingText}</h6>
                  </div>
                  <div className="experience-box">
                    <div className="inner">
                      <h2>{aboutData.experienceYears}</h2>
                      <h6>Years of Experience</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content_block_one">
                <div className="content-box ml_40">
                  <div className="sec-title mb_20">
                    <h6>{aboutData.subTitle}</h6>
                    <h2>{aboutData.mainTitle}</h2>
                  </div>
                  <div className="text-box mb_40">
                    <p>{aboutData.description}</p>
                  </div>
                  
                  <div className="inner-box mb_45">
                    {AboutFeatures.map((item) => (
                      <div className="single-item" key={item.id}>
                        <div className="icon-box">
                          <i className={item.icon}></i>
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="btn-box">
                    <Link href="/about" className="theme-btn btn-one">
                      Discover More
                    </Link>
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