import Link from "next/link";


export default function Whoweare() {
    return (
        <> 
            <section className="about-style-two pt_120 pb_120">
                    <div className="auto-container">
                        <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_three">
                            <div className="content-box mr_110">
                                <div className="sec-title mb_20">
                                <h6>Who we are</h6>
                                <h2>The Finance Guide on All Stage of Life.</h2>
                                </div>
                                <div className="text-box mb_40">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take action against fraud. See it the Security Center for and Mobile and Online Banking.</p>
                                <ul className="list-style-one clearfix">
                                    <li>Improving all types of opportunities</li>
                                    <li>Quick solutions for daily problems</li>
                                    <li>Community that grows larger</li>
                                </ul>
                                </div>
                                <div className="btn-box">
                                <Link href="/about" className="theme-btn btn-one">Discover More</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image_block_two">
                            <div className="image-box">
                              
                                <figure className="image"><img src="assets/images/resource/about-6.jpg" alt="" /></figure>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
        </>
    )
}
