import { Collapse } from "@mui/material";
import { FC, useState } from "react";
import { FilterObj, FilterTypes } from "../../optionalsFilters";
import PriceSlider from "../range/range";
import { Label, SectionWrapper } from "./sections.css";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

interface SectionProps {
    filterObj: FilterObj
}

const Section: FC<SectionProps> = ({ filterObj }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onClick = () => {
        setIsOpen(prev => !prev)
    }


    const displayRange = () => {

        return <PriceSlider min={filterObj.min} max={filterObj.max} />
    }

    const displayMultiSelect = () => {
        return <>select</>
    }

    const displayFilter = {
        [FilterTypes.RANGE]: displayRange,
        [FilterTypes.MULTI_SELECT]: displayMultiSelect,
    }

    return (
        <SectionWrapper>
            <Label onClick={onClick}>
                {filterObj.name}
                {isOpen ? <ExpandLess /> : <ExpandMore />}
            </Label>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                {displayFilter[filterObj.type as FilterTypes]()}
            </Collapse>
        </SectionWrapper>
    )
}

export default Section;
