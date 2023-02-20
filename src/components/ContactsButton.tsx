import React from "react";

const ContactsButton = () => {

  const buttonAction = () => {
    alert('click')
  }

  return (
    <button
      onClick={buttonAction}
      className="contacts__button">
      оставить заявку
    </button>
  )
}

export default ContactsButton