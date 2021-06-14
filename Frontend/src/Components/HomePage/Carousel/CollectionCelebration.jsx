import React from 'react';
import collectioncelebration from '../../../StaticData/Home/collectioncelebration.json';
import {CarouselSlideItemImgLink,CarouselInner,CarouselSlideList,CarouselSlideItemBody,CarouselBtn,CarouselBtnArrow,CarouselDots} from './Carousal.js';
import styles from './CollectionCelebration.module.css';

const slideWidth = 30;
const length = collectioncelebration.length;
collectioncelebration.push(...collectioncelebration);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`,
        },
        player: collectioncelebration[idx].player,
    };

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = {...item.styles, filter: 'grayscale(1)'};
            break;
        case length:
            break;
        default:
            item.styles = {...item.styles, opacity: 0};
            break;
    }

    return item;
};

const CarouselSlideItem = ({pos, idx, activeIdx}) => {
    const item = createItem(pos, idx, activeIdx);

    return (
        <li className={styles.carouselslideitem} style={item.styles}>
            <CarouselSlideItemImgLink>
                <img src={item.player.image} alt={item.player.title} />
            </CarouselSlideItemImgLink>
            <CarouselSlideItemBody>
                <h4>{item.player.title}</h4>
                <p>{item.player.desc}</p>
            </CarouselSlideItemBody>
        </li>
    );
};

const keys = Array.from(Array(collectioncelebration.length).keys());

const CollectionCelebration = () => {
    const [items, setItems] = React.useState(keys);
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    const handleDotClick = (idx) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };

    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    React.useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items]);

    return (
        <div className={styles.carouselwrap}>
            <CarouselInner>
                <CarouselBtn className={styles.carouselbtnprev} onClick={() => prevClick()}>
                    <CarouselBtnArrow className={styles.carouselbtnarrowleft} />
                </CarouselBtn>
                <div className={styles.carouselcontainer}>
                    <CarouselSlideList>
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                            />
                        ))}
                    </CarouselSlideList>
                </div>
                <CarouselBtn className={styles.carouselbtnnext} onClick={() => nextClick()}>
                    <CarouselBtnArrow className={styles.carouselbtnarrowright} />
                </CarouselBtn>
                <CarouselDots>
                    {items.slice(0, length).map((pos, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={i === activeIdx ? 'dot active' : 'dot'}
                        />
                    ))}
                </CarouselDots>
            </CarouselInner>
        </div>
    );
};

export {CollectionCelebration}