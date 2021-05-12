import React from "react"
import Header from './header'
import Footer from './footer'
import Sidebar from "./Sidebar"

const Layout = ({ isHomePage, children }) => {
  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <Header isHomePage={isHomePage}/>      
      <div className="main-sidebar-wrapper" style={{display:"flex"}}>
        <main className="homepage-main">{children}</main> 
        <Sidebar />
      </div> 
      <Footer />
    </div>
  )
}

export default Layout
