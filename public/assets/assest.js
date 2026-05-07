import { ShieldCheck, Headphones, TrendingUp, Timer } from "lucide-react"
import { Eye, Rocket, Landmark, Lightbulb, Users } from 'lucide-react'


export const AboutFeatures = [
  {
    id: 1,
    icon: "icon-10",
    title: "Prudent Investment Management",
    description: "Focusing on professional fund management driven by financial discipline and transparency.",
  },
  {
    id: 2,
    icon: "icon-11",
    title: "Structured Lending & Capital Allocation",
    description: "Expert deployment of capital through strategic lending and long-term value creation.",
  },
];



 export   const featureData = [
        {
            icon: <ShieldCheck size={35} />,
            title: "Secure Investment Solutions",
            desc: "Your capital is protected with robust risk-managed strategies and disciplined financial oversight.",
            delay: "0ms"
        },
        {
            icon: <Headphones size={35} />,
            title: "Expert Advisory Support",
            desc: "Our financial specialists guide you with data-driven insights for smarter wealth decisions.",
            delay: "200ms"
        },
   {
            icon: <TrendingUp size={35} strokeWidth={1.5} />,
            title: "Competitive Returns Strategy",
            desc: "Optimised investment models designed to deliver strong, stable, and long-term performance.",
            delay: "400ms"
        },
        {
            icon: <Timer size={35} strokeWidth={1.5} />,
            title: "Fast & Hassle-Free Execution",
            desc: "Streamlined digital processes ensure quick onboarding and seamless strategy deployment.",
            delay: "600ms"
        }
    ];


   export  const portfolioData = [
  {
    id: 1,
    name: "Nexus Fintech",
    sector: "Financial Services",
    ticker: "NXF",
    description: "Institutional-grade liquidity protocols streamlining cross-border settlement through blockchain efficiency.",
    status: "Series B",
    irr: 24.3,
    vintage: "2022",
    multiple: 2.1, 
  },
  {
    id: 2,
    name: "GreenGrid Systems",
    sector: "Renewable Energy",
    ticker: "GGS",
    description: "Smart-grid solutions utilizing proprietary AI to reduce urban energy waste by 40%.",
    status: "Seed",
    irr: 38.7,
    vintage: "2023",
    multiple: 1.6,
  },
  {
    id: 3,
    name: "BioPath Labs",
    sector: "Healthcare",
    ticker: "BPL",
    description: "AI-driven diagnostic platforms for early-stage oncology detection and pathology automation.",
    status: "Series A",
    irr: 31.2,
    vintage: "2023",
    multiple: 1.9,
  },
];

export const WhatWeDoData = [
  {
    id: 1,
    title: "Fixed Coupon Securities & Asset Securitisation",
    text: "Strategic investments in marketable fixed coupon securities and securitised NBFC assets, aligned with liquidity planning, market conditions, and disciplined capital management.",
    image: "assets/images/service/service-1.jpeg",
    link: "/service-details",
    list: ["Fixed Income Strategy", "Asset Securitisation", "Liquidity Planning", "Capital Management", "Market Analysis"]
  },
  {
    id: 2,
    title: "Corporate & Retail Lending Solutions",
    text: "Structured corporate and retail lending to group and associate entities, supported by transparent evaluation, prudent risk assessment, and long-term financial sustainability.",
    image: "assets/images/service/service-2.jpeg",
    link: "/service-details-3",
    list: ["Structured Lending", "Risk Assessment", "Group Entities", "Financial Sustainability", "Transparent Evaluation"]
  },
  {
    id: 3,
    title: "Equity Investments & Capital Allocation",
    text: "Research-driven equity investments focused on governance, long-term value creation, disciplined risk management, and strategic capital deployment through rigorous engagement.",
    image: "assets/images/service/service-3.jpeg",
    link: "/service-details-7",
    list: ["Research-Driven", "Active Ownership", "Value Creation", "Strategic Deployment", "Governance Focus"]
  },
  {
    id: 4,
    title: "Diversified Investment & Growth Capital",
    text: "Strategic Special Purpose Vehicle (SPV) management across high-growth sectors including Automotive, Hospitality, and Infrastructure, focused on unlocking value in emerging markets.",
    image: "assets/images/service/service-4.jpeg",
    link: "/service-details-5",
    list: ["Multi-Sector SPVs", "Automotive & Infra", "Hospitality Ventures", "Emerging Markets", "Strategic Growth"]
  }
];




