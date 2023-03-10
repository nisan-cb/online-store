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
        return itemsList.map((v, i) => <ItemCard key={i}></ItemCard>)
    }



    return (
        <ListWrapper ref={elRef}>
            {displayItems()}

        </ListWrapper>
    );
}

export default ItemsList;
