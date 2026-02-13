import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/one-page-home/Banner"
import Features from "@/components/sections/one-page-home/Features"
import About from "@/components/sections/one-page-home/About"
import Services from "@/components/sections/one-page-home/Services"
import Calculator from "@/components/sections/one-page-home/Calculator"
import Video from "@/components/sections/one-page-home/Video"
import Funfacts from "@/components/sections/one-page-home/Funfacts"
import App from "@/components/sections/one-page-home/App"
import Testimonial from "@/components/sections/one-page-home/Testimonial"
import News from "@/components/sections/one-page-home/News"
import Subscribe from "@/components/sections/one-page-home/Subscribe"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1}>
                <Banner />
                <Features />
                <About />
                <Services />
                <Calculator />
                <Video />
                <Funfacts />
                <App />
                <Testimonial />
                <News />
                <Subscribe />
            </Layout>
        </>
    )
}