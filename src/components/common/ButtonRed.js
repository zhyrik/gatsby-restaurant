import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function ButtonRed({ children }) {
	return (
		<Button>
			{children}
		</Button>
	)
}

const Button = styled.div`
	box-sizing: border-box;
	padding: 12px 25px;
	font-size: 20px;
	text-transform: uppercase;
	color: white;
	line-height: 12px;
	background: #EA5656;
	box-shadow: 0px 5px 7px 0px rgba(92, 92, 92, 0.48);
	cursor: pointer;
	text-align: center;
	display: inline;
	transition: all 0.4s;
	border: 1px solid #EA5656;
	&:hover {
		color: #EA5656;
		background: white;
	}
	@media (max-width: 992px) {
    
		font-size: 15px;
  }
`

ButtonRed.propTypes = {
	children: PropTypes.node
}

export default ButtonRed

