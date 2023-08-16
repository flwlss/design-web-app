import React from "react";
import AboutCarousel from "../components/AboutCarousel";
import Container from "../components/Container";

const About = () => {
  return (
    <section
      id="about"
      style={{
        backgroundImage: `url('/images/backgrounds/aboutBackground.jpg')`,
      }}
      className="about"
    >
      <Container>
        <div className="about__wrapper">
          <div className="about__description">
            <p className="about__title">о нас</p>
            <p className="about__description__subtitle">
              Студия архитектуры и дизайна
            </p>
            <p className="about__description__text">{`Предлагаем самый широкий спектр услуг в сфере концепций и реализаций архитектурных и интерьерных решений. Наша команда сможет реализовать ваши самые смелые дизайнерские и архитектурные идеи, не только как эксклюзивный проект, но и воплотить его в жизнь.\n\nВнушительный опыт работы в области архитектуры и интерьера жилых и общественных помещений, позволяет нам с легкостью решать любые поставленные задачи в разных уголках мира и всегда быть в центре актуальных тенденций архитектуры и дизайнов интерьера. Мы создаём стильную, современную и запоминающуюся архитектуру и дизайн, в которых Вам будет комфортно жить и работать. Путем индивидуального подхода, мы выстраиваем крепкие и долгосрочные партнерские отношения с каждым нашим клиентом.`}</p>
          </div>
          <div className="about__slider">
            <AboutCarousel />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
