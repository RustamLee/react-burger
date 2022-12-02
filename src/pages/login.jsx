
import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import styles from './login.module.css';
import { EmailInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

export function Login() {

    return (
        <div className={styles.login}>
            <h1 className={styles.header}>Вход</h1>
            <form className={styles.form}>
                <EmailInput placeholder="E-mail" />
                <Input placeholder="Пароль" icon="HideIcon"/>
            </form>
            <Button htmlType="submit" type="primary" size="large">Войти</Button>
            <div className={styles.options}>
                <p className="text text_type_main-default text_color_inactive">Вы - новый пользователь?&nbsp;<a className={styles.option} href='URL'>Зарегистрироваться</a></p>
                <p className="text text_type_main-default text_color_inactive">Забыли пароль?&nbsp;<a className={styles.option} href='URL'>Восстановить пароль</a></p>
            </div>
        </div>
    )
}