'use client'
import Link from "next/link";
import LiquidButton from '@/components/LiquidButton.js';

export default function Whoweare() {
    const whoweareData = {
        subTitle: "Who we are",
        mainTitle: "Your Trusted Finance Partner for Every Stage of Life.",
        descriptionMain: "Indel Capital is the capital markets and structured finance arm backed by Indel Corporation, a diversified business group with a strong presence across financial services and multiple sectors. Built on the legacy and credibility of Indel Money, Indel Capital is designed to expand the group’s financial ecosystem through innovative and responsible capital solutions. Our focus is on creating structured financial products that combine stability, transparency, and long-term value for investors and borrowers alike.",
        descriptionQuote: "We simplify finance through personalised solutions, smart insights, and continuous support ensuring you're always moving in the right direction.",
        experienceYears: "5",
        experienceText: "Years Experience",
        imagePath: "assets/images/who-we-are/who-we-are-img1.png",
        points: [
            "Unlocking better financial possibilities",
            "Fast, practical solutions for everyday financial needs",
            "A growing community built on trust and progress"
        ]
    };

    const styles = {
        section: {
            position: 'relative',
            background: '#ffffff',
            padding: '80px 0',
        },
        row: {
            display: 'flex',
            alignItems: 'stretch',
            flexWrap: 'wrap',
            gap: '0',
        },
        contentColumn: {
            flex: '0 0 50%',
            maxWidth: '50%',
            display: 'flex',
            alignItems: 'center',
            padding: '0 15px',
            boxSizing: 'border-box',
        },
        contentBox: {
            paddingRight: '40px',
            width: '100%',
        },
        subTitle: {
            color: '#eb2525',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            fontWeight: '700',
            marginBottom: '10px',
            fontSize: '13px',
            margin: '0 0 10px 0',
        },
        mainTitle: {
            color: '#17479d',
            fontSize: 'clamp(26px, 2.8vw, 36px)',
            fontWeight: '800',
            lineHeight: '1.25',
            margin: '0 0 24px 0',
        },
        descMain: {
            fontSize: '15px',
            color: '#555',
            lineHeight: '1.75',
            margin: '0 0 16px 0',
            textAlign: 'justify',
        },
        descQuote: {
            fontSize: '14px',
            color: '#777',
            fontStyle: 'italic',
            borderLeft: '3px solid #eb2525',
            paddingLeft: '14px',
            margin: '0 0 24px 0',
            lineHeight: '1.7',
            textAlign: 'justify',
        },
        pointsList: {
            listStyle: 'none',
            padding: '0',
            margin: '0',
        },
        pointItem: {
            position: 'relative',
            paddingLeft: '26px',
            marginBottom: '10px',
            fontWeight: '500',
            color: '#333',
            fontSize: '15px',
            lineHeight: '1.5',
        },
        pointCheck: {
            position: 'absolute',
            left: '0',
            top: '1px',
            color: '#eb2525',
            fontWeight: '900',
            fontSize: '16px',
            lineHeight: '1',
        },
        imageColumn: {
            flex: '0 0 50%',
            maxWidth: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 15px',
            boxSizing: 'border-box',
        },
        imageWrapper: {
            position: 'relative',
            padding: '15px',
            width: '100%',
            maxWidth: '500px',
        },
        dotPattern: {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2317479d' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            zIndex: '0',
            transform: 'translate(-20px, 20px)',
            pointerEvents: 'none',
        },
        clippedFigure: {
            margin: '0',
            position: 'relative',
            zIndex: '1',
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)',
            boxShadow: '20px 20px 60px rgba(0, 0, 0, 0.05)',
            transition: 'clip-path 0.5s ease-in-out',
            lineHeight: '0',
        },
        image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            aspectRatio: '4 / 4.5',
        },
        experienceBadge: {
            position: 'absolute',
            bottom: '30px',
            right: '0px',
            backgroundColor: '#fff',
            padding: '16px 20px',
            borderRadius: '5px',
            zIndex: '2',
            boxShadow: '10px 10px 30px rgba(0,0,0,0.1)',
            textAlign: 'center',
            minWidth: '130px',
        },
        experienceYears: {
            color: '#eb2525',
            margin: '0 0 4px 0',
            fontSize: '32px',
            fontWeight: '800',
            lineHeight: '1',
        },
        experienceText: {
            color: '#17479d',
            margin: '0',
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            fontWeight: '700',
            lineHeight: '1.3',
        },
    };

    return (
        <>
            <style>{`
                .whoweare-clipped-img:hover {
                    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 100%) !important;
                }
                @media (max-width: 991px) {
                    .whoweare-content-col {
                        flex: 0 0 100% !important;
                        max-width: 100% !important;
                        margin-bottom: 40px;
                    }
                    .whoweare-image-col {
                        flex: 0 0 100% !important;
                        max-width: 100% !important;
                    }
                    .whoweare-content-box {
                        padding-right: 0 !important;
                    }
                }
                @media (max-width: 575px) {
                    .whoweare-main-title {
                        font-size: 24px !important;
                    }
                    .whoweare-section {
                        padding: 50px 0 !important;
                    }
                }
            `}</style>

            <section className="whoweare-section auto-container" style={styles.section}>
                <div className="auto-container">
                    <div style={styles.row}>

                        {/* ── Content Column ── */}
                        <div className="whoweare-content-col" style={styles.contentColumn}>
                            <div className="whoweare-content-box" style={styles.contentBox}>

                                <h6 style={styles.subTitle}>{whoweareData.subTitle}</h6>

                                <h2 className="whoweare-main-title" style={styles.mainTitle}>
                                    {whoweareData.mainTitle}
                                </h2>

                                <p style={styles.descMain}>{whoweareData.descriptionMain}</p>

                                <p style={styles.descQuote}>{whoweareData.descriptionQuote}</p>

                                <ul style={styles.pointsList}>
                                    {whoweareData.points.map((point, index) => (
                                        <li key={index} style={styles.pointItem}>
                                            <span style={styles.pointCheck}>✓</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>

                        {/* ── Image Column ── */}
                        <div className="whoweare-image-col" style={styles.imageColumn}>
                            <div style={styles.imageWrapper}>

                                {/* Dot pattern pseudo-element via a real div */}
                                <div style={styles.dotPattern} aria-hidden="true" />

                                <figure
                                    className="whoweare-clipped-img"
                                    style={styles.clippedFigure}
                                >
                                    <img
                                        src={whoweareData.imagePath}
                                        alt="About Indel Capital"
                                        style={styles.image}
                                    />
                                </figure>

                                {/* Experience badge */}
                                <div style={styles.experienceBadge}>
                                    <h3 style={styles.experienceYears}>{whoweareData.experienceYears}+</h3>
                                    <p style={styles.experienceText}>{whoweareData.experienceText}</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}