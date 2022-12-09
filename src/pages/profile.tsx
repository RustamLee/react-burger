
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './profile.module.css';
import { EmailInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { logoutUserThunk } from '../services/actions/login-user';
import { useDispatch, useSelector } from '../utils/types'
import { getUserInfoThunk, patchUserInfoThunk } from '../services/actions/user-info';

export function Profile() {
    const { userEmail, userName } = useSelector(state => state.userInfo.user)
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getUserInfoThunk());
        setValue({
            name: userName,
            email: userEmail,
            password: '',
        })
    }, [dispatch, userEmail, userName])

    const [values, setValue] = useState({
        name: userName,
        email: userEmail,
        password: '',
    });
    const { name, email, password } = values;
    const handleCansel = () => {
        setValue({
            name: userName,
            email: userEmail,
            password: ''
        })

    }
    const handleSave = () => {
        dispatch(patchUserInfoThunk(values))
    }

    const handleClick = () => {
        dispatch(logoutUserThunk())
    }

    return (
        <div className={styles.profile}>
            <div>
                <nav className={styles.menu}>
                    <NavLink to={{ pathname: '/profile' }}
                        className={`${styles.menu} text text_type_main-medium text_color_inactive`}>Профиль</NavLink>
                    <NavLink to={{ pathname: '/profile/orders' }}
                        className={`${styles.menu} text text_type_main-medium text_color_inactive`}>История заказов</NavLink>
                    <NavLink to={{ pathname: '/' }} onClick={handleClick}
                        className={`${styles.menu} text text_type_main-medium text_color_inactive`}>Выход</NavLink>
                </nav>
                <p className={`${styles.subtitle} text text_type_main-small text_color_inactive`} >В этом разделе вы можете изменить свои персональные данные</p>
            </div>
            <section>
                <form className={styles.form}>
                    <Input
                        placeholder="Имя"
                        icon="EditIcon"
                        type='text'
                        value={name}
                        name='name'
                        onChange={e => setValue({ ...values, name: e.target.value })} />
                    <Input
                        placeholder="Логин"
                        icon="EditIcon"
                        value={email}
                        onChange={e => setValue({ ...values, email: e.target.value })} />
                    <Input
                        placeholder="Пароль"
                        icon="HideIcon"
                        type='password'
                        onChange={e => setValue({ ...values, password: e.target.value })}
                        value={password}
                        name={'password'}
                    />
                </form>
                <div className={styles.edit}>
                <Button htmlType="submit" type="primary" size="large" onClick={handleCansel}>Отменить</Button>
                <Button htmlType="submit" type="primary" size="large" onClick={handleSave}>Сохранить</Button>
                </div>
            </section>
        </div>
    )
}
