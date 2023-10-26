import React, { useState } from 'react';
import styles from "./Slider.module.css"
import ArrowBackIosNewOutlined from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlined from '@mui/icons-material/ArrowForwardIosOutlined';
import { sliderItems } from '../../data';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (dir)=>{
        if(dir === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    return (
        <div className={styles.container}>
            <div className={`${styles.arrow} ${styles.left}`} onClick={()=>handleClick("left")}>
                <ArrowBackIosNewOutlined />
            </div>

            <div className={styles.wrapper} style={{ transform: `translateX(${slideIndex * -100}vw)` }}>
                {sliderItems.map((elem, index)=>(
                    <div className={styles.slide} key={index} style={{background : `#${elem.bg}`}}>
                        <div className={styles.imgContainer}>
                            <img className={styles.image} src={elem.img} alt="" />
                        </div>
                        <div className={styles.infoContainer}>
                            <h1 className={styles.title}>{elem.title}</h1>
                            <p className={styles.desc}>{elem.desc}</p>
                            <button className={styles.button}>SHOW NOW</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className={`${styles.arrow} ${styles.right}`} onClick={()=>handleClick("right")}>
                <ArrowForwardIosOutlined />
            </div>
        </div>
    );
};

export default Slider;