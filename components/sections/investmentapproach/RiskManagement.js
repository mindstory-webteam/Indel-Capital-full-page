'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import { coreFaqs } from "@/public/assets/assest"
import LiquidButton from '@/components/LiquidButton.js'

export default function Home() {
    const [activeKey, setActiveKey] = useState(1)

    const handleToggle = (key) => {
        setActiveKey(activeKey === key ? null : key)
    }

    const css = `
        .indel-faq-section { background: #ffffff; padding: 100px 0; }
        .faq-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 60px; align-items: start; }
        
        .faq-sidebar h6 { color: #ee3824; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 15px; }
        .faq-sidebar h2 { color: #17479e; font-size: 42px; font-weight: 800; line-height: 1.2; margin-bottom: 25px; }
        .faq-sidebar p { color: #666; font-size: 17px; line-height: 1.7; }

        .faq-accordion { border-top: 2px solid #f0f4fa; }
        .faq-item { border-bottom: 1px solid #f0f4fa; transition: all 0.3s ease; }
        .faq-header { 
            padding: 25px 0; cursor: pointer; display: flex; justify-content: space-between; align-items: center; 
            transition: all 0.3s ease;
        }
        .faq-header h4 { font-size: 19px; font-weight: 700; color: #333; transition: color 0.3s; padding-right: 30px; }
        .faq-item.active .faq-header h4 { color: #17479e; }
        
        .faq-icon { 
            width: 24px; height: 24px; position: relative; 
            transition: transform 0.3s ease; transform: rotate(0deg);
        }
        .faq-icon::before, .faq-icon::after {
            content: ''; position: absolute; background: #ee3824; transition: all 0.3s;
        }
        .faq-icon::before { width: 100%; height: 2px; top: 50%; left: 0; margin-top: -1px; }
        .faq-icon::after { width: 2px; height: 100%; left: 50%; top: 0; margin-left: -1px; }
        .faq-item.active .faq-icon { transform: rotate(135deg); }
        .faq-item.active .faq-icon::after, .faq-item.active .faq-icon::before { background: #17479e; }

        .faq-content { 
            max-height: 0; overflow: hidden; transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1); 
        }
        .faq-item.active .faq-content { max-height: 300px; }
        .faq-text { padding-bottom: 25px; color: #555; line-height: 1.7; font-size: 15px; }

        .premium-cta {
            background: #17479e; border-radius: 12px; padding: 60px; color: #fff;
            display: flex; justify-content: space-between; align-items: center; margin-top: 80px;
            position: relative; overflow: hidden;
        }
        .premium-cta::before {
            content: ''; position: absolute; top: -50%; right: -10%; width: 400px; height: 400px;
            background: rgba(238, 56, 36, 0.1); border-radius: 50%;
        }

        .btn-wrapper {
            width: 240px;
            height: 60px;
            position: relative;
            z-index: 2;
        }

        @media (max-width: 991px) {
            .faq-grid { grid-template-columns: 1fr; gap: 40px; }
            .premium-cta { flex-direction: column; text-align: center; gap: 35px; padding: 40px 20px; }
            .btn-wrapper { margin: 0 auto; }
        }
    `

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: css }} />
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Core Investor FAQ" breadcrumbImg='assets/images/background/page-title.jpg'>
                
                <section className="indel-faq-section">
                    <div className="auto-container">
                        <div className="faq-grid">
                            <div className="faq-sidebar">
                                <h6>Core FAQ'S</h6>
                                <h2>Your Path to Financial Clarity</h2>
                                <p>We believe transparency is the foundation of a successful partnership. Explore our most common queries regarding Indel Capital's investment methodology and client services.</p>
                                <div className="mt-4">
                                    <span style={{color: "#17479e", fontWeight: "700"}}>Expert Led Advisory</span>
                                    <br/>
                                    <small style={{color: "#888"}}>Regulated and transparent frameworks for your peace of mind.</small>
                                </div>
                            </div>

                            {/* FAQ Accordion */}
                            <div className="faq-accordion">
                                {coreFaqs.map((faq) => (
                                    <div key={faq.id} className={`faq-item ${activeKey === faq.id ? 'active' : ''}`}>
                                        <div className="faq-header" onClick={() => handleToggle(faq.id)}>
                                            <h4>{faq.q}</h4>
                                            <div className="faq-icon"></div>
                                        </div>
                                        <div className="faq-content">
                                            <div className="faq-text">{faq.a}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="premium-cta">
                            <div className="cta-content">
                                <h3 className="mb-2" style={{fontWeight: 800, fontSize: '32px'}}>Ready to secure your future?</h3>
                                <p className="mb-0 text-white-50">Speak with our wealth managers to design your bespoke investment framework.</p>
                            </div>
                            <div className="btn-wrapper">
                                <Link href="/contact" style={{ display: 'block', width: '100%', height: '100%', textDecoration: 'none' }}>
                                    <LiquidButton text="Book a Consultation" bgcolor="#ee3824" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}