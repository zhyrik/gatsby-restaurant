import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

const query = graphql`
  query {
		placeholderImage: file(relativePath: { eq: "D.png" }) {
			childImageSharp {
				fixed(width: 35) {
					src
				}
			}
		}
	}
`
const render = data => (
	<Wrap>
		<Img 
			fixed={data.placeholderImage.childImageSharp.fixed}
			style={{ width: '35px', height: '30px'}}/>
	</Wrap>
)
const Wrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	&:after, &:before{
		margin: 15px 10px 0 10px;
		content: '';
		border-top: 1px solid grey;
		width: 100px;
	}
`

export default function D() {
	return (
		<StaticQuery 
			query={query}
			render={render}
		/>
	)
}
