import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
	background: #1F1F22;
	color: #cbcbcb;
	width: 100%;
	height: 1000px;
`
function footer(props) {
	return (
		<Footer>
			<div className="container">
				<div className="row"></div>
				<div className="row">
					<p className="col" style={{ textAlign: 'center'}}>© 2018 . Hotel. All rights .</p>
				</div>
			</div>
		</Footer>
	)
}

export default footer

