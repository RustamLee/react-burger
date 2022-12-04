
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect, useHistory } from 'react-router-dom';
import styles from './profile.module.css';
import { EmailInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

export function Profile() {

    const [values, setValue] = useState({
        name: '',
        email: '',
        password: '',
    });
    const { name, email, password } = values;

    return (
    <div className={styles.profile}>
        <div>
        <nav className={styles.menu}>
            <NavLink  to={{ pathname: '/login' }} className={`${styles.menu} text text_type_main-medium text_color_inactive`}>Профиль</NavLink>
            <NavLink to={{ pathname: '/login' }} className={`${styles.menu} text text_type_main-medium text_color_inactive`}>История заказов</NavLink>
            <NavLink to={{ pathname: '/login' }} className={`${styles.menu} text text_type_main-medium text_color_inactive`}>Выход</NavLink>
        </nav>
        <p className={`${styles.subtitle} text text_type_main-small text_color_inactive`} >В этом разделе вы можете изменить свои персональные данные</p>
        </div>
        <section className={styles.edit}>
            <form className={styles.form}>
                <Input 
                placeholder="Имя"
                icon="EditIcon"
                type='text'
                value='value'
                name='name'
                onChange={e => setValue({ ...values, name: e.target.value })} />
                <EmailInput
                placeholder="Логин"
                icon="EditIcon"
                value='value'
                onChange={e => setValue({ ...values, email: e.target.value })} />
                <Input
                placeholder="Пароль"
                icon="HideIcon"
                type='password'
                onChange={e => setValue({ ...values, password: e.target.value })}
                value='value'
                name={'password'}
                />
            </form>
{/*             <Button htmlType="submit" type="primary" size="large">Сохранить</Button> */}
        </section>
    </div>
    )
}