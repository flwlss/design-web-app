import React, { useState } from "react";
import Container from "../components/Container";
import FeedbackCard from "../components/FeedbackCard";
import HeaderButton from "../components/HeaderButton";

const Header = () => {
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
      <header
        id="header"
        style={{
          backgroundImage: `url('/images/backgrounds/headerBackground.jpg')`,
        }}
        className="header"
      >
        <Container>
          <div className="header__content">
            <p className="header__content__subtitle">Современная архитектура</p>
            <p className="header__content__title">{`воплоти свою мечту\nв жизнь`}</p>
            <HeaderButton
              action={() => {
                setShowCard(true);
              }}
            />
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
