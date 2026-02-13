import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home2/About"
import Banner from "@/components/sections/home2/Banner"
import Services from "@/components/sections/home2/Services"
import App from "@/components/sections/home2/App"
import Video from "@/components/sections/home2/Video"
import Funfacts from "@/components/sections/home2/Funfacts"
import Feature from "@/components/sections/home2/Feature"
import Card from "@/components/sections/home2/Card"
import News from "@/components/sections/home2/News"
import Subscribe from "@/components/sections/home2/Subscribe"
import Process from "@/components/sections/home2/Process"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <Banner />
                <Feature />
                <About />
                <Services />
                <Video />
                <Card />
                <Funfacts /> 
                <Process />
                <App />
                <News />
                <Subscribe />
            </Layout>
        </>
    )
}