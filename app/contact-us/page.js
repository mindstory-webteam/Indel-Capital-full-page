"use client";

import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
    const [view, setView] = useState("desktop"); // desktop, tablet, mobile

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
                
                {/* HERO SECTION */}
                <motion.section 
                    style={{
                        ...heroSection, 
                        flexDirection: (isMobile || isTablet) ? 'column' : 'row', 
                        alignItems: (isMobile || isTablet) ? 'flex-start' : 'flex-end', 
                        paddingTop: isMobile ? '40px' : '80px',
                        paddingBottom: '40px'
                    }}
                    initial="initial"
                    animate="animate"
                >
                    <motion.div style={{...heroLeft, width: '100%'}} variants={fadeInUp}>
                        <div style={taglineRow}>
                            <span style={taglineText}>START A PARTNERSHIP</span>
                        </div>
                        <h1 style={{
                            ...heroTitle, 
                            fontSize: isMobile ? '38px' : isTablet ? '60px' : 'clamp(50px, 6vw, 90px)',
                            lineHeight: 1.1
                        }}>
                            LET'S <br /> <span style={{ color: '#ee3824' }}>CONNECT.</span>
                        </h1>
                        <p style={{...heroSub, fontSize: isMobile ? '16px' : '18px'}}>
                            Engage with Indel Capital’s investment specialists. We typically respond to institutional inquiries within 2 business hours.
                        </p>
                    </motion.div>

                    <motion.div 
                        style={{
                            ...heroRight, 
                            borderLeft: (isMobile || isTablet) ? 'none' : '1px solid #eee', 
                            paddingLeft: (isMobile || isTablet) ? '0' : '40px', 
                            marginTop: (isMobile || isTablet) ? '30px' : '0',
                            width: (isMobile || isTablet) ? '100%' : '300px'
                        }} 
                        variants={fadeInUp}
                    >
                        <div style={statBox}>
                            <span style={statLabel}>GLOBAL PRESENCE</span>
                            <div style={statValue}>Mumbai • Dubai • London</div>
                        </div>
                        <div style={statBox}>
                            <span style={statLabel}>OUR COMMITMENT</span>
                            <div style={statValue}>Transparent Growth & Sustainable Capital</div>
                        </div>
                    </motion.div>
                </motion.section>

                {/* INFO STRIP */}
                <motion.div 
                    style={{
                        ...infoStrip, 
                        gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(3, 1fr)'
                    }}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <motion.div style={{...infoCard, borderRight: (isMobile || isTablet) ? 'none' : '1px solid #eee', borderBottom: (isMobile || isTablet) ? '1px solid #eee' : 'none'}} variants={fadeInUp}>
                        <span style={cardLabel}>Corporate Office</span>
                        <div style={cardValue}>Indel Capital Tower, <br />Mumbai, MH 400001</div>
                    </motion.div>
                    <motion.div style={{...infoCard, borderRight: isMobile ? 'none' : isTablet ? 'none' : '1px solid #eee', borderBottom: isMobile ? '1px solid #eee' : 'none'}} variants={fadeInUp}>
                        <span style={cardLabel}>Email Channels</span>
                        <div style={cardValue}>
                            <Link href="mailto:invest@indelcapital.com" style={linkHover}>invest@indelcapital.com</Link><br/>
                            <Link href="mailto:partners@indelcapital.com" style={linkHover}>partners@indelcapital.com</Link>
                        </div>
                    </motion.div>
                    <motion.div style={{...infoCard, borderRight: 'none'}} variants={fadeInUp}>
                        <span style={cardLabel}>Direct Line</span>
                        <div style={cardValue}>+91 22 0000 0000 <br /> <small style={{opacity: 0.6}}>Mon-Fri, 9am - 6pm</small></div>
                    </motion.div>
                </motion.div>

                {/* FORM & MAP SECTION */}
                <section style={{
                    ...splitSection, 
                    gridTemplateColumns: (isMobile || isTablet) ? '1fr' : '1.1fr 0.9fr', 
                    padding: isMobile ? '40px 0' : '80px 0'
                }}>
                    <motion.div 
                        style={formWrapper}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 style={{...sectionHeading, fontSize: isMobile ? '28px' : '36px', marginBottom: '30px'}}>Send a Message</h2>
                        <form style={{...formGrid, gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '20px'}}>
                            <div style={inputGroup}>
                                <label style={labelStyle}>Full Name</label>
                                <input type="text" placeholder="Ajith k v" style={inputStyle} required />
                            </div>
                            <div style={inputGroup}>
                                <label style={labelStyle}>Corporate Email</label>
                                <input type="email" placeholder="ajith@company.com" style={inputStyle} required />
                            </div>
                            <div style={{ ...inputGroup, gridColumn: isMobile ? 'auto' : 'span 2' }}>
                                <label style={labelStyle}>Message</label>
                                <textarea placeholder="Describe your inquiry..." style={textareaStyle} required></textarea>
                            </div>
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="theme-btn btn-one" 
                                style={{...submitBtn, width: isMobile ? '100%' : 'fit-content'}}
                            >
                                Send Inquiry
                            </motion.button>
                        </form>
                    </motion.div>

                    <motion.div 
                        style={{
                            ...mapWrapper, 
                            height: isMobile ? '300px' : isTablet ? '400px' : '500px',
                            marginTop: (isMobile || isTablet) ? '40px' : '0'
                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160990053!2d72.7410992!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
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

// --- STYLES ---
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

const heroLeft = { flex: '1' };

const heroRight = {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
};

const taglineRow = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
};

const taglineText = {
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '2px',
    color: '#ee3824',
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

const infoStrip = {
    display: 'grid',
    borderTop: '1px solid #eee',
    borderBottom: '1px solid #eee',
};

const infoCard = { padding: '40px 10px' };

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