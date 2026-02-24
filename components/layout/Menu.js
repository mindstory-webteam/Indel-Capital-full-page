"use client";
import Link from "next/link";

export default function Menu() {
    return (
        <>
         
            <ul className="navigation">
                
                <li className="dropdown">
                    <Link href="/who-we-are">Who We Are</Link>
                    <ul>
                        <li><Link href="/index-2">Home Page Two</Link></li>
                        <li><Link href="/index-3">Home Page Three</Link></li>
                        <li><Link href="/index-onepage">OnePage Home</Link></li>
                    </ul>
                </li>
                      
                <li className="dropdown">
                    <Link href="/investment-approach">Investment Approach</Link>
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

                <li className="dropdown">
                    <Link href="/strategies">Strategies</Link>
                    <ul>
                        <li><Link href="/team">Board of Directors</Link></li>
                        <li><Link href="/team-details">Director Details</Link></li>
                        <li><Link href="/career">Career Page</Link></li>
                        <li><Link href="/faq">General FAQ's</Link></li>
                    </ul>
                </li>

                <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>

            <style jsx>{`
                .navigation {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                .navigation li {
                    margin-right: 30px; 
            `}</style>
        </>
    );
}