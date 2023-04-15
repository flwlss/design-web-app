import { format } from 'date-fns'
import React from 'react'
import Container from '../components/Container'
import { socials } from '../common/constants'

const Footer = () => {
  return (
    <footer
      style={{ backgroundImage: `url('/images/backgrounds/footerBackground.jpg')` }}
      className="footer">
      <Container>
        <div className='footer__wrapper'>
          <div className='footer__rights'>
            <img className='footer__rights__logo' src='/images/logo.png' alt="" />
            <p className='footer__rights__text'>{`© ${format(new Date(), 'yyyy')} `}
              {`ARCHITECTURE DESIGN\nВсе права защищены`}</p>
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