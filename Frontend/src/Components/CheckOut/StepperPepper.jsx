import React from 'react';
import { StepContainer, StepContent } from './CheckOutStyle';

const steps = ["Cart", "------- Delivery & Billing Address  ------- Payment"];

function StepperPepper(){

    

  return (
    <StepContainer>
      {steps.map((step) => {
        return <StepContent>{step}</StepContent>
      })}      
    </StepContainer>
  )
}

export {StepperPepper}