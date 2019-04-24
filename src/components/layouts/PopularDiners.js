import React from 'react'
import styled from 'styled-components'

import H3 from '../common/h3'
import D from '../common/D'
import Stepper from '../common/Stepper'

function PopularDiners() {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <Wrap className="col" >
            <H3>Our Popular Dishes</H3>
            <D/>
            <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor cididunt ut labore et dolore magna aliqua. Ut enim ad minim nostrud exercitation ullamco laboris nisi</P>
            <Stepper>
              <h1>kfjdslkf</h1>
              <h1>df</h1>
              <h1>dfsf</h1>
            </Stepper>
          </Wrap>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  padding: 2vw 0;
  background: #EFEEEE;
`
const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const P = styled.p`
  font-size: 17px;
  color: #969696;
  text-align: center;
  max-width: 600px;
  line-height: 22px;
`

export default PopularDiners

