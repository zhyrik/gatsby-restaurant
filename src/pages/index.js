import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TopSection from '../components/layouts/TopSection'
import About from '../components/layouts/AboutSection'
import Popular from '../components/layouts/PopularDiners'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <TopSection/>
    <About/>
    <Popular/>
  </Layout>
)

export default IndexPage
