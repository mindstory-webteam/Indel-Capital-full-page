import Layout from '@/components/layout/Layout'
import Funfact from '@/components/sections/whoweare/Funfact'
import Milestone from '@/components/sections/whoweare/Milestone'
import MissionVision from '@/components/sections/whoweare/MissionVison'
import Profilecards from '@/components/sections/whoweare/Profilecards'
import Whoweare from '@/components/sections/whoweare/Whoweare.js'
import React from 'react'

const Home = () => {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Who we are" breadcrumbImg='assets/images/background/page-title.jpg'>
       <Whoweare/>
       {/* <Funfact/> */}
       {/* <Milestone/> */}
       <MissionVision/>
       <Profilecards/>
      </Layout>
    </>
  )
}

export default Home