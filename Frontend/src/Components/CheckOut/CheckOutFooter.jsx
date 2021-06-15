import React from 'react';
import {Footer,FootPayment, FootCard, FootHead, Card, CardImage, CopyRight, Instruct, Ins,AuthImage} from './CheckOutStyle';
import footer from "../../StaticData/footer.json";

function CheckOutFooter(){
    const { card, appstore, social, applink, sociallink } = footer;
    return (
        <Footer>
           <FootPayment>
                <FootCard>
                <FootHead>WE ACCEPT</FootHead>
                <Card>
                    {card.map((item) => {
                        return (
                            <CardImage
                                src={item}
                                alt="payments options"
                            />
                        );
                    })}
                </Card>
               </FootCard> 
           </FootPayment>
           <CopyRight>
                
                <h4>BUY SAFE, PAY EASY</h4> 
                <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',marginTop:'2%'}}>
                    <img src='https://ii1.pepperfry.com/images/svg/calendar-1.svg' alt='Instruction'/>
                    <Ins>No Cost EMIs:
                            <span> Now pay in easy installments at no additional cost</span>
                    </Ins>
                    <h3 style={{marginTop:'35%',border:'1px solid black',width:'160%',marginLeft:'10%'}}>Copyright 2020 Pepperfry.com.  All rights Reserved.</h3>
                </div>
           </CopyRight>
           <Instruct>
               <div>
                   <h4>100% SAFE & SECURE</h4>
                   <AuthImage>
                       <img src='https://ii2.pepperfry.com/images/download-1.png' alt='verify'/>
                       <img src='https://ii2.pepperfry.com/images/p-c-i-d-s-s.png' alt='PCI-DSS'/>
                   </AuthImage>
               </div>
           </Instruct>
        </Footer>
    )
}

export {CheckOutFooter}