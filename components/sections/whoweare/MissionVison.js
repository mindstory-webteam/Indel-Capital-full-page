import React from "react";

const styles = `
  .indel-section {
    padding: 3rem 8rem;
    background: transparent;
    color: inherit;
  }

  .section-heading {
    font-size: clamp(28px, 4vw, 42px);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .section-heading span {
    color: #ee3824;
  }

  .section-sub {
    font-size: 15px;
    color: #6b7280;
    max-width: 520px;
    line-height: 1.7;
    margin-bottom: 3rem;
    font-weight: 300;
  }

  .values-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: #e5e7eb;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    overflow: hidden;
  }

  .value-card {
    background: #ffffff;
    padding: 2rem 1.75rem;
    transition: background 0.25s;
    cursor: default;
    box-sizing: border-box;
  }

  .value-card:hover {
    background: #f9fafb;
  }

  .value-card.fifth-card {
    grid-column: 1 / -1;
  }

  .card-icon-wrap {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.25rem;
    background: #eef2fb;
  }

  .card-title {
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 0.75rem 0;
    line-height: 1.3;
  }

  .card-text {
    font-size: 13.5px;
    line-height: 1.75;
    color: #6b7280;
    font-weight: 300;
    margin: 0;
  }

  .card-tag {
    display: inline-block;
    margin-top: 1.25rem;
    font-size: 10.5px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 20px;
  }

  .tag-blue  { background: #e8edf8; color: #17479e; }
  .tag-red   { background: #fdecea; color: #c0321e; }
  .tag-navy  { background: #e6eaf4; color: #1a2c5b; }
  .tag-gold  { background: #fef5e7; color: #8a5b06; }
  .tag-green { background: #e8f5ee; color: #166534; }

  @media (max-width: 768px) {
    .indel-section { padding: 2rem 1.5rem; }
    .values-grid { grid-template-columns: 1fr; }
    .value-card.fifth-card { grid-column: 1; }
  }
`;

const values = [
{
  tagClass: "tag-blue",
  tag: "Growth mindset",
  title: "Aspiring Beyond Excellence",
  text: "At Indel Capital, we view excellence not as a destination but as a stepping stone toward our ultimate goals. We are dedicated to exceeding excellence in every initiative we pursue.",
  icon: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#17479e"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 16L10 10L14 14L20 8" />
      <path d="M15 8H20V13" />
    </svg>
  ),
},
  {
    tagClass: "tag-red",
    tag: "Business ethics",
    title: "Cultivating Trust and Transparency",
    text: "Indel Capital places primary importance on trust and transparency while operating with determined business ethics. These core values are rooted in every aspect of our operations, guaranteeing integrity at each step.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#17479e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    tagClass: "tag-navy",
    tag: "Customer first",
    title: "Prioritising Our Customers",
    text: 'Our customers are the foundation of our business. We work with the "customer first" principle, and we design every service and process with the customer\'s perspective in mind. Our primary aim is to exceed every expectation of customers by constantly innovating our products and services.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a2c5b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    tagClass: "tag-gold",
    tag: "Social responsibility",
    title: "Dedicated to Social Advancement",
    text: "Our foremost responsibility is to society and humanity. Business comes second to humanity in our principles, by which every team member at Indel Capital is committed to conducting business with the highest moral and ethical standards. This helps us in serving our customers, employees, regulatory bodies, the finance industry, and the nation with integrity and transparency.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#17479e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    tagClass: "tag-green",
    tag: "Employer of choice",
    title: "Striving to Be the Employer of Choice",
    text: "Relentless effort for an employee-friendly culture is engraved in our values, through which we make sure that every individual feels valued and comfortable. By creating an environment that attracts top talent and encourages professional growth with relentless support from strong management, we promote innovation and entrepreneurial spirit.",
    className: "fifth-card",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#17479e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
];

export default function IndelValues() {
  return (
    <>
      <style>{styles}</style>
      <div className="indel-section">
        <h2 className="section-heading">
          Our Core <span>Values</span>
        </h2>
        <p className="section-sub">
          Five principles that guide every decision we make, from boardrooms to customer conversations.
        </p>

        <div className="values-grid">
          {values.map((v) => (
            <div
              className={`value-card${v.className ? ` ${v.className}` : ""}`}
              key={v.title}
            >
              <div className="card-icon-wrap">{v.icon}</div>
              <h3 className="card-title">{v.title}</h3>
              <p className="card-text">{v.text}</p>
              {/* <span className={`card-tag ${v.tagClass}`}>{v.tag}</span> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}