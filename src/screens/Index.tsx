import React from "react";
import NavBar from "../components/NavBar";
import Header from "../sections/Header";
import About from "../sections/About";
import Footer from "../sections/Footer";
import Progress from "../sections/Progress";
import Contacts from "../sections/Contacts";
import Services from "../sections/Services";

const Index = () => {

  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Progress />
      <Services />
      <Contacts />
      <Footer />
    </>
  )
}

export default Index