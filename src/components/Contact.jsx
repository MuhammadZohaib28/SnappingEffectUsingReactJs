import React from 'react'
import { styled } from 'styled-components'

const Section = styled.div`
  height: 100vh;  
  width: 100vw;

  scroll-snap-align: center;
`

const Contact = () => {
  return (
    <Section>
        <h3>Contacts Section</h3>
    </Section>
  )
}

export default Contact