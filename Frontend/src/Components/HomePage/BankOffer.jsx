import React from 'react';
import bankoffer from '../../StaticData/Home/bankoffer.json';
import styles from './BankOffer.module.css';
function BankOffer(){
    return (
        <div className={styles.bankmain}>
            <h6 className={styles.bankhead}>BANK OFFERS</h6>
            <div>
                {
                    bankoffer.map((item) => {
                        return <img className={styles.decor} src={item.coupon} alt='bank coupon'/>
                    })
                }
            </div>
        </div>
    )
}

export {BankOffer}