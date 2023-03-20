import { format } from 'date-fns'
import React from 'react'
import Background from '../assets/images/backgrounds/footerBackground.png'
import Container from '../components/Container'
import Logo from '../assets/images/logo.png'
import { socials } from '../common/constants'

const Footer = () => {
  return (
    <footer
      style={{ backgroundImage: `url(${Background})` }}
      className="footer">
      <Container>
        <div className='footer__wrapper'>
          <div className='footer__rights'>
            <img className='footer__rights__logo' src={Logo} alt="" />
            <p className='footer__rights__text'>{`© ${format(new Date(), 'yyyy')} `}
              {`ARCHITECTURE DESIGN STUDIO\nВсе права защищены`}</p>
          </div>
          <div className='footer__socials'>
            {socials.map((item, index) => {
              return (
                <a className='footer__socials__svgWrapper' key={index} href={item.href} target="blank">
                  <img className="footer__socials__svg" src={item.svgSrc} alt="" />
                </a>
              )
            })}
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer