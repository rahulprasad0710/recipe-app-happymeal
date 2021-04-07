import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar/Navbar"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className=" page-layout container">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
