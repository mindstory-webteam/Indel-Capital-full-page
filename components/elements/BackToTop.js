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
                className={`back-to-top-wrapper ${visible ? "active" : ""}`} 
                onClick={scrollToTop}
                role="button"
                aria-label="Scroll to top"
                tabIndex={visible ? 0 : -1}
            >
                <svg className="progress-circle" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path 
                        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                        className="progress-bg"
                    />
                    <path 
                        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" 
                        className="progress-fill"
                        style={{
                            strokeDasharray: circumference,
                            strokeDashoffset: offset
                        }}
                    />
                </svg>
                <div className="arrow-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="19" x2="12" y2="5"></line>
                        <polyline points="5 12 12 5 19 12"></polyline>
                    </svg>
                </div>
            </div>

            <style jsx>{`
                .back-to-top-wrapper {
                    position: fixed;
                    right: 40px;
                    bottom: 40px;
                    height: 50px;
                    width: 50px;
                    cursor: pointer;
                    display: block;
                    border-radius: 50%;
                    z-index: 999;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(20px);
                    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
                    background: #ffffff;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    outline: none;
                    border: none;
                    pointer-events: none;
                }

                .back-to-top-wrapper.active {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                    pointer-events: auto;
                }

                .back-to-top-wrapper:focus-visible {
                    outline: 2px solid #3b82f6;
                    outline-offset: 3px;
                }

                .progress-circle {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    transform: rotate(-90deg);
                }

                .progress-bg {
                    fill: none;
                    stroke: #bfdbfe;
                    stroke-width: 3;
                    stroke-linecap: round;
                }

                .progress-fill {
                    fill: none;
                    stroke: #3b82f6;
                    stroke-width: 3;
                    stroke-linecap: round;
                    transition: stroke-dashoffset 300ms ease-out;
                }

                .arrow-icon {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: #1e40af;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
                    pointer-events: none;
                }

                .back-to-top-wrapper:hover {
                    background: #ffffff;
                    box-shadow: 0 8px 30px rgba(59, 130, 246, 0.2);
                    transform: translateY(-5px) scale(1.08);
                }

                .back-to-top-wrapper:hover .arrow-icon {
                    transform: translate(-50%, -58%);
                    color: #3b82f6;
                }

                .back-to-top-wrapper:active {
                    transform: translateY(-2px) scale(1.02);
                    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.15);
                }

                @media (max-width: 768px) {
                    .back-to-top-wrapper {
                        right: 20px;
                        bottom: 20px;
                        height: 45px;
                        width: 45px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .back-to-top-wrapper,
                    .arrow-icon,
                    .progress-fill {
                        transition: none;
                    }
                }
            `}</style>
        </>
    );
}