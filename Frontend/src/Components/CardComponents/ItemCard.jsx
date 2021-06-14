import React from "react";
import { ItemCustomCard } from "./CustomCardStyle";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export const ItemCard = () => {
    return (
        <ItemCustomCard key={1}>
            <img
                src="https://ii2.pepperfry.com/media/catalog/product/e/s/568x284/esteban-3-seater-half-leather-sofa-in-grey-colour-by-casacraft-esteban-3-seater-half-leather-sofa-in-8akxht.jpg"
                alt="Item_Img"
            />
            <br />
            <h2>Esteban 3 Seater Half Leather Sofa In Grey Colour</h2>
            <div>
                <p>CasaCraft by Pepperfry</p>
                <FavoriteBorderIcon />
            </div>
            <div>
                <span>₹ 1,13,999</span>
                <span> ₹ 1,84,999</span>
            </div>
            <p>
                Save ₹ 71,000 <span>(38% Off)</span>, Limited Time Offer
            </p>
            <div>
                <div>Make a Set</div>
                <div>
                    <img
                        src="https://ii2.pepperfry.com/media/catalog/product/e/s/198x99/esteban-2-seater-half-leather-sofa-in-grey-colour-by-casacraft-esteban-2-seater-half-leather-sofa-in-hcgoea.jpg"
                        alt="Item_Img"
                    />
                    <img
                        src="https://ii2.pepperfry.com/media/catalog/product/e/s/90x99/esteban-1-seater-half-leather-sofa-in-grey-colour-by-casacraft-esteban-1-seater-half-leather-sofa-in-v50z6b.jpg"
                        alt="Item_Img"
                    />
                </div>
            </div>
        </ItemCustomCard>
    );
};
