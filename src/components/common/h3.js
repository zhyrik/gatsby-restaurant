import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function h3({ children }) {
	return (
		<H3>{ children }</H3>
	)
}

const H3 = styled.h3`
	font-size: 44px;
	text-transform: capitalize;
	color: #201f1f;
	font-weight: 900;
	text-align: center;
	@media (max-width: 992px) {
		font-size: 30px;
	}
`

h3.propTypes = {
	children: PropTypes.node
}

export default h3

