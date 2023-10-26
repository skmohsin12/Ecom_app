import React from 'react';
import styles from "./MultipleProducts.module.css"
import Product from '../Product/Product';
import { popularProducts } from '../../data';

const MultipleProducts = () => {
    return (
        <div className={styles.container}>
            {popularProducts.map((elem, index)=>(
                <Product key={index} elem={elem}/>
            ))}
        </div>
    );
};

export default MultipleProducts;