export const testimonialData = [
    {
        id: 1,
        name: "Julien Anthor",
        designation: "Manager",
        image: "assets/images/resource/testimonial-4.png",
        rating: 5,
        text: "“Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque etiam nis quis at arcu nunc neque ac integer sit lobortis diam semper nulla duis in blandit.”"
    },
    {
        id: 2,
        name: "Rolier Demonil",
        designation: "Manager",
        image: "assets/images/resource/testimonial-5.png",
        rating: 5,
        text: "“Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque etiam nis quis at arcu nunc neque ac integer sit lobortis diam semper nulla duis in blandit.”"
    },
    {
        id: 3,
        name: "Julien Anthor",
        designation: "Manager",
        image: "assets/images/resource/testimonial-4.png",
        rating: 5,
        text: "“Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque etiam nis quis at arcu nunc neque ac integer sit lobortis diam semper nulla duis in blandit.”"
    },
    {
        id: 4,
        name: "Rolier Demonil",
        designation: "Manager",
        image: "assets/images/resource/testimonial-5.png",
        rating: 5,
        text: "“Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque etiam nis quis at arcu nunc neque ac integer sit lobortis diam semper nulla duis in blandit.”"
    }
];


export const allBlogPosts = [
   
    {
        id: 1,
        slug: "improve-credit-score-before-loan",
        date: "Jan 20, 2026",
        title: "How to Improve Your Credit Score",
        image: "assets/images/blog-details/business-details1.webp",
        delay: "00ms",
        content: {
            heroImage: "assets/images/blog-details/business-details1.webp",
            heading: "How to Improve Your Credit Score Before Applying for a Loan",
            body: [
                "When you apply for a loan, one of the first things lenders evaluate is your credit score. This three-digit number plays a major role in determining whether your loan gets approved, the interest rate you receive, and even the loan amount you're eligible for. A higher score can unlock better financial opportunities, while a low score can lead to rejections or costly borrowing.",
                "If you're planning to apply for a loan soon, improving your credit score beforehand is one of the smartest moves you can make. Here's a practical, step-by-step guide to help you do exactly that.",
            ],
            listItems: [
                "Check Your Credit Report First : Get a copy from authorized credit bureaus and review it carefully for errors, incorrect loan details, or duplicate accounts.",
                "Pay All Your Bills on Time : Your payment history is the most important factor. Pay EMIs before the due date and avoid missing payments.",
                "Reduce Your Credit Utilization Ratio : Experts recommend keeping it below 30%. Pay off outstanding balances and avoid maxing out credit cards.",
                "Avoid Applying for Multiple Loans at Once : Too many hard inquiries in a short period signals credit hunger and reduces your score.",
                "Maintain a Healthy Credit Mix : A balanced mix of secured and unsecured loans shows lenders you can handle different types of credit responsibly.",
                "Keep Old Credit Accounts Active : Older accounts show long-term financial discipline. Avoid closing old credit cards unless absolutely necessary.",
                "Clear Outstanding Debts : Prioritize high-interest debts, overdue EMIs, and credit card balances.",
                "Avoid Settlements and Write-Offs : Settling a loan marks it as 'settled' instead of 'closed', which lenders view as partial repayment.",
                "Monitor Your Credit Regularly : Regular monitoring helps you detect issues early and maintain a healthy credit profile.",
            ],
            blockquote: {
                text: "Consistent financial discipline can make a significant difference over time. Paying your dues on time and managing credit wisely can boost your score and increase loan approval chances.",
                author: "Indel Capital",
                role: "Financial Advisory",
                authorImg: "assets/images/news/author-1.jpg",
            },
            subHeading: "What Is a Credit Score and Why Does It Matter?",
            subBody: "A credit score is a numerical summary of your creditworthiness based on your past financial behavior. In India, scores typically range from 300 to 900, and anything above 750 is considered good. Lenders use this score to assess your ability to repay a loan, your past repayment habits, and your overall financial discipline. A better score means faster loan approvals, lower interest rates, and higher loan limits.",
            secondSection: {
                heading: "Final Thoughts",
                body: "Improving your credit score doesn't happen overnight, but consistent financial discipline can make a significant difference over time. Before applying for a loan, take a few months to strengthen your credit profile it can save you money, reduce stress, and help you secure better financial deals. For expert guidance in navigating loans and improving credit profiles, consulting professionals like Indel Capital can provide personalized support and increase your chances of faster and more favorable loan approvals.",
            },
        },
    },
    {
        id: 2,
        slug: "personal-loan-vs-credit-card",
        date: "Jan 25, 2026",
        title: "Personal Loan vs Credit Card: Which is Better?",
        image: "assets/images/blog-details/business-details2.webp",
        delay: "300ms",
        content: {
            heroImage: "assets/images/blog-details/business-details2.webp",
            heading: "Personal Loan vs Credit Card: Which is Better?",
            body: [
                "When it comes to managing expenses or handling financial emergencies, two of the most common options people consider are personal loans and credit cards. Both offer quick access to funds, but they work very differently.",
                "Choosing the right option depends on your financial needs, repayment capacity, and spending habits. Let's break down the key differences so you can make a smarter financial decision.",
            ],
            listItems: [
                "Interest Rates : Personal loans usually have lower interest rates. Credit cards can charge significantly higher interest if the balance is not paid in full each month.",
                "Loan Amount : Personal loans allow larger borrowing based on eligibility. Credit card limits may not be sufficient for major expenses.",
                "Repayment Structure : Personal loans have fixed EMIs and a defined tenure. Credit cards offer flexibility but minimum payments can lead to long-term debt.",
                "Flexibility : Credit cards offer revolving credit; you can borrow and repay repeatedly. Personal loans follow a fixed repayment schedule.",
                "Usage Purpose : Personal loans suit planned or significant expenses. Credit cards are ideal for everyday spending and short-term needs.",
                "Financial Discipline : Personal loans promote discipline with fixed EMIs. Credit cards, if misused, can lead to overspending and debt accumulation.",
            ],
            blockquote: {
                text: "There is no one-size-fits-all answer. For large, planned expenses a personal loan is better. For small, short-term expenses a credit card is better. Used wisely, both can be powerful financial tools.",
                author: "Indel Capital",
                role: "Financial Advisory",
                authorImg: "assets/images/news/author-1.jpg",
            },
            subHeading: "When Should You Choose a Personal Loan?",
            subBody: "A personal loan is the better option if you need a large amount of money, want lower interest rates, prefer structured repayment, or are consolidating existing debts. It provides clarity and helps you plan your finances without surprises.",
            secondSection: {
                heading: "When Should You Choose a Credit Card?",
                body: "A credit card is ideal if you need quick access to small amounts, can repay the full amount on time, want rewards or cashback, or need flexibility in spending. However, discipline is key to avoiding high interest charges. If you are considering a personal loan, institutions like Indel Capital offer reliable and transparent solutions designed to meet diverse financial needs.",
            },
        },
    },
    {
        id: 3,
        slug: "mistakes-to-avoid-personal-loan",
        date: "Feb 20, 2026",
        title: "10 Mistakes to Avoid When Taking a Personal Loan",
        image: "assets/images/blog-details/business-details3.webp",
        delay: "600ms",
        content: {
            heroImage: "aassets/images/blog-details/business-details3.webp",
            heading: "10 Mistakes to Avoid When Taking a Personal Loan",
            body: [
                "Taking a personal loan can be a smart financial move when managed properly. Whether it's for medical emergencies, home renovation, education, or consolidating debt, personal loans offer flexibility and quick access to funds.",
                "However, many borrowers make critical mistakes that lead to financial stress later. Understanding these common pitfalls can help you make informed decisions and avoid unnecessary burdens.",
            ],
            listItems: [
                "Not Checking Your Credit Score : A low score can lead to higher interest rates or rejection. Always check and improve your score beforehand.",
                "Borrowing More Than You Need : Taking more than necessary increases your EMI burden and total interest payable. Stick to the exact amount you need.",
                "Ignoring Interest Rate Comparisons : Even a small difference in rates can significantly impact total repayment. Always explore multiple lenders.",
                "Overlooking Hidden Charges : Watch for processing fees, prepayment penalties, late payment fees, and foreclosure charges. Always read the fine print.",
                "Choosing the Wrong Loan Tenure : A longer tenure reduces EMI but increases total interest. Select a tenure that balances affordability and total cost.",
                "Not Reading the Terms and Conditions : Missing clauses on penalties or repayment flexibility can lead to surprises. Read and understand before signing.",
                "Applying with Multiple Lenders at Once : Each application triggers a hard inquiry, lowering your score. Research well and apply selectively.",
                "Ignoring Your Repayment Capacity : Calculate your repayment capacity based on income and existing obligations to avoid missed EMIs.",
                "Not Considering Prepayment Options : If you plan to repay early, choose a loan with flexible prepayment options to save on interest.",
                "Falling for Instant Loan Offers Without Research : Not all digital lenders are trustworthy. Always verify credibility, reviews, and terms before proceeding.",
            ],
            blockquote: {
                text: "Taking a personal loan is a responsibility that requires careful planning. Avoiding common mistakes can save you from financial stress and help you manage your loan efficiently.",
                author: "Indel Capital",
                role: "Financial Advisory",
                authorImg: "assets/images/news/author-1.jpg",
            },
            subHeading: "Final Thoughts",
            subBody: "Always take time to research, compare options, and understand the complete cost of borrowing before making a commitment. If you're looking for a reliable lending partner, consider exploring trusted financial institutions like Indel Capital, known for offering transparent and customer-friendly personal loan solutions.",
            secondSection: {
                heading: "Why Choosing the Right Lender Matters",
                body: "Beyond avoiding these mistakes, the lender you choose can make or break your loan experience. A good lender offers transparent terms, reasonable interest rates, no hidden charges, and flexible repayment options. Always prioritize trust and transparency over speed when selecting a financial partner for your personal loan needs.",
            },
        },
    },
]

