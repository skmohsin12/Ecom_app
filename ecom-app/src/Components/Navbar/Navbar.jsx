import React from 'react';
import styles from "./Navbar.module.css"
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>

                <div className={styles.left}>
                    <span className={styles.language}>EN</span>
                    <div className={styles.SearchContainer}>
                        <input className={styles.input} type="text" placeholder="Search"/>
                        <SearchIcon style={{color : "gray", fontSize : "16px"}}/>
                    </div>
                </div>

                <div className={styles.center}>
                    <h1 className={styles.logo}>DIGI CART</h1>
                </div>

                <div className={styles.right}>
                    <div className={styles.MenuItem}>REGISTER</div>
                    <div className={styles.MenuItem}>SIGN IN</div>
                    <div className={styles.MenuItem}>
                        <Badge color='primary' badgeContent={4}>
                            <ShoppingCartOutlined />
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;