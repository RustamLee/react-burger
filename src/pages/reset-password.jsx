
import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import styles from './reset-password.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { setNewPasswordThunk } from '../services/actions/reset-password';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function ResetPassword() {
    const dispatch = useDispatch()
    const { success } = useSelector(store => store.set);
    const history = useHistory();
    const [values, setValue] = useState({ password: '', code: '' })
    const { password,
        code } = values;

    function handleClick() {
     dispatch(setNewPasswordThunk(password, code));
    if (success) {
        history.push('/login')
    }
    }

    return (
        <div className={styles.login}>
            <h1 className={styles.header}>Восстановление пароля</h1>
            <form className={styles.form}>
                <Input placeholder="Введите новый пароль" type='password' icon="HideIcon" name='password'  value='value' onChange={e => setValue({ ...values, password: e.target.value })} />
                <Input placeholder="Введите код из письма" type='password' name='code' value='value' onChange={e => setValue({ ...values, code: e.target.value })} />
            </form>
            <Button onClick={handleClick} htmlType="submit" type="primary" size="large">Сохранить</Button>
            <div className={styles.options}>
                <p className="text text_type_main-default text_color_inactive">Вспомнили пароль? &nbsp;<a className={styles.option} href='URL'>Войти</a></p>
            </div>
        </div>
    )
}
