import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { employees } from '../common/constants';

const AboutCarousel = () => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      infiniteLoop>
      {employees.map((item, index) => {
        return (
          <div key={index}>
            <div className="about__slider__photo-wrapper">
              <img className="about__slider__photo" src={item.imageSrc} />
            </div>
            <p className="about__slider__name">{item.name}</p>
            <p className="about__slider__post">{item.post}</p>
            <p className="about__slider__description">{item.description}</p>
          </div>
        )
      })}
    </Carousel>
  )
}

export default AboutCarousel