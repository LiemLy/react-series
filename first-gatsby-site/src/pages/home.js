import * as React from "react"
import { graphql } from 'gatsby'

const HomePage = ({ data }) => {

    return (
        <div>
            Home Page
            <p>
                {data.site.siteMetadata.title}
            </p>
        </div>
    )
}

export default HomePage;

export const quey = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }

`