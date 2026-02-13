
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Details">
                {/* sidebar-page-container */}
                <section className="sidebar-page-container pt_120 pb_120">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                                <div className="blog-details-content">
                                    <div className="news-block-three">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="assets/images/news/news-25.jpg" alt="" /></figure>
                                            <div className="lower-content">
                                            <div className="post-date"><h4>14<span>Jan</span></h4></div>
                                            <ul className="post-info mb_15">
                                                <li><i className="icon-32"></i><Link href="/blog-details">Admin</Link></li>
                                                <li><i className="icon-33"></i>3 Comment</li>
                                            </ul>
                                            <h3>Self-Guided Driving & Tours Walk Of Greater City</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus ornare non non massa elit rutrum. Erosie proin nibh neque interdum accumsan, neque vitae. Tortor etiam sed suspendisse faucibus ac volutpati mattis tortor nec. Orc velit a, posuere turpis amet. Lectus lacus lectus habitasse amet quam libero, and lorem. Volutpat odio maecenas viverra consequat condimentum diam donec aliquet. Natoque quam id vitae leo risus. Eget neque proin in dolor cursus bibendum urna dictum. Aliquam gravida et proin donen maecenas quis faucibus varius tristique.</p>
                                            <p>Pulvinar dolor aliquet netus ultrices neque, mi non accumsan ullamcorper. Et nunc scelerisque turpis on facilisis pretium ut facilisis pharetra, ultrices. Duis imperdiet habitant arcu quis. Nunc euismod odio and cursus in diam eget tincidunt mauris.</p>
                                            <ul className="list-item mb_50 clearfix">
                                                <li>Platea sed fames at egestas amet feugiat laoreet</li>
                                                <li>Duis et enim justo, in mauris posuere dolor magnis felis sapien sit egestas. Ut venenatis faucibus non sed faucibus mauris ultricies.</li>
                                                <li>Mauris donec ociis et magnis sapien etiam sapien sagittis congue tempor gravida done</li>
                                                <li>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</li>
                                            </ul>
                                            <blockquote>
                                                <div className="icon-box"><img src="assets/images/icons/icon-5.png" alt="" /></div>
                                                <h5>“Lorem ipsum dolor sit amet, consectetur adipiscing elit amet purus tempor dui pharet consequat nibh elit urna interdum viera quam and arcu duis quis lectus donec nulla and aliquam dolore intun rodeo</h5>
                                                <div className="author-inner">
                                                <figure className="author-thumb"><img src="assets/images/news/author-1.jpg" alt="" /></figure>
                                                <h3>Donald Richard</h3>
                                                <span>Finance Advisor</span>
                                                </div>
                                            </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-one pb_20">
                                        <div className="text-box mb_50">
                                            <h2>How to Know Your Credit Score</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus ornare non non massa elit rutrum. Erosie proin nibh neque interdum accumsan, neque vitae. Tortor etiam sed suspendisse faucibus ac volutpati mattis tortor nec. Orc velit a, posuere turpis amet. Lectus lacus lectus habitasse amet quam libero, and lorem. Volutpat odio maecenas viverra consequat condimentum diam donec aliquet. Natoque quam id vitae leo risus. Eget neque proin in dolor cursus bibendum urna dictum. Aliquam gravida et proin donen maecenas quis faucibus varius tristique.</p>
                                            <p>Pulvinar dolor aliquet netus ultrices neque, mi non accumsan ullamcorper. Et nunc scelerisque turpis on facilisis pretium ut facilisis pharetra, ultrices. Duis imperdiet habitant arcu quis. Nunc euismod odio and cursus in diam eget tincidunt mauris.</p>
                                        </div>
                                        <div className="image-box">
                                            <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                <figure className="image"><img src="assets/images/news/news-30.jpg" alt="" /></figure>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                <figure className="image"><img src="assets/images/news/news-31.jpg" alt="" /></figure>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-two mb_50">
                                        <h2>When You Pay Your Credit Card Bill</h2>
                                        <p>Pulvinar dolor aliquet netus ultrices neque, mi non accumsan ullamcorper. Et nunc scelerisque turpisdi facilisis pretium ut facilisis pharetra, ultrices. Duis imperdiet habitant arcu quis. Nunc euismod odio ani cursus in diam eget tincidunt mauris.  Volutpat odio maecenas viverra consequat condimentum diam donec aliquet. Natoque quam id vitae leo risus. Eget neque proin in dolor cursus bibendum</p>
                                    </div>
                                    <div className="post-tag-option mb_60">
                                        <ul className="tags-list clearfix">
                                            <li><span>Tags:</span></li>
                                            <li><Link href="/blog">Activities</Link></li>
                                            <li><Link href="/blog">Depertment</Link></li>
                                            <li><Link href="/blog">City</Link></li>
                                            <li><Link href="/blog">Certificate</Link></li>
                                        </ul>
                                    </div>
                                    <div className="author-box mb_60">
                                        <figure className="author-thumb"><img src="assets/images/news/author-2.jpg" alt="" /></figure>
                                        <h4>Julien Asange</h4>
                                        <span>About Author</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit amet sit purus tempor dui pharetra consequat nibh elit urna interdum viera quam.</p>
                                    </div>
                                    <div className="comment-form-area">
                                        <h3>Leave a Comment</h3>
                                        <div className="form-inner">
                                            <form method="post" action="/blog-details">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="name" placeholder="Your name" required />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="email" name="email" placeholder="Your email" required />
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <textarea name="message" placeholder="Type message"></textarea>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group message-btn">
                                                <button type="submit" className="theme-btn btn-one">Submit Comment</button>
                                                </div>
                                            </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                <div className="blog-sidebar ml_20">
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
                                    <div className="sidebar-widget gallery-widget">
                                        <div className="widget-title">
                                            <h3>Photo Gallery</h3>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="image-list clearfix">
                                            <li>
                                                <figure className="image-box"><Link href="assets/images/news/gallery-1.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-1.jpg" alt="" /></Link></figure>
                                            </li>
                                            <li>
                                                <figure className="image-box"><Link href="assets/images/news/gallery-2.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-2.jpg" alt="" /></Link></figure>
                                            </li>
                                            <li>
                                                <figure className="image-box"><Link href="assets/images/news/gallery-3.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-3.jpg" alt="" /></Link></figure>
                                            </li>
                                            <li>
                                                <figure className="image-box"><Link href="assets/images/news/gallery-4.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-4.jpg" alt="" /></Link></figure>
                                            </li>
                                            <li>
                                                <figure className="image-box"><Link href="assets/images/news/gallery-5.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-5.jpg" alt="" /></Link></figure>
                                            </li>
                                            <li>
                                                <figure className="image-box"><Link href="assets/images/news/gallery-6.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-6.jpg" alt="" /></Link></figure>
                                            </li>
                                            </ul>
                                        </div>
                                    </div>
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
                                    <div className="sidebar-widget tags-widget">
                                        <div className="widget-title">
                                            <h3>Popular Tags</h3>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="tags-list clearfix">
                                            <li><Link href="/blog">Activities</Link></li>
                                            <li><Link href="/blog">Depertment</Link></li>
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

            </Layout>
        </>
    )
}
