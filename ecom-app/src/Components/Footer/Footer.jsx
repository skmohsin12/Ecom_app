import React from 'react';
import styles from "./Footer.module.css"
import {Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter} from '@mui/icons-material';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1 className={styles.logo}>DIGI CART.</h1>
                <p className={styles.desc}>
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.
                </p>
                <div className={styles.socialContainer}>
                    <div className={`${styles.socialIcon} ${styles.first}`}>
                        <Facebook />
                    </div>
                    <div className={`${styles.socialIcon} ${styles.second}`}>
                        <Instagram />
                    </div>
                    <div className={`${styles.socialIcon} ${styles.third}`}>
                        <Twitter />
                    </div>
                    <div className={`${styles.socialIcon} ${styles.fourth}`}>
                        <Pinterest />
                    </div>
                </div>
            </div>

            <div className={styles.center}>
                <h3 className={styles.title}>Useful Links</h3>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Home</li>
                    <li className={styles.listItem}>Cart</li>
                    <li className={styles.listItem}>Man Fashion</li>
                    <li className={styles.listItem}>Woman Fashion</li>
                    <li className={styles.listItem}>Accessories</li>
                    <li className={styles.listItem}>My Account</li>
                    <li className={styles.listItem}>Order Tracking</li>
                    <li className={styles.listItem}>Wishlist</li>
                    <li className={styles.listItem}>Wishlist</li>
                    <li className={styles.listItem}>Terms</li>
                </ul>
            </div>

            <div className={styles.right}>
                <h3 className={styles.title}>Contact</h3>
                <div className={styles.contactItem}>
                    <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
                </div>
                <div className={styles.contactItem}>
                    <Phone style={{marginRight:"10px"}}/> +1 234 56 78
                </div>
                <div className={styles.contactItem}>
                    <MailOutline style={{marginRight:"10px"}}/> contact@digicart.dev
                </div>
                <img className={styles.payment} src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
            </div>
        </div>
    );
};

export default Footer;