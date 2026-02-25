'use client'
import { motion } from "framer-motion"
import { mainCards,valueStrip } from "@/public/assets/assest"
export default function MissionVision() {
  
    

    const contentReveal = {
        hidden: { color: "#94a3b8", opacity: 0.5 },
        visible: { 
            color: "#475569", 
            opacity: 1, 
            transition: { duration: 1, ease: "easeOut" } 
        }
    }

    const titleReveal = {
        hidden: { color: "#94a3b8" },
        visible: { 
            color: "#0f172a", 
            transition: { duration: 0.8 } 
        }
    }

    const styles = {
        section: {
            padding: '120px 0 0 0',
            backgroundColor: '#ffffff',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px',
        },
        card: {
            backgroundColor: '#ffffff',
            padding: '60px 40px',
            borderRadius: '24px',
            border: '1px solid #f1f5f9',
            boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
            position: 'relative',
            overflow: 'hidden',
        },
        iconWrapper: {
            width: '70px',
            height: '70px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '30px',
            transition: 'all 0.8s ease',
        },
        title: {
            fontSize: '28px',
            fontWeight: '800',
            marginBottom: '20px',
            letterSpacing: '-0.5px'
        },
        text: {
            fontSize: '16px',
            lineHeight: '1.8',
            margin: '0',
        },
        strip: {
            marginTop: '80px',
            background: '#17479e',
            padding: '40px',
            borderRadius: '30px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
        },
        valueItem: {
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px'
        },
        valueTitle: {
            fontSize: '18px',
            fontWeight: '700',
            color: '#ffd700',
        },
        valueSub: {
            fontSize: '14px',
            color: 'rgba(255,255,255,0.8)',
            fontWeight: '500'
        }
    };

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <div style={styles.grid}>
                    {mainCards.map((card) => (
                        <div key={card.id} style={styles.card}>
                            <motion.div 
                                initial={{ filter: 'grayscale(1)', opacity: 0.3 }}
                                whileInView={{ filter: 'grayscale(0)', opacity: 1 }}
                                transition={{ duration: 1 }}
                                style={{ 
                                    ...styles.iconWrapper, 
                                    background: card.gradient,
                                    color: '#fff' 
                                }}
                            >
                                {card.icon}
                            </motion.div>
                            
                            <motion.h2 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.5 }}
                                variants={titleReveal}
                                style={styles.title}
                            >
                                {card.title}
                            </motion.h2>
                            
                            <motion.p 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.5 }}
                                variants={contentReveal}
                                style={styles.text}
                            >
                                {card.text}
                            </motion.p>
                        </div>
                    ))}
                </div>

                <motion.div 
                    style={styles.strip}
                    initial={{ opacity: 0.6 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {valueStrip.map((item, index) => (
                        <div key={index} style={styles.valueItem}>
                            {item.icon}
                            <div>
                                <span style={styles.valueTitle}>{item.title}</span>
                                <div style={styles.valueSub}>{item.sub}</div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}