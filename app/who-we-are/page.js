import Layout from '@/components/layout/Layout'
import Testimonial from '@/components/sections/home1/Testimonial'
import React from 'react'

const Home = () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Who we are" breadcrumbImg='assets/images/background/page-title.jpg'>
        <Testimonial />
      </Layout>
    </>
  )
}

export default Home