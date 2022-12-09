
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './login.module.css';
import { EmailInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { loginUserThunk } from '../services/actions/login-user';
import { useDispatch, useSelector } from 'react-redux';

export function Login() {
    const history = useHistory();
    const { isLogged } = useSelector(state => state.login)
    const dispatch = useDispatch();
    const [values, setValue] = useState({
        email: '',
        password: '',
    });
    const { email, password } = values;

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email,
            password)
        dispatch(loginUserThunk(email, password))
    }
    React.useEffect(() => {
        if (isLogged) {
            history.push('/')
        }
    })

    return (
        <div className={styles.login}>
            <h1 className={styles.header}>Вход</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <EmailInput
                    placeholder="E-mail"
                    type='email'
                    onChange={e => setValue({ ...values, email: e.target.value })}
                    value={email}
                    name={'email'}
                />
                <Input
                    placeholder="Пароль"
                    icon="HideIcon"
                    type='password'
                    onChange={e => setValue({ ...values, password: e.target.value })}
                    value={password}
                    name={'password'}
                />
            <Button htmlType="submit" type="primary" size="large">Войти</Button>
            </form>
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
