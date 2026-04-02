"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LiquidButton from '@/components/LiquidButton.js';
import Link from "next/link";

const investmentHighlights = [
  {
    id: 1,
    number: "01",
    title: "Asset-Backed & Secure",
    description:
      "Our Non-Convertible Debentures are backed by immovable assets, ensuring strong collateral support and enhanced investor confidence.",
  },
  {
    id: 2,
    number: "02",
    title: "Disciplined & Differentiated",
    description:
      "We follow a unique lending model beyond traditional gold loan portfolios, supported by rigorous risk assessment and structured evaluation frameworks.",
  },
  {
    id: 3,
    number: "03",
    title: "Trusted & Growth-Oriented",
    description:
      "Backed by Indel Corporation and led by experienced financial professionals, we deploy capital into opportunities that drive business growth.",
  },
];

export default function PortfolioHighlights() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <section className="ph-section">
        <div className="ph-container">

          {/* ── Header ── */}
          <div className="ph-header">
            <span className="ph-eyebrow">Investment Strategy</span>
            <h2 className="ph-title">Core Investment Highlights</h2>
            <p className="ph-subtitle">
              A focused overview of our asset-backed investment strategy, built on strong security,
              disciplined risk management, and strategic capital deployment.
            </p>
          </div>

          {/* ── Panel grid ── */}
          <div className="ph-panel">
            {investmentHighlights.map((item, i) => (
              <motion.div
                key={item.id}
                className={`ph-cell ${i === 1 ? 'ph-cell--mid' : ''}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.19, 1, 0.22, 1],
                }}
              >
                <span className="ph-number">{item.number}</span>
                <h3 className="ph-company">{item.title}</h3>
                <p className="ph-desc">{item.description}</p>
              </motion.div>
            ))}
          </div>

          

        </div>
      </section>
    </>
  );
}

const css = `
  .ph-section {
    padding-top: 60px ;
    padding-bottom: 30px ;
    background-color: #fafafa;
    font-family: 'Outfit', sans-serif;
    color: #212226;
  }

  .ph-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .ph-header {
    text-align: center;
    margin-bottom: 50px;
  }

  .ph-eyebrow {
    color: #ee3824;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
    display: block;
    margin-bottom: 10px;
  }

  .ph-title {
    font-size: clamp(28px, 4vw, 40px);
    font-weight: 800;
    color: #212226;
    line-height: 1.2;
    margin: 0 0 16px;
    letter-spacing: -0.5px;
  }

  .ph-subtitle {
    font-size: 16px;
    color: #4a5568;
    max-width: 600px;
    margin: 0 auto;
    font-weight: 400;
    line-height: 1.7;
  }

  /* ── Panel ── */
  .ph-panel {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 50px;
  }

  .ph-cell {
    padding: 40px 36px;
    background: #ffffff;
    border-right: 1px solid #e5e7eb;
    transition: background 0.3s ease;
  }

  .ph-cell:last-child {
    border-right: none;
  }

  .ph-cell--mid {
    background: #f7f8fc;
  }

  .ph-cell:hover {
    background: #fff5f5;
  }

  .ph-number {
    display: inline-block;
    font-size: 11px;
    font-weight: 800;
    color: #eb2525;
    border: 1.5px solid rgba(235, 37, 37, 0.3);
    padding: 3px 10px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    margin-bottom: 24px;
  }

  .ph-company {
    font-size: 20px;
    font-weight: 800;
    margin: 0 0 14px;
    color: #1f2937;
    line-height: 1.3;
  }

  .ph-desc {
    font-size: 14px;
    line-height: 1.75;
    color: #4a5568;
    margin: 0;
  }

  /* ── Footer ── */
  .ph-footer {
    display: flex;
    justify-content: center;
  }

  .ph-btn-wrapper {
    width: 260px;
    height: 56px;
  }

  /* ── Responsive ── */
  @media (max-width: 1024px) {
    .ph-panel {
      grid-template-columns: repeat(2, 1fr);
    }
    .ph-cell:nth-child(2) {
      border-right: none;
    }
    .ph-cell:nth-child(1),
    .ph-cell:nth-child(2) {
      border-bottom: 1px solid #e5e7eb;
    }
  }

  @media (max-width: 640px) {
    .ph-section { padding: 50px 0; }
    .ph-container { padding: 0 20px; }
    .ph-header { margin-bottom: 36px; }
    .ph-title { font-size: clamp(24px, 5vw, 32px); }
    .ph-panel {
      grid-template-columns: 1fr;
      border-radius: 12px;
    }
    .ph-cell {
      border-right: none;
      border-bottom: 1px solid #e5e7eb;
    }
    .ph-cell:last-child {
      border-bottom: none;
    }
  }
`;