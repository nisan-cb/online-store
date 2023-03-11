import { Checkbox, FormControlLabel } from "@mui/material";
import { FC } from "react";
import { Wrapper } from "./multiSelect.css";

interface MultiSelectProps {
    options?: object;
}

const MultiSelect: FC<MultiSelectProps> = ({ options }) => {

    const displayOptions = () => {
        if (!options) return;
        return Object.keys(options).map(k =>
            <FormControlLabel key={k} control={<Checkbox />} label={k} value={options[k as keyof typeof options]} />)
    }

    return (
        <Wrapper>
            {displayOptions()}
        </Wrapper>
    )
}

export default MultiSelect;
