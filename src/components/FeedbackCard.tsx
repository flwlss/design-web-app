import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import LeftBackground from '../assets/images/backgrounds/leftFormBackground.jpg'
import RightBackground from '../assets/images/backgrounds/rightFormBackground.jpg'
import ContactsButton from './ContactsButton';

const FeedbackCard = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Обязательное поле').min(2, 'Минимум 2 символа'),
      phone: Yup.string().required('Обязательное поле').min(2),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form
      className='feedbackCard'
      onSubmit={formik.handleSubmit}>
      <div
        style={{ backgroundImage: `url(${LeftBackground})` }}
        className='feedbackCard__left'>
        <p className='feedbackCard__left__title'>{`заказать\nобратный звонок`}</p>
        <ContactsButton
          action={formik.handleSubmit}
          title={'отправить'}
          width={'100%'} />
      </div>
      <div
        style={{ backgroundImage: `url(${RightBackground})` }}
        className='feedbackCard__right'>
        <div>
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
        <div>
          <label
            className='feedbackCard__right__label'
            htmlFor="phone">телефон</label>
          <input
            className='feedbackCard__right__input'
            id="phone"
            name="phone"
            placeholder='8(999)999-99-99'
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className='feedbackCard__error'>{formik.errors.phone}</div>
          ) : null}
        </div>
        <p
          className='feedbackCard__right__text'>
          {`мы вам перезвоним\nчерез 5 минут`}
        </p>
      </div>
    </form>
  )
}

export default FeedbackCard