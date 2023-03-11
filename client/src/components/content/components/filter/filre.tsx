import { Collapse } from "@mui/material";
import { FC } from "react";
import PriceSlider from "./components/range/range";
import Section from "./components/section/section";
import { FilterWrapper } from "./filter.css";
import filters, { FilterTypes, FilterObj } from './optionalsFilters';


const Filter: FC = () => {


    const displayFilters = () => {
        return filters.map((obj: FilterObj) => <Section key={`${obj.name}-filter`} filterObj={obj} />)
    }

    return (
        <FilterWrapper>
            <p>Filters</p>
            {displayFilters()}

        </FilterWrapper>
    )
}

export default Filter;
