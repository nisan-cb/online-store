import { FC, useEffect, useState } from "react";
import styles from './imagesGallery.module.scss';
import Image, { StaticImageData } from "next/image";
import ZoomImg from "../zoomImg/zoomImg";
import defaultImage from "../../../../public/item_image_placeholder.png"


interface ImagesGalleryProps {
    sources?: (string | StaticImageData)[];
}

const ImagesGallery: FC<ImagesGalleryProps> = ({ sources }) => {
    const [mainImageIndex, setMainImageIndex] = useState<number>(0);

    if (!sources?.length) {
        sources = [defaultImage];
    }

    const displaySmallImages = () => {
        return sources?.map((src, i) => <Image
            width={70} height={70}
            src={src}
            alt={""}
            className={i === mainImageIndex ? styles.selected : ''}
            onClick={() => setMainImageIndex(i)}
        />)
    }

    return (
        <div className={styles.root}>
            <div className={styles.smallImages}>
                {displaySmallImages()}
            </div>
            <ZoomImg src={sources[mainImageIndex]} />
        </div>
    )
}

export default ImagesGallery;
