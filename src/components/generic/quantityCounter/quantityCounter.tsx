import { FC, useEffect, useRef, useState } from "react";
import styles from "./quantityCounter.module.scss";


enum Operator {
    INCREASE,
    DECREASE
}

const MAX = 20;
const MIN = 1;
const LONG_PRESS_INTERVAL_CYCLE = 100;

const QuantityCounter: FC = () => {
    const intervalId = useRef<NodeJS.Timer | null>(null);
    const [quantity, setQuantity] = useState<number>(MIN)
    const quantityRef = useRef<number>(quantity);

    useEffect(() => {
        quantityRef.current = quantity;
    }, [quantity])

    const increaseQuantity = () => {
        if (quantityRef.current + 1 >= MAX)
            mouseUp();
        if (quantityRef.current < MAX)
            setQuantity(prev => prev + 1);
    }

    const decreaseQuantity = () => {
        if (quantityRef.current - 1 <= MIN)
            mouseUp();
        if (quantityRef.current > MIN)
            setQuantity(prev => prev - 1);
    }

    const manuallyQuantity = (e: any) => {
        const val = e.target.value;
        setQuantity(val);
    }

    const onblurHandler = (e: any) => {
        const val = e.target.value;
        if (!val) setQuantity(1);
        if (val > MAX) setQuantity(MAX);
    }

    const mouseUp = () => {
        if (intervalId.current)
            clearInterval(intervalId.current)
    }

    const longPress = (operator: Operator) => {
        intervalId.current = setInterval(() => {
            if (operator === Operator.INCREASE)
                increaseQuantity();
            else if (operator === Operator.DECREASE)
                decreaseQuantity();
        }, LONG_PRESS_INTERVAL_CYCLE);
    }

    return (
        <div className={styles.root}>
            <button onClick={decreaseQuantity} onMouseDown={() => longPress(Operator.DECREASE)} onMouseUp={mouseUp}>-</button>
            <input type="number"
                value={quantity}
                onChange={manuallyQuantity}
                onBlur={onblurHandler} />
            <button onClick={increaseQuantity} onMouseDown={() => longPress(Operator.INCREASE)} onMouseUp={mouseUp}>+</button>
        </div>
    )
}

export default QuantityCounter;