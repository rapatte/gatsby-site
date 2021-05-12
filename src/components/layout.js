import React from "react"
import Header from './header'
import Footer from './footer'
import Sidebar from "./Sidebar"

const Layout = ({ isHomePage, children }) => {
  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <Header isHomePage={isHomePage}/>
      <main>{children}</main> 
      <Sidebar />
      <Footer />
    </div>
  )
}

export default Layout
