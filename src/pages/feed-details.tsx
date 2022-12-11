
import React from 'react';
import styles from './feed-details.module.css';
import FeedDetails from '../components/feed-details/feed-details'

export function FeedPage(){
    
    return (
        <div className={styles.details}>
            <FeedDetails />
        </div>
    )
}