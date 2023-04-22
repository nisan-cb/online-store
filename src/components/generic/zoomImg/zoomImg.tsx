import { CSSProperties, FC, useEffect, useRef, useState } from "react";
import styles from "./zoomImage.module.scss";
import Image, { StaticImageData } from "next/image";


interface ZoomImgProps {
    src: string | StaticImageData;
}

const ZoomImg: FC<ZoomImgProps> = ({ src }) => {
    const elRef = useRef<HTMLDivElement>(null)
    const [x, setX] = useState<number | undefined>(undefined)
    const [y, setY] = useState<number | undefined>(undefined)

    useEffect(() => {
        elRef.current?.style.setProperty("--x", `${x}px`);
        elRef.current?.style.setProperty("--y", `${y}px`);
    }, [x, y]);

    const mouseOver = (e: any) => {
        if (!elRef.current) return;
        const { top, left } = elRef.current.getBoundingClientRect()
        const x = e.clientX;
        const y = e.clientY;
        setX(x - left);
        setY(y - top);
    }

    return (
        <div className={styles.root} ref={elRef} onMouseMove={mouseOver} >
            <Image src={src} alt={"main-image"} />
        </div>
    )
}

export default ZoomImg;
