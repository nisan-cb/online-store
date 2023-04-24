import { FC, useEffect, useRef, useState } from "react";
import styles from "./singleItem.module.scss";
import ImagesGallery from "@/components/generic/imagesGallery/imagesGallery";
import { Button, Checkbox, Rating } from "@mui/material";
import QuantityCounter from "@/components/generic/quantityCounter/quantityCounter";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import Tabs from "@/components/generic/tabs/tabs";


interface SingleItemProps {
    scrollIntoView?: boolean;
    itemData?: {
        id: string;
        tittle: string;
        price: number;
        rating: number;
        totalReviews: number;
        totalOrders: number;
        isLiked: boolean;
    }
}

const defaultData = {
    id: "2542",
    tittle: "SteelSeries Arctis 5 - RGB Illuminated Gaming Headset with DTS Headphone",
    price: 58,
    rating: 3.5,
    totalReviews: 112,
    totalOrders: 26,
    isLiked: false
}

const SingleItem: FC<SingleItemProps> = ({ scrollIntoView, itemData = defaultData }) => {
    const itemSectionRef = useRef<HTMLElement>(null);
    const { id, tittle, price, rating, totalReviews, totalOrders, isLiked } = itemData;
    const [like, setLike] = useState<boolean>(isLiked);

    useEffect(() => {
        if (scrollIntoView)
            itemSectionRef.current?.scrollIntoView();
    }, []);

    const likeOnClick = () => {
        setLike(prev => !prev);
    }

    return (
        <>
            <section ref={itemSectionRef} className={styles.item_data}>
                <div className={styles.left}>
                    <ImagesGallery sources={[]} />
                </div>

                <div className={styles.right}>
                    {/* tittle */}
                    <h1 className={styles.tittle}>{tittle}</h1>
                    {/* price */}
                    <p className={styles.price}>{price}$</p>
                    {/* rating reviews total orders */}
                    <div className={styles.metaData}>
                        <Rating value={rating} readOnly />
                        <span>{totalReviews} reviews</span>
                        <span>{totalOrders} orders</span>
                    </div>

                    <div className={styles.main}>
                        <QuantityCounter />
                    </div>

                    <div className={styles.actions}>
                        <Button variant="contained" fullWidth>Add to cart</Button>
                        <Checkbox checked={like} onClick={likeOnClick} size="medium" icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    </div>
                </div>
            </section>

            <section className={styles.information}>
                <Tabs tabNames={['Description', 'Reviews', 'Shipping', 'Contact us']} />
            </section>
        </>
    )
}

export default SingleItem;
