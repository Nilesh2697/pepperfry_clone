import React from 'react';
import { IconCart, StepContainer, StepContent } from './CheckOutStyle';

const steps = ["Cart", "------- Delivery & Billing Address  ------- Payment"];

function StepperPepper(){

    

  return (
    <StepContainer>
       <div>
            <IconCart src='https://www.pngitem.com/pimgs/m/424-4247602_transparent-arreglos-florales-png-white-shopping-cart-png.png' alt="cart icon"/>
       </div>
       <div>        
          {steps.map((step) => {
            return <>
                    <StepContent style={step === 'Cart' ? {color:'#e9a019'}:step === '------- Delivery & Billing Address  ------- Payment' ? {color:'black'}:null}>{step}</StepContent>
                </>
          })} 
      </div>     
    </StepContainer>
  )
}

export {StepperPepper}