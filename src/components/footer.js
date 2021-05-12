import React from "react"
import Bio from './bio'

const footer = () => {
    return(
        <footer>
        <Bio />
        © {new Date().getFullYear()}, Built with ❤️
        {` `}
        And Pouet
        
      </footer>
    )
}

export default footer