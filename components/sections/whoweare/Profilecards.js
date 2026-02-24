'use client'
import Link from "next/link"
import { motion } from "framer-motion"

const teamMembers = [
    { name: "Wade Warren",       role: "Founder",           img: "assets/images/team/team-1.jpg" },
    { name: "Guy Hawkins",       role: "Co-Founder",        img: "assets/images/team/team-2.jpg" },
    { name: "Bessie Cooper",     role: "Chairman",          img: "assets/images/team/team-3.jpg" },
    { name: "Devon Lane",        role: "Vice Chairman",     img: "assets/images/team/team-4.jpg" },
    { name: "Brooklyn Simmons",  role: "Head of Marketing", img: "assets/images/team/team-5.jpg" },
    { name: "Robert Fox",        role: "Head of Finance",   img: "assets/images/team/team-6.jpg" },
    { name: "Darlene Robertson", role: "Managing Director", img: "assets/images/team/team-7.jpg" },
    { name: "Albert Flores",     role: "Chief Marketer",    img: "assets/images/team/team-8.jpg" },
]

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.8,
            ease: [0.215, 0.61, 0.355, 1]
        }
    })
}

export default function Profilecards() {
    return (
        <>
            <style jsx>{`
                .team-section {
                    background: #fff;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                }
                .inner-box {
                    position: relative;
                    background: #fff;
                    border-radius: 12px;
                    overflow: hidden;
                    border: 1px solid #f0f0f0;
                    transition: all 0.3s ease;
                    margin-bottom: 30px;
                }
                .inner-box:hover {
                    border-color: #17479e;
                    box-shadow: 0 15px 40px rgba(0,0,0,0.06);
                }
                .image-box {
                    position: relative;
                    overflow: hidden;
                    aspect-ratio: 4/5;
                }
                .image-box img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
                .inner-box:hover .image-box img {
                    transform: scale(1.05);
                }
                .lower-content {
                    padding: 20px;
                    text-align: center;
                }
                .lower-content h3 {
                    font-size: 19px;
                    font-weight: 700;
                    margin-bottom: 5px;
                    color: #1e293b;
                }
                .lower-content h3 a {
                    text-decoration: none;
                    color: inherit;
                }
                .designation {
                    font-size: 13px;
                    font-weight: 600;
                    color: #ee3824;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                @media (max-width: 575px) {
                    .lower-content {
                        padding: 12px 5px; 
                    }
                    .lower-content h3 {
                        font-size: 15px; 
                    }
                    .designation {
                        font-size: 10px;
                    }
                    .row {
                        margin-left: -5px; 
                        margin-right: -5px;
                    }
                    .team-block {
                        padding-left: 5px;
                        padding-right: 5px;
                    }
                }
            `}</style>

            <section className="team-section pt_120 pb_75">
                <div className="auto-container">
                    
                    <motion.div 
                        className="sec-title mb_70 centred"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h6>Our People</h6>
                        <h2>Our Board Members</h2>
                    </motion.div>

                    <div className="row clearfix">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="col-lg-3 col-md-6 col-6 team-block">
                                <motion.div
                                    className="team-block-one"
                                    custom={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    variants={fadeInUp}
                                >
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image">
                                                <img src={member.img} alt={member.name} />
                                            </figure>
                                        </div>
                                        <div className="lower-content">
                                            <h3>
                                                <Link href="/team-details">{member.name}</Link>
                                            </h3>
                                            <span className="designation">{member.role}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}