
import React from 'react';
import styles from './feed-details.module.css';
import FeedDetails from '../components/feed-details/feed-details'
import { useLocation } from 'react-router';
import { useDispatch } from '../utils/types';
import { wsConnectionInitial } from '../services/actions/all-socket';
import { wsConnectionClose } from '../services/actions/all-socket';

export function FeedPage(){
    const location = useLocation();
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(wsConnectionInitial())
    }, [])

    React.useEffect(() => {
        if (!location.pathname.includes('/feed')) {
            dispatch(wsConnectionClose())
        }
    }, [dispatch, location])

    
    return (
        <div className={styles.details}>
            <FeedDetails />
        </div>
    )
}
