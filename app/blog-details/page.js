import Layout from "@/components/layout/Layout"
import Blogs from "@/components/sections/blogs/blogs"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Details" breadcrumbImg='assets/images/background/page-title.jpg' >
               <Blogs/>
            </Layout>
        </>
    )
}