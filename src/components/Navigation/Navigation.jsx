import React from 'react'
import style from './Navigation.module.scss'
import Button from '../../UI/Button/Button'

function Navigation({items}) {
  return (
    <ul className={style.navigation}>
      {items.map(element => 
        <li className="navigation__item" key={element.id}>
          <a className={style.navigation__link} href={element.link}>{element.text}</a>
        </li>
      )}
      <li className="navigation__item">
        <Button props={{className: 'button navigation__button'}}>Подать заявку</Button>
      </li>
    </ul>
  )
}

export default Navigation