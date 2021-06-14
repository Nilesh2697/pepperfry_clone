import styled from "styled-components";

export const CustomDynamicPageGreyDiv = styled.div`
    background: #e8e8e8;
    text-align: left;
    padding: 1% 10%;
    @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300&display=swap");
    font-family: "Fira Sans", sans-serif;

    & > p:nth-child(1) {
        font-weight: bolder;
    }

    & > div {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 20px;
        & img {
            cursor: pointer;
        }
    }
`;

export const CustomDynamicPageWhiteDiv = styled.div`
    background: white;
    text-align: left;
    padding: 1% 10%;
    @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300&display=swap");
    font-family: "Fira Sans", sans-serif;

    & > p:nth-child(1) {
        font-weight: bolder;
    }
    & img:hover {
        transform: scale(1.02);
        transition: transform 1s ease;
        cursor: pointer;
    }
    & > div {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }
`;
