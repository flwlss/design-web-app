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
            <p className="navBar__items__phone">{juliaPhoneNumber}</p>
          </div>

          <div className="burger-menu">
            <input id="menu-toggle" type="checkbox" />
            <label className="menu-btn" htmlFor="menu-toggle">
              <span />
            </label>
            <ul className="menubox">
              <div>
                <p className="burger-menu__item">о нас</p>
                <p className="burger-menu__item">портфолио</p>
                <p className="burger-menu__item">услуги и цены</p>
                <p className="burger-menu__item">контакты</p>
                <p className="burger-menu__phone">{juliaPhoneNumber}</p>
              </div>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default NavBar