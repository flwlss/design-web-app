import React from 'react'
import Container from '../components/Container'
import Background from '../assets/images/backgrounds/contactsBackground.png'
import { andreyPhoneNumber, juliaPhoneNumber, nikitaPhoneNumber } from '../common/constants'
import ContactsButton from '../components/ContactsButton'

const Contacts = () => {
  return (
    <section style={{ backgroundImage: `url(${Background})` }} className='contacts'>
      <Container>
        <div>
          <p className='contacts__title'>контакты</p>
          <div className='contacts__wrapper'>
            <div className='contacts__info'>
              <div className='contacts__info-item'>
                <p className='contacts__info-item__title'>часы<br />работы:</p>
                <p className='contacts__info-item__text'>пн-пт: 10-19<br />
                  сб-вc: выходной<br />
                  (по договоренности)</p>
              </div>
              <div className='contacts__info-item'>
                <p className='contacts__info-item__title'>почта:</p>
                <p className='contacts__info-item__text'>architecturedesign@mail.ru</p>
              </div>
            </div>
            <div className='contacts__numbers'>
              <div className='contacts__numbers-item'>
                <p className='contacts__numbers-item__phone'>{juliaPhoneNumber}</p>
                <p className='contacts__numbers-item__name'>Юлия Кошкина</p>
              </div>
              <div className='contacts__numbers-item'>
                <p className='contacts__numbers-item__phone'>{andreyPhoneNumber}</p>
                <p className='contacts__numbers-item__name'>Андрей Витомский</p>
              </div>
              <div className='contacts__numbers-item'>
                <p className='contacts__numbers-item__phone'>{nikitaPhoneNumber}</p>
                <p className='contacts__numbers-item__name'>Никита Жуков</p>
              </div>
            </div>
          </div>
          <ContactsButton action={() =>{alert(true)}} title={'оставить заявку'}/>
        </div>
      </Container>
    </section>
  )
}

export default Contacts