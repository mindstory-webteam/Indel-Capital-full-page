'use client'
import Link from "next/link"
import LiquidButton from '@/components/LiquidButton.js'
import { useState, useEffect, useRef } from 'react'

export default function Blogs() {
    const allPosts = [
        { id: 1, date: "Oct 12, 2025", title: "The Future of Web Development in 2024", image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",  link: "/blog-details", delay: "00ms" },
        { id: 2, date: "Oct 15, 2025", title: "Mastering GSAP for Stunning Web Animations", image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg", link: "/blog-details", delay: "300ms" },
        { id: 3, date: "Oct 18, 2025", title: "SEO Strategies That Drive Real Traffic", image: "https://images.pexels.com/photos/5900226/pexels-photo-5900226.jpeg",  link: "/blog-details", delay: "600ms" },
        { id: 4, date: "Oct 20, 2025", title: "Why Performance Marketing is Essential", image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg", link: "/blog-details", delay: "00ms" },
        { id: 5, date: "Oct 22, 2025", title: "Creating Seamless User Experiences", image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",  link: "/blog-details", delay: "300ms" },
        { id: 6, date: "Oct 25, 2025", title: "The Power of Content in Digital Branding", image: "https://images.pexels.com/photos/5900165/pexels-photo-5900165.jpeg", link: "/blog-details", delay: "600ms" },
        { id: 7, date: "Oct 28, 2025", title: "Leveraging AI for Business Efficiency", image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",  link: "/blog-details", delay: "00ms" },
        { id: 8, date: "Oct 30, 2025", title: "Mobile-First Design: Best Practices", image: "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg",  link: "/blog-details", delay: "300ms" },
        { id: 9, date: "Nov 02, 2025", title: "Understanding React Server Components", image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg",  link: "/blog-details", delay: "600ms" },
        { id: 11, date: "Nov 05, 2025", title: "Sustainability in Tech: What's Next?", image: "https://images.pexels.com/photos/2510425/pexels-photo-2510425.jpeg",  link: "/blog-details", delay: "00ms" },
        { id: 12, date: "Nov 02, 2025", title: "Sustainability in Tech: What's Next?", image: "https://images.pexels.com/photos/2510425/pexels-photo-2510425.jpeg",  link: "/blog-details", delay: "00ms" },
        { id: 13, date: "Nov 06, 2025", title: "Sustainability in Tech: What's Next?", image: "https://images.pexels.com/photos/2510425/pexels-photo-2510425.jpeg",  link: "/blog-details", delay: "00ms" },
        { id: 14, date: "Nov 03, 2025", title: "Sustainability in Tech: What's Next?", image: "https://images.pexels.com/photos/2510425/pexels-photo-2510425.jpeg",  link: "/blog-details", delay: "00ms" },
        { id: 15, date: "Nov 02, 2025", title: "Sustainability in Tech: What's Next?", image: "https://images.pexels.com/photos/2510425/pexels-photo-2510425.jpeg",  link: "/blog-details", delay: "00ms" },
    ];

    const [visiblePosts, setVisiblePosts] = useState(allPosts.slice(0, 3)); // Start with 3
    const [isFetching, setIsFetching] = useState(false);
    const loaderRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && visiblePosts.length < allPosts.length) {
                loadMore();
            }
        }, { threshold: 1.0 });

        if (loaderRef.current) observer.observe(loaderRef.current);
        return () => observer.disconnect();
    }, [visiblePosts]);

    const loadMore = () => {
        setIsFetching(true);
        setTimeout(() => {
            setVisiblePosts(prev => allPosts.slice(0, prev.length + 3));
            setIsFetching(false);
        }, 800);
    };

    return (
        <>
            <style jsx>{`
                .news-section { padding-top: 100px; background-color: #fafafa; }
                .btn-wrapper { width: 160px; height: 45px; position: relative; margin-top: 15px; }
                .liquid-link { display: block; width: 100%; height: 100%; text-decoration: none; }
                
                .infinite-loader {
                    display: flex;
                    justify-content: center;
                    padding: 40px 0;
                    width: 100%;
                }
                .dot-spinner {
                    width: 40px;
                    height: 10px;
                    display: flex;
                    gap: 5px;
                }
                .dot {
                    width: 10px;
                    height: 10px;
                    background-color: #eb2525;
                    border-radius: 50%;
                    animation: bounce 0.6s infinite alternate;
                }
                .dot:nth-child(2) { animation-delay: 0.2s; }
                .dot:nth-child(3) { animation-delay: 0.4s; }

                @keyframes bounce {
                    to { transform: translateY(-10px); opacity: 0.5; }
                }
            `}</style>

            <section className="news-section pb_100">
                <div className="auto-container">
                    <div className="sec-title centred mb_70">
                        <h6>LATEST INSIGHTS</h6>
                        <h2>Knowledge Hub & News</h2>
                    </div>

                    <div className="row clearfix">
                        {visiblePosts.map((post) => (
                            <div key={post.id} className="col-lg-4 col-md-6 col-sm-12 news-block mb_30">
                                <div className="news-block-one fadeInUp animated" data-wow-duration="1500ms">
                                    <div className="inner-box" style={{ 
                                        backgroundImage: `url(${post.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        minHeight: '450px' 
                                    }}>
                                        <div className="content-box">
                                            <span className="post-date"><i className="icon-27"></i>{post.date}</span>
                                            <h3 className="mb_15"><Link href={post.link}>{post.title}</Link></h3>
                                            <div className="btn-box">
                                                <div className="btn-wrapper">
                                                    <Link href={post.link} className="liquid-link">
                                                        <LiquidButton text="Read Full Story" bgcolor="#eb2525" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div ref={loaderRef} className="infinite-loader">
                        {isFetching && (
                            <div className="dot-spinner">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        )}
                        
                    </div>
                </div>
            </section>
        </>
    )
}