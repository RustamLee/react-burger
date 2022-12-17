
import React from 'react';
import styles from './profile-feed-details.module.css';
import ProfileFeedDetails from '../components/profile-feed-details/profile-feed-details';
import { useDispatch, useSelector } from '../utils/types';
import { userWsConnectionInitial, userWsConnectionClose } from '../services/actions/user-socket';
import { getCookie } from '../utils/coockie';
import { apiConfig } from '../utils/burger.config';

export function ProfileFeedPage() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        const token = getCookie('accessToken');
        dispatch(userWsConnectionInitial(`${apiConfig.userSocketEndPoint}${token}`))
    }, [])

    React.useEffect(() => {
        return () => { dispatch(userWsConnectionClose()) }

    }, [])
    const { orders } = useSelector(store => store.userSocket);

    return (
        <>
            {orders.length > 0 && <div className={styles.details}>
                <ProfileFeedDetails />
            </div>}
        </>
    )
}
