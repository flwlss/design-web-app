import { useFormik } from "formik";
import React, { useEffect } from "react";
import LeftBackground from '../assets/images/backgrounds/leftFormBackground.jpg'
import RightBackground from '../assets/images/backgrounds/rightFormBackground.jpg'
import ContactsButton from "./ContactsButton";
import * as Yup from 'yup';
import IMask from 'imask';

interface IFeedbackCardProps {
  closeAction: () => void
}

const FeedbackCard = (props: IFeedbackCardProps) => {

  useEffect(() => {
    IMask(
      document.getElementById('phone') as HTMLInputElement, {
      mask: '+7(000)000-00-00',
    });
  }, [])

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '+7',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Обязательное поле').min(2, 'Минимум 2 символа'),
      phone: Yup.string().min(16, 'Неверно введен номер')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="feedbackCard">
      <div
        onClick={props.closeAction}
        style={{ backgroundImage: `url(${LeftBackground})` }}
        className="feedbackCard__closeCard" />
      <div
        style={{ backgroundImage: `url(${LeftBackground})` }}
        className="feedbackCard__left">
        <p className="feedbackCard__left__title">{`заказать\nобратный звонок`}</p>
        <ContactsButton
          width="100%"
          title="Отправить" />
      </div>
      <div
        style={{ backgroundImage: `url(${RightBackground})` }}
        className="feedbackCard__right">
        <div className="feedbackCard__right__inputWrapper">
          <label
            className='feedbackCard__right__label'
            htmlFor="name">Ваше имя</label>
          <input
            className='feedbackCard__right__input'
            id="name"
            name="name"
            placeholder='Иван'
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className='feedbackCard__error'>{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="feedbackCard__right__inputWrapper">
          <label
            className='feedbackCard__right__label'
            htmlFor="phone">Телефон</label>
          <input
            className='feedbackCard__right__input'
            id="phone"
            name="phone"
            placeholder='+7(000)000-00-00'
            type="tel"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className='feedbackCard__error'>{formik.errors.phone}</div>
          ) : null}
        </div>
        <p className='feedbackCard__right__text'>{`мы вам перезвоним\nчерез 5 минут`}</p>
        <div className='feedbackCard__secondButton'>
          <ContactsButton
            width="100%"
            title="Отправить" />
        </div>
      </div>
    </form>
  )
}

export default FeedbackCard