import styled from 'styled-components';

export const MainCar = styled.div`
    max-width:86%;
    margin:auto;
    margin-top: 3.5%;

    @media (max-width: 768px) {
            margin-top: 6%;
            max-width: 75%;
            margin-left: 7%;
        }
`;
export const InnerCar = styled.div`
    display:grid;
    grid-template-columns:repeat(2,1fr);
    width:100%;
    margin-left:8%;
    max-height:360px;

    @media (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(2,1fr);
            margin-top: 3%;
        }
`;
export const SmallBan = styled.div`
    width:58%;
    max-height:100%;
    margin-left:5%;

    @media (max-width: 768px) {
            /* grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(1,1fr); */
            margin-top: 3%;
            width: 100%;
            margin-left:0%;
            
            & img + img{
                 margin-left: 4%;
                 margin-top: -3%;
             }
        }
`;

export const ImageSize = styled.img`
    width:100%;
    height:42%;

    @media (max-width: 768px) {
            /* grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(1,1fr); */
            width: 48%;
            height: 95%;
            
        }
` ;

export const BannerTwo = styled.img`
    width:81.5%;
    margin-top:4%;
    margin-left:8%;
    max-height:5%;

    @media (max-width: 768px) {
            margin-top: 24%;
            width: 100%;
        }
`;