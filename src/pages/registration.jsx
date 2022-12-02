
import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import styles from './registration.module.css';
import { EmailInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

export function Registration() {

    return (
        <div className={styles.login}>
            <h1 className={styles.header}>Регистрация</h1>
            <form className={styles.form}>
                <Input placeholder="Имя" />
                <EmailInput placeholder="E-mail" />
                <Input placeholder="Пароль" icon="HideIcon"/>
            </form>
            <Button htmlType="submit" type="primary" size="large">Зарегистрироваться</Button>
            <div className={styles.options}>
                <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы? &nbsp;<a className={styles.option} href='URL'>Войти</a></p>
            </div>
        </div>
    )
}