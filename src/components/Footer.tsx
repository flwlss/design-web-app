import { format } from 'date-fns'
import React from 'react'
import Background from '../assets/images/backgrounds/footerBackground.png'
import Container from './Container'
import Logo from '../assets/images/logo.png'
import Whatsapp from '../assets/images/icons/whatsapp.svg'
import Telegram from '../assets/images/icons/telegram.svg'

const Footer = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="footer">
      <Container>
        <div className='footer__wrapper'>
          <div className='footer__rights'>
            <img className='footer__rights__logo' src={Logo} alt="" />
            <p className='footer__rights__text'>{`© ${format(new Date(), 'yyyy')} `}
              ARCHITECTURE DESIGN STUDIO<br />
              Все права защищены</p>
          </div>
          <div className='footer__socials'>
            <a href="https://wa.me/+79234792799" target="blank">
              <img className="footer__socials__svg" src={Whatsapp} alt="" />
            </a>
            {/* <a href="https://www.instagram.com/architecturedesign__studio/" target="blank">
              <img className="footer__socials__intagram" src={Telegram} alt="" />
            </a> */}
            <a href="https://t.me/fooyzi" target="blank">
              <img style={{ marginLeft: '15px' }} className="footer__socials__svg" src={Telegram} alt="" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer