import React, { useState } from "react";
import FeedbackCard from "./FeedbackCard";

const HeaderButton = () => {

  const [state, setState] = useState(false)

  const ButtonAction = () => {
    setState(true)
  }
  
  return (
    <>
      {state && <FeedbackCard />}
      <button
        onClick={ButtonAction}
        className="header__button">
        Заказать проект
      </button>
    </>
  )
}

export default HeaderButton