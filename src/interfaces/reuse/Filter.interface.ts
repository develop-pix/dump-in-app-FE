export interface FilterProps {
    geolocation: string;
    frameColor: string;
    party: number;
    cameraShot: string;
    concept: string[];
}

export interface HomeFilterModalFormProps {
    filterData: FilterProps;
    setFilterData: React.Dispatch<React.SetStateAction<FilterProps>>;
    handleHideFilterModal: () => void;
    onFilterSubmit: (newFilterData: FilterProps) => void;
}

export interface FilterDataUpdateProps {
    filterData: FilterProps;
    setFilterData: React.Dispatch<React.SetStateAction<FilterProps>>;
    filterOptionSelect: () => void;
}
