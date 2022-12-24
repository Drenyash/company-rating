import React, {useState} from 'react'
import Navigation from '../Navigation/Navigation'
import styles from './Header.module.scss'
import Intro from '../Intro/Intro';

function Header() {
  const [navItems, setNavItems] = useState([
    {id: 1, text: 'О рейтинге', link: '/about'},
    {id: 2, text: 'Обратная связь', link: '/feedback'},
  ]);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__top}>
          <div className="logo">
            <h2>Лого</h2>
          </div>
          <Navigation items={navItems}/>
        </div>
        <Intro />
      </div>
    </header>
  )
}

export default Header