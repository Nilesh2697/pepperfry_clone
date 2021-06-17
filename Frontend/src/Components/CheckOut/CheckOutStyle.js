import styled from "styled-components";

export const CheckOutNav = styled.div `
    width: 100%;
    border-bottom: 1px solid rgb(213, 211, 211);
    box-shadow: 0 3px 4px -4px rgb(213, 211, 211);
    display: grid;
    grid-template-columns: repeat(3,1fr);
    padding-top: 1.5%;
    padding-bottom: .5%;
`
  
export const Logo = styled.img `
    width:25%;
    margin-left: 35.5%;
    padding-bottom: 1.5%;
    padding-top: 3%;
`

export const PaymentProcess = styled.div `
    padding-bottom: 1.5%;
    padding-top: 1.5%;
    margin-left: 20%;
`

export const Welcome = styled.div `

    padding-bottom: 1.5%;
    padding-top: 3.5%;
    padding-left: 22%;
`
export const StepContent = styled.h4 `
  font-size:13px;
  font-family:"Fira Sans", sans-serif;
  font-weight:500;
  margin-top: -1%;
  & + h4 {
      margin-left: 7%;
      float: left;
      margin-top: -7%;
  }

`

export const StepContainer = styled.div `
   display:grid;
   grid-template-rows:repeat(2,1fr);
   margin-top: -2%;

   & :nth-child(2)> ::nth-child(1) {
    
    width:8%;
    color: #f16521;

   }
`

export const IconCart = styled.img ` 
    width: 5%;
`

//footer

export const Footer = styled.div ` 
   width: 100%;
   min-height: 40%;
   display: grid;
   background-color: #EFEFEF;
   grid-template-columns: repeat(3,1fr);
   padding-bottom: 3%;
   margin-top: 5%;
`

export const FootPayment = styled.div ` 
  
  display: grid;
  grid-template-columns: repeat(3,1fr);
  width: 120%;
  padding-left: 8%;
  height: 73%;
  margin-top: 15%;
`

export const FootCard = styled.div ` 
   width: 190%;
  height: 200px;
  margin: -1% 0;
  margin-left: 68%;
`

export const FootHead = styled.h3 ` 
    margin-left:9px;
  font-size:15px;
  margin-bottom:3%;
  color:#969696 ;
  font-weight: 500;
`

export const Card = styled.div `
 width: 100%;
  height: 100px;
  margin-top: -10px;
  margin-left: -1%;

`

export const CardImage = styled.img `
    width: 50px;
  height: 35px;
  margin: 2%;
`
export const CopyRight = styled.div `
    margin-left: 20%;
    margin-top: 15%;
    
    & h4 {
        font-weight:500; 
        color: #969696;
    }

    & h3{
        color: #969696;
        font-weight: 400;
        font-size: 14px;
    }
`

export const Instruct = styled.div ` 
  margin-left: 12%;
  margin-top: 15%;

  & h4 {
       color: #969696;
       font-weight: 500;
   }
`

export const Ins = styled.h6 ` 
    float: right;
    margin-left: -85%;
    font-size: 12px;
    color: #969696;
    font-weight: bold;

    & span {
        font-weight: 450;
    }
`

export const AuthImage = styled.div ` 
   display: grid;
   grid-template-columns: repeat(2,1fr);
   margin-top: 3%;
   
   & :nth-child(2) {
       margin-left: -60%;
       margin-top: 5%;
   }

`

//Product display- payment display

export const ProductMain = styled.div `
   width: 95%;
   display: grid;
   grid-template-columns: repeat(2,1fr);

`
export const ProductDisplay = styled.div `
  margin-left: 24.7%;
  width: 100%;
  padding-right: -5%;
  margin-top: 5%;
`

export const Pincode = styled.div ` 
   width: 100%;
   max-height: 50%;
   padding: 1.5% 2.5% .5%;
   border: 1px solid rgb(213, 211, 211);
   display:grid;
   grid-template-columns: repeat(4,1fr);
   margin-top: 3%;
`

export const PaymentDisplay = styled.div ` 
  margin-top: 10%;
  margin-right: 10%;
  height: 50%;
  width:'60%';
  margin-left: 27%;
  padding-top: 4%;

`
export const Invoice = styled.div ` 
   
 width:'60%';
 height: 250px;
 border: 1px solid #e7e2e2;
 border-top-width: 3px;
 margin-top: 2%;
 padding-top: -5% 4%;
 line-height: 1.8;
`

export const Product = styled.div ` 
  width:100%;
  margin-left :11.5 ;
  border: 1px solid #e7e2e2;
  
`

export const ProImage = styled.div ` 
width: 75%;
`

export const ProData = styled.div ` 
 margin-left: -15%;
 font-size: 13px;
 width:'60%'
`

export const ProPrice = styled.div ` 
padding-left: 25%;
`

export const ProEdit = styled.div ` 
 padding-left: 15%;
 width:170%
`