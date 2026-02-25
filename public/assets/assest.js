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

export const aboutData = {
  experienceYears: 5, 
  ratingText: "Investment Arm of Indel Group",
  subTitle: "About Us",
  mainTitle: "Our Strategic Investment Management - Since 2021",
  description: "Indel Capital Ventures and Investments Private Limited is the investment arm of the Indel Group, incorporated in 2021 and headquartered in Mumbai with a Corporate Office in Kochi. We focus on the prudent deployment and professional management of funds, driven by financial discipline, transparency, and a long-term value creation approach.",
};

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
    image: "assets/images/service/service-1.jpg",
    link: "/service-details",
    list: ["Fixed Income Strategy", "Asset Securitisation", "Liquidity Planning", "Capital Management", "Market Analysis"]
  },
  {
    id: 2,
    title: "Corporate & Retail Lending Solutions",
    text: "Structured corporate and retail lending to group and associate entities, supported by transparent evaluation, prudent risk assessment, and long-term financial sustainability.",
    image: "assets/images/service/service-2.jpg",
    link: "/service-details-3",
    list: ["Structured Lending", "Risk Assessment", "Group Entities", "Financial Sustainability", "Transparent Evaluation"]
  },
  {
    id: 3,
    title: "Equity Investments & Capital Allocation",
    text: "Research-driven equity investments focused on governance, long-term value creation, disciplined risk management, and strategic capital deployment through rigorous engagement.",
    image: "assets/images/service/service-3.jpg",
    link: "/service-details-7",
    list: ["Research-Driven", "Active Ownership", "Value Creation", "Strategic Deployment", "Governance Focus"]
  },
  {
    id: 4,
    title: "Diversified Investment & Growth Capital",
    text: "Strategic Special Purpose Vehicle (SPV) management across high-growth sectors including Automotive, Hospitality, and Infrastructure, focused on unlocking value in emerging markets.",
    image: "assets/images/service/service-4.jpg",
    link: "/service-details-5",
    list: ["Multi-Sector SPVs", "Automotive & Infra", "Hospitality Ventures", "Emerging Markets", "Strategic Growth"]
  }
];


export const investmentPhilosophyData = {
    subTitle: "OUR INVESTMENT PHILOSOPHY",
    title: "A Disciplined Strategy for Sustainable Wealth Creation",
    description: "At Indel Capital, our investment philosophy is built on discipline, transparency, and long-term value creation. Our framework combines in-depth market research with proactive portfolio management to help clients navigate volatility while capturing meaningful growth opportunities.",
    descriptionExtended: "We believe successful investing is not about chasing trends — it’s about applying structured strategies, managing risk intelligently, and staying focused on clearly defined financial goals. Every decision is guided by data, prudence, and a commitment to protecting and growing your capital responsibly.",
    points: [
        "Risk-First Planning – Focus on capital preservation",
        "Research-Driven Decisions – Backed by thorough analysis",
        "Long-Term Perspective – Sustainable growth over speculation",
        "Active Monitoring – Continuous performance tracking"
    ],
    experience: {
        years: 5, 
        text: "Years of Specialized Strategic Investment"
    },
    images: {
        img1: "assets/images/resource/about-2.jpg",
        img2: "assets/images/resource/about-3.jpg"
    }
};


export const slides = [
        {
            bgImage: 'url(assets/images/banner/banner-1.jpg)',
            titleLine1: 'Invest With Confidence.',
            titleLine2: 'Grow With Clarity.',
            description: <>At Indel Capital, we help individuals and businesses build a stronger financial future <br/>through disciplined investing, transparent practices, and well-designed financial strategies.</>,
            btnText: 'Get Started',
            btnLink: '/about'
        },
        {
            bgImage: 'url(assets/images/banner/banner-2.jpg)',
            titleLine1: 'Structured Investing for a ',
            titleLine2: 'Strong Financial Future.',
            description: <>Unlock the value of your investments with our specialized <br/> gold loan products and strategic credit solutions.</>,
            btnText: 'View Solutions',
            btnLink: '/services'
        },
        {
            bgImage: 'url(assets/images/banner/banner-3.jpg)',
            titleLine1: 'Accelerating Your',
            titleLine2: 'Wealth Journey Online',
            description: <>Experience seamless, technology-driven financial growth <br/> with Indel Capital's digital-first investment platforms.</>,
            btnText: 'Get Started',
            btnLink: '/contact'
        }
    ];

    

