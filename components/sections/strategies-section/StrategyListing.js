"use client";
import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import LiquidButton from '@/components/LiquidButton.js';

const strategies = [
  { id: 1, title: "Global Equity Alpha", asset: "Equities", geo: "Global", risk: "High Risk", horizon: "5+ Years" },
  { id: 2, title: "Fixed Income Core", asset: "Fixed Income", geo: "Europe", risk: "Low Risk", horizon: "1-3 Years" },
  { id: 3, title: "Emerging Markets Growth", asset: "Equities", geo: "APAC", risk: "High Risk", horizon: "5+ Years" },
  { id: 4, title: "Real Estate Income", asset: "Real Estate", geo: "North America", risk: "Medium Risk", horizon: "5+ Years" },
  { id: 5, title: "Tech Innovation Fund", asset: "Private Equity", geo: "Global", risk: "High Risk", horizon: "5+ Years" },
  { id: 6, title: "Stable Bond Yield", asset: "Fixed Income", geo: "North America", risk: "Low Risk", horizon: "3-5 Years" },
];

const riskColors = {
  "Low Risk":     { bg: "#f0fdf4", text: "#16a34a", dot: "#22c55e" },
  "Medium Risk": { bg: "#fffbeb", text: "#d97706", dot: "#f59e0b" },
  "High Risk":   { bg: "#fff1f2", text: "#dc2626", dot: "#ef4444" },
};

const assetIcons = {
  "Equities":       "M3 17l4-8 4 4 4-6 4 4",
  "Fixed Income":   "M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6",
  "Real Estate":    "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z",
  "Private Equity": "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z",
};

