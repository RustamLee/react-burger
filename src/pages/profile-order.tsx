
import React from 'react';
import styles from './profile-order.module.css';
import ProfileOrder from '../components/profile-order/profile-order';
import { ProfileMenu } from '../components/profile-menu/profile-menu'
 

export function OrderPage() {

    return (
        <div className={styles.profile}>
            <div>
            <ProfileMenu />
            </div>
            <div className={styles.profile__orders}>
            <ProfileOrder />
            </div>
        </div>
    )
}