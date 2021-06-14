import React from "react";
import {
    InnerCar,
    MainCar,
    SmallBan,
    ImageSize,
    BannerTwo,
} from "./Carousal.js";
import { CarouselMain } from "./Carousalmain";

function Carousalone() {
    return (
        <MainCar>
            <InnerCar>
                <div>
                    {/* <CardCarousel/> */}
                    <CarouselMain />
                </div>
                <SmallBan>
                    <ImageSize
                        style={{ marginBottom: "3%" }}
                        src="https://ii1.pepperfry.com/media/wysiwyg/banners/WEB_RHS_TP_2x-11_june.png"
                        alt="banner"
                    />
                    <ImageSize
                        src="https://ii2.pepperfry.com/media/wysiwyg/banners/WEB_RHS_clear_2x_10062021.png"
                        alt="banner"
                    />
                </SmallBan>
            </InnerCar>
            <div>
                <BannerTwo
                    src="https://ii1.pepperfry.com/media/wysiwyg/banners/Safe_Web2_2x_11062021.jpg"
                    alt="banner2"
                />
            </div>
        </MainCar>
    );
}

export { Carousalone };
