import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import ItemCard from '../itemCard/itemCard';
import { ListWrapper } from './itemsList.css';

const array = new Array(13).fill(1);

function ItemsList() {
    const elRef = useRef<HTMLDivElement>(null);
    const [itemsList, setItemsList] = useState<any[]>([]);

    useEffect(() => {
        setItemsList(array);
    }, [])

    const displayItems = () => {


        return itemsList.map((v, i) => {
            const itemData = {
                title: "Item title",
                price: 58,
                isLiked: Math.floor(Math.random() * 10) % 2 ? true : false
            }
            return <ItemCard key={i} data={itemData} ></ItemCard>
        })
    }



    return (
        <ListWrapper ref={elRef}>
            {displayItems()}

        </ListWrapper>
    );
}

export default ItemsList;
