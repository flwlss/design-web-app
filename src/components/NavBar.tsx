import React, { useEffect, useState } from "react";
import Container from "./Container";
import { scroller } from "react-scroll";
import { employees } from "../common/constants";

const NavBar = () => {

  const [sectionId, setSectionId] = useState('')

  window.onscroll = function () { scrollFunction() };
  function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      (document.getElementById("navBar") as HTMLElement).style.cssText = `background-color: white; transition: 0.5s`
    } else {
      (document.getElementById("navBar") as HTMLElement).style.cssText = `background-color: ; transition: 0.5s`
    }
  }

  const toggleBurger = () => {
    (document.getElementById('menu-toggle') as HTMLInputElement).checked = false;
  }

  useEffect(() => {
    scroller.scrollTo(sectionId, {
      offset: -79,
      smooth: true,
    })
    toggleBurger()
    setSectionId('')
  }, [sectionId])

  return (
    <nav id="navBar" className="navBar">
      <Container>
        <div className="navBar__wrapper">
          <div onClick={() => { setSectionId('header') }} className="navBar__company">
            <img className="navBar__company__logo" src='/images/logo.png' alt="" />
            <p className="navBar__company__name">{`architecture\ndesign`}</p>
          </div>
          <div className="navBar__items">
            <p onClick={() => { setSectionId('about') }} className="navBar__items__btn">о нас</p>
            <p onClick={() => { setSectionId('portfolio') }} className="navBar__items__btn">портфолио</p>
            <p onClick={() => { setSectionId('services') }} className="navBar__items__btn">услуги и цены</p>
            <p onClick={() => { setSectionId('contacts') }} className="navBar__items__btn">контакты</p>
            <p className="navBar__items__phone">{employees[0].phone}</p>
          </div>

          <div className="burger-menu">
            <input id="menu-toggle" type="checkbox" />
            <label className="menu-btn" htmlFor="menu-toggle">
              <span />
            </label>
            <ul className="menubox">
              <div>
                <p onClick={() => { setSectionId('about') }} className="burger-menu__item">о нас</p>
                <p onClick={() => { setSectionId('portfolio') }} className="burger-menu__item">портфолио</p>
                <p onClick={() => { setSectionId('services') }} className="burger-menu__item">услуги и цены</p>
                <p onClick={() => { setSectionId('contacts') }} className="burger-menu__item">контакты</p>
                <p className="burger-menu__phone">{employees[0].phone}</p>
              </div>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default NavBar