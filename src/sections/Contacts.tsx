import React, { useState } from "react";
import Container from "../components/Container";
import { companyContacts, employees } from "../common/constants";
import ContactsButton from "../components/ContactsButton";
import FeedbackCard from "../components/FeedbackCard";

const Contacts = () => {
  const [showCard, setShowCard] = useState(false);

  return (
    <>
      {showCard && (
        <FeedbackCard
          closeAction={() => {
            setShowCard(false);
          }}
        />
      )}
      <section
        id="contacts"
        style={{
          backgroundImage: `url('/images/backgrounds/contactsBackground.jpg')`,
        }}
        className="contacts"
      >
        <Container>
          <div>
            <p className="contacts__title">контакты</p>
            <div className="contacts__wrapper">
              <div className="contacts__info">
                {companyContacts.map((item, index) => {
                  return (
                    <div key={index} className="contacts__info-item">
                      <p className="contacts__info-item__title">{item.title}</p>
                      <p className="contacts__info-item__text">{item.text}</p>
                    </div>
                  );
                })}
              </div>
              <div className="contacts__numbers">
                {employees
                  .map((item, index) => {
                    return (
                      <div key={index} className="contacts__numbers-item">
                        <p className="contacts__numbers-item__phone">
                          {item.phone}
                        </p>
                        <p className="contacts__numbers-item__name">
                          {item.name}
                        </p>
                      </div>
                    );
                  })
                  .slice(0, 3)}
              </div>
            </div>
            <ContactsButton
              action={() => {
                setShowCard(true);
              }}
              title={"оставить заявку"}
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contacts;
