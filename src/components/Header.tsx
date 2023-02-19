import React from "react";
import Background from '../assets/images/backgrounds/headerBackground.png'
import Container from "./Container";
import HeaderButton from "./HeaderButton";

const Header = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="header">
      <Container>
        <div className="header__content">
          <p className="header__content__subtitle">Современная архитектура</p>
          <p className="header__content__title">воплоти свою мечту<br />в жизнь</p>
          <HeaderButton />
        </div>
      </Container>
    </div>
  )
}

export default Header 