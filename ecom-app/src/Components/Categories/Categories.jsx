import React from 'react';
import styles from "./Categories.module.css"
import CategoryItem from '../CategoryItem/CategoryItem';
import { categories } from '../../data';

const Categories = () => {
    return (
        <div className={styles.container}>
            {categories.map((elem, index)=>(
                <CategoryItem elem={elem} key={index}/>
            ))}
        </div>
    );
};

export default Categories;