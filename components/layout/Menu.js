import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

            <ul className="navigation clearfix">
                
                <li className="dropdown"><Link href="/who-we-are">Who We Are</Link>
                    <ul>
                        <li><Link href="/index-2">Home Page Two</Link></li>
                        <li><Link href="/index-3">Home Page Three</Link></li>
                        <li><Link href="/index-onepage">OnePage Home</Link></li>
                    </ul>
                </li>
                      
                <li className="dropdown"><Link href="/investment-approach">Investment Approach</Link>
                    <ul>
                        <li><Link href="/service">Our Services 1</Link></li>
                        <li><Link href="/service-2">Our Services 2</Link></li>
                        <li><Link href="/service-details">Digital Banking</Link></li>
                        <li><Link href="/service-details-2">Mobile & Web Banking</Link></li>
                        <li><Link href="/service-details-3">Insurance Policies</Link></li>
                        <li><Link href="/service-details-4">Home & Property Loan</Link></li>
                        <li><Link href="/service-details-5">All Bank Account</Link></li>
                        <li><Link href="/service-details-6">Borrowing Accounts</Link></li>
                        <li><Link href="/service-details-7">Private Banking</Link></li>
                        <li><Link href="/service-details-8">Fixed Term Account</Link></li>
                    </ul>
                </li>
                {/* <li><Link href="#"></Link>Portfolio</li> */}
                <li className="dropdown"><Link href="/strategies">Strategies</Link>
                    <ul>
                        <li className="dropdown"><Link href="/">dropdownn</Link>
                            <ul>
                                <li><Link href="/team">Board of Directors</Link></li>
                                <li><Link href="/team-details">Director Details</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link href="/">Career</Link>
                            <ul>
                                <li><Link href="/career">Career Page</Link></li>
                                <li><Link href="/career-details">Career Details</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link href="/">Blog</Link>
                            <ul>
                                <li><Link href="/blog">Blog Grid</Link></li>
                                <li><Link href="/blog-2">Blog Image</Link></li>
                                <li><Link href="/blog-3">Blog Standard</Link></li>
                                <li><Link href="/blog-details">Blog Details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/currency">Currency Exchange</Link></li>
                        <li><Link href="/credit-cards">Credit Cards</Link></li>
                        <li><Link href="/faq">General FAQ's</Link></li>
                        <li><Link href="/error">404 Error</Link></li>
                    </ul>
                </li>
                {/* <li><Link href="#">Insights & Research</Link></li> */}
                {/* <li><Link href="#">Investor Resources</Link></li> */}
                <li><Link href="/contact-us">Contact Us</Link></li>

            </ul>
        </>
    )
}