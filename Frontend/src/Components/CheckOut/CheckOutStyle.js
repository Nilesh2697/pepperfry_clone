import styled from "styled-components";

export const CheckOutNav = styled.div `
    width: 100%;
    border-bottom: 1px solid rgb(213, 211, 211);
    box-shadow: 0 3px 4px -4px rgb(213, 211, 211);
    display: grid;
    grid-template-columns: repeat(3,1fr);
    border:1px solid black;
`
  
export const Logo = styled.img `
    width:20%;
    margin-left: 11.5%;
    padding-bottom: 1.5%;
    padding-top: 1.5%;
    border:1px solid black;
`

export const PaymentProcess = styled.div `
    border:1px solid black;
    padding-bottom: 1.5%;
    padding-top: 1.5%;
`

export const Welcome = styled.div `
    border: 1px solid black;
    padding-bottom: 1.5%;
    padding-top: 1.5%;
`
export const StepContent = styled.h4 `
  font-size:13px;
  font-family:"Fira Sans", sans-serif;
  font-weight:500;
  border: 1px solid black;
  & + h4 {
      margin-left: -87%;
      color: greenyellow;
  }

`

export const StepContainer = styled.div `
   display:grid;
   grid-template-columns:repeat(2,1fr);

   & :nth-child(1){
    
    width:13%;
   }
`