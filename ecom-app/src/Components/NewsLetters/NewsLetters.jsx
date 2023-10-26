import React from 'react';
import styles from "./NewsLetters.module.css"
import Send from '@mui/icons-material/Send';

const NewsLetters = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Newsletter</h1>
            <div className={styles.desc}>Get timely updates from your favorite products.</div>

            <div className={styles.inputContainer}>
                <input type="email" className={styles.input} placeholder='Enter your email...' name="" id="" />
                <button className={styles.button}> <Send /> </button>
            </div>
        </div>
    );
};

export default NewsLetters;