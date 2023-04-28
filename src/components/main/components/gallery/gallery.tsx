import { FC, useEffect, useRef, useState } from 'react';
import styles from './gallery.module.scss'
import ItemCard from '../itemCard/itemCard';


interface GalleryProps {
    categoryName: string;
    itemsList?: GalleryItemData[];
}

const Gallery: FC<GalleryProps> = ({ categoryName }) => {
    const [itemsList, setItemsList] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const elRef = useRef<HTMLDivElement>(null);
    const categoryNameRef = useRef<string>(categoryName);
    const observer = useRef<IntersectionObserver>();
    const loadMoreRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        createObserver();

        return () => {
            observer.current?.disconnect();
        };
    }, []);

    useEffect(() => {
        categoryNameRef.current = categoryName;
        setItemsList([]);
        fetchData();
    }, [categoryName])

    const fetchData = async () => {
        if (loading) return;
        console.log("fetching...")
        setLoading(true);
        const response = await fetch(`/api/items?categoryName=${categoryNameRef.current}`);
        const list = await response.json();
        setLoading(false);
        setItemsList(prevList => [...prevList, ...list]);
    }

    const createObserver = () => {
        observer.current = new IntersectionObserver((entries) => {
            const firstEntry = entries[0];
            if (firstEntry.isIntersecting) {
                fetchData();
            }
        });

        if (loadMoreRef.current)
            observer.current.observe(loadMoreRef.current);
    }

    const displayItems = () => {
        return itemsList.map((v, i) => {
            const itemData = {
                id: v.id,
                title: v.tittle?.slice(0, 27),
                price: v.price,
                isLiked: Math.floor(Math.random() * 10) % 2 ? true : false
            }
            return <ItemCard key={i} data={itemData} ></ItemCard>
        })
    }


    return (
        <>
            <div ref={elRef} className={styles.root}>
                {displayItems()}
            </div>
            <div ref={loadMoreRef} className={styles.loadMore}></div>
        </>
    );
}

export default Gallery;
