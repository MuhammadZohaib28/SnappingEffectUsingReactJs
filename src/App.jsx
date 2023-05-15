import React from 'react'
import Hero from '../src/components/Hero.jsx'
import Who from '../src/components/Who.jsx'
import Works from './components/Works'
import Contact from './components/Contact'
import { styled } from 'styled-components'

const Container = styled.div`
  height: 100vh;  
  width: 100vw;
  color: White;
  font-size: 2rem;
  background: linear-gradient(68.2deg, rgb(7, 3, 98) -0.1%, rgb(179, 26, 132) 47.7%, rgb(239, 186, 83) 100.2%);
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar{
      display: none;
  }
`

const App = () => {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  )
}

export default App