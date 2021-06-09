import styled from "styled-components";

export const PrimaryCustomCard = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300&display=swap");
    font-family: "Fira Sans", sans-serif;
    font-size: 2.3vh;
    max-width: 95%;
    display: flex;
    flex-direction: column;
    gap: 10px;
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
        width: 200px;
        height: 50px;
    }

    & span {
        font-weight: bolder;
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
    flex-direction: column;
    gap: 10px;
    padding: 1.5% 1.5%;
    padding-bottom: 5%;
    background: white;
    cursor: pointer;
    /* cursor: none; */

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
