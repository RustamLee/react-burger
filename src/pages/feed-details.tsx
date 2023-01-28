
import React from 'react';
import styles from './feed-details.module.css';
import FeedDetails from '../components/feed-details/feed-details'
import { useDispatch } from '../utils/types';
import { wsConnectionInitial } from '../services/actions/all-socket';
import { wsConnectionClose } from '../services/actions/all-socket';
import { apiConfig } from '../utils/burger.config';

export function FeedPage() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(wsConnectionInitial(apiConfig.socketEndPoint))
    }, [])

    React.useEffect(() => {
        return () => {
            dispatch(wsConnectionClose())
        }
    }, [])


    return (
        <div className={styles.details}>
            <FeedDetails />
        </div>
    )
}
