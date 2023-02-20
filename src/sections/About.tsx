import React from 'react'
import Background from '../assets/images/backgrounds/aboutBackground.png'
import Container from '../components/Container'

const About = () => {
  return (
    <section
      style={{ backgroundImage: `url(${Background})` }}
      className="about">
      <Container>
        <div>
        </div>
      </Container>
    </section>
  )
}

export default About