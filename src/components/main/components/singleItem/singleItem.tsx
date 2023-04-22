
import Image from "next/image";
import styles from "./singleItem.module.scss";
import defaultImageSrc from '../../../../../public/item_image_placeholder.png';
import ZoomImg from "@/components/generic/zoomImg/zoomImg";



const SingleItem = () => {

    return (
        <>
            <section className={styles.item_data}>
                <div className={styles.left}>
                    {/* <Image className={styles.main_image} src={defaultImageSrc} alt="main-image" /> */}
                    <ZoomImg src={defaultImageSrc} />
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
