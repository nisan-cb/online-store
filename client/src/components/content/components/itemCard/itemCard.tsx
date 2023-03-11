import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { CardWrapper, Img } from './itemCard.css';
import defaultImageSrc from './item_image_placeholder.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface ItemCardProps {
    data: {
        id?: string;
        title: string;
        price: number;
        isLiked: boolean;
    }
}
const ItemCard: FC<ItemCardProps> = ({ data }) => {
    const { id, title, price, isLiked } = data;

    return (
        <CardWrapper className='item-card'>
            {/* image */}
            <Img src={defaultImageSrc} />
            {/* title */}
            <span className="item-card-title">{title}</span>

            {/* more details optional  */}
            <span className="item-card-more-info"></span>

            {/* price */}
            <span className="item-card-price">{price}$</span>

            {/* like */}
            <span className='like-icon-wrapper' >
                {isLiked ?
                    <FavoriteIcon color='error' />
                    :
                    <FavoriteBorderIcon />
                }
            </span>

        </CardWrapper>
    );
}

export default ItemCard;
