import React from "react";
import { useParams } from "react-router-dom";
import { PHOTO_URL, portfolioSquares } from "../common/constants";

const PortfolioItem = () => {

  const { id } = useParams();
  console.log('id', id);

  return (
    <div>
      {portfolioSquares.map((item, index) => {
        return (
          <div key={index}>
            {item.squares.map((item, index) => {
              if (item.name === id) {
                return (
                  <div key={index}>
                    {item.images?.map((item, index) => {
                      return (
                        <div className="portfolio-screen__images-wrapper" key={index}>
                          <img className="portfolio-screen__images" src={PHOTO_URL + item} alt="" />
                        </div>
                      )
                    })}
                  </div>
                )
              }
            })}
          </div>
        )
      })}
    </div>
  )
}

export default PortfolioItem