export const featuredStrategiesData = {
    subTitle: "Institutional Roadmap",
    mainTitle: "Strategies for Sustainable Value",
    description: "Indel Capital leverages a resilient gold-backed portfolio and an aggressive phygital expansion strategy to deliver consistent, risk-adjusted growth for our stakeholders.",
    stats: {
        security: "98%",
        aum: "5,000",
        yield: "14.50%",
        branches: "500+"
    }
};

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
        name: "Aravind Menon",
        designation: "Managing Director",
        image: "assets/images/resource/testimonial-1.png",
        rating: 5,
        text: "“Indel Capital has been a dependable partner in our financial planning. Their structured approach and clear communication made every decision easier for us.”"
    },
    {
        id: "t2",
        name: "Priya Nair",
        designation: "CFO",
        image: "assets/images/resource/testimonial-2.png",
        rating: 5,
        text: "“The team provided tailored insights that genuinely helped us optimise our investments. We appreciate the transparency and consistent guidance.”"
    },
    {
        id: "t3",
        name: "Rohit Shetty",
        designation: "Director",
        image: "assets/images/resource/testimonial-3.png",
        rating: 5,
        text: "“Our experience with Indel has been smooth and professional. The timely updates and strategic recommendations added real value to our portfolio.”"
    },
    {
        id: "t4",
        name: "Aravind Menon",
        designation: "Managing Director",
        image: "assets/images/resource/testimonial-1.png",
        rating: 5,
        text: "“Indel Capital has been a dependable partner in our financial planning. Their structured approach and clear communication made every decision easier for us.”"
    },
    {
        id: "t5",
        name: "Priya Nair",
        designation: "CFO",
        image: "assets/images/resource/testimonial-2.png",
        rating: 5,
        text: "“The team provided tailored insights that genuinely helped us optimise our investments. We appreciate the transparency and consistent guidance.”"
    },
    {
        id: "t6",
        name: "Rohit Shetty",
        designation: "Director",
        image: "assets/images/resource/testimonial-3.png",
        rating: 5,
        text: "“Our experience with Indel has been smooth and professional. The timely updates and strategic recommendations added real value to our portfolio.”"
    }
];


  export const whoweareData = {
        subTitle: "Who we are",
        mainTitle: "Your Trusted Finance Partner for Every Stage of Life.",
        descriptionMain: "At Indel Capital, we help individuals and businesses make confident financial decisions with clarity and expert guidance. Our approach is built on trust, transparency, and a deep understanding of what people need to grow and secure their futures.",
        descriptionQuote: "We simplify finance through personalised solutions, smart insights, and continuous support ensuring you’re always moving in the right direction.",
        experienceYears: "5",
        experienceText: "Years Experience",
        imagePath: "assets/images/resource/about-6.jpg",
        points: [
            "Unlocking better financial possibilities",
            "Fast, practical solutions for everyday financial needs",
            "A growing community built on trust and progress"
        ]
    };

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
    { name: "Wade Warren",       role: "Founder",           img: "assets/images/team/team-1.jpg" },
    { name: "Guy Hawkins",       role: "Co-Founder",        img: "assets/images/team/team-2.jpg" },
    { name: "Bessie Cooper",     role: "Chairman",          img: "assets/images/team/team-3.jpg" },
    { name: "Devon Lane",        role: "Vice Chairman",     img: "assets/images/team/team-4.jpg" },
    { name: "Brooklyn Simmons",  role: "Head of Marketing", img: "assets/images/team/team-5.jpg" },
    { name: "Robert Fox",        role: "Head of Finance",   img: "assets/images/team/team-6.jpg" },
    { name: "Darlene Robertson", role: "Managing Director", img: "assets/images/team/team-7.jpg" },
    { name: "Albert Flores",     role: "Chief Marketer",    img: "assets/images/team/team-8.jpg" },
]