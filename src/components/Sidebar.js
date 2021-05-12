import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import RecentPostsWidget from "./RecentPostsWidget"
import PostsWidget from "./PostsWidget"
import CategoriesWidget from "./CategoriesWidget"
// import CategoriesWidget from "./"

const Sidebar = props => {
  //   const data = useStaticQuery(graphql`
  //     query LayoutQuery {
  //       wp {
  //         generalSettings {
  //           title
  //           description
  //         }
  //       }
  //     }
  //   `)
  //   const title = data.wp.generalSettings.title
  //
  return (
    <aside
      className="sidebar
    "
    >
      <ul className="sidebar-ul-container">
        {/* <Link className="" to="/recent-posts">
          Recent Posts
        </Link> */}
        <RecentPostsWidget />{" "}
        {/* <Link className="" to="/posts">
          Posts{" "}
        </Link> */}
        <PostsWidget />{" "}
        {/* <Link className="" to="/categories">
          Categories
        </Link> */}
        <CategoriesWidget />{" "}

      </ul>
    </aside>
  )
}

export default Sidebar