export const insightsData = {
    subTitle: "Insights",
    mainTitle: "Our Latest Media Update",
    posts: [
        {
            id: 1,
            date: "Oct 24, 2025",
            title: "Expanding the Horizon: Strategic Growth in the NBFC Sector",
            image: "assets/images/news/news-1.jpg",
            author: "Indel Research",
            commentCount: "0 Comment",
            link: "/blog-details",
            delay: "00ms"
        },
        {
            id: 2,
            date: "Jan 12, 2026",
            title: "Transitioning to Sustainable Finance: Investing in Green Infrastructure",
            image: "assets/images/news/news-2.jpg",
            author: "Admin",
            commentCount: "2 Comment",
            link: "/blog-details",
            delay: "300ms"
        },
        {
            id: 3,
            date: "Feb 05, 2026",
            title: "The Future of Asset Securitization and Fixed Coupon Securities",
            image: "assets/images/news/news-3.jpg",
            author: "Indel Capital",
            commentCount: "1 Comment",
            link: "/blog-details",
            delay: "600ms"
        }
    ]
};

export const testimonialSliderOneData = [
    {
        id: "t1",
        name: "Arjun K M",
        designation: "Managing Director",
        image: "assets/images/testimonial/testimonials-1.jpeg",
        rating: 5,
        text: "“Indel Capital is a reliable partner in our investment strategy. Their disciplined approach and market insights help us make very confident financial decisions.”"
    },
    {
        id: "t2",
        name: "Vishnu Menon",
        designation: "CFO",
        image: "assets/images/testimonial/testimonials-2.jpeg",
        rating: 5,
        text: "“The Indel team delivers thoughtful guidance backed by research. Their clear communication and professionalism make them a trusted partner for long-term growth.”"
    },
    {
        id: "t3",
        name: "Lakshmi K K",
        designation: "CFO",
        image: "assets/images/testimonial/testimonials-3.jpeg",
        rating: 5,
        text: "“Indel Capital combines deep market knowledge with a disciplined approach. Their transparent process has helped us significantly optimize our financial planning.”"
    },
    {
        id: "t4",
        name: "Rahul Krishnan",
        designation: "Director",
        image: "assets/images/testimonial/testimonials-4.jpeg",
        rating: 5,
        text: "“Our experience with Indel Capital is consistently positive. Their strategic insights and timely communication add immense value to every investment decision.”"
    },
    {
        id: "t5",
        name: "Anjali Nair",
        designation: "Managing Director",
        image: "assets/images/testimonial/testimonials-5.jpeg",
        rating: 5,
        text: "“Indel stands out for disciplined management and transparent advice. Their dedicated team focuses on sustainable value and long-term financial stability for us.”"
    },
    {
        id: "t6",
        name: "Suresh Pillai",
        designation: "Director",
        image: "assets/images/testimonial/testimonials-6.jpeg",
        rating: 5,
        text: "“Working with Indel Capital is always smooth and productive. Their structured strategy and responsive support provide total confidence in our financial future.”"
    }
];
 
    export  const mainCards = [
        {
            id: 'vision',
            title: 'Our Vision',
            text: 'To be a trusted and forward-looking capital partner that empowers businesses and individuals to unlock sustainable growth and long-term financial strength. We aspire to build a resilient financial ecosystem where opportunity, innovation, and integrity come together to create enduring value. We aim to inspire confidence in every financial decision and drive meaningful impact across industries. Our goal is to shape a future where growth and responsibility go hand in hand.',
            icon: <Eye size={32} />,
            gradient: 'linear-gradient(135deg, #17479e 0%, #3b82f6 100%)'
        },
        {
            id: 'mission',
            title: 'Our Mission',
            text: 'At Indel Capital, our mission is to deliver strategic, responsible, and growth-focused financial solutions tailored to the evolving needs of our clients. We are committed to operating with transparency, discipline, and insight, fostering lasting partnerships built on trust, performance, and shared success. We continuously innovate to meet changing market demands and empower our clients with knowledge and confidence. Our mission is to create value that transcends numbers, building lasting impact for communities and stakeholders alike.',
            icon: <Rocket size={32} />,
            gradient: 'linear-gradient(135deg, #ee3824 0%, #f87171 100%)'
        }
    ];

    export const valueStrip = [
        {
            title: 'Trust',
            sub: '38 Years of Legacy',
            icon: <ShieldCheck size={28} color="#ffd700" />
        },
        {
            title: 'Transparency',
            sub: 'Ethical Operations',
            icon: <Landmark size={28} color="#ffd700" />
        },
        {
            title: 'Innovation',
            sub: 'Tech-Driven Growth',
            icon: <Lightbulb size={28} color="#ffd700" />
        },
        {
            title: 'Empowerment',
            sub: 'Financial Inclusion',
            icon: <Users size={28} color="#ffd700" />
        }
    ];


 export const teamMembers = [
    { name: "Mohanan Gopalakrishnan",       role: "Managing Director",           img: "assets/images/team/team-1.png" },
    { name: "Umesh Mohanan",       role: "Director",        img: "assets/images/team/team-2.png" },
    { name: "Anish Mohan",     role: "Director",          img: "assets/images/team/team-3.png" },
    // { name: "Devon Lane",        role: "Vice Chairman",     img: "assets/images/team/team-4.png" },
    // { name: "Brooklyn Simmons",  role: "Head of Marketing", img: "assets/images/team/team-5.png" },
    // { name: "Robert Fox",        role: "Head of Finance",   img: "assets/images/team/team-6.png" },
    // { name: "Darlene Robertson", role: "Managing Director", img: "assets/images/team/team-7.png" },
    // { name: "Albert Flores",     role: "Chief Marketer",    img: "assets/images/team/team-8.png" },
    // { name: "Albert Flores",     role: "Chief Marketer",    img: "assets/images/team/team-9.png" },
    // { name: "Albert Flores",     role: "Chief Marketer",    img: "assets/images/team/team-10.png" },
    // { name: "Guy Hawkins",       role: "Co-Founder",        img: "assets/images/team/team-11.png" },
]


export const coreFaqs = [
    {
        id: 1,
        q: "What is Indel Capital?",
        a: "Indel Capital is a professional investment and financial services company helping individuals and businesses achieve long-term financial growth and stability."
    },
    {
        id: 2,
        q: "What kinds of investment solutions do you offer?",
        a: "We offer tailored investment strategies, wealth management, and financial advisory solutions designed to match different financial goals and risk profiles."
    },
    {
        id: 3,
        q: "How does Indel Capital support clients beyond funding?",
        a: "We blend deep market research, strategy planning, and ongoing performance tracking to help clients grow and protect their capital over time."
    },
    {
        id: 4,
        q: "Who can invest with Indel Capital?",
        a: "Individuals, professionals, entrepreneurs, and businesses seeking structured, disciplined, and transparent investment planning can work with us."
    },
    {
        id: 5,
        q: "How can I start investing or get personalised advice?",
        a: "To begin, submit an enquiry through the contact form or request a consultation our team will guide you through onboarding and planning your investment path."
    }
]
