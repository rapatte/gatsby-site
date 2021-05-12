import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const Navigation = () => {
    const data = useStaticQuery(graphql`query MyQuery {
        wpMenu(name: {eq: "main"}) {
          menuItems {
            nodes {
              url
              label
              id
            }
          }
        }
      }`)
      const menuItems = data.wpMenu.menuItems.nodes
    return (
        <nav>
            <ul>
                {menuItems.map(el => {
                    return <li key={el.id}><Link href={el.url}>{el.label}</Link></li>
                })}
            </ul>
        </nav>
    )
}

export default Navigation