import React, { FC, MouseEventHandler, useState } from 'react';
// import { CardWrapper, Img } from './itemCard.css';
import defaultImageSrc from './item_image_placeholder.png';
import Favorite from '@mui/icons-material/Favorite';
import { Checkbox } from '@mui/material';
import { FavoriteBorder } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
// import { Item } from '../../../../../../interfaces/item';
import Link from 'next/link'
import styles from "./itemCard.module.scss"
import Image from 'next/image';



interface ItemCardProps {
    data: any;
}

const ItemCard: FC<ItemCardProps> = ({ data }) => {
    const { id, title, price } = data;
    const [isLiked, setIsLiked] = useState(data.isLiked)
    console.log("render")
    const clickHandler = (e: any) => {
        e.preventDefault();
        console.log("click")
        // setIsLiked(prev => !prev)
    }

    return (
        <Link href={`/item/${id}`}>
            <div className={styles.root}>
                {/* image */}
                <Image className={styles.image} src={defaultImageSrc} alt={'item'} />
                {/* title */}
                <span className={styles.title}>{title}</span>

                {/* more details optional  */}
                <span className={styles.more_details}></span>

                {/* price */}
                <span className={styles.price}>{price}$</span>

                {/* like */}
                <span className={styles.like_icon_wrapper} >
                    <Checkbox checked={isLiked} onClick={clickHandler} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                </span>
            </div>
        </Link>
    );
}

export default ItemCard;
