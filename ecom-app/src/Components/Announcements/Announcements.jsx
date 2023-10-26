import React, { useState } from 'react';
import styles from "./Announcement.module.css"

const Announcements = () => {
    const [isPaused, setPaused] = useState(false)

    const handleMouseEnter = ()=>{
        setPaused(true);
    }

    const handleMouseLeave = ()=>{
        setPaused(false)
    }

    return (
        <div className={`${styles.container} ${isPaused ? styles.paused : ""}`}>
            <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Super Deal! Free Shipping on Orders Over $50 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, corrupti?</span>
        </div>
    );
};

export default Announcements;