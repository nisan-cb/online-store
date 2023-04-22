import { FC, useEffect, useRef } from "react";
import styles from "./singleItem.module.scss";
import ImagesGallery from "@/components/generic/imagesGallery/imagesGallery";

interface SingleItemProps {
    scrollIntoView?: boolean;
}

const SingleItem: FC<SingleItemProps> = ({ scrollIntoView }) => {

    const itemSectionRef = useRef<HTMLElement>(null)
    useEffect(() => {
        if (scrollIntoView)
            itemSectionRef.current?.scrollIntoView();
    }, []);

    return (
        <>
            <section ref={itemSectionRef} className={styles.item_data}>
                <div className={styles.left}>
                    <ImagesGallery sources={[]} />
                </div>

                <div className={styles.right}>

                </div>
            </section>

            <section className={styles.information}>

            </section>
        </>
    )
}

export default SingleItem;
