import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import RecentPostsWidget from "./RecentPostsWidget"
import CategoriesWidget from "./CategoriesWidget"
import TagsWidget from './TagsWidget'
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
        <TagsWidget />{" "}
        {/* <Link className="" to="/categories">
          Categories
        </Link> */}
        <CategoriesWidget />{" "}

      </ul>
    </aside>
  )
}

export default Sidebar
