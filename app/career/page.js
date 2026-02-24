'use client'
import { AboutFeatures, aboutData } from '@/public/assets/assest.js';
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Career Page" breadcrumbImg='assets/images/background/page-title.jpg'>
                <div>
                    <style jsx>{`
                        .about-section { padding: 60px 0; background: #fff; }
                        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; max-width: 1200px; margin: 0 auto; padding: 0 15px; }
                        .image-wrapper { position: relative; padding-bottom: 30px; }
                        .main-image { width: 90%; border-radius: 20px; box-shadow: 20px 20px 60px rgba(0,0,0,0.1); clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%); display: block; margin-left: auto; }
                        .exp-card { position: absolute; bottom: 0; left: 0; background: #fff; color: #17479e; padding: 30px; border-radius: 15px; text-align: center; border: 5px solid #fff; box-shadow: 10px 10px 30px rgba(0,0,0,0.1); }
                        .exp-card h2 { font-size: 40px; font-weight: 800; line-height: 1; margin: 0; }
                        .exp-card span { font-size: 12px; text-transform: uppercase; font-weight: 700; line-height: 1.2; display: block; }
                        .sub-t { color: #eb2525; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px; display: block; }
                        .main-t { font-size: 42px; font-weight: 800; color: #212226; line-height: 1.2; margin-bottom: 20px; }
                        .exprnc{ color: #ee3824 !important; }

                        .custom-career-section { 
                            background: #f8fafc; 
                            padding: 60px 0; 
                        }
                        .career-container { 
                            max-width: 1300px; /* Wider container */
                            margin: 0 auto; 
                            padding: 0 30px; 
                        }
                        .career-header { text-align: center; margin-bottom: 80px; }
                        .career-header h2 { font-size: 48px; font-weight: 800; color: #1a1a1a; letter-spacing: -1px; }
                        
                        .job-card {
                            background: #ffffff;
                            border-radius: 24px;
                            padding: 35px 50px; /* Larger padding */
                            margin-bottom: 25px;
                            display: grid;
                            grid-template-columns: 80px 1.5fr 1fr auto; /* Explicit widths */
                            align-items: center;
                            gap: 40px;
                            transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
                            border: 1px solid rgba(23, 71, 158, 0.08);
                            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
                        }

                        .job-card:hover {
                            transform: translateY(-8px);
                            box-shadow: 0 30px 60px rgba(23, 71, 158, 0.12);
                            border-color: #eb2525;
                        }

                        .job-img { 
                            width: 80px; 
                            height: 80px; 
                            border-radius: 16px; 
                            object-fit: cover; 
                            filter: grayscale(20%);
                        }

                        .job-info h3 { 
                            font-size: 24px; 
                            font-weight: 800; 
                            margin: 0; 
                            color: #17479e; 
                            line-height: 1.3;
                        }
                        .job-dept { 
                            font-size: 15px; 
                            color: #eb2525; 
                            font-weight: 700; 
                            display: inline-block;
                            margin-top: 8px;
                            background: rgba(235, 37, 37, 0.05);
                            padding: 2px 12px;
                            border-radius: 6px;
                        }
                        
                        .job-meta { 
                            display: flex; 
                            flex-direction: column; /* Stacked meta for a "bigger" content feel */
                            gap: 10px; 
                            color: #555; 
                            font-size: 16px; 
                        }
                        .job-meta span { display: flex; align-items: center; gap: 10px; font-weight: 500; }
                        .job-meta i { color: #17479e; font-size: 18px; }
                        
                        .apply-btn {
                            background: #17479e;
                            color: #fff !important;
                            padding: 16px 40px;
                            border-radius: 14px;
                            font-weight: 700;
                            font-size: 16px;
                            text-decoration: none;
                            transition: 0.3s all ease;
                            text-align: center;
                            box-shadow: 0 10px 20px rgba(23, 71, 158, 0.15);
                        }
                        .apply-btn:hover { 
                            background: #eb2525; 
                            box-shadow: 0 10px 20px rgba(235, 37, 37, 0.2);
                            transform: scale(1.05);
                        }

                        /* RESPONSIVENESS */
                        @media (max-width: 1200px) {
                            .job-card {
                                grid-template-columns: 80px 1fr 1fr;
                                padding: 30px;
                            }
                            .apply-btn { grid-column: span 3; } /* Button takes full width on smaller desktop */
                        }

                        @media (max-width: 991px) {
                            .career-header h2 { font-size: 36px; }
                            .job-card {
                                grid-template-columns: 1fr;
                                text-align: center;
                                justify-items: center;
                                gap: 20px;
                                padding: 40px 20px;
                            }
                            .job-meta {
                                flex-direction: row;
                                justify-content: center;
                                flex-wrap: wrap;
                                margin-bottom: 10px;
                            }
                            .apply-btn { width: 100%; grid-column: auto; }
                            .about-grid { grid-template-columns: 1fr; }
                        }

                        @media (max-width: 575px) {
                            .job-meta { flex-direction: column; align-items: center; }
                        }
                    `}</style>

                    {/* About-section */}
                    <section className="about-section">
                        <div className="about-grid">
                            <div className="content-side">
                                <span className="sub-t">{aboutData.subTitle}</span>
                                <h2 className="main-t">{aboutData.mainTitle}</h2>
                                <p>{aboutData.description}</p>
                                <Link href="/about" className="theme-btn btn-one">Discover More</Link>
                            </div>
                            <div className="image-wrapper">
                                <img src="assets/images/resource/about-1.jpg" alt="About" className="main-image" />
                                <div className="exp-card">
                                    <h2 className="exprnc">{aboutData.experienceYears}</h2>
                                    <span>Years of<br />Experience</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* BIGGER Career-section */}
                    <section className="custom-career-section">
                        <div className="career-container">
                            <div className="career-header">
                                <span className="sub-t">Join Our Team</span>
                                <h2>Explore Your Next Career Move</h2>
                            </div>
                            
                            {[
                                { id: 1, title: "Application Technical Analyst", dept: "Marketing", loc: "Manhattan, NY", date: "July 22, 2023" },
                                { id: 2, title: "Marketing Coordinator", dept: "Marketing", loc: "Manhattan, NY", date: "July 22, 2023" },
                                { id: 3, title: "Software Development Manager", dept: "Engineering", loc: "Manhattan, NY", date: "July 22, 2023" },
                                { id: 4, title: "Senior Operations Director", dept: "Operations", loc: "Manhattan, NY", date: "July 22, 2023" },
                                { id: 5, title: "Office Administration Manager", dept: "Administration", loc: "Manhattan, NY", date: "July 22, 2023" }
                            ].map((job) => (
                                <div className="job-card" key={job.id}>
                                    <img src={`assets/images/resource/career-${job.id}.jpg`} alt={job.title} className="job-img" />
                                    
                                    <div className="job-info">
                                        <h3>{job.title}</h3>
                                        <span className="job-dept">{job.dept} Department</span>
                                    </div>
                                    
                                    <div className="job-meta">
                                        <span><i className="icon-34"></i> {job.loc}</span>
                                        <span><i className="icon-35"></i> {job.date}</span>
                                    </div>
                                    
                                    <Link href="/career-details" className="apply-btn">
                                        Apply Now
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}