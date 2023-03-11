export enum FilterTypes {
    RANGE = "range",
    MULTI_SELECT = "multi_select",
}

export interface FilterObj {
    name: string;
    type: FilterTypes;
    min?: number;
    max?: number;
    options?: any[]
}

const filters: FilterObj[] = [
    {
        'name': 'Price',
        'type': FilterTypes.RANGE,
        'min': 0,
        'max': 950
    },
    {
        'name': 'Colors',
        'type': FilterTypes.MULTI_SELECT,
        'options': ['red', 'blue', 'green', 'black']
    }

]


export default filters;