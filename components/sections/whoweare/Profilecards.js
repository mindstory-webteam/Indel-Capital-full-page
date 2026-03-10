'use client'
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { teamMembers } from "@/public/assets/assest"

function TeamCard({ member, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, delay: index * 0.12, ease: [0.215, 0.61, 0.355, 1] }}
        >
            <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                style={{
                    position: "relative",
                    background: "#fff",
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid #f0f0f0",
                    marginBottom: "40px",
                    cursor: "pointer"
                }}
                variants={{
                    rest: {
                        borderColor: "#f0f0f0",
                    },
                    hover: {
                        borderColor: "#17479e",
                    }
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
            >
                <div style={{
                    position: "relative",
                    overflow: "hidden",
                    aspectRatio: "1 / 1.15",
                    display: "block",
                    background: "#f8f9fa"
                }}>
                    <motion.img
                        src={member.img}
                        alt={member.name}
                        variants={{
                            rest: { scale: 1 },
                            hover: { scale: 1.1 }
                        }}
                        transition={{ duration: 0.7, ease: [0.2, 0, 0.2, 1] }}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "top center",
                            display: "block",
                            transformOrigin: "center center"
                        }}
                    />

                    <motion.div
                        variants={{
                            rest: { opacity: 0 },
                            hover: { opacity: 0.42 }
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        style={{
                            position: "absolute",
                            inset: 0,
                            background: "radial-gradient(ellipse at top right, #ee3824 0%, transparent 70%), radial-gradient(ellipse at bottom left, #17479e 0%, transparent 70%)",
                            pointerEvents: "none",
                            zIndex: 2
                        }}
                    />
                </div>

                <div style={{
                    padding: "25px 20px",
                    textAlign: "center",
                    background: "#fff",
                    minHeight: "90px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    position: "relative"
                }}>
                    <motion.div
                        variants={{
                            rest: { y: 0, opacity: 1 },
                            hover: { y: 28, opacity: 0 }
                        }}
                        transition={{ duration: 0.32, ease: [0.4, 0, 1, 1] }}
                        style={{
                            position: "absolute",
                            width: "100%",
                            padding: "0 20px",
                            textAlign: "center"
                        }}
                    >
                        <h3 style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: "22px",
                            fontWeight: 700,
                            margin: 0,
                            color: "#1e293b",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        }}>
                            <Link href="/team-details" style={{ textDecoration: "none", color: "inherit" }}>
                                {member.name}
                            </Link>
                        </h3>
                    </motion.div>

                    <motion.div
                        variants={{
                            rest: { y: -28, opacity: 0 },
                            hover: { y: 0, opacity: 1 }
                        }}
                        transition={{ duration: 0.38, delay: 0.08, ease: [0, 0, 0.2, 1] }}
                        style={{
                            position: "absolute",
                            width: "100%",
                            padding: "0 20px",
                            textAlign: "center"
                        }}
                    >
                        <span style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: "22px",
                            fontWeight: 700,
                            margin: 0,
                            display: "block",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                            color: "#ee3824",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        }}>
                            {member.role}
                        </span>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default function Profilecards() {
    return (
        <>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
                .team-section {
                    background: #fff;
                    font-family:  sans-serif;
                }
                @media (max-width: 991px) {
                    .team-name, .team-role { font-size: 18px !important; }
                }
                @media (max-width: 575px) {
                    .team-name, .team-role { font-size: 15px !important; letter-spacing: 0.5px !important; }
                    .team-lower { min-height: 75px !important; }
                }
            `}</style>

            <section className="team-section pt_120 pb_75">
                <div className="auto-container">

                    <div className="sec-title mb_70 centred">
                        <motion.h6
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
                        >
                            Our People
                        </motion.h6>

                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ duration: 0.9, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
                        >
                            Our Board Members
                        </motion.h2>
                    </div>

                    <div className="row clearfix">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-12 team-block">
                                <TeamCard member={member} index={index} />
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}