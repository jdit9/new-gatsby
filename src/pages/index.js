import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import styles from "../components/customstyles.css"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello</h1>
    <p>Welcome to my website. There is not much here yet, but here is a link to my etsy store!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <h2><a href="https://www.etsy.com/shop/jordanshobbymart">Etsy Store</a></h2>
  </Layout>
)

export default IndexPage
