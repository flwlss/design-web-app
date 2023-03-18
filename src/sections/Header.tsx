import React from "react";
import Background from '../assets/images/backgrounds/headerBackground.png'
import Container from "../components/Container";
import HeaderButton from "../components/HeaderButton";

const Header = () => {
  return (
    <header
      id="header"
      style={{ backgroundImage: `url(${Background})` }}
      className="header">
      <Container>
        <div className="header__content">
          <p className="header__content__subtitle">Современная архитектура</p>
          <p className="header__content__title">воплоти свою мечту<br />в жизнь</p>
          <HeaderButton />
        </div>
      </Container>
    </header>
  )
}

export default Header 