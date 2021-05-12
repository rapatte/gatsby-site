import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const CategoriesWidget = () => {
    const data = useStaticQuery(graphql`query CategoriesQuery {
        allWpCategory {
          edges {
            node {
              id
              name
              uri
              count
            }
          }
        }
      }`)
      const categories = 
        <ul> 
          {data.allWpCategory.edges.map(el => {
              return el.node.count !== null && <li key={el.node.id}><Link to={el.node.uri}>{el.node.name}</Link> ({el.node.count} posts)</li>
          })}
        </ul>

    return(
      <div>
        <h2>Categories</h2>
          {categories}
      </div>        
    )
}

export default CategoriesWidget