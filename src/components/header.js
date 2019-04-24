import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import Logo from "./images/Logo"

const Head = styled.header`
  background: rgba(0, 0, 20, 0.4);
  opacity: 1;
  position: fixed;
  width: 100%;
  z-index: 100;
`
const LinkContainer = styled.div`
  align-self: stretch;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  flex-wrap: wrap;
  color: red;
  margin: 0 -15px;
`
const StyledLink = styled(Link)`
  padding: 20px 15px;
  color: #aaa;
  text-transform: uppercase;
  font-size: 15px;
  transition: 0.3s;
  &:hover{
    background: #EB4B4B;
    color: #fff;
    text-decoration: none;
  }
`

const Header = () => (
  <Head>
    <div className="container">
      <div className="row justify-content-between">
        <Link to="/" style={{ width: '110px '}}><Logo/></Link>
        <LinkContainer className="col-8" >
          <StyledLink to="/" >home</StyledLink>
          <StyledLink to="/" >about</StyledLink>
          <StyledLink to="/" >galary</StyledLink>
          <StyledLink to="/" >blog</StyledLink>
          <StyledLink to="/" >contact</StyledLink>
        </LinkContainer>
      </div>
    </div>
  </Head>
)

export default Header
