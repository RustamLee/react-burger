
import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import styles from './profile.module.css';
import { EmailInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

export function Profile() {

    return (
    <div className={styles.profile}>
        <nav className={styles.menu}>
            <a href='URL' className="text text_type_main-medium text_color_inactive">Профиль</a>
            <a href='URL' className="text text_type_main-medium text_color_inactive">История заказов</a>
            <a href='URL' className="text text_type_main-medium text_color_inactive">Выход</a>
            <p text text_type_main-small>В этом разделе вы можете изменить свои персональные данные</p>
        </nav>
        <section className={styles.edit}>
            <form className={styles.form}>
                <Input placeholder="Имя" icon="EditIcon"/>
                <EmailInput placeholder="Логин" icon="EditIcon"/>
                <Input placeholder="Пароль" icon="EditIcon"/>
            </form>
{/*             <Button htmlType="submit" type="primary" size="large">Сохранить</Button> */}
        </section>
    </div>
    )
}