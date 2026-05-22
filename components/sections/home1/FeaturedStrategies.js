"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate, useInView } from "framer-motion";


function Counter({ value, suffix = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const [displayValue, setDisplayValue] = useState("0");

    const numericValue = parseFloat(value.toString().replace(/[^0-9.]/g, '')) || 0;
    const count = useMotionValue(0);

    useEffect(() => {
        if (inView) {
            const controls = animate(count, numericValue, {
                duration: 2,
                ease: "easeOut",
                onUpdate: (latest) => {
                    if (value.toString().includes('.')) {
                        setDisplayValue(latest.toFixed(2));
                    } else {
                        setDisplayValue(Math.round(latest).toString());
                    }
                }
            });
            return controls.stop;
        }
    }, [inView, numericValue, count, value]);

    return <span ref={ref}>{displayValue}{suffix}</span>;
}

export default function FeaturedStrategies() {
    
    const featuredStrategiesData = {
        subTitle: "Institutional Roadmap",
        mainTitle: "Strategies for Sustainable Value",
        description: "Supported by governance, expertise, and institutional credibility, enabling efficient capital deployment across sectors.",
        stats: {
            security: "100",
            aum: "2026",
            yield: "12.50",
            branches: "500"
        }
    };
    const data = featuredStrategiesData;

    const strategies = [
        {
            id: 0,
            className: "bento-card card-red card-wide",
            type: "main-stat",
            label: "STRUCTURED FINANCE",
            value: "100",
            suffix: "%",
            title: "Asset-Backed Security",
            description: "Indel Capital structures investments against immovable assets and secured exposures ensuring stability, transparency, and strong investor confidence."
        },
        {
            id: 1,
            className: "bento-card card-blue",
            type: "growth",
            label: "CAPITAL APPRECIATION",
            title: "Capital for Long-Term Growth",
            value: "2026",
            prefix: "",
            suffix: "",
            description: "Backed by Indel Corporation, Indel Capital deploys capital into carefully selected opportunities that enable sustainable value creation."
        },
        {
            id: 3,
            className: "bento-card card-white card-wide",
            type: "tech",
            title: "Capital Tech",
            description: "Every investment is backed by rigorous risk assessment, asset valuation, and structured credit frameworks. Our approach combines financial discipline with deep market understanding to ensure sustainable growth, capital protection, and long-term value creation."
        },
        {
            id: 4,
            className: "bento-card card-blue",
            type: "map",
            label: "INSTITUTIONAL FOOTPRINT",
            value: "500",
            suffix: "+",
            title: "Strong Financial Foundation",
            description: "Supported by governance, expertise, and institutional credibility, enabling efficient capital deployment across sectors."
        }
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
        })
    };

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: styles }} />
            <section className="indel-bento-section">
                <div className="container-compact">
                    <div className="header-wrapper">
                        <span className="badge-modern">{data.subTitle}</span>
                        <h2 className="title-bold">{data.mainTitle}</h2>
                        <p className="description-text">{data.description}</p>
                    </div>

                    <div className="bento-layout">
                        {strategies.map((item, index) => (
                            <motion.div
                                key={item.id}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={cardVariants}
                                className={item.className}
                            >
                                <div className="card-inner">
                                    {item.type === "main-stat" && (
                                        <>
                                            {/* <div className="label-group" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <span className="indicator">{item.label}</span>
                                            </div> */}
                                            <div className="content-mid">
                                                <h3 className="card-big-stat">
                                                    <Counter value={item.value} />{item.suffix}
                                                </h3>
                                            </div>
                                            <div className="card-footer">
                                                <h4 className="white-text">{item.title}</h4>
                                                <p className="white-text-dim">{item.description}</p>
                                            </div>
                                        </>
                                    )}

                                    {item.type === "growth" && (
                                        <>
                                            <span className="pill-outline">{item.label}</span>
                                            <div className="center-content">
                                                <span className="scaling-label">{item.title}</span>
                                                <p className="mini-desc">{item.description}</p>
                                            </div>
                                            <div className="growth-viz">
                                                <motion.div initial={{ height: 0 }} whileInView={{ height: '40%' }} transition={{ duration: 1 }} className="viz-bar"></motion.div>
                                                <motion.div initial={{ height: 0 }} whileInView={{ height: '60%' }} transition={{ duration: 1, delay: 0.2 }} className="viz-bar"></motion.div>
                                                <motion.div initial={{ height: 0 }} whileInView={{ height: '80%' }} transition={{ duration: 1, delay: 0.4 }} className="viz-bar"></motion.div>
                                                <motion.div initial={{ height: 0 }} whileInView={{ height: '100%' }} transition={{ duration: 1, delay: 0.6 }} className="viz-bar active"></motion.div>
                                            </div>
                                        </>
                                    )}

                                    {item.type === "yield" && (
                                        <>
                                            <div className="header-small">
                                                <h5>{item.title}</h5>
                                            </div>
                                            <div className="yield-content">
                                                <span className="yield-value">
                                                    <Counter value={item.value} />{item.suffix}
                                                </span>
                                                <span className="yield-sub">{item.subLabel}</span>
                                                <p className="reach-text">{item.description}</p>
                                            </div>
                                        </>
                                    )}

                                    {item.type === "tech" && (
                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', height: '100%', textAlign: 'start' }}>
                                            <div className="header-small" style={{ justifyContent: 'center',  }}>
                                                <h5>{item.title}</h5>
                                            </div>
                                            <p className="reach-text" style={{ maxWidth: '800px' }}>{item.description}</p>
                                        </div>
                                    )}

                                    {item.type === "map" && (
                                        <>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <span className="pill-outline">{item.label}</span>
                                            </div>
                                            <div className="footer-content" style={{ marginTop: 'auto' }}>
                                                <h4 className="white-text" style={{ fontSize: '38px', marginBottom: '5px' }}>
                                                    <Counter value={item.value} />{item.suffix}
                                                </h4>
                                                <p className="white-text-dim" style={{ fontWeight: 'bold', marginBottom: '5px' }}>{item.title}</p>
                                                <p className="white-text-dim" style={{ fontSize: '13px' }}>{item.description}</p>
                                            </div>
                                           
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

const styles = `
    .indel-bento-section { padding: 80px 0; background-color: #ffffff; overflow: hidden; }
    .container-compact { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
    .header-wrapper { margin-bottom: 50px; text-align: left; }
    .badge-modern { color: #ee3824; font-weight: 800; font-size: 13px; text-transform: uppercase; letter-spacing: 2px; display: block; margin-bottom: 12px; }
    .title-bold { font-size: 44px; font-weight: 800; color: #000; letter-spacing: -1.5px; margin-bottom: 20px; line-height: 1.1; }
    .description-text { color: #475569; font-size: 18px; max-width: 700px; line-height: 1.6; }
    .bento-layout { display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: 320px; gap: 20px; }
    .bento-card { border-radius: 32px; position: relative; overflow: hidden; border: 1px solid #f1f5f9; background: #fff; }
    .card-inner { height: 100%; padding: 30px; display: flex; flex-direction: column; justify-content: space-between; position: relative; z-index: 2; }
    .card-wide { grid-column: span 2; }
    .card-red { background: linear-gradient(135deg, #ee3824 0%, #b91c1c 100%); color: white; border: none; }
    .card-blue { background: linear-gradient(135deg, #17479e 0%, #0f2e6b 100%); color: white; border: none; }
    .card-white { background: #f8fafc; color: #0f172a; }
    .indicator { font-size: 11px; font-weight: 800; letter-spacing: 1px; background: rgba(255,255,255,0.2); padding: 4px 12px; border-radius: 50px; }
    .white-text { color: #ffffff !important; font-size: 24px; font-weight: 800; margin-bottom: 8px; }
    .white-text-dim { color: rgba(255,255,255,0.8) !important; font-size: 15px; line-height: 1.5; }
    .card-big-stat { font-size: 110px; font-weight: 950; line-height: 0.8; letter-spacing: -6px; margin-top: 10px; color: #ffffff !important; }
    .scaling-label { font-size: 14px; opacity: 0.8; font-weight: 600; }
    .mini-desc { font-size: 13px; opacity: 0.7; margin-top: 12px; color: white; }
    .pill-outline { border: 1px solid rgba(255,255,255,0.3); padding: 6px 16px; border-radius: 100px; font-size: 11px; font-weight: 700; align-self: flex-start; }
    .header-small { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
    .header-small h5 { font-weight: 800; font-size: 19px; color: #1e293b; margin: 0; }
    .icon-box { width: 44px; height: 44px; border-radius: 14px; display: flex; align-items: center; justify-content: center; }
    .icon-box.blue { background: #e0e7ff; color: #17479e; }
    .icon-box.red { background: #fee2e2; color: #ee3824; }
    .yield-value { font-size: 52px; font-weight: 900; color: #17479e; display: block; line-height: 1; }
    .yield-sub { font-size: 13px; color: #ee3824; font-weight: 800; margin: 8px 0; display: block; text-transform: uppercase; }
    .reach-text { font-size: 14px; color: #64748b; line-height: 1.6; }
    .tag-group { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 15px; }
    .tag { padding: 5px 12px; border-radius: 6px; font-size: 11px; font-weight: 800; }
    .tag.blue { background: #e0e7ff; color: #17479e; }
    .tag.red { background: #fee2e2; color: #ee3824; }
    .growth-viz { display: flex; align-items: flex-end; gap: 6px; height: 50px; margin-top: 25px; }
    .viz-bar { flex: 1; background: rgba(255,255,255,0.15); border-radius: 4px; }
    .viz-bar.active { background: #ee3824; }
    .map-dot { position: absolute; width: 6px; height: 6px; background: #ee3824; border-radius: 50%; box-shadow: 0 0 15px #ee3824; animation: pulse 2s infinite; }
    @keyframes pulse { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.5; } 100% { transform: scale(1); opacity: 1; } }
    @media (max-width: 1024px) { .bento-layout { grid-template-columns: repeat(2, 1fr); grid-auto-rows: auto; } .card-wide { grid-column: span 2; } .title-bold { font-size: 38px; } .bento-card { min-height: 300px; } }
    @media (max-width: 768px) { .header-wrapper { text-align: center; } .description-text { margin: 0 10px; text-align: start; } .bento-layout { grid-template-columns: 1fr; grid-auto-rows: auto; } .card-wide { grid-column: span 1; } .card-big-stat { font-size: 80px; }  .title-bold { font-size: 22px; } .card-inner { padding: 25px; } .bento-card { min-height: 280px; } }
`;