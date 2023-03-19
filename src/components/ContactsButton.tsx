import React from "react";

interface IContactsButtonProps {
  title: string
  action?: () => void
  width?: string
}

const ContactsButton = (props: IContactsButtonProps) => {

  return (
    <button
    // type="button"
      style={{ width: props.width }}
      onClick={props.action}
      className="contacts__button">
      {props.title}
    </button>
  )
}

export default ContactsButton