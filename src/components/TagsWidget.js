import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const TagsWidget = props => {
  const data = useStaticQuery(graphql`query TagsQuery {
    allWpTag {
      edges {
        node {
          id
          uri
          name
          count
        }
      }
    }
  }`)
  const tags = 
        <ul>
          {data.allWpTag.edges.map(el => {
              return el.node.count !== null && <li key={el.node.id}><Link to={el.node.uri}>{el.node.name}</Link> ({el.node.count} posts)</li>
          })}
        </ul>
  return (
    <div>
        <h2>Tags</h2>
          {tags}
      </div>
  )
}

export default TagsWidget