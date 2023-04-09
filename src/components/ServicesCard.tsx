import React from 'react'
import { servicesCard } from '../common/constants'
import Background from '../assets/images/backgrounds/contactsBackground.jpg'
import Arrow from '../assets/images/icons/blueLeftArrow.svg'

interface IServicesCardProps {
  cardId: number
  closeCard: () => void
}

const ServicesCard = (props: IServicesCardProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className='services-card'>
      {servicesCard.map((item, index) => {
        if (item.id === props.cardId) {
          return (
            <div key={index} className='services-card__content'>
              <div style={{ width: '50%' }}>
                {item.features.map((item, index) => {
                  return (
                    <div key={index} className='services-card__features'>
                      <p>{item}</p>
                    </div>
                  )
                })}
              </div>
              <div style={{ width: '30%' }} key={index}>
                {item.cost.map((item, index) => {
                  return (
                    <div className='services-card__cost' key={index}>
                      <p>{item}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        }
      })}
      <div onClick={props.closeCard} className="services-card__close-arrow">
        <img src={Arrow} alt="" />
      </div>
    </div>
  )
}

export default ServicesCard