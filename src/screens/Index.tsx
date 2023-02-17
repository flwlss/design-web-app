import React from "react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../navigation/paths";

const Index = () => {

  const navigation = useNavigate()

  return (
    <div onClick={() => { navigation(PATHS.ABOUT) }}>
      INDEX
    </div>
  )
}

export default Index