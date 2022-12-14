
import React from 'react';
import styles from './profile-feed-details.module.css';
import ProfileFeedDetails from '../components/profile-feed-details/profile-feed-details';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from '../utils/types';
import { userWsConnectionInitial, userWsConnectionClose } from '../services/actions/user-socket';

export function ProfileFeedPage() {
    const location = useLocation();
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(userWsConnectionInitial())
    }, [])

    React.useEffect(() => {
        if (!location.pathname.includes('/profile/orders')) {
            dispatch(userWsConnectionClose())
        }
    }, [dispatch, location])
    const { orders } = useSelector(store => store.userSocket);

    return (
        <>
            {orders.length > 0 && <div className={styles.details}>
                <ProfileFeedDetails />
            </div>}
        </>
    )
}
