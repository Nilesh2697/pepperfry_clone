import React from 'react';
import style from './Footer.module.css';
function FooterLink(){
    return (
        <div className={style.thirdfoot}>
            <div className={style.detail}>
                <h4 className={style.innerfoot}>Buy in Bulk</h4>
                <h4>Write A Testimonial</h4>
            </div> 

            <div className={style.details}>
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