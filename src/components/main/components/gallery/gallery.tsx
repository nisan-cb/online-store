import React, { useEffect, useRef, useState } from 'react';
// import ItemCard from '../itemCard/itemCard';
// import { ListWrapper } from './itemsList.css';
import styles from './gallery.module.scss'
import ItemCard from '../itemCard/itemCard';

const array = new Array(13).fill(1);

function Gallery() {
    const elRef = useRef<HTMLDivElement>(null);
    const [itemsList, setItemsList] = useState<any[]>([]);

    useEffect(() => {
        setItemsList(array);
    }, [])

    const displayItems = () => {


        return itemsList.map((v, i) => {
            const itemData = {
                id: i.toString(),
                title: "Item title",
                price: 58,
                isLiked: Math.floor(Math.random() * 10) % 2 ? true : false
            }
            return <ItemCard key={i} data={itemData} ></ItemCard>
        })
    }



    return (
        <div ref={elRef} className={styles.root}>
            {displayItems()}
        </div>
    );
}

export default Gallery;
