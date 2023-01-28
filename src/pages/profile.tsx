
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './profile.module.css';
import { EmailInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { logoutUserThunk } from '../services/actions/login-user';
import { useDispatch, useSelector } from '../utils/types'
import { getUserInfoThunk, patchUserInfoThunk } from '../services/actions/user-info';
import { ProfileMenu } from '../components/profile-menu/profile-menu'

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
            <ProfileMenu />
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
