import styles from "./singleItem.module.scss";
import ImagesGallery from "@/components/generic/imagesGallery/imagesGallery";



const SingleItem = () => {

    return (
        <>
            <section className={styles.item_data}>
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
