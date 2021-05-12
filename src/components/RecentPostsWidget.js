import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const RecentPostsWidget = props => {

  // req for recent posts
  // then map them


  // const getRecentPostsQuery = graphql(`
  // query getRecentPosts {
  //   allWpPost(
  //     sort: {order: DESC, fields: author___node___avatar___default}
  //     limit: 10
  //   ) {
  //     edges {
  //       node {
  //         title
  //         link
  //         date
  //         excerpt
  //         categories {
  //           nodes {
  //             name
  //             link
  //           }
  //         }
  //         uri
  //       }
  //     }
  //   }
  // }`)

  // query getRecentPosts {
  //   allWpPost(
  //     sort: {order: DESC, fields: author___node___avatar___default}
  //     limit: 10
  //   ) {
  //     edges {
  //       node {
  //         title
  //         link
  //         date
  //         excerpt
  //         categories {
  //           nodes {
  //             name
  //             link
  //           }
  //         }
  //         uri
  //       }
  //     }
  //   }
  // }
  


  return (
    <div
      className="recent-posts-widget
    "
    >
      <ul className="sidebar-ul-container">
       
       <h2> <Link className="" to="/recent-posts">
          Recent Posts
        </Link>
        </h2>
      </ul>
    </div>
  )
}

export default RecentPostsWidget
