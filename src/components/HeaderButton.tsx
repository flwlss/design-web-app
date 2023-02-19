import React from "react";

const HeaderButton = () => {

  const ButtonAction = () => {
    alert(true)
  }

  return (
    <button
      onClick={ButtonAction}
      className="header__button">
      Заказать проект
    </button>
  )
}

export default HeaderButton