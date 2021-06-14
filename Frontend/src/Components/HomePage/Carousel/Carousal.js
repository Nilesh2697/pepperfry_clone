import styled from "styled-components";

export const MainCar = styled.div`
    max-width: 89%;
    margin: auto;
    margin-top: 3.5%;
    padding-left: 5.5%;

    @media (max-width: 768px) {
        margin-top: 6%;
        max-width: 75%;
        margin-left: 7%;
    }
`;

export const InnerCar = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 100%;
    max-height: 500px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(2, 1fr);
        margin-top: 3%;
    }
`;

export const SmallBan = styled.div`
    width: 80%;
    max-height: 100%;
    margin-left: 5%;

    @media (max-width: 768px) {
        margin-top: 3%;
        width: 100%;
        margin-left: 0%;

        & img + img {
            margin-left: 4%;
            margin-top: -3%;
        }
    }
`;

export const ImageSize = styled.img`
    width: 92%;
    height: 45%;

    @media (max-width: 768px) {
        width: 48%;
        height: 95%;
    }
`;

export const BannerTwo = styled.img`
    width: 94.5%;
    margin-top: 2%;
    max-height: 5%;

    @media (max-width: 768px) {
        margin-top: 7%;
        width: 100%;
    }
`;


//Collection celebration carousal
export const CarouselSlideItemImgLink  = styled.div`
    cursor: zoom-in;
    display: flex;
    height: 100%;
    overflow: hidden;
    position: relative;
    width: 100%;

    img {
        height: 100%;
        object-fit: cover;
        transition: all 0.5s ease;
        width: 100%;
    }

    &::after {
        align-items: center;
        background: rgba(black, 0.5);
        color: white;
        content: 'read more';
        display: flex;
        height: 100%;
        justify-content: center;
        opacity: 0;
        position: absolute;
        transition: all 0.5s ease;
        width: 100%;
    }

    &:hover {
        &::after {
            opacity: 1;
        }

        img {
            transform: scale(1.3);
        }
    }
`

export const CarouselInner = styled.div `
    height: 40rem;
    position: relative;
    width: calc(#{$slide-width * 3});
`

export const CarouselSlideList =  styled.ul `
    height: 100%;
    left: 50%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    position: absolute;
    transform: translateX(-50%);
    width: calc(#{($slide-count + 0.5) * $slide-width * 2});
`

export const CarouselSlideItemBody = styled.div `
    bottom: -2.5rem;
    height: 10%;
    position: absolute;

    h4 {
        margin: 0.7rem 0 0;
        text-transform: uppercase;
    }

    p {
        font-size: 1.2rem;
        line-height: 1.3;
        margin: 0.7rem 0 0;
    }
`

export const CarouselBtn  = styled.button `
    align-items: center;
    background: 0;
    border: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &--prev {
        left: -10rem;
    }

    &--next {
        right: -10rem;
    }
`

export const CarouselBtnArrow = styled.i `
    border: solid black;
    border-width: 0 0.4rem 0.4rem 0;
    height: 6rem;
    padding: 3px;
    width: 6rem;
    z-index: 10;

    &--left {
        transform: rotate(135deg);
    }

    &--right {
        transform: rotate(-45deg);
    }
`

export const CarouselDots = styled.div `
    display: inline-block;
    left: 50%;
    margin-top: 2rem;
    position: absolute;
    transform: translateX(-50%);

    .dot {
        background: #ccc;
        border: 0;
        border-radius: 50%;
        cursor: pointer;
        height: 2rem;
        margin: 0 0.3rem;
        outline: none;
        transform: scale(0.5);
        width: 2rem;

        &.active {
            background: black;
        }
    }
`