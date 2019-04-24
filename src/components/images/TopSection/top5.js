import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, children }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "Headers/header5.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1750) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
     render={data => {
       // Set ImageData.
       const imageData = data.desktop.childImageSharp.fluid
       return (
          <BackgroundImage Tag="section"
                            // style={{height: '90vh'}}
                           className={className}
                           fluid={imageData}
                           backgroundColor={`#040e18`}
          >
            { children }
          </BackgroundImage>
       )
     }
     }
    />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 100vh;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection