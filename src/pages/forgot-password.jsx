import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import styles from './forgot-password.module.css';
import { EmailInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

export function ForgotPassword() {

    return (
        <div className={styles.login}>
            <h1 className={styles.header}>Восстановление пароля</h1>
            <form className={styles.form}>
                <EmailInput placeholder="Укажите e-mail" />
            </form>
            <Button htmlType="submit" type="primary" size="large">Восстановить</Button>
            <div className={styles.options}>
                <p className="text text_type_main-default text_color_inactive">Вспомнил пароль? &nbsp;<a className={styles.option} href='URL'>Войти</a></p>
            </div>
        </div>
    )
}