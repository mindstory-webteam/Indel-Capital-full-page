import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home3/About"
import Banner from "@/components/sections/home3/Banner"
import Services from "@/components/sections/home3/Services"
import Card from "@/components/sections/home3/Card"
import Process from "@/components/sections/home3/Process"
import Funfact from "@/components/sections/home3/Funfact"
import Exchange from "@/components/sections/home3/Exchange"
import App from "@/components/sections/home3/App"
import News from "@/components/sections/home3/News"
import Testimonial from "@/components/sections/home3/Testimonial"
import Subscribe from "@/components/sections/home3/Subscribe"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <Banner />
                <Funfact />
                <About />
                <Process />
                <Services />
                <Card />
                <Exchange />
                <App />
                <Testimonial />
                <News />
                <Subscribe />
            </Layout>
        </>
    )
}