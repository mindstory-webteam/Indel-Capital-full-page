"use client";

import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import LiquidButton from '@/components/LiquidButton.js';

const selectOptions = [
    { value: "invest", label: "I wish to Invest" },
    { value: "callback", label: "Call me Back" },
    { value: "know_more", label: "I want to know more" },
];

export default function ContactPage() {
    const [view, setView] = useState("desktop");
    const [form, setForm] = useState({ name: '', email: '', phone: '', help: '', message: '' });

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
    };

 

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    };

    // Shared style for standard inputs
    const inputStyle = {
        width: '100%',
        padding: '12px 15px',
        borderRadius: '8px',
        border: '1px solid #d1d5db',
        fontSize: '15px',
        color: '#1a1a1a',
        background: '#ffffff',
        outline: 'none',
        marginTop: '6px',
        boxSizing: 'border-box'
    };

    const labelStyle = {
        fontSize: '12px',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: '#17479e',
        display: 'block'
    };

    return (
        <Layout
            headerStyle={1}
            footerStyle={1}
            breadcrumbTitle="Get in Touch"
            breadcrumbImg={'assets/images/background/page-title.jpg'}
        >
            <div style={{
                background: '#ffffff',
                color: '#1a1a1a',
                fontFamily: "'Outfit', sans-serif",
                overflowX: 'hidden',
                padding: isMobile ? '0 1rem' : isTablet ? '0 3rem' : '0 6rem',
            }}>

                <motion.section
                    style={{
                        display: 'flex',
                        flexDirection: (isMobile || isTablet) ? 'column' : 'row',
                        justifyContent: 'space-between',
                        paddingTop: isMobile ? '40px' : '80px',
                        paddingBottom: '80px',
                        gap: '60px',
                    }}
                    initial="initial"
                    animate="animate"
                >
                    <motion.div style={{ flex: '1' }} variants={fadeInUp}>
                        <p style={{
                            fontSize: '11px', fontWeight: '800', letterSpacing: '4px',
                            textTransform: 'uppercase', color: '#ee3824', marginBottom: '20px'
                        }}>
                            INDEL CAPITAL
                        </p>
                        <h1 style={{
                            fontWeight: '800',
                            color: '#000',
                            margin: 0,
                            fontSize: isMobile ? '38px' : isTablet ? '60px' : 'clamp(50px, 6vw, 90px)',
                            lineHeight: 1.05,
                        }}>
                            LET'S<br /><span style={{ color: '#000' }}>CONNECT.</span>
                        </h1>
                        <p style={{
                            maxWidth: '420px', color: '#64748b',
                            marginTop: '24px', lineHeight: '1.7',
                            fontSize: isMobile ? '15px' : '17px',
                        }}>
                            For inquiries or additional information regarding our investment strategies and structured solutions, please contact Indel Capital's team.
                        </p>

                        <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {[
                                { label: 'South Kalamassery, Ernakulam, Kerala 682033' },
                                { label: '+91 90726 06615' },
                                { label: 'Mon – Sat, 10am – 6pm' },
                            ].map(({ label }) => (
                                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{ fontSize: '14px', color: '#475569' }}>{label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        style={{
                            flex: '1',
                            background: '#f8fafc',
                            padding: isMobile ? '28px 20px' : '44px',
                            borderRadius: '16px',
                            width: '100%',
                            boxShadow: '0 4px 40px rgba(23,71,158,0.07)',
                            border: '1px solid #e8edf5',
                            position: 'relative',
                        }}
                        variants={fadeInUp}
                    >
                        <h2 style={{ color: '#17479e', fontWeight: '700', fontSize: '22px', marginBottom: '8px', marginTop: 0 }}>
                            Send a Message
                        </h2>
                     

                        <AnimatePresence mode="wait">
                            { (
                                <form
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '20px',
                                        paddingTop:'20px',
                                    }}
                                >
                                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '20px' }}>
                                        <div>
                                            <label style={labelStyle}>Full Name</label>
                                            <input
                                                name="name"
                                                type="text"
                                                placeholder="Full Name"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                                style={inputStyle}
                                            />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Email Address</label>
                                            <input
                                                name="email"
                                                type="email"
                                                placeholder="user@company.com"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                                style={inputStyle}
                                            />
                                        </div>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '20px' }}>
                                        <div>
                                            <label style={labelStyle}>Mobile Number</label>
                                            <input
                                                name="phone"
                                                type="tel"
                                                placeholder="+91"
                                                value={form.phone}
                                                onChange={handleChange}
                                                required
                                                style={inputStyle}
                                            />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>How can we help?</label>
                                            <select
                                                name="help"
                                                value={form.help}
                                                onChange={handleChange}
                                                required
                                                style={{ ...inputStyle, appearance: 'auto' }}
                                            >
                                                <option value="">Select an option</option>
                                                {selectOptions.map(opt => (
                                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label style={labelStyle}>Message</label>
                                        <textarea
                                            name="message"
                                            placeholder="Describe your inquiry..."
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }}
                                        />
                                    </div>

                                    <div style={{ width: isMobile ? '100%' : '200px', height: '55px', marginTop: '10px' }}>
                                        <button
                                            type="submit"
                                            style={{ border: 'none', background: 'none', padding: 0, width: '100%', height: '100%', cursor: 'pointer' }}
                                        >
                                            <LiquidButton text="Submit" bgcolor="#ee3824" />
                                        </button>
                                    </div>
                                </form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.section>

                {/* Map and Office Details Section - Remains unchanged */}
                <section style={{
                    display: 'grid',
                    gridTemplateColumns: (isMobile || isTablet) ? '1fr' : '0.8fr 1.2fr',
                    padding: isMobile ? '40px 0' : '80px 0',
                    borderTop: '1px solid #eee',
                    gap: '40px',
                }}>
                    <motion.div
                        style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {[
                            { label: 'BUSINESS FOCUS', value: 'Investments & Financial Services' },
                            { label: 'CORE VALUES', value: 'Integrity, Transparency, Responsible Growth' },
                        ].map(({ label, value }) => (
                            <motion.div key={label} variants={fadeInUp} style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                <span style={{ fontSize: '11px', fontWeight: '700', color: '#ee3824', letterSpacing: '2px' }}>{label}</span>
                                <span style={{ fontSize: '17px', fontWeight: '500', color: '#17479e' }}>{value}</span>
                            </motion.div>
                        ))}

                        {[
                            { label: 'Corporate Office', value: 'Indel House, South Kalamassery, Kerala 682033' },
                            { label: 'Email', value: 'your@domain.com' },
                            { label: 'Phone', value: '+91 90726 06615' },
                        ].map(({ label, value }) => (
                            <motion.div key={label} variants={fadeInUp} style={{ padding: '10px 0', borderBottom: '1px solid #f0f0f0' }}>
                                <span style={{ display: 'block', fontSize: '10px', textTransform: 'uppercase', fontWeight: '800', color: '#ee3824', letterSpacing: '2.5px', marginBottom: '8px' }}>
                                    {label}
                                </span>
                                <span style={{ fontSize: '15px', fontWeight: '500', color: '#17479e' }}>
                                    {value}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        style={{
                            borderRadius: '16px', overflow: 'hidden',
                            boxShadow: '0 10px 40px rgba(23,71,158,0.10)',
                            minHeight: '400px',
                            border: '1px solid #e8edf5',
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.6822464151255!2d76.31478527479418!3d10.043057890064578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080dcb2aa099af%3A0x2284420553f1c1b1!2sIndel%20Corporate%20Office!5e0!3m2!1sen!2sin!4v1772168459596!5m2!1sen!2sin"
                            style={{ width: '100%', height: '100%', border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        />
                    </motion.div>
                </section>
            </div>
        </Layout>
    );
}