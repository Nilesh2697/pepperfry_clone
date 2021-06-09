import React from 'react';
import style from './Footer.module.css';
const card = [
    'https://media-eng.dhakatribune.com/uploads/2021/02/visa-credit-card-logo-512-1613502609560.png',"https://upload.wikimedia.org/wikipedia/commons/4/4d/Maestro_logo.png","https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png","https://logodix.com/logo/61140.jpg","https://upload.wikimedia.org/wikipedia/commons/0/0f/RuPay-Logo.png","https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Diners-Club-International-icon.png","https://previews.123rf.com/images/marsono/marsono2003/marsono200300323/141979262-wallet-logo-icon-vector-template.jpg","https://www.pikpng.com/pngl/m/192-1926690_online-banking-presentation-internet-bank-internet-banking-icon.png"
];

const appstore=['https://en.logodownload.org/wp-content/uploads/2019/06/get-it-on-google-play-badge.png','https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo.jpg']
function FooterSocial(){
    return (
        <div className={style.footermaincard}>
            
            <div className={style.footercard}>
                <h5 style={{marginLeft:'9px',fontSize:'13px'}}>WE ACCEPT</h5>
                <div className={style.card}>
                    {card.map((item) => {
                        return <img className={style.cardimg} src={item} alt='payments options'/>
                    })}
                </div>
            </div>
           
            <div className={style.footercard}>
                <h5 style={{marginLeft:'9px',fontSize:'13px'}}>DOWNLOAD OUR APP</h5>
                <div className={style.card}>
                    {appstore.map((item) => {
                        return <img className={style.cardapp} src={item} alt='app store'/>
                    })}
                </div>
            </div>

            <div className={style.footercard}>

            </div>
        </div>
    ) 
}

export {FooterSocial}