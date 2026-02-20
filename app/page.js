import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import Calculator from "@/components/sections/home1/Calculator"
import Video from "@/components/sections/home1/Video"
import Features from "@/components/sections/home1/Features"
import Funfacts from "@/components/sections/home1/Funfacts"
import App from "@/components/sections/home1/App"
import News from "@/components/sections/home1/News"
import Testimonial from "@/components/sections/home1/Testimonial"
import Subscribe from "@/components/sections/home1/Subscribe"
import WhatWeDo from "@/components/sections/home1/WhatWeDo"
import InvestmentPhilosophy from "@/components/sections/home1/InvestmentPhilosophy"
import FeaturedStrategies from "@/components/sections/home1/FeaturedStrategies"
import Insights from "@/components/sections/home1/Insights"
import PortfolioHighlights from "@/components/sections/home1/PortfolioHighlights"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Features />
                <About />
                <WhatWeDo/>
                <FeaturedStrategies/>
                <PortfolioHighlights />
                <InvestmentPhilosophy/>
                <Insights/>
                <Testimonial />
                {/* <Calculator /> */}
                {/* <Video /> */}
                {/* <Funfacts /> */}
                {/* <App /> */}
                {/* <News /> */}
                <Subscribe />
            </Layout>
        </>
    )
}