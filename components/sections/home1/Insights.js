// components/sections/blogs/blogs.js
'use client'
import Link from "next/link"
import LiquidButton from '@/components/LiquidButton.js'
import { useState } from 'react'
import { allBlogPosts } from "@/public/assets/assest"
export default function insights() {
    const [visiblePosts] = useState(allBlogPosts)

    return (
        <>
            <style jsx>{`
                .news-section { padding-top: 100px; background-color: #fafafa; }
                .btn-wrapper { width: 160px; height: 45px; position: relative; margin-top: 15px; }
                .liquid-link { display: block; width: 100%; height: 100%; text-decoration: none; }
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
                                            {/*  slug-based link */}
                                            <h3 className="mb_15">
                                                <Link href={`/blog-details/${post.slug}`}>{post.title}</Link>
                                            </h3>
                                            <div className="btn-box">
                                                <div className="btn-wrapper">
                                                    <Link href={`/blog-details/${post.slug}`} className="liquid-link">
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
                </div>
            </section>
        </>
    )
}