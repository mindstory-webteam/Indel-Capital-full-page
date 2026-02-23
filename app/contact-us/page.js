"use client";

import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 992);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    const staggerContainer = {
        animate: { transition: { staggerChildren: 0.1 } }
    };

    return (
        <Layout 
            headerStyle={1} 
            footerStyle={1} 
            breadcrumbTitle="Get in Touch" 
            breadcrumbImg={'assets/images/background/page-title.jpg'}
        >
            <div style={{...containerStyle, padding: isMobile ? '0 1.5rem' : '0 6rem'}}>
                
                <motion.section 
                    style={{
                        ...heroSection, 
                        flexDirection: isMobile ? 'column' : 'row', 
                        alignItems: isMobile ? 'flex-start' : 'flex-end', 
                        paddingTop: isMobile ? '60px' : '120px'
                    }}
                    initial="initial"
                    animate="animate"
                    variants={staggerContainer}
                >
                    <motion.div style={heroLeft} variants={fadeInUp}>
                        <div style={taglineRow}>
                            <span style={taglineText}>START A PARTNERSHIP</span>
                        </div>
                        <h1 style={{...heroTitle, fontSize: isMobile ? '45px' : 'clamp(50px, 6vw, 90px)'}}>
                            LET'S <br /> <span style={{ color: '#ee3824' }}>CONNECT.</span>
                        </h1>
                        <p style={heroSub}>
                            Engage with Indel Capital’s investment specialists. We typically respond to institutional inquiries within 2 business hours.
                        </p>
                    </motion.div>

                    <motion.div 
                        style={{
                            ...heroRight, 
                            borderLeft: isMobile ? 'none' : '1px solid #eee', 
                            paddingLeft: isMobile ? '0' : '40px', 
                            marginTop: isMobile ? '40px' : '0'
                        }} 
                        variants={fadeInUp}
                    >
                        <div style={statBox}>
                            <span style={statLabel}>GLOBAL PRESENCE</span>
                            <div style={statValue}>Mumbai • Dubai • London</div>
                        </div>
                        <div style={statBox}>
                            <span style={statLabel}>OUR COMMITMENT</span>
                            <div style={statValue}>Transparent Growth & <br/>Sustainable Capital</div>
                        </div>
                    </motion.div>
                </motion.section>

                <motion.div 
                    style={{...infoStrip, gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)'}}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.div style={{...infoCard, borderRight: isMobile ? 'none' : '1px solid #eee', borderBottom: isMobile ? '1px solid #eee' : 'none'}} variants={fadeInUp}>
                        <span style={cardLabel}>Corporate Office</span>
                        <div style={cardValue}>Indel Capital Tower, <br />Mumbai, MH 400001</div>
                    </motion.div>
                    <motion.div style={{...infoCard, borderRight: isMobile ? 'none' : '1px solid #eee', borderBottom: isMobile ? '1px solid #eee' : 'none'}} variants={fadeInUp}>
                        <span style={cardLabel}>Email Channels</span>
                        <div style={cardValue}>
                            <Link href="mailto:invest@indelcapital.com" style={linkHover}>invest@indelcapital.com</Link><br/>
                            <Link href="mailto:partners@indelcapital.com" style={linkHover}>partners@indelcapital.com</Link>
                        </div>
                    </motion.div>
                    <motion.div style={{...infoCard, borderRight: 'none'}} variants={fadeInUp}>
                        <span style={cardLabel}>Direct Line</span>
                        <div style={cardValue}>+91 22 0000 0000 <br /> <small style={{opacity: 0.6}}>Available Mon-Fri, 9am - 6pm</small></div>
                    </motion.div>
                </motion.div>

                <section style={{...splitSection, gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr', gap: isMobile ? '40px' : '80px'}}>
                    <motion.div 
                        style={formWrapper}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 style={sectionHeading}>Send a Message</h2>
                        <form style={{...formGrid, gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr'}}>
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
                                <textarea placeholder="Describe your inquiry or proposal..." style={textareaStyle} required></textarea>
                            </div>
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="theme-btn btn-one" 
                                style={submitBtn}
                            >
                                Send Inquiry
                            </motion.button>
                        </form>
                    </motion.div>

                    <motion.div 
                        style={{...mapWrapper, height: isMobile ? '350px' : '550px'}}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.911674404742!2d72.82329387595562!3d18.93532705603704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e77905d4df%3A0x6b4848f95c024564!2sFort%2C%20Mumbai%2C%20Maharashtra%20400001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            style={iframeStyle}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
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
    fontFamily: '"DM Sans", sans-serif'
};

const heroSection = {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
};

const heroLeft = {
    flex: '1',
};

const heroRight = {
    flex: '0 0 300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    paddingBottom: '20px',
    marginBottom: '10px'
};

const taglineRow = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '20px',
};

const taglineText = {
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '2px',
    color: '#ee3824',
};



const heroTitle = {
    fontWeight: '800',
    lineHeight: 1,
    color: '#17479e',
    margin: 0,
};

const heroSub = {
    maxWidth: '500px',
    fontSize: '18px',
    color: '#64748b',
    marginTop: '25px',
    lineHeight: '1.6',
};

const statBox = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
};

const statLabel = {
    fontSize: '11px',
    fontWeight: '700',
    color: '#ee3824',
    letterSpacing: '1px',
};

const statValue = {
    fontSize: '15px',
    fontWeight: '500',
    color: '#17479e',
    lineHeight: '1.4',
};

const infoStrip = {
    display: 'grid',
    borderTop: '1px solid #eee',
    borderBottom: '1px solid #eee',
    margin: '20px 0'
};

const infoCard = {
    padding: '50px 20px',
};

const cardLabel = {
    display: 'block',
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    fontWeight: '700',
    color: '#ee3824',
    marginBottom: '12px'
};

const cardValue = {
    fontSize: '17px',
    fontWeight: '500',
    color: '#17479e',
    lineHeight: '1.5'
};

const linkHover = {
    color: 'inherit',
    textDecoration: 'none',
};

const splitSection = {
    display: 'grid',
    padding: '100px 0'
};

const formWrapper = {
    display: 'flex',
    flexDirection: 'column'
};

const sectionHeading = {
    fontSize: '36px',
    color: '#17479e',
    marginBottom: '45px',
    fontWeight: '700'
};

const formGrid = {
    display: 'grid',
    gap: '30px'
};

const inputGroup = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
};

const labelStyle = {
    fontSize: '12px',
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#1a1a1a',
    letterSpacing: '0.5px'
};

const inputStyle = {
    border: 'none',
    borderBottom: '1.5px solid #d1d5db',
    padding: '12px 0',
    fontSize: '16px',
    outline: 'none',
    background: 'transparent',
};

const textareaStyle = {
    ...inputStyle,
    minHeight: '120px',
    resize: 'none'
};

const submitBtn = {
    marginTop: '30px',
    padding: '18px 50px',
    width: 'fit-content',
    cursor: 'pointer',
    border: 'none'
};

const mapWrapper = {
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
};

const iframeStyle = {
    width: '100%',
    height: '100%',
    border: 0,
};