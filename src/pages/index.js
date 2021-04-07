import React from "react"
import "./index.css"
import "../asset/css/mainPage.css"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <div className="page-main ">
        <StaticImage
          src="../asset/images/hamburger.jpg"
          alt="food"
          placeholder="blurred"
          layout="fullWidth"
          className="main-food"
        />
      </div>
    </Layout>
  )
}
