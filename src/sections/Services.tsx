import React from "react";
import BackgroundLeft from '../assets/images/backgrounds/contactsBackground.png'
import BackgroundRight from '../assets/images/backgrounds/meetingBackground.png'
import { meeting, services } from "../common/utils";
import Arrow from '../assets/images/icons/arrow.svg'

const Services = () => {
  return (
    <section className="services-and-price">
      <div style={{ backgroundImage: `url(${BackgroundLeft})` }} className="services">
        <p className="services__title">услуги и цены</p>
        <div className="services__services-wrapper">
          {services.map((item, index) => {
            return (
              <div key={index} className="services__element">
                <p className="services__subtitle">{item.subtitle}</p>
                <p className="services__text">{item.text}</p>
                <div className="services__arrow">
                  <img src={Arrow} alt="" />
                </div>
                {item.cost.map((item, index) => {
                  return (
                    <div key={index}>
                      <p className="services__cost-mobile">{item}</p>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
      <div style={{ backgroundImage: `url(${BackgroundRight})` }} className="meeting">
        <p className="meeting__title">C чего начать с нами работу</p>
        <div className="meeting__opacity">
          {meeting.map((item, index) => {
            return (
              <div key={index} className="meeting__element">
                <p className="meeting__subtitle">{item.subtitle}</p>
                <p className="meeting__text">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services