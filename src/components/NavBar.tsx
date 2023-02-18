import React from "react";
import { juliaPhoneNumber } from "../common/utils";
import Container from "./Container";
import Logo from '../assets/images/logo.png'

const NavBar = () => {
  return (
    <nav className="navBar">
      <Container>
        <div className="navBar__wrapper">
          <div className="navBar__company">
            <img className="navBar__company__logo" src={Logo} alt="" />
            <p className="navBar__company__name">architecture<br />design</p>
          </div>
          <div className="navBar__items">
            <p className="navBar__items__btn">о нас</p>
            <p className="navBar__items__btn">портфолио</p>
            <p className="navBar__items__btn">услуги и цены</p>
            <p className="navBar__items__btn">контакты</p>
            <p style={{ cursor: 'default' }} className="navBar__items__btn">{juliaPhoneNumber}</p>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default NavBar