import React from 'react';
import styles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';
import { useSelector } from '../../utils/types';

export default function AppHeader() {
  const { isLogged } = useSelector(state => state.login)
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.box} >
            <NavLink to={{ pathname: '/' }} className={styles.box}>
              <div className={`${styles.icon} ${styles.active} `}><BurgerIcon type="primary" /></div>
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
        <NavLink to={{ pathname: '/' }} className={styles.logo}><Logo /></NavLink>
        <NavLink to={isLogged ? { pathname: '/profile' } : { pathname: '/login' }}>
          <div className={styles.order}>
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
