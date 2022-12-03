
import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import styles from './registration.module.css';
import { EmailInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { createUserThunk } from '../services/actions/create-user'
import { useDispatch } from 'react-redux';

export function Registration() {
    const dispatch = useDispatch()

    const [values, setValue] = useState({
        email: '',
        password: '',
        name: ''
    })
    const { email,
        password,
        name } = values;

    function handleClick() {
        dispatch(createUserThunk(email,
            password,
            name))
    }


    return (
        <div className={styles.login}>
            <h1 className={styles.header}>Регистрация</h1>
            <form className={styles.form}>
                <Input placeholder="Имя" onChange={e => setValue({ ...values, name: e.target.value })} />
                <EmailInput placeholder="E-mail" onChange={e => setValue({ ...values, email: e.target.value })} />
                <Input placeholder="Пароль" icon="HideIcon" onChange={e => setValue({ ...values, password: e.target.value })} />
            </form>
            <Button onClick={handleClick} htmlType="submit" type="primary" size="large">Зарегистрироваться</Button>
            <div className={styles.options}>
                <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы? &nbsp;<a className={styles.option} href='URL'>Войти</a></p>
            </div>
        </div>
    )
}
