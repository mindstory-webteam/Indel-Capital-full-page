
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Standard">
                <div>
                    {/* sidebar-page-container */}
                    <section className="sidebar-page-container pt_120 pb_120">
                        <div className="auto-container">
                            <div className="row clearfix">
                            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                                <div className="blog-standard-content">
                                {/* News Block 1 */}
                                <div className="news-block-three">
                                    <div className="inner-box">
                                    <figure className="image-box"><Link href="/blog-details"><img src="assets/images/news/news-25.jpg" alt="" /></Link></figure>
                                    <div className="lower-content">
                                        <div className="post-date"><h4>14<span>Jan</span></h4></div>
                                        <ul className="post-info mb_15">
                                        <li><i className="icon-32"></i><Link href="/blog-details">Admin</Link></li>
                                        <li><i className="icon-33"></i>3 Comment</li>
                                        </ul>
                                        <h3><Link href="/blog-details">Self-Guided Driving & Tours Walk Of Greater City</Link></h3>
                                        <p>Amet minim mollit duis sit enim aliqua dolor do amet officia. Pellentesque etiam niss. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take action against fraud. See it the Security Center for and Mobile and Online Banking.</p>
                                        <div className="btn-box">
                                        <Link href="/blog-details">Read More</Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                {/* News Block 2 */}
                                <div className="news-block-three">
                                    <div className="inner-box">
                                    <figure className="image-box"><Link href="/blog-details"><img src="assets/images/news/news-26.jpg" alt="" /></Link></figure>
                                    <div className="lower-content">
                                        <div className="post-date"><h4>13<span>Jan</span></h4></div>
                                        <ul className="post-info mb_15">
                                        <li><i className="icon-32"></i><Link href="/blog-details">Admin</Link></li>
                                        <li><i className="icon-33"></i>0 Comment</li>
                                        </ul>
                                        <h3><Link href="/blog-details">Assistance For Homes & Properties Real Estate</Link></h3>
                                        <p>Amet minim mollit duis sit enim aliqua dolor do amet officia. Pellentesque etiam niss. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take action against fraud. See it the Security Center for and Mobile and Online Banking.</p>
                                        <div className="btn-box">
                                        <Link href="/blog-details">Read More</Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                {/* News Block 3 */}
                                <div className="news-block-three">
                                    <div className="inner-box">
                                        <figure className="image-box"><Link href="/blog-details"><img src="assets/images/news/news-27.jpg" alt="" /></Link></figure>
                                        <div className="lower-content">
                                        <div className="post-date"><h4>12<span>Jan</span></h4></div>
                                        <ul className="post-info mb_15">
                                            <li><i className="icon-32"></i><Link href="/blog-details">Admin</Link></li>
                                            <li><i className="icon-33"></i>4 Comment</li>
                                        </ul>
                                        <h3><Link href="/blog-details">Long-Term Vision Of Health & Attractive Facility</Link></h3>
                                        <p>Amet minim mollit duis sit enim aliqua dolor do amet officia. Pellentesque etiam niss. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take action against fraud. See it the Security Center for and Mobile and Online Banking.</p>
                                        <div className="btn-box">
                                            <Link href="/blog-details">Read More</Link>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                {/* News Block 4 */}
                                <div className="news-block-three">
                                    <div className="inner-box">
                                        <figure className="image-box"><Link href="/blog-details"><img src="assets/images/news/news-28.jpg" alt="" /></Link></figure>
                                        <div className="lower-content">
                                        <div className="post-date"><h4>11<span>Jan</span></h4></div>
                                        <ul className="post-info mb_15">
                                            <li><i className="icon-32"></i><Link href="/blog-details">Admin</Link></li>
                                            <li><i className="icon-33"></i>1 Comment</li>
                                        </ul>
                                        <h3><Link href="/blog-details">Self-Guided Driving & Tours Walk Of Greater City</Link></h3>
                                        <p>Amet minim mollit duis sit enim aliqua dolor do amet officia. Pellentesque etiam niss. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take action against fraud. See it the Security Center for and Mobile and Online Banking.</p>
                                        <div className="btn-box">
                                            <Link href="/blog-details">Read More</Link>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                {/* News Block 5 */}
                                <div className="news-block-three">
                                    <div className="inner-box">
                                        <figure className="image-box"><Link href="/blog-details"><img src="assets/images/news/news-29.jpg" alt="" /></Link></figure>
                                        <div className="lower-content">
                                        <div className="post-date"><h4>10<span>Jan</span></h4></div>
                                        <ul className="post-info mb_15">
                                            <li><i className="icon-32"></i><Link href="/blog-details">Admin</Link></li>
                                            <li><i className="icon-33"></i>5 Comment</li>
                                        </ul>
                                        <h3><Link href="/blog-details">Assistance For Homes & Properties Real Estate</Link></h3>
                                        <p>Amet minim mollit duis sit enim aliqua dolor do amet officia. Pellentesque etiam niss. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take action against fraud. See it the Security Center for and Mobile and Online Banking.</p>
                                        <div className="btn-box">
                                            <Link href="/blog-details">Read More</Link>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Pagination */}
                                <div className="pagination-wrapper pt_15">
                                    <ul className="pagination">
                                    <li><Link href="/blog-3"><i className="icon-40"></i></Link></li>
                                    <li><Link href="/blog-3" className="current">1</Link></li>
                                    <li><Link href="/blog-3">2</Link></li>
                                    <li><Link href="/blog-3">3</Link></li>
                                    <li><Link href="/blog-3"><i className="icon-41"></i></Link></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            {/* Sidebar */}
                            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                <div className="blog-sidebar ml_20">
                                {/* Sidebar Widgets */}
                                {/* Search Widget */}
                                <div className="sidebar-widget search-widget">
                                    <div className="widget-title">
                                    <h3>Search</h3>
                                    </div>
                                    <div className="search-inner">
                                    <form method="post" action="/blog-3">
                                        <div className="form-group">
                                        <input type="search" name="search-field" placeholder="Search..." required />
                                        <button type="submit"><i className="icon-42"></i></button>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                                {/* Categories Widget */}
                                <div className="sidebar-widget category-widget">
                                    <div className="widget-title">
                                    <h3>Categories</h3>
                                    </div>
                                    <div className="widget-content">
                                    <ul className="category-list clearfix">
                                        <li><Link href="/blog">City News</Link></li>
                                        <li><Link href="/blog">Government</Link></li>
                                        <li><Link href="/blog">Development</Link></li>
                                        <li><Link href="/blog">Tourism</Link></li>
                                        <li><Link href="/blog">Culture</Link></li>
                                        <li><Link href="/blog">Community</Link></li>
                                    </ul>
                                    </div>
                                </div>
                                {/* Latest News Widget */}
                                <div className="sidebar-widget post-widget">
                                    <div className="widget-title">
                                    <h3>Latest News</h3>
                                    </div>
                                    <div className="post-inner">
                                        <div className="post">
                                            <figure className="post-thumb"><Link href="/blog-detail"><img src="assets/images/news/post-1.jpg" alt="" /></Link></figure>
                                            <h5><Link href="/blog">Self-Guided Driving & Tours Walk</Link></h5>
                                            <span className="post-date"><i className="icon-27"></i>Apr 17, 2022</span>
                                        </div>
                                        <div className="post">
                                            <figure className="post-thumb"><Link href="/blog-detail"><img src="assets/images/news/post-2.jpg" alt="" /></Link></figure>
                                            <h5><Link href="/blog">Self-Guided Driving & Tours Walk</Link></h5>
                                            <span className="post-date"><i className="icon-27"></i>Apr 16, 2022</span>
                                        </div>
                                        <div className="post">
                                            <figure className="post-thumb"><Link href="/blog-detail"><img src="assets/images/news/post-3.jpg" alt="" /></Link></figure>
                                            <h5><Link href="/blog">Self-Guided Driving & Tours Walk</Link></h5>
                                            <span className="post-date"><i className="icon-27"></i>Apr 15, 2022</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Gallery Widget */}
                                <div className="sidebar-widget gallery-widget">
                                    <div className="widget-title">
                                    <h3>Photo Gallery</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="image-list clearfix">
                                            <li>
                                            <figure className="image-box">
                                                <Link href="assets/images/news/gallery-1.jpg" className="lightbox-image" data-fancybox="gallery">
                                                <img src="assets/images/news/gallery-1.jpg" alt="" />
                                                </Link>
                                            </figure>
                                            </li>
                                            <li>
                                            <figure className="image-box">
                                                <Link href="assets/images/news/gallery-2.jpg" className="lightbox-image" data-fancybox="gallery">
                                                <img src="assets/images/news/gallery-2.jpg" alt="" />
                                                </Link>
                                            </figure>
                                            </li>
                                            <li>
                                            <figure className="image-box">
                                                <Link href="assets/images/news/gallery-3.jpg" className="lightbox-image" data-fancybox="gallery">
                                                <img src="assets/images/news/gallery-3.jpg" alt="" />
                                                </Link>
                                            </figure>
                                            </li>
                                            <li>
                                            <figure className="image-box">
                                                <Link href="assets/images/news/gallery-4.jpg" className="lightbox-image" data-fancybox="gallery">
                                                <img src="assets/images/news/gallery-4.jpg" alt="" />
                                                </Link>
                                            </figure>
                                            </li>
                                            <li>
                                            <figure className="image-box">
                                                <Link href="assets/images/news/gallery-5.jpg" className="lightbox-image" data-fancybox="gallery">
                                                <img src="assets/images/news/gallery-5.jpg" alt="" />
                                                </Link>
                                            </figure>
                                            </li>
                                            <li>
                                            <figure className="image-box">
                                                <Link href="assets/images/news/gallery-6.jpg" className="lightbox-image" data-fancybox="gallery">
                                                <img src="assets/images/news/gallery-6.jpg" alt="" />
                                                </Link>
                                            </figure>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Archives Widget */}
                                <div className="sidebar-widget category-widget archive-widget">
                                    <div className="widget-title">
                                    <h3>Archives</h3>
                                    </div>
                                    <div className="widget-content">
                                    <ul className="category-list clearfix">
                                        <li><Link href="/blog">July 2021</Link></li>
                                        <li><Link href="/blog">June 2021</Link></li>
                                        <li><Link href="/blog">May 2021</Link></li>
                                        <li><Link href="/blog">March 2021</Link></li>
                                        <li><Link href="/blog">February 2021</Link></li>
                                    </ul>
                                    </div>
                                </div>
                                {/* Tags Widget */}
                                <div className="sidebar-widget tags-widget">
                                    <div className="widget-title">
                                    <h3>Popular Tags</h3>
                                    </div>
                                    <div className="widget-content">
                                    <ul className="tags-list clearfix">
                                        <li><Link href="/blog">Activities</Link></li>
                                        <li><Link href="/blog">Department</Link></li>
                                        <li><Link href="/blog">City</Link></li>
                                        <li><Link href="/blog">Certificate</Link></li>
                                        <li><Link href="/blog">Transport</Link></li>
                                        <li><Link href="/blog">Mayor</Link></li>
                                        <li><Link href="/blog">Taxes & Bills</Link></li>
                                        <li><Link href="/blog">Food</Link></li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                    {/* sidebar-page-container end */}
                    

                    {/* subscribe-section */}
                    <section className="subscribe-section">
                        <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-5.png)" }}></div>
                        <div className="auto-container">
                            <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                                <div className="text-box">
                                <h2>Subscribe us to Receive Latest Updates</h2>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                                <div className="form-inner ml_40">
                                <form method="post" action="contact">
                                    <div className="form-group">
                                    <input type="email" name="email" placeholder="Your email" required />
                                    <button type="submit" className="theme-btn btn-two">Subscribe Now</button>
                                    </div>
                                </form>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                    {/* subscribe-section end */}
                </div>

            </Layout>
        </>
    )
}
