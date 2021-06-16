import styled from "styled-components";

export const PrimaryCustomCard = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300&display=swap");
    font-family: "Fira Sans", sans-serif;
    letter-spacing: 0.26px;
    line-height: 17px;
    font-size: 2vh;
    max-width: 95%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-align: left;
    padding: 5% 3%;
    padding-bottom: 10%;
    background: white;
    cursor: pointer;

    :hover {
        border-color: grey;
        box-shadow: 0 0 10px grey;
    }

    & img:nth-child(1) {
        width: 150px;
        height: 40px;
    }

    & span {
        font-weight: 600;
        cursor: pointer;
    }

    & label > span:nth-child(2) {
        font-weight: unset;
        font-weight: 600;
        color: #35c3eb;
        font-size: 2vh;
    }

    @media (max-width: 768px) {
        & img:nth-child(1) {
            width: 150px;
            height: 40px;
        }
        & img:nth-child(4) {
            width: 99%;
        }
    }

    @media (max-width: 600px) {
        & img:nth-child(1) {
            width: 150px;
            height: 40px;
        }
    }
`;

export const SecondaryCustomCard = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300&display=swap");
    font-family: "Fira Sans", sans-serif;
    font-size: 2.3vh;
    display: flex;
    letter-spacing: 0.26px;
    line-height: 17px;
    flex-direction: column;
    gap: 10px;
    padding: 1.5% 1.5%;
    padding-bottom: 5%;
    background: white;
    cursor: pointer;
    /* cursor: none; */

    & img {
        height: 40vh;
    }

    :hover {
        border-color: grey;
        box-shadow: 0 0 10px grey;
    }

    & label:nth-child(2) {
        font-weight: bold;
    }
    & label:nth-child(3) {
        color: #99a6c7;
    }

    @media (max-width: 768px) {
        padding: 2% 2%;
        img {
            width: 99%;
        }
    }
`;

export const VerticalCustomCard = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300&display=swap");
    font-family: "Fira Sans", sans-serif;
    font-size: 2vh;
    display: flex;
    flex-direction: column;
    background: white;
    /* letter-spacing: 0.26px;
    line-height: 17px; */

    & p {
        /* margin-top: 5%; */
        font-weight: 600;
        color: black;
        padding: 2% 8%;
    }
    & > div {
        /* border: solid black 1px; */
        padding: 2% 8%;
        padding-bottom: 25%;
        color: black;
    }
    & > div > div {
        cursor: pointer;
    }

    & div > div:hover {
        background: #f5f5f0;
    }

    & img {
        width: 100%;
    }
`;

export const ItemCustomCard = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300&display=swap");
    font-family: "Fira Sans", sans-serif;
    font-size: 2.3vh;
    display: flex;
    flex-direction: column;
    background: white;
    /* border: 1px solid red; */
    width: 50%;
    padding: 1% 1%;


    & > h2:nth-child(3) {
        height: 34px;
        font-size: 14px;
        font-weight: 700;
        line-height: 1.7rem;
        color: black;
    }

    & > div:nth-child(4) {
        display: flex;
        justify-content: space-between;

        & > :nth-child(2):hover {
            color: red;
            cursor: pointer;
        }
    }
    & > div:nth-child(5) {
        margin-top:-10px;
    }
    & > div:nth-child(5) {
        & span:nth-child(1) {
            font-weight: 900;
            font-size: 16px;
            color: black;
        }
        & span:nth-child(2) {
            margin-left: 5%;
            /* font-weight: 900; */
            font-size: 16px;
            color: black;
            text-decoration: line-through;
        }
    }
    & > p:nth-child(6) {
        font-size: 14px;
        & span {
            color: red;
        }
    }
    & > div:nth-child(7) {
        display: flex;
        /* border: 1px solid black; */
        width: 70%;
        & > div:nth-child(1) {
            margin-top: 5%;
            /*border: solid pink 2px; */ 
            width: 50%;
            font-size: 12px;
        }

        & > div:nth-child(2) {
            display: flex;
            /* justify-content: center; */
            /* border: solid red 3px; */
            padding: 1%;
            & img {
                width: 30%;
                height: 60%;
                margin-left: 5%;
            }
        }
    }
`;
