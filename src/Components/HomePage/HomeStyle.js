import styled from "styled-components";

export const PrimaryGreyContainer = styled.div`
    background: #e8e8e8;
    text-align: left;
    padding: 1% 2%;

    & > p:nth-child(1) {
        font-weight: 900;
    }

    & > p:nth-child(2) {
        color: #a8a8a8;
    }

    & > div {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;

        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 600px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export const SecondaryGreyContainer = styled.div`
    background: #e8e8e8;
    text-align: left;
    padding: 1% 2%;

    & > p:nth-child(1) {
        font-weight: bolder;
    }

    & > p:nth-child(2) {
        color: #a8a8a8;
    }

    & > div {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;

        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
            padding: 2% 20%;
        }
        @media (max-width: 600px) {
            grid-template-columns: repeat(2, 1fr);
            padding: 2% 15%;
        }
    }
`;

export const PrimaryWhiteContainer = styled.div`
    background: white;
    text-align: left;
    padding: 1% 2%;

    & > p:nth-child(1) {
        font-weight: bolder;
    }

    & > p:nth-child(2) {
        color: #a8a8a8;
    }

    & > div {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;

        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
            padding: 2% 20%;
        }
        @media (max-width: 600px) {
            grid-template-columns: repeat(2, 1fr);
            padding: 2% 15%;
        }
    }
`;

// /* Extra small devices (phones, 600px and down) */
// @media only screen and (max-width: 600px) {...}

// /* Small devices (portrait tablets and large phones, 600px and up) */
// @media only screen and (min-width: 600px) {...}

// /* Medium devices (landscape tablets, 768px and up) */
// @media only screen and (min-width: 768px) {...}

// /* Large devices (laptops/desktops, 992px and up) */
// @media only screen and (min-width: 992px) {...}

// /* Extra large devices (large laptops and desktops, 1200px and up) */
// @media only screen and (min-width: 1200px) {...}
