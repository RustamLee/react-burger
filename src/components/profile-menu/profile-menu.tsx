import styles from './profile-menu.module.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { EmailInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { logoutUserThunk } from '../../services/actions/login-user';
import { useDispatch, useSelector } from '../../utils/types'
import { getUserInfoThunk, patchUserInfoThunk } from '../../services/actions/user-info';

export function ProfileMenu() {

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
    <div className={styles.menu}>
                  <div className={styles.profile__menu}>
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
    </div>
  )
}