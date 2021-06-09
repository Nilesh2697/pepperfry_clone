import React from 'react';
import style from './Footer.module.css';
import footer from '../../StaticData/footer.json';
import {Link} from 'react-router-dom';

function FooterSocial(){

    const {card,appstore,social,applink,sociallink} = footer
    return (
        <div className={style.footermaincard}>
            
            <div className={style.footercard}>
                <h5 className={style.foothead}>WE ACCEPT</h5>
                <div className={style.card}>
                    {card.map((item) => {
                        return <img className={style.cardimg} src={item} alt='payments options'/>
                    })}
                </div>
            </div>
           
            <div className={style.footercard}>
                <h5 className={style.foothead}>DOWNLOAD OUR APP</h5>
                <div className={style.card}>
                    
                    <Link to={`//${applink[0]}`} target="_blank"><img className={style.cardapp} src={appstore[0]} alt='app store'/></Link>
                    <Link to={`//${applink[1]}`} target="_blank"><img className={style.cardapp} src={appstore[1]} alt='app store'/></Link>
                  </div>
            </div>

            <div className={style.footercard}>
                <h5 className={style.foothead}>FOLLOW US</h5>
                <div className={style.card}>
                    <Link to={`//${sociallink[0]}`} target="_blank"><img className={style.cardsocial} src={social[0]} alt='social icons'/></Link>
                    <Link to={`//${sociallink[1]}`} target="_blank"><img className={style.cardsocial} src={social[1]} alt='social icons'/></Link>
                    <Link to={`//${sociallink[2]}`} target="_blank"><img className={style.cardsocial} src={social[2]} alt='social icons'/></Link>
                    <Link to={`//${sociallink[3]}`} target="_blank"><img className={style.cardsocial} src={social[3]} alt='social icons'/></Link>
                    <Link to={`//${sociallink[4]}`} target="_blank"><img className={style.cardsocial} src={social[4]} alt='social icons'/></Link>
                </div>
            </div>
        </div>
    ) 
}

export {FooterSocial}