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
  
  const data = useStaticQuery(graphql`query RecentPostsQuery {
    allWpPost(sort: {fields: date, order: DESC}, limit: 5) {
      edges {
        node {
          id
          date(fromNow: true)
          title
          uri
          author {
            node {
              name
            }
          }
        }
      }
    }
  }`)
  
  

  const recentPosts = 
        <ul>
          {data.allWpPost.edges.map(el => {
              return <li key={el.node.id}><Link to={el.node.uri}>{el.node.title}</Link> <br/>posted {el.node.date} by {el.node.author.node.name}</li>
          })}
        </ul>
  return (
    <div>
      <h2>Recent Posts</h2>
        {recentPosts}
    </div>
    // <div
    //   className="recent-posts-widget
    // "
    // >
    //   <ul className="sidebar-ul-container">
       
    //    <h2> <Link className="" to="/recent-posts">
    //       Recent Posts
    //     </Link>
    //     </h2>
    //   </ul>
    // </div>    
  )
}

export default RecentPostsWidget
