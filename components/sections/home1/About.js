"use client";
import Link from "next/link";
import { AboutFeatures, aboutData } from '@/public/assets/assest.js';

export default function About() {
  return (
    <>
      <style jsx>{`
        .about-section { padding: 120px 0; background: #fff; }
        .about-grid { 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          gap: 60px; 
          align-items: center; 
          max-width: 1200px; 
          margin: 0 auto; 
          padding: 0 15px;
        }

        /* --- Image Design --- */
        .image-wrapper { position: relative; padding-bottom: 30px; }
        .main-image { 
          width: 90%; 
          border-radius: 20px; 
          box-shadow: 20px 20px 60px rgba(0,0,0,0.1); 
          /* Optional: Adding the slope to the image bottom */
          clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
        }
        .exp-card {
          position: absolute;
          bottom: 0;
          right: 0;
          background: #17479d; /* Deep blue theme */
          color: white;
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          border: 5px solid #fff;
          box-shadow: 10px 10px 30px rgba(0,0,0,0.1);
        }
        .exp-card h2 { font-size: 40px; font-weight: 800; line-height: 1; margin: 0; }
        .exp-card span { font-size: 12px; text-transform: uppercase; font-weight: 700; }

        /* --- Content Design --- */
        .sub-t { color: #eb2525; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px; display: block; }
        .main-t { font-size: 42px; font-weight: 800; color: #212226; line-height: 1.2; margin-bottom: 20px; }
        
        .feature-list { display: grid; gap: 20px; margin: 35px 0; }
        .feature-item { 
          display: flex; 
          gap: 15px; 
          padding: 20px; 
          border-radius: 12px; 
          background: #f9f9f9; 
          border-left: 4px solid transparent; 
          transition: 0.3s;
        }
        .feature-item:hover { border-left-color: #eb2525; background: #fff; transform: translateX(10px); box-shadow: 5px 5px 20px rgba(0,0,0,0.05); }
        .feature-item i { color: #eb2525; font-size: 24px; }
        .feature-item h3 { font-size: 18px; font-weight: 700; margin-bottom: 5px; }

        @media (max-width: 991px) { .about-grid { grid-template-columns: 1fr; text-align: center; } .feature-item { text-align: left; } }
      `}</style>

      <section className="about-section">
        <div className="about-grid">
          <div className="image-wrapper">
            <img src="assets/images/resource/about-1.jpg" alt="About" className="main-image" />
            <div className="exp-card">
              <h2>{aboutData.experienceYears}</h2>
              <span>Years of<br/>Experience</span>
            </div>
          </div>

          <div className="content-side">
            <span className="sub-t">{aboutData.subTitle}</span>
            <h2 className="main-t">{aboutData.mainTitle}</h2>
            <p>{aboutData.description}</p>
            
            <div className="feature-list">
              {AboutFeatures.map((item) => (
                <div className="feature-item" key={item.id}>
                  <i className={item.icon}></i>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about" className="theme-btn btn-one">Discover More</Link>
          </div>
        </div>
      </section>
    </>
  );
}