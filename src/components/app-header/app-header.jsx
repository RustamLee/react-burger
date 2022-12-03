import React from 'react';
import styles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';

export default function AppHeader() {

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.constructor} >
            <NavLink to={{ pathname: '/' }} className={styles.constructor}>
              <div className={`${styles.icon} ${styles.active}`}><BurgerIcon type="primary" /></div>
              <p className={`${styles.title} ${styles.active} text text_type_main-default ml-2`}>
                Конструктор
              </p>
            </NavLink>
          </div>
          <div className={styles.order}>
            <div className={styles.icon}><ListIcon type="secondary" /></div>
            <p className={`${styles.title} text text_type_main-default ml-2`}>
              Лента заказов
            </p>
          </div>
        </div>
        <div className={styles.logo}><Logo /></div>
        <NavLink to={{ pathname: '/login' }}>
        <div className={styles.personal}>
          <div className={styles.icon}><ProfileIcon type="secondary" /></div>
          <p className={`${styles.title} text text_type_main-default ml-2`}>
            Личный кабинет
          </p>
        </div>
        </NavLink>
      </nav>

    </header>
  )
}
