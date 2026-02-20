"use client";

import CounterUp from "@/components/elements/CounterUp";
import React, { useEffect, useRef, useState } from "react";
// Import your CounterUp component here

const portfolioData = [
  {
    id: 1,
    name: "Nexus Fintech",
    sector: "Financial Services",
    ticker: "NXF",
    description: "Institutional-grade liquidity protocols streamlining cross-border settlement through blockchain efficiency.",
    status: "Series B",
    irr: 24.3, // Changed to numbers for the counter
    vintage: "2022",
    multiple: 2.1, // Changed to numbers
  },
  {
    id: 2,
    name: "GreenGrid Systems",
    sector: "Renewable Energy",
    ticker: "GGS",
    description: "Smart-grid solutions utilizing proprietary AI to reduce urban energy waste by 40%.",
    status: "Seed",
    irr: 38.7,
    vintage: "2023",
    multiple: 1.6,
  },
  {
    id: 3,
    name: "BioPath Labs",
    sector: "Healthcare",
    ticker: "BPL",
    description: "AI-driven diagnostic platforms for early-stage oncology detection and pathology automation.",
    status: "Series A",
    irr: 31.2,
    vintage: "2023",
    multiple: 1.9,
  },
];

const statusColors = {
  Seed: { text: "#ee3824", bg: "rgba(238,56,36,0.06)" },
  "Series A": { text: "#17479e", bg: "rgba(23,71,158,0.06)" },
  "Series B": { text: "#17479e", bg: "rgba(23,71,158,0.12)" },
};

export default function PortfolioHighlights() {
  const cardsRef = useRef([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ph-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <section className="ph-section">
        <div className="ph-container">
          <div className="ph-header">
            <span className="ph-eyebrow">Strategic Investments</span>
            <h2 className="ph-title">Portfolio Highlights</h2>
            <p className="ph-subtitle">
              Deployment of institutional capital into disruptive category leaders across global high-growth sectors.
            </p>
          </div>

          <div className="ph-grid">
            {portfolioData.map((item, i) => {
              const sc = statusColors[item.status] || statusColors["Series A"];
              return (
                <div
                  key={item.id}
                  className="ph-card"
                  ref={(el) => (cardsRef.current[i] = el)}
                  style={{ "--delay": `${i * 120}ms` }}
                >
                  <div className="ph-card-top">
                    <span className="ph-ticker">{item.ticker}</span>
                    <span className="ph-status" style={{ color: sc.text, backgroundColor: sc.bg }}>
                      {item.status}
                    </span>
                  </div>

                  <div className="ph-card-body">
                    <p className="ph-sector">{item.sector}</p>
                    <h3 className="ph-company">{item.name}</h3>
                    <p className="ph-desc">{item.description}</p>
                  </div>

                  <div className="ph-metrics">
                    <div className="ph-metric">
                      <span className="ph-label">Target IRR</span>
                      <span className="ph-value">
                        <CounterUp end={item.irr} />%
                      </span>
                    </div>
                    <div className="ph-metric">
                      <span className="ph-label">MOIC</span>
                      <span className="ph-value">
                        <CounterUp end={item.multiple} />×
                      </span>
                    </div>
                    <div className="ph-metric">
                      <span className="ph-label">Vintage</span>
                      <span className="ph-value">{item.vintage}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="ph-footer">
            <button className="theme-btn btn-one">
              Explore Full Portfolio
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

const css = `
  .ph-section {
    padding-bottom: 60px;
    padding-top: 60px;
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
    margin-bottom: 80px;
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
    font-size: clamp(32px, 5vw, 42px);
    font-weight: 800;
    color: #212226;
    line-height: 1.2;
    margin: 0;
  }

  .ph-subtitle {
    font-size: 18px;
    color: #4a5568;
    max-width: 580px;
    margin: 20px auto 0;
    font-weight: 400;
    line-height: 1.6;
  }

  .ph-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin-bottom: 70px;
  }

  .ph-card {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    padding: 40px 32px;
    display: flex;
    flex-direction: column;
    transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    opacity: 0;
    transform: translateY(30px);
    border-radius: 12px;
  }

  .ph-card.ph-visible {
    opacity: 1;
    transform: translateY(0);
    transition-delay: var(--delay);
  }

  .ph-card:hover {
    border-color: #17479e;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
    transform: translateY(-10px);
  }

  .ph-card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  .ph-ticker {
    font-size: 11px;
    font-weight: 800;
    color: #17479e;
    border: 1.5px solid #17479e;
    padding: 3px 10px;
    letter-spacing: 1.5px;
  }

  .ph-status {
    font-size: 11px;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 4px;
    letter-spacing: 0.5px;
  }

  .ph-card-body { flex-grow: 1; }

  .ph-sector {
    color: #ee3824;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px;
    letter-spacing: 1.5px;
  }

  .ph-company {
    font-size: 24px;
    font-weight: 800;
    margin: 0 0 16px;
    color: #212226;
    line-height: 1.2;
  }

  .ph-desc {
    font-size: 15px;
    line-height: 1.6;
    color: #4a5568;
    font-weight: 400;
    margin-bottom: 30px;
  }

  .ph-metrics {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-top: 1px solid #f1f5f9;
    padding-top: 24px;
    margin-bottom: 10px;
  }

  .ph-label {
    display: block;
    font-size: 10px;
    text-transform: uppercase;
    color: #94a3b8;
    font-weight: 700;
    margin-bottom: 6px;
    letter-spacing: 0.5px;
  }

  .ph-value {
    font-size: 18px;
    font-weight: 800;
    color: #17479e;
  }

  .ph-footer {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1024px) {
    .ph-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 640px) {
    .ph-grid { grid-template-columns: 1fr; }
    .ph-container { padding: 0 20px; }
    .ph-header { margin-bottom: 40px; }
  }
`;