import React, { useState } from "react";
import Container from "../components/Container";
import PortfolioPage from "../components/PortfolioPage";

const Portfolio = () => {
  const [activePage, setActivePage] = useState("design");

  // window.onscroll = function () { showPortfolio() };
  // function showPortfolio() {
  //   if (document.body.offsetWidth < 1024 || document.documentElement.offsetWidth < 1024) {
  //     setActivePage('all')
  //   } else {
  //     setActivePage('design')
  //   }
  // }

  return (
    <section
      id="portfolio"
      style={{
        backgroundImage: `url('/images/backgrounds/portfolioBackground.jpg')`,
      }}
      className="portfolio"
    >
      <Container>
        <div className="portfolio__pages">
          <p
            onClick={() => {
              setActivePage("design");
            }}
            className="portfolio__pages__title"
          >
            дизайн интерьера
          </p>
          <div className="portfolio__pages__line" />
          <p
            onClick={() => {
              setActivePage("planning");
            }}
            className="portfolio__pages__title"
          >
            {`архитектурное\nпроектирование`}
          </p>
          <div className="portfolio__pages__line" />
          <p
            onClick={() => {
              setActivePage("fitodesign");
            }}
            className="portfolio__pages__title"
          >
            фитодизайн
          </p>
        </div>
      </Container>
      {(activePage === "design" || activePage === "all") && (
        <PortfolioPage
          route="design"
          title={"Дизайн интерьера"}
          text={
            "Современный дизайн интерьера — это решения задач бюджета, функциональности, красоты и многого другого. В создании дизайна интерьера мы используем аналитический подход, он позволяет нам проектировать, как частное жилье, так и офисы, кафе, рестораны, бары, галереи, музеи и т. д. Мы отталкиваемся от пространства помещения и тех задач, которые перед нами ставит клиент. Думаем о том, как рационально использовать бюджет на реализацию и создать уникальный дизайн под конкретную задачу."
          }
          leftImageSrc={"/images/portfolio/designLeft.png"}
          rightImageSrc={"/images/portfolio/designRight.png"}
        />
      )}
      {(activePage === "planning" || activePage === "all") && (
        <PortfolioPage
          route="planning"
          title={"Архитектурное проектирование"}
          text={
            "Команда ARCHITECTURE DESIGN COMPANY любит архитектуру любого размера и назначения: от частных домов до административных, общественных зданий и торговых центров, от жилых кварталов до малых архитектурных форм и благоустройств. Создавая архитектуру, мы делаем не просто проект, мы думаем о сценариях жизни человека, который там будет жить, работать, отдыхать и учиться. Наша работа — это многослойный процесс, который на каждой стадии уточняется и детализируется. Мы ведем путь от общего к частому своим аналитическим подходом и методом проектирования."
          }
          leftImageSrc={"/images/portfolio/planningLeft.png"}
          rightImageSrc={"/images/portfolio/planningRight.png"}
        />
      )}
      {(activePage === "fitodesign" || activePage === "all") && (
        <PortfolioPage
          route="fitodesign"
          title={"Фитодизайн"}
          text={
            "Фитодизайн – новое направление в дизайне, для реализации которого используются живые или стабилизированные растения. Композиции из лиственных или цветущих растений способны преобразить любое пространство и сделать его более уютным и располагающим. Натуральные растения придают интерьеру свежесть, расставляют нужные акценты, способны скрыть недостатки и подчеркнуть достоинства помещения. Плодотворно сказываются на общем состоянии человека, его работоспособности и ощущении комфорта."
          }
          leftImageSrc={"/images/portfolio/fitodesignLeft.png"}
          rightImageSrc={"/images/portfolio/fitodesignRight.png"}
        />
      )}
    </section>
  );
};

export default Portfolio;
