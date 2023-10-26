import React from 'react';
import styles from "./Product.module.css"
import {ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined, } from '@mui/icons-material';

const Product = ({elem}) => {
    return (
        <div className={styles.container}>
            <div className={styles.circle}></div>
            <img src={elem.img} alt="" className={styles.image}/>

            <div className={styles.info}>
                <div className={styles.icon}>
                    <ShoppingCartOutlined />
                </div>
                <div className={styles.icon}>
                    <SearchOutlined />
                </div>
                <div className={styles.icon}>
                    <FavoriteBorderOutlined />
                </div>
            </div>
        </div>
    );
};

export default Product;