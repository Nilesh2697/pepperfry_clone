import React from 'react';
import styles from './Footer.module.css';
function FooterLink(){
    return (
        <div className={styles.thirdfoot}>
            <div className={styles.detail}>
                <h4 className={styles.innerfoot}>Buy in Bulk</h4>
                <h4>Write A Testimonial</h4>
            </div> 

            <div className={styles.details}>
                <h4>Whitehat</h4>
                <h4>Site Map</h4>
                <h4>Terms Of Use</h4>
                <h4>Privacy Policy</h4>
                <h4>Your Data & Security</h4>
                <h4>Grievance Redressal</h4>
            </div> 
        </div>
    )
}

export {FooterLink}