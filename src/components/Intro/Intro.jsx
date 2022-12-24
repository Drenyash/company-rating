import React from 'react'
import Button from '../../UI/Button/Button'
import style from './Intro.module.scss'

function Intro() {
  return (
    <section className={style.intro}>
      <h1 className={style.intro__title}>
        Рейтинг<br />
        компаний<br />
        <span>2022</span>
      </h1>
      <form action="#" className="intro__form">
        <Button >Отправить</Button>
      </form>
    </section>
  )
}

export default Intro