'use client'
import Link from "next/link"
import { insightsData } from '@/public/assets/assest.js'

export default function Insights() {
    const data = insightsData;

    return (
        <>
            <section className="news-section  pb_90">
                <div className="auto-container">
                    <div className="sec-title centred mb_70">
                        <h6>{data.subTitle}</h6>
                        <h2>{data.mainTitle}</h2>
                    </div>
                    <div className="row clearfix">
                        {data.posts.map((post) => (
                            <div key={post.id} className="col-lg-4 col-md-6 col-sm-12 news-block">
                                <div 
                                    className="news-block-one wow fadeInUp animated" 
                                    data-wow-delay={post.delay} 
                                    data-wow-duration="1500ms"
                                >
                                    <div 
                                        className="inner-box" 
                                        style={{ backgroundImage: `url(${post.image})` }}
                                    >
                                        <div className="content-box">
                                            <span className="post-date">
                                                <i className="icon-27"></i>{post.date}
                                            </span>
                                            <h3>
                                                <Link href={post.link}>{post.title}</Link>
                                            </h3>
                                            <ul className="post-info mb_25">
                                                <li>
                                                    <i className="icon-28"></i>
                                                    <Link href={post.link}>{post.author}</Link>
                                                </li>
                                                <li>
                                                    <i className="icon-29"></i>{post.commentCount}
                                                </li>
                                            </ul>
                                            <div className="btn-box">
                                                <Link href={post.link} className="theme-btn btn-three">
                                                    Read More
                                                </Link>
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