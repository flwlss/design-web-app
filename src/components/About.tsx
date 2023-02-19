import React from 'react'
import Background from '../assets/images/aboutBackground.png'
import Container from './Container'

const About = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="about">
      <Container>
        <div>
        </div>
      </Container>
    </div>
  )
}

export default About