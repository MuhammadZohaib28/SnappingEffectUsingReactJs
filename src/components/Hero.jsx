import React from 'react'
import { styled } from 'styled-components'
import Navbar from './Navbar'

const Section = styled.div`
  height: 100vh;  
  width: 100vw;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Container = styled.div`
  height: 90vh;  
  width: 100vw;
  scroll-snap-align: center;
  // border: 2px solid yellow;
  width:80rem;
  display:flex;
  justify-content: space-between;
  align-items: center;
`

const Left = styled.div`
  height: 90vh;  
  width: 100vw;
  scroll-snap-align: center;
  border: 2px solid yellow;
  width:80rem;
  display:flex;
  justify-content: space-between;
  align-items: center;
`

const Right = styled.div`
  height: 90vh;  
  width: 100vw;
  scroll-snap-align: center;
  border: 2px solid yellow;
  width:80rem;
  display:flex;
  justify-content: space-between;
  align-items: center;
`

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left><h2>Think. Make. and Solve</h2></Left>
        <Right>RIGHT</Right>
      </Container>
    </Section>
  )
}

export default Hero