import React, { useState } from "react";

interface IHeaderButtonProps {
  action: () => void
}

const HeaderButton = (props: IHeaderButtonProps) => {

  return (
    <>
      <button
        onClick={props.action}
        className="header__button">
        Заказать проект
      </button>
    </>
  )
}

export default HeaderButton