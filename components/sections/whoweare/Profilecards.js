'use client'

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const teamMembers = [
  {
    name: "Mohanan Gopalakrishnan",
    role: "Managing Director",
    img: "assets/images/team/team-1.png",
    bio: "Mr. Mohanan Gopalakrishnan, a banking professional with an experience of 37 years in and around GCC, he was the head of the trade finance operations of United Arab Bank, UAE. He held the position for a span of 11 years commencing from 2001. He, jointly with his sons, has been promoting the investment company namely M/s. Indel Corporation Private Limited as an SPV for investments into various sectors. He currently has investments in Finance, Automobile, Hospitality and Infrastructure sectors.",
  },
  {
    name: "Umesh Mohanan",
    role: "Director",
    img: "assets/images/team/team-2.png",
    bio: "An investment professional with more than 2 decades of rich experience in Managing investment verticals with a proven track record of heading a Middle Eastern multi national multi billion conglomerate at its executive level, spearheading its complete global operations Diversified into portfolios such as Banking investments, infrastructure construction, Oil and Gas, Power stations, Defence supplies, Manufacturing , Trading of minerals, bullion and other commodities across the global. Currently he serves Indel Money as its ED & CEO, at Indel Money his corporate inheritance of skills from the multinational business background is envisaged to grow the business into multifolds.",
  },
  {
    name: "Anish Mohan",
    role: "Director",
    img: "assets/images/team/team-3.png",
    bio: "A dynamic leader with expertise in finance and investments, driving business growth. He plays a key role in expanding Indel’s strategic vision, and ensuring sustainable development for long-term success.",
  },
]

function TeamModal({ member, onClose }) {
  if (!member) return null

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 1000,
          background: "rgba(10, 20, 50, 0.7)",
          backdropFilter: "blur(8px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "20px",
        }}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="modal-inner"
          style={{
            background: "#fff",
            borderRadius: "24px",
            width: "100%",
            maxWidth: "750px",
            height: "450px",
            overflow: "hidden",
            boxShadow: "0 40px 100px rgba(0,0,0,0.25)",
            display: "flex",
            flexDirection: "row",
            position: "relative",
          }}
        >
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90, backgroundColor: "#ee3824", color: "#fff" }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            style={{
              position: "absolute", top: "15px", right: "15px",
              width: "36px", height: "36px", borderRadius: "50%",
              background: "#f1f5f9", border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              zIndex: 10, color: "#1e293b", transition: "all 0.2s"
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </motion.button>

          <div
            className="modal-img-col"
            style={{
              width: "35%", height: "100%", background: "#17479e",
              position: "relative", overflow: "hidden",
            }}
          >
            <motion.img
              src={member.img}
              alt={member.name}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
            />
          </div>

          <div
            className="modal-content-col"
            style={{ flex: 1, padding: "40px 35px", display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }}
          >
            <div style={{ marginBottom: "10px" }}>
              <span style={{ 
                fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "2px", 
                color: "#ee3824", background: "#fff5f3", padding: "3px 10px", borderRadius: "4px" 
              }}>
                {member.role}
              </span>
            </div>

            <div style={{ width: "fit-content", marginBottom: "12px" }}>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "26px", fontWeight: "800", color: "#17479e", margin: "0", lineHeight: 1.1 }}>
                {member.name}
              </h2>
              <motion.div 
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.28, duration: 0.4, ease: "easeOut" }}
                style={{ height: "3px", width: "100%", background: "#ee3824", marginTop: "6px", transformOrigin: "left" }} 
              />
            </div>

            <div style={{ flex: 1, overflowY: "auto", paddingRight: "10px", scrollbarWidth: "thin", scrollbarColor: "#cbd5e1 transparent" }} className="custom-scrollbar">
              <p style={{ fontSize: "15px", color: "#475569", lineHeight: "1.7", margin: 0, fontWeight: "400" , textAlign:"justify"}}>
                {member.bio}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function TeamCard({ member, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="team-card-wrapper"
    >
      <motion.div
        whileHover={{ borderColor: "#17479e", y: -5 }}
        onClick={() => onClick(member)}
        style={{
          position: "relative", background: "#fff", borderRadius: "12px",
          overflow: "hidden", border: "1px solid #f0f0f0",
          cursor: "pointer", transition: "all 0.3s ease"
        }}
      >
        <div style={{ position: "relative", overflow: "hidden", aspectRatio: "1 / 1.1", background: "#f8f9fa" }}>
          <motion.img
            src={member.img}
            alt={member.name}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
          />
        </div>

        <div style={{ padding: "15px 10px", textAlign: "center", background: "#fff" }}>
          <h3 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "16px", fontWeight: 700, margin: "0 0 4px 0", color: "#1e293b",
          }}>
            {member.name}
          </h3>
          <span style={{
            fontSize: "12px", fontWeight: 800, textTransform: "uppercase", 
            letterSpacing: "1px", color: "#ee3824",
          }}>
            {member.role}
          </span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Profilecards() {
  const [activeMember, setActiveMember] = useState(null)

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        .team-section { 
          background: #ffffff; 
          font-family: 'Plus Jakarta Sans', sans-serif; 
          padding: 100px 0 50px 0;
        }

        .team-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }

        .team-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 50px;
          margin-top: 50px;
        }

        .team-card-wrapper {
          flex: 0 0 calc(33.333% - 20px);
          max-width: 300px;
        }

        .sec-title { text-align: center; margin-bottom: 50px; }

        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f5f9; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }

        @media (max-width: 991px) {
          .team-card-wrapper {
            flex: 0 0 calc(50% - 20px);
          }
        }

        @media (max-width: 768px) {
          .team-card-wrapper {
            flex: 0 0 100%;
          }
          .modal-inner { 
            flex-direction: column !important; 
            height: 90vh !important; /* Increased height for mobile */
            max-width: 95% !important; 
          }
          .modal-img-col { 
            width: 100% !important; 
            height: 280px !important; /* Fixed the small height issue */
            min-height: 250px !important;
          }
          .modal-content-col { 
            padding: 20px !important; 
            flex: 1 !important;
            overflow: hidden !important;
          }
          .modal-content-col h2 { font-size: 22px !important; }
        }
      `}</style>

      <section className="team-section">
        <div className="team-container">
          <div className="sec-title">
            <h6 style={{ color: "#ee3824", textTransform: "uppercase", fontWeight: 800, letterSpacing: "3px", marginBottom: "8px" }}>
              Our People
            </h6>
            <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#17479e" }}>
              Our Board Members
            </h2>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} index={index} onClick={setActiveMember} />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeMember && (
          <TeamModal member={activeMember} onClose={() => setActiveMember(null)} />
        )}
      </AnimatePresence>
    </>
  )
}