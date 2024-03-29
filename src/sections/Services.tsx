import React, { useState } from "react";
import { meeting, services } from "../common/constants";
import ServicesCard from "../components/ServicesCard";

const Services = () => {
  const [cardId, setCardId] = useState(0);
  const [showCard, setShowCard] = useState(false);

  return (
    <>
      {showCard && (
        <ServicesCard
          closeCard={() => {
            setShowCard(false);
          }}
          cardId={cardId}
        />
      )}
      <section id="services" className="services-and-price">
        <div
          style={{
            backgroundImage: `url('/images/backgrounds/contactsBackground.jpg')`,
          }}
          className="services"
        >
          <p className="services__title">услуги и цены</p>
          <div className="services__services-wrapper">
            {services.map((item, index) => {
              return (
                <div key={index} className="services__element">
                  <p className="services__subtitle">{item.subtitle}</p>
                  <p className="services__text">{item.text}</p>
                  <div
                    onClick={() => {
                      setCardId(item.id);
                      setShowCard(true);
                    }}
                    className="services__arrow"
                  >
                    <img src="/images/icons/blueRightArrow.svg" alt="" />
                  </div>
                  {item.cost.map((item, index) => {
                    return (
                      <div key={index}>
                        <p className="services__cost-mobile">{item}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url('/images/backgrounds/meetingBackground.jpg')`,
          }}
          className="meeting"
        >
          <p className="meeting__title">C чего начать с нами работу</p>
          <div className="meeting__opacity">
            {meeting.map((item, index) => {
              return (
                <div key={index} className="meeting__element">
                  <p className="meeting__subtitle">{item.subtitle}</p>
                  <p className="meeting__text">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
