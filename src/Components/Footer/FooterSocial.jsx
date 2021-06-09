import React from 'react';
import style from './Footer.module.css';
const card = [
    'https://media-eng.dhakatribune.com/uploads/2021/02/visa-credit-card-logo-512-1613502609560.png',"https://upload.wikimedia.org/wikipedia/commons/4/4d/Maestro_logo.png","https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png","https://logodix.com/logo/61140.jpg","https://upload.wikimedia.org/wikipedia/commons/0/0f/RuPay-Logo.png","https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Diners-Club-International-icon.png","https://previews.123rf.com/images/marsono/marsono2003/marsono200300323/141979262-wallet-logo-icon-vector-template.jpg","https://www.pikpng.com/pngl/m/192-1926690_online-banking-presentation-internet-bank-internet-banking-icon.png"
]
function FooterSocial(){
    return (
        <div>
            <div>
                <h5>WE ACCEPT</h5>
                <div className={style.card}>
                    {card.map((item) => {
                        return <img src={item} alt='payments options'/>
                    })}
                </div>
            </div>
        </div>
    ) 
}

export {FooterSocial}