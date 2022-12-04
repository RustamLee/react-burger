
import React from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import styles from './login.module.css';
import { EmailInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';

export function Login() {
    const [values, setValue] = useState({
        email: '',
        password: '',
    });
    const { email, password } = values;

    return (
        <div className={styles.login}>
            <h1 className={styles.header}>Вход</h1>
            <form className={styles.form}>
                <EmailInput
                    placeholder="E-mail"
                    type='email'
                    onChange={e => setValue({ ...values, email: e.target.value })}
                    value='value'
                    name={'email'}
                />
                <Input
                    placeholder="Пароль"
                    icon="HideIcon"
                    type='password'
                    onChange={e => setValue({ ...values, password: e.target.value })}
                    value='value'
                    name={'password'}
                />
            </form>
            <Button htmlType="submit" type="primary" size="large">Войти</Button>
            <div className={styles.options}>
                <p className="text text_type_main-default text_color_inactive">Вы - новый пользователь?&nbsp;
                    <Link className={styles.option} to={{ pathname: '/register' }}>
                        Зарегистрироваться
                    </Link></p>
                <p className="text text_type_main-default text_color_inactive">Забыли пароль?&nbsp;
                    <Link to={{ pathname: '/forgot-password' }} className={styles.option} >Восстановить пароль</Link></p>
            </div>
        </div>
    )
}
