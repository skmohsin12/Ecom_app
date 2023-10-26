import React from 'react';
import styles from "./Home.module.css"
import Navbar from '../../Components/Navbar/Navbar';
import Announcements from '../../Components/Announcements/Announcements';
import Slider from '../../Components/Slider/Slider';
import Categories from '../../Components/Categories/Categories';
import MultipleProducts from '../../Components/MultipleProducts/MultipleProducts';
import NewsLetters from '../../Components/NewsLetters/NewsLetters';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    return (
        <div className={styles.container}>
            <Announcements />
            <Navbar />
            <Slider />
            <Categories />
            <MultipleProducts />
            <NewsLetters />
            <Footer />
        </div>
    );
};

export default Home;