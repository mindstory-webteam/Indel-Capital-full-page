import Layout from "@/components/layout/Layout"
import { allBlogPosts } from "@/public/assets/assest"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
    return allBlogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function BlogDetailPage({ params }) {
    const { slug } = await params
    const post = allBlogPosts.find((p) => p.slug === slug)

    if (!post) return notFound()

    const { content } = post

    if (!content) return notFound()

    return (
        <>
            <Layout
                headerStyle={1}
                footerStyle={1}
                breadcrumbTitle={post.title}
                breadcrumbImg="/assets/images/background/page-title.jpg"
                breadcrumbTrail={[
                    { label: "Home", href: "/" },
                    { label: "Blogs", href: "/blog" },
                    { label: post.title },
                ]}
            >
                <section className="sidebar-page-container pt_120 pb_120">
                    <div className="auto-container">
                        <div className="row clearfix justify-content-center">

                            <div className="col-lg-10 col-md-12 col-sm-12 content-side">
                                <div className="blog-details-content">
                                    <div className="news-block-three">
                                        <div className="inner-box">

                                            {/* ── Hero image — height capped ── */}
                                            <figure
                                                className="image-box"
                                                style={{ maxHeight: "420px", overflow: "hidden", margin: 0 }}
                                            >
                                                <img
                                                    src={content.heroImage}
                                                    alt={post.title}
                                                    style={{
                                                        width: "100%",
                                                        height: "420px",
                                                        objectFit: "cover",
                                                        display: "block",
                                                    }}
                                                />
                                            </figure>

                                            <div className="lower-content">
                                                {content.heading && (
                                                    <h3>{content.heading}</h3>
                                                )}

                                                {Array.isArray(content.body) &&
                                                    content.body.map((para, i) => (
                                                        <p key={i}>{para}</p>
                                                    ))}

                                                {Array.isArray(content.listItems) &&
                                                    content.listItems.length > 0 && (
                                                        <ul className="list-item mb_50 clearfix">
                                                            {content.listItems.map((item, i) => (
                                                                <li key={i}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    )}

                                                {content.blockquote && (
                                                    <blockquote>
                                                        <div className="icon-box">
                                                            <img src="/assets/images/icons/icon-5.png" alt="quote icon" />
                                                        </div>
                                                        <h5>"{content.blockquote.text}"</h5>
                                                        <div className="author-inner">
                                                            <figure className="author-thumb">
                                                                <img
                                                                    src={content.blockquote.authorImg || "/assets/images/news/author-1.jpg"}
                                                                    alt={content.blockquote.author || "Author"}
                                                                />
                                                            </figure>
                                                            <h3>{content.blockquote.author}</h3>
                                                            <span>{content.blockquote.role}</span>
                                                        </div>
                                                    </blockquote>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="content-one pb_20">
                                        <div className="text-box mb_50">
                                            {content.subHeading && (
                                                <h2>{content.subHeading}</h2>
                                            )}
                                            {content.subBody && (
                                                <p>{content.subBody}</p>
                                            )}
                                        </div>

                                        {Array.isArray(content.galleryImages) &&
                                            content.galleryImages.length > 0 && (
                                                <div className="image-box">
                                                    <div className="row clearfix">
                                                        {content.galleryImages.map((img, i) => (
                                                            <div key={i} className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                                <figure className="image">
                                                                    <img src={img} alt={`gallery image ${i + 1}`} />
                                                                </figure>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                    </div>

                                    {content.secondSection && (
                                        <div className="content-two mb_50">
                                            {content.secondSection.heading && (
                                                <h2>{content.secondSection.heading}</h2>
                                            )}
                                            {content.secondSection.body && (
                                                <p>{content.secondSection.body}</p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="subscribe-section">
                    <div
                        className="pattern-layer"
                        style={{ backgroundImage: "url(/assets/images/shape/shape-5.png)" }}
                    ></div>
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
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Your email"
                                                required
                                            />
                                            <button type="submit" className="theme-btn btn-two">
                                                Subscribe Now
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}