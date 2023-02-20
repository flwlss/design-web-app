import React from 'react'
import { progress } from '../common/utils'
import Container from '../components/Container'

const Progress = () => {
  return (
    <section className='progress'>
      <Container>
        <div className='progress__wrapper'>
          {progress.map((item, index) => {
            return (
              <div key={index} className='progress__item'>
                <p className='progress__item__title'>{item.title}</p>
                <p className='progress__item__text'>{item.text}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Progress