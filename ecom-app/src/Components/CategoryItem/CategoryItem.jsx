import React from 'react';
import styles from "./CategoryItem.module.css"

const CategoryItem = ({elem}) => {
    return (
        <div className={styles.container}>
            <img src={elem.img} alt="" className={styles.image} />
            <div className={styles.info}>
                <h1 className={styles.title}>{elem.title}</h1>
                <button className={styles.button}>SHOP NOW</button>
            </div>
        </div>
    );
};

export default CategoryItem;