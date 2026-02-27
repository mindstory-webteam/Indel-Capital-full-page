"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
    const [progress, setProgress] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const updateScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollTop = window.scrollY;
            const scrollPercentage = (scrollTop / scrollHeight) * 100;
            setProgress(scrollPercentage);
            setVisible(scrollTop > 200);
        };

        window.addEventListener("scroll", updateScroll, { passive: true });
        return () => window.removeEventListener("scroll", updateScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const circumference = 307.919;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <>
            <div
                className={`btt-wrapper ${visible ? "active" : ""}`}
                onClick={scrollToTop}
                role="button"
                aria-label="Scroll to top"
                tabIndex={visible ? 0 : -1}
            >
                {/* Outer ring progress */}
                <svg className="btt-svg" viewBox="-1 -1 102 102">
                    <path
                        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                        className="btt-track"
                    />
                    <path
                        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                        className="btt-progress"
                        style={{
                            strokeDasharray: circumference,
                            strokeDashoffset: offset,
                        }}
                    />
                </svg>

                <div className="btt-inner">
                    <div className="btt-percent">{Math.round(progress)}%</div>
                </div>

                <div className="btt-tooltip">Back to Top</div>
            </div>

            <style jsx>{`
                .btt-wrapper {
                    position: fixed;
                    right: 36px;
                    bottom: 36px;
                    width: 58px;
                    height: 58px;
                    cursor: pointer;
                    z-index: 999;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(24px) scale(0.9);
                    transition: opacity 450ms ease, visibility 450ms ease, transform 450ms cubic-bezier(0.34, 1.56, 0.64, 1);
                    pointer-events: none;
                }

                .btt-wrapper.active {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0) scale(1);
                    pointer-events: auto;
                }

                .btt-svg {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    transform: rotate(-90deg);
                }

                .btt-track {
                    fill: none;
                    stroke: rgba(23, 71, 158, 0.15);
                    stroke-width: 3.5;
                    stroke-linecap: round;
                }

                .btt-progress {
                    fill: none;
                    stroke: #ee3824;
                    stroke-width: 3.5;
                    stroke-linecap: round;
                    transition: stroke-dashoffset 250ms ease-out;
                    filter: drop-shadow(0 0 3px rgba(238, 56, 36, 0.4));
                }

                .btt-inner {
                    position: absolute;
                    inset: 6px;
                    border-radius: 50%;
                    background: #17479e;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 1px;
                    transition: background 300ms ease, box-shadow 300ms ease;
                    box-shadow:
                        inset 0 1px 1px rgba(255,255,255,0.1),
                        0 4px 16px rgba(23, 71, 158, 0.35);
                }

                .btt-percent {
                    font-family: 'Inter', 'Helvetica Neue', sans-serif;
                    font-size: 9px;
                    font-weight: 700;
                    letter-spacing: 0.03em;
                    color: rgba(255,255,255,0.7);
                    line-height: 1;
                    transition: color 300ms ease;
                    pointer-events: none;
                }


                .btt-tooltip {
                    position: absolute;
                    right: calc(100% + 12px);
                    top: 50%;
                    transform: translateY(-50%) translateX(6px);
                    background: #17479e;
                    color: #fff;
                    font-family: 'Inter', 'Helvetica Neue', sans-serif;
                    font-size: 11px;
                    font-weight: 600;
                    letter-spacing: 0.04em;
                    white-space: nowrap;
                    padding: 5px 10px;
                    border-radius: 4px;
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 250ms ease, transform 250ms ease;
                }

                .btt-tooltip::after {
                    content: '';
                    position: absolute;
                    left: 100%;
                    top: 50%;
                    transform: translateY(-50%);
                    border: 5px solid transparent;
                    border-left-color: #17479e;
                }

                .btt-wrapper:hover .btt-inner {
                    background: #0f3380;
                    box-shadow:
                        inset 0 1px 1px rgba(255,255,255,0.12),
                        0 6px 24px rgba(23, 71, 158, 0.5);
                }


                .btt-wrapper:hover .btt-percent {
                    color: rgba(255,255,255,0.9);
                }

                .btt-wrapper:hover .btt-progress {
                    stroke: #ff4d38;
                    filter: drop-shadow(0 0 5px rgba(238, 56, 36, 0.6));
                }

                .btt-wrapper:hover .btt-tooltip {
                    opacity: 1;
                    transform: translateY(-50%) translateX(0);
                }

                .btt-wrapper:active .btt-inner {
                    transform: scale(0.95);
                }

                .btt-wrapper:focus-visible {
                    outline: 2px solid #ee3824;
                    outline-offset: 4px;
                    border-radius: 50%;
                }

                @media (max-width: 768px) {
                    .btt-wrapper {
                        right: 18px;
                        bottom: 18px;
                        width: 52px;
                        height: 52px;
                    }

                    .btt-tooltip {
                        display: none;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .btt-wrapper,
                    .btt-inner,
                    .btt-progress,
                    .btt-tooltip {
                        transition: none;
                    }
                }
            `}</style>
        </>
    );
}