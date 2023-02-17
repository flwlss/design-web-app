import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {

  const navigation = useNavigate()

  return (
    <div onClick={() => { navigation(-1) }}>
      ABOUT
    </div>
  )
}

export default About