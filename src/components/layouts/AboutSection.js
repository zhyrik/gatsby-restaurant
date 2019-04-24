import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

import Button from '../common/ButtonRed'

const About = () => (
  <StaticQuery
    query={graphql`
      {
        about: allContentfulAbout{
          edges{
            node{
              id
              title
              description{
                description
              }
              img{
                title
                fluid {
                  ...GatsbyContentfulFluid_tracedSVG
                }
              }
            }
          }
        }
      }
`}
    render={ data => {
      const about = data.about.edges[0].node
      console.log(about)
      return (
        <Section>
          <div className="container">
            <div className="row">
              <TextWrap className="col-lg ">
                <H4>{ about.title }</H4>
                <P>{ about.description.description }</P>
                <Button style={{margin: '50px 0'}}>read more</Button>
              </TextWrap>
              <div className="col-lg">
                <ImgWrap> 
                  
                    <Img fluid={ about.img.fluid }/>
                  
                </ImgWrap>
              </div>
            </div>
          </div>
        </Section>
    )}}
  />
)

const Section = styled.section`
  background: white;
  padding: 10vw 0;
`
const H4 = styled.h4`
  font-size: 33px;
  color: #201f1f;
  text-transform: capitalize;
`
const P = styled.p`
  font-size: 17px;
  color: #626262;
  line-height: 26px;
  margin: 4vw 0 ;
`
const ImgWrap = styled.div`
  width: 100%;
  margin: 4vw 0;
`
const TextWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media (max-width: 992px) {
    align-items: center;
  }
`

export default About