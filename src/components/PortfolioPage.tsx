import React, { useState } from "react";
import PortfolioButton from "./PortfolioButton";

interface IPortfolioPageProps {
  title: string
  text: string
  leftImageSrc: string
  rightImageSrc: string
}

const PortfolioPage = (props: IPortfolioPageProps) => {
  return (
    <div className="portfolio-page">
      <div className="portfolio-page__opacity">
        <div className="portfolio-page__opacity__basics">
          <div className="portfolio-page__opacity__basics__line" />
          <p className="portfolio-page__opacity__basics__text">design basics</p>
          <div className="portfolio-page__opacity__basics__line" />
        </div>
        <p className="portfolio-page__opacity__title">{props.title}</p>
        <p className="portfolio-page__opacity__text">{props.text}</p>
        <PortfolioButton />
      </div>
      <div className="portfolio-page__left">
        <div>
          <img className="portfolio-page__left__img" src={props.leftImageSrc} alt="" />
        </div>
      </div>
      <div className="portfolio-page__right">
        <img className="portfolio-page__right__img" src={props.rightImageSrc} alt="" />
      </div>
    </div>
  )
}

export default PortfolioPage