const ChevronIcon = ({ open }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transition: "transform 0.25s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FilterDropdown = ({ label, options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setIsOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setIsOpen(o => !o)}
        style={{
          display: "flex", alignItems: "center", gap: 8,
          padding: "9px 16px", borderRadius: 6, cursor: "pointer",
          fontSize: 13, fontWeight: 600, letterSpacing: "0.02em",
          border: selected.length > 0 ? "1.5px solid #eb2525" : "1.5px solid #e5e7eb",
          background: selected.length > 0 ? "#fff8f8" : "#fff",
          color: selected.length > 0 ? "#eb2525" : "#374151",
          transition: "all 0.2s", fontFamily: "inherit",
          boxShadow: isOpen ? "0 0 0 3px rgba(235,37,37,0.08)" : "none",
        }}
      >
        {label}
        {selected.length > 0 && (
          <span style={{ background: "#eb2525", color: "#fff", borderRadius: 20, fontSize: 10, fontWeight: 800, padding: "1px 6px", lineHeight: "16px" }}>
            {selected.length}
          </span>
        )}
        <ChevronIcon open={isOpen} />
      </button>

      {isOpen && (
        <div style={{
          position: "absolute", top: "calc(100% + 6px)", left: 0, minWidth: 200,
          background: "#fff", borderRadius: 8, zIndex: 100, overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)", border: "1px solid #f1f5f9",
        }}>
          {options.map(opt => (
            <label key={opt} style={{
              display: "flex", alignItems: "center", gap: 10, padding: "10px 14px",
              fontSize: 13, color: selected.includes(opt) ? "#eb2525" : "#374151",
              background: selected.includes(opt) ? "#fff8f8" : "transparent",
              cursor: "pointer", fontWeight: selected.includes(opt) ? 600 : 400,
              transition: "background 0.15s",
            }}>
              <input
                type="checkbox" checked={selected.includes(opt)} onChange={() => onSelect(opt)}
                style={{ accentColor: "#eb2525", width: 14, height: 14, cursor: "pointer" }}
              />
              {opt}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
  .sl-root * { box-sizing: border-box; margin: 0; padding: 0; }
  .sl-root { font-family: 'DM Sans', sans-serif; background: #f8f9fb; min-height: 100vh; padding: 60px 0; }
  .sl-wrap { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
  .sl-header { margin-bottom: 36px; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 12px; }
  .sl-eyebrow { font-size: 11px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: #eb2525; margin-bottom: 8px; display: flex; align-items: center; gap: 6px; }
  .sl-title { font-family: 'Sora', sans-serif; font-size: 34px; font-weight: 800; color: #0f172a; letter-spacing: -0.5px; line-height: 1.2; }
  .sl-subtitle { font-size: 15px; color: #64748b; margin-top: 6px; }
  .sl-count-badge { font-size: 13px; font-weight: 700; color: #64748b; background: #fff; border: 1px solid #e5e7eb; padding: 6px 14px; border-radius: 20px; white-space: nowrap; }
  .sl-count-badge span { color: #eb2525; }
  .sl-filterbar { background: #ffffff; border: 1px solid #e9edf2; border-radius: 10px; padding: 16px 20px; display: flex; flex-wrap: wrap; gap: 10px; align-items: center; margin-bottom: 32px; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
  .sl-filter-divider {  height: 24px; background: #e5e7eb; margin: 0 4px; }
  .sl-reset-btn { margin-left: auto; background: none; border: none; cursor: pointer; font-size: 13px; font-weight: 700; color: #9ca3af; font-family: inherit; display: flex; align-items: center; gap: 6px; padding: 6px 8px; border-radius: 4px; transition: color 0.2s; }
  .sl-reset-btn:hover { color: #eb2525; }
  .sl-reset-btn.active { color: #eb2525; }
  .sl-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
  .sl-card { background: #fff; border-radius: 10px; overflow: hidden; border: 1px solid #edf0f5; transition: transform 0.25s, box-shadow 0.25s; display: flex; flex-direction: column; position: relative; }
  .sl-card:hover { border-color: #ee3824; }
  .sl-card-header { padding: 24px 24px 0; display: flex; justify-content: space-between; align-items: flex-start; }
  .sl-asset-icon { width: 44px; height: 44px; border-radius: 10px; background: #fff5f5; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .sl-asset-icon svg { width: 20px; height: 20px; stroke: #eb2525; fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
  .sl-risk-pill { font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 20px; letter-spacing: 0.3px; }
  .sl-card-body { padding: 16px 24px 24px; flex: 1; display: flex; flex-direction: column; }
  .sl-asset-tag { font-size: 10px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; color: #eb2525; margin-bottom: 6px; display: block; }
  .sl-card-title { font-family: 'Sora', sans-serif; font-size: 18px; font-weight: 700; color: #0f172a; line-height: 1.3; margin-bottom: 18px; }
  .sl-meta { border-top: 1px solid #f1f5f9; padding-top: 16px; display: flex; flex-direction: column; gap: 9px; margin-bottom: 24px; flex: 1; }
  .sl-meta-row { display: flex; justify-content: space-between; align-items: center; }
  .sl-meta-key { font-size: 12px; color: #94a3b8; font-weight: 500; display: flex; align-items: center; gap: 5px; }
  .sl-meta-val { font-size: 13px; font-weight: 700; color: #1e293b; }
  
  .sl-btn-container {
    width: 100%;
    height: 48px;
    position: relative;
  }
  
  .sl-empty { grid-column: 1/-1; text-align: center; padding: 80px 40px; background: #fff; border-radius: 10px; border: 1px dashed #e2e8f0; }
  .sl-empty p { color: #94a3b8; font-size: 15px; }
  @media (max-width: 1024px) { .sl-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 640px) { .sl-grid { grid-template-columns: 1fr; } .sl-title { font-size: 26px; } }
`;

export default function StrategyListing() {
  const [selectedFilters, setSelectedFilters] = useState({ asset: [], geo: [], risk: [], horizon: [] });

  useEffect(() => {
    const el = document.createElement("style");
    el.setAttribute("data-sl", "1");
    el.textContent = CSS;
    document.head.appendChild(el);
    return () => { document.head.removeChild(el); };
  }, []);

  const handleFilterChange = (cat, val) => {
    setSelectedFilters(prev => {
      const curr = prev[cat];
      return { ...prev, [cat]: curr.includes(val) ? curr.filter(i => i !== val) : [...curr, val] };
    });
  };

  const hasFilters = Object.values(selectedFilters).some(v => v.length > 0);

  const filtered = useMemo(() => strategies.filter(s =>
    (selectedFilters.asset.length === 0 || selectedFilters.asset.includes(s.asset)) &&
    (selectedFilters.geo.length === 0 || selectedFilters.geo.includes(s.geo)) &&
    (selectedFilters.risk.length === 0 || selectedFilters.risk.includes(s.risk)) &&
    (selectedFilters.horizon.length === 0 || selectedFilters.horizon.includes(s.horizon))
  ), [selectedFilters]);

  return (
    <div className="sl-root">
        <div className="sl-wrap">

          <div className="sl-header">
            <div className="sl-header-left">
              <div className="sl-eyebrow">Investment Strategies</div>
              <h2 className="sl-title">Structured Portfolios</h2>
              <p className="sl-subtitle">Curated strategies aligned to your financial objectives.</p>
            </div>
            <div className="sl-count-badge">
              Showing <span>{filtered.length}</span> of {strategies.length} strategies
            </div>
          </div>

          <div className="sl-filterbar">
            <FilterDropdown label="Asset Class" options={["Equities","Fixed Income","Real Estate","Private Equity"]} selected={selectedFilters.asset} onSelect={v => handleFilterChange("asset", v)} />
            <div className="sl-filter-divider" />
            <FilterDropdown label="Geography" options={["Global","North America","Europe","APAC"]} selected={selectedFilters.geo} onSelect={v => handleFilterChange("geo", v)} />
            <div className="sl-filter-divider" />
            <FilterDropdown label="Risk Profile" options={["Low Risk","Medium Risk","High Risk"]} selected={selectedFilters.risk} onSelect={v => handleFilterChange("risk", v)} />
            <div className="sl-filter-divider" />
            <FilterDropdown label="Time Horizon" options={["1-3 Years","3-5 Years","5+ Years"]} selected={selectedFilters.horizon} onSelect={v => handleFilterChange("horizon", v)} />
            <button className={`sl-reset-btn ${hasFilters ? "active" : ""}`} onClick={() => setSelectedFilters({asset:[],geo:[],risk:[],horizon:[]})}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              Reset
            </button>
          </div>

          <div className="sl-grid">
            {filtered.length > 0 ? filtered.map(item => {
              const rc = riskColors[item.risk];
              return (
                <div key={item.id} className="sl-card">
                  <div className="sl-card-header">
                    <div className="sl-asset-icon">
                      <svg viewBox="0 0 24 24"><path d={assetIcons[item.asset]} /></svg>
                    </div>
                    <span className="sl-risk-pill" style={{ background: rc.bg, color: rc.text }}>
                      <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: rc.dot, marginRight: 5, verticalAlign: "middle" }} />
                      {item.risk}
                    </span>
                  </div>

                  <div className="sl-card-body">
                    <span className="sl-asset-tag">{item.asset}</span>
                    <h4 className="sl-card-title">{item.title}</h4>

                    <div className="sl-meta">
                      <div className="sl-meta-row">
                        <span className="sl-meta-key">Region</span>
                        <span className="sl-meta-val">{item.geo}</span>
                      </div>
                      <div className="sl-meta-row">
                        <span className="sl-meta-key">Risk</span>
                        <span className="sl-meta-val">{item.risk}</span>
                      </div>
                      <div className="sl-meta-row">
                        <span className="sl-meta-key">Horizon</span>
                        <span className="sl-meta-val">{item.horizon}</span>
                      </div>
                    </div>

                    <div className="sl-btn-container">
                      <Link href={`/strategies/${item.id}`} style={{ textDecoration: 'none' }}>
                        <LiquidButton text="View Analysis" bgcolor="#17479e" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }) : (
              <div className="sl-empty">
                <p>No strategies match your selected filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
  );
}