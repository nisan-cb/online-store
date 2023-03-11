import { Input, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { FC, useEffect, useState } from 'react';
import { Container, RangeWrapper } from './range.css';


const MIN = 50;
const MAX = 950
const minDistance = 100;

interface PriceSliderProps {
    min?: number;
    max?: number;
    defaultMin?: number;
    defaultMax?: number;
}

const PriceSlider: FC<PriceSliderProps> = ({ min = MIN, max = MAX, defaultMax, defaultMin }) => {
    const [value, setValue] = useState<number[]>([defaultMin || min, defaultMax || max * 0.6]);
    const [minInputValue, setMinInputValue] = useState<number>(value[0])
    const [maxInputValue, setMaxInputValue] = useState<number>(value[1])


    useEffect(() => {
        setMinInputValue(value[0])
        setMaxInputValue(value[1])
    }, value);

    useEffect(() => {
        let min = Number(minInputValue);
        let max = Number(maxInputValue);
        if (typeof min !== 'number' || typeof max !== 'number') return;
        if (min > value[1] - minDistance) min = value[1] - minDistance;
        if (max < value[0] + minDistance) max = value[0] + minDistance;
        setValue([min, max]);
    }, [minInputValue, maxInputValue]);

    const handleChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
    };

    const inputOnChange = (e: any, activeThumb: number) => {
        const value = e.target.value;
        if (value < 0 || value > max) return;
        if (activeThumb === 0) {
            setMinInputValue(e.target.value)
        } else {
            setMaxInputValue(e.target.value)
        }

    }


    return (
        <RangeWrapper>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                disableSwap
                max={max}
                min={min}
            />

            <Container>

                <TextField
                    id='price-range-input'
                    // label="Min"
                    variant="standard"
                    value={minInputValue}
                    type="number"
                    onChange={e => inputOnChange(e, 0)}
                    onBlur={() => setMinInputValue(value[0])}
                />
                <span id='delimiter'> - </span>
                <TextField
                    id="price-range-input"
                    // label="Max"
                    variant="standard"
                    value={maxInputValue}
                    type="number"
                    onChange={e => inputOnChange(e, 1)}
                    onBlur={() => setMaxInputValue(value[1])}
                />
            </Container>
        </RangeWrapper>
    );
}

export default PriceSlider;