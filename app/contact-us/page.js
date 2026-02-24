"use client";

import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
    const [view, setView] = useState("desktop");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setView("mobile");
            else if (window.innerWidth < 1024) setView("tablet");
            else setView("desktop");
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = view === "mobile";
    const isTablet = view === "tablet";

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: "easeOut" }
    };

    return (
        <Layout
            headerStyle={1}
            footerStyle={1}
            breadcrumbTitle="Get in Touch"
            breadcrumbImg={'assets/images/background/page-title.jpg'}
        >
            <div style={{
                ...containerStyle,
                padding: isMobile ? '0 1rem' : isTablet ? '0 3rem' : '0 6rem'
            }}>
                <style jsx global>{`
                    input::placeholder, textarea::placeholder {
                        color: #cbd5e1 !important;
                        opacity: 1;
                    }
                `}</style>

                <motion.section
                    style={{
                        ...heroSection,
                        flexDirection: (isMobile || isTablet) ? 'column' : 'row',
                        paddingTop: isMobile ? '40px' : '80px',
                        paddingBottom: '80px',
                        gap: '60px'
                    }}
                    initial="initial"
                    animate="animate"
                >
                    <motion.div style={{ flex: '1' }} variants={fadeInUp}>

                        <h1 style={{
                            ...heroTitle,
                            fontSize: isMobile ? '38px' : isTablet ? '60px' : 'clamp(50px, 6vw, 90px)',
                            lineHeight: 1.1
                        }}>
                            LET'S <br /> <span style={{ color: '#ee3824' }}>CONNECT.</span>
                        </h1>
                        <p style={{ ...heroSub, fontSize: isMobile ? '16px' : '18px' }}>
                            For inquiries or additional information regarding our investment strategies and structured solutions, please contact Indel Capital’s team.</p>
                    </motion.div>

                    <motion.div
                        style={{
                            ...formWrapper,
                            flex: '1',
                            background: '#f8fafc',
                            padding: '40px',
                            borderRadius: '20px',
                            width: '100%'
                        }}
                        variants={fadeInUp}
                    >
                        <h2 style={{ ...sectionHeading, fontSize: '24px', marginBottom: '30px' }}>Send a Message</h2>
                        <form style={{ ...formGrid, gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '20px' }}>
                            <div style={inputGroup}>
                                <label style={labelStyle}>Full Name</label>
                                <input type="text" placeholder="Full Name" style={inputStyle} required />
                            </div>
                            <div style={inputGroup}>
                                <label style={labelStyle}>Email</label>
                                <input type="email" placeholder="username@company.com" style={inputStyle} required />
                            </div>
                            <div style={{ ...inputGroup, gridColumn: isMobile ? 'auto' : 'span 2' }}>
                                <label style={labelStyle}>Message</label>
                                <textarea placeholder="Describe your inquiry..." style={textareaStyle} required></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="theme-btn btn-one"
                                style={{ ...submitBtn, width: isMobile ? '100%' : 'fit-content' }}
                            >
                                Send Inquiry
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.section>

                <section style={{
                    ...splitSection,
                    gridTemplateColumns: (isMobile || isTablet) ? '1fr' : '0.8fr 1.2fr',
                    padding: isMobile ? '40px 0' : '80px 0',
                    borderTop: '1px solid #eee',
                    gap: '40px'
                }}>
                    <motion.div
                        style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >

                        <motion.div style={statBox} variants={fadeInUp}>
                            <span style={statLabel}>BUSINESS FOCUS</span>
                            <div style={{ ...statValue, fontSize: '18px' }}>Investments & Financial Services</div>
                        </motion.div>

                        <motion.div style={statBox} variants={fadeInUp}>
                            <span style={statLabel}>CORE VALUES</span>
                            <div style={{ ...statValue, fontSize: '18px' }}>Integrity, Transparency, Responsible Growth</div>
                        </motion.div>

                        <motion.div style={infoCard} variants={fadeInUp}>
                            <span style={cardLabel}>Corporate Office</span>
                            <div style={cardValue}>Corporate office located at Indel House, Changampuzha Nagar, South Kalamassery, Ernakulam<br />Kerala 682033,</div>
                        </motion.div>

                        <motion.div style={infoCard} variants={fadeInUp}>
                            <span style={cardLabel}>Email </span>
                            <div style={cardValue}>
                                <Link href="mailto:invest@indelcapital.com" style={linkHover}>your@domain.com</Link><br />
                            </div>
                        </motion.div>

                        <motion.div style={infoCard} variants={fadeInUp}>
                            <span style={cardLabel}>Phone</span>
                            <div style={cardValue}>+91 90726 06615<br /> <small style={{ opacity: 0.6 }}>Mon - Sat, 10am - 6pm</small></div>
                        </motion.div>


                    </motion.div>

                    <motion.div
                        style={{
                            ...mapWrapper,
                            height: isMobile ? '300px' : '100%',
                            minHeight: '500px'
                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3928.676646751186!2d76.317418!3d10.043519!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080dcb2aa099af%3A0x2284420553f1c1b1!2sIndel%20Corporate%20Office!5e0!3m2!1sen!2sin!4v1771934308320!5m2!1sen!2sin" 
                             style={iframeStyle}
                            allowFullScreen
                            loading="lazy"
                        />
                    </motion.div>
                </section>
            </div>
        </Layout>
    );
}

const containerStyle = {
    background: '#ffffff',
    color: '#1a1a1a',
    fontFamily: '"DM Sans", sans-serif',
    overflowX: 'hidden'
};

const heroSection = {
    display: 'flex',
    justifyContent: 'space-between',
};

const heroTitle = {
    fontWeight: '800',
    color: '#17479e',
    margin: 0,
};

const heroSub = {
    maxWidth: '500px',
    color: '#64748b',
    marginTop: '20px',
    lineHeight: '1.6',
};


const statBox = { display: 'flex', flexDirection: 'column', gap: '5px' };

const statLabel = {
    fontSize: '11px',
    fontWeight: '700',
    color: '#ee3824',
};

const statValue = {
    fontSize: '15px',
    fontWeight: '500',
    color: '#17479e',
};

const infoCard = { padding: '10px 0' };

const cardLabel = {
    display: 'block',
    fontSize: '11px',
    textTransform: 'uppercase',
    fontWeight: '700',
    color: '#ee3824',
    marginBottom: '10px'
};

const cardValue = {
    fontSize: '16px',
    fontWeight: '500',
    color: '#17479e',
};

const linkHover = { color: 'inherit', textDecoration: 'none' };

const splitSection = { display: 'grid' };

const formWrapper = { display: 'flex', flexDirection: 'column' };

const sectionHeading = { color: '#17479e', fontWeight: '700' };

const formGrid = { display: 'grid' };

const inputGroup = { display: 'flex', flexDirection: 'column', gap: '8px' };

const labelStyle = {
    fontSize: '12px',
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#1a1a1a',
};

const inputStyle = {
    border: 'none',
    borderBottom: '1.5px solid #d1d5db',
    padding: '10px 0',
    fontSize: '16px',
    outline: 'none',
    background: 'transparent',
};

const textareaStyle = { ...inputStyle, minHeight: '100px', resize: 'none' };

const submitBtn = {
    marginTop: '20px',
    padding: '16px 40px',
    cursor: 'pointer',
    border: 'none'
};

const mapWrapper = {
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)'
};

const iframeStyle = { width: '100%', height: '100%', border: 0 };