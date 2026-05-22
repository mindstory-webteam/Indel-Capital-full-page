'use client'
import { AboutFeatures, aboutData } from '@/public/assets/assest.js';
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'

export default function Home() {
    const allJobs = [];


    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Career Page" breadcrumbImg='assets/images/background/page-title.jpg'>
                <div>
                    <style jsx>{`
                        .custom-career-section { background: #f8fafc; padding: 10px 0px 50px 0; }
                        .career-container { max-width: 1300px; margin: 0 auto; padding: 0 30px; }
                        .career-header { text-align: center; margin-bottom: 80px; }
                        .career-header h2 { font-size: 48px; font-weight: 800; color: #1a1a1a; letter-spacing: -1px; }
                        .job-card {
                            background: #ffffff;
                            border-radius: 24px;
                            padding: 35px 50px;
                            margin-bottom: 25px;
                            display: grid;
                            grid-template-columns: 80px 1.5fr 1fr auto;
                            align-items: center;
                            gap: 40px;
                            transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
                            border: 1px solid rgba(23, 71, 158, 0.08);
                            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
                        }
                        .job-card:hover { transform: translateY(-8px); box-shadow: 0 30px 60px rgba(23, 71, 158, 0.12); border-color: #eb2525; }
                        .job-img { width: 80px; height: 80px; border-radius: 16px; object-fit: cover; filter: grayscale(20%); }
                        .job-info h3 { font-size: 24px; font-weight: 800; margin: 0; color: #17479e; line-height: 1.3; }
                        .job-dept { font-size: 15px; color: #eb2525; font-weight: 700; display: inline-block; margin-top: 8px; background: rgba(235, 37, 37, 0.05); padding: 2px 12px; border-radius: 6px; }
                        .job-meta { display: flex; flex-direction: column; gap: 10px; color: #555; font-size: 16px; }
                        .job-meta span { display: flex; align-items: center; gap: 10px; font-weight: 500; }
                        .job-meta i { color: #17479e; font-size: 18px; }
                        .apply-btn { background: #17479e; color: #fff !important; padding: 16px 40px; border-radius: 14px; font-weight: 700; font-size: 16px; text-decoration: none; transition: 0.3s all ease; text-align: center; box-shadow: 0 10px 20px rgba(23, 71, 158, 0.15); }
                        .apply-btn:hover { background: #eb2525; box-shadow: 0 10px 20px rgba(235, 37, 37, 0.2); transform: scale(1.05); }

                        @media (max-width: 1200px) { .job-card { grid-template-columns: 80px 1fr 1fr; padding: 30px; } .apply-btn { grid-column: span 3; } }
                        @media (max-width: 991px) { .career-header h2 { font-size: 36px; } .job-card { grid-template-columns: 1fr; text-align: center; justify-items: center; gap: 20px; padding: 40px 20px; } .job-meta { flex-direction: row; justify-content: center; flex-wrap: wrap; margin-bottom: 10px; } .apply-btn { width: 100%; grid-column: auto; } }
                        @media (max-width: 575px) { .job-meta { flex-direction: column; align-items: center; } }

                        .empty-state { text-align: center; padding: 80px 20px;  margin-top: 40px; transition: all 0.3s ease; }
                        .empty-state .icon-wrapper { display: inline-flex; align-items: center; justify-content: center; width: 100px; height: 100px; background: rgba(23, 71, 158, 0.05); border-radius: 50%; color: #17479e; margin-bottom: 24px; }
                        .empty-state h3 { font-size: 28px; font-weight: 800; color: #1a1a1a; margin-bottom: 12px; }
                        .empty-state p { font-size: 18px; color: #555; max-width: 500px; margin: 0 auto; line-height: 1.6; }
                    `}</style>

                    <section className="custom-career-section">
                        <div className="career-container">
                            {/* <div className="career-header">
                                <span className="sub-t">Join Our Team</span>
                                <h2>Explore Your Next Career Move</h2>
                            </div> */}
                            
                            <div className="empty-state">
                                <div className="icon-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                    </svg>
                                </div>
                                <h3>No Openings Available Right Now</h3>
                                <p>We're currently not hiring for any roles, but check back later! We'll post new opportunities as our team grows.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}