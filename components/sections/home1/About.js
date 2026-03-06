"use client";
import Link from "next/link";
import { AboutFeatures, aboutData } from '@/public/assets/assest.js';
import LiquidButton from '@/components/LiquidButton.js';

export default function About() {
  return (
    <>
      <style jsx>{`
        .about-section { 
          padding: clamp(60px, 10vw, 120px) 0; 
          background: #fff; 
          overflow: hidden;
        }

        .about-grid { 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          gap: clamp(30px, 5vw, 60px); 
          align-items: center; 
          max-width: 1200px; 
          margin: 0 auto; 
          padding: 0 20px;
        }

        .image-wrapper { 
          position: relative; 
          display: inline-block;
          margin: 0 auto;
        }

        .main-image { 
          width: 100%;
          max-width: 500px;
          height: auto;
          border-radius: 20px; 
          box-shadow: 20px 20px 60px rgba(0,0,0,0.1); 
          clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
          object-fit: cover;
          display: block;
        }

        .exp-card {
          position: absolute;
          bottom: 20px; 
          right: -20px; 
          background: #fff;
          color: #17479e;
          padding: 20px;
          border-radius: 15px;
          text-align: center;
          border: 5px solid #fff;
          box-shadow: 10px 10px 30px rgba(0,0,0,0.1);
          z-index: 10;
          min-width: 130px;
        }

        .exp-card h2 { 
          font-size: 36px; 
          font-weight: 800; 
          line-height: 1; 
          margin: 0; 
          color: #ee3824;
        }

        .exp-card span { 
          font-size: 11px; 
          text-transform: uppercase; 
          font-weight: 700; 
          line-height: 1.2; 
          display: block;   
          margin-top: 5px;
        }

        .sub-t { 
          color: #eb2525; 
          font-weight: 700; 
          text-transform: uppercase; 
          letter-spacing: 2px; 
          margin-bottom: 15px; 
          display: block; 
          font-size: 14px;
        }

        .main-t { 
          font-size: clamp(28px, 4vw, 42px); 
          font-weight: 800; 
          color: #212226; 
          line-height: 1.2; 
          margin-bottom: 20px; 
        }

        .description {
          font-size: 16px;
          line-height: 1.7;
          color: #666;
          margin-bottom: 30px;
        }

        .feature-list { 
          display: grid; 
          gap: 15px; 
          margin-bottom: 40px; 
        }

        .feature-item { 
          display: flex; 
          gap: 15px; 
          padding: 20px; 
          border-radius: 12px; 
          background: #f9f9f9; 
          border-left: 4px solid transparent; 
          transition: all 0.3s ease;
        }

        .feature-item:hover { 
          border-left-color: #eb2525; 
          background: #fff; 
          transform: translateX(10px); 
          box-shadow: 5px 5px 20px rgba(0,0,0,0.05); 
        }

        .feature-item i { 
          color: #eb2525; 
          font-size: 24px; 
          flex-shrink: 0;
        }

        .feature-item h3 { 
          font-size: 18px; 
          font-weight: 700; 
          margin-bottom: 5px; 
          color: #212226;
        }

        .btn-container {
          width: 200px;
          height: 55px;
        }

        @media (max-width: 991px) { 
          .about-grid { 
            grid-template-columns: 1fr; 
            text-align: center;
          } 
          
          .image-wrapper {
            margin-bottom: 60px;
          }

          .feature-item {
            text-align: left;
          }

          .btn-container { 
            margin: 0 auto; 
          }
        }

        @media (max-width: 575px) {
          .about-section { padding: 50px 0; }
          .exp-card {
            padding: 15px;
            right: 0;
            bottom: 0; 
            min-width: 110px;
          }
          .exp-card h2 { font-size: 28px; }
        }
      `}</style>

      <section className="about-section">
        <div className="about-grid">
          <div style={{ textAlign: 'center' }}>
            <div className="image-wrapper">
              <img 
                src="/assets/images/resource/about-1.jpg" 
                alt="About Professional Team" 
                className="main-image" 
              />
              <div className="exp-card">
                <h2>{aboutData.experienceYears}</h2>
                <span>Years of<br />Experience</span>
              </div>
            </div>
          </div>

          <div className="content-side">
            <span className="sub-t">{aboutData.subTitle}</span>
            <h2 className="main-t">{aboutData.mainTitle}</h2>
            <p className="description">{aboutData.description}</p>

            <div className="feature-list">
              {AboutFeatures.map((item) => (
                <div className="feature-item" key={item.id}>
                  <i className={item.icon}></i>
                  <div className="feature-text">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="btn-container">
              <Link href="/who-we-are" style={{ textDecoration: 'none' }}>
                <LiquidButton text="Discover More" bgcolor="#eb2525" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}