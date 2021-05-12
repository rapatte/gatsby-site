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
            }
          }
        }
      }`)
      console.log(data.allWpCategory.edges);
      const categories = data.allWpCategory.edges.map(el => {
          return <li>{el.node.name}</li>
      })
    return(
      <div>
        <h2>Categories</h2>
        <ul>
          {categories}
        </ul>
      </div>        
    )
}

export default CategoriesWidget