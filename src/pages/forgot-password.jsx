import React from 'react';
import { Redirect, useHistory, Link } from 'react-router-dom';
import styles from './forgot-password.module.css';
import { EmailInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { getNewPasswordThunk } from '../services/actions/recover-password';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export function ForgotPassword() {
    const { success } = useSelector(store => store.recover);
    const dispatch = useDispatch()
    const [value, setValue] = useState('');
    const handleClick = () => {
        dispatch(getNewPasswordThunk(value))
    }

    if (success) {

        return <Redirect to={{ pathname: '/reset-password' }} />
    }

    return (
        <div className={styles.login}>
            <h1 className={styles.header}>Восстановление пароля</h1>
            <form className={styles.form}>
                <EmailInput type='email' value='string' placeholder="Укажите e-mail" name='email' onChange={(e) => setValue(e.target.value)} />
            </form>
            <Button onClick={handleClick} htmlType="submit" type="primary" size="large">Восстановить</Button>
            <div className={styles.options}>
                <p className="text text_type_main-default text_color_inactive">Вспомнил пароль? &nbsp;
                    <Link to={{ pathname: '/login' }} className={styles.option}>Войти</Link></p>
            </div>
        </div>
    )
}
