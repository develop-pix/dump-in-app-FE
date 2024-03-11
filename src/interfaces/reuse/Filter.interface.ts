export interface FilterProps {
    photoBoothLocation: string;
    frameColor: string;
    participants: number;
    cameraShot: string;
    concept: string[];
}

export interface HomeFilterModalFormProps {
    filterData: FilterProps;
    isVisible: boolean;
    handleHideFilterModal: () => void;
    onFilterSubmit: (newFilterData: FilterProps) => void;
}

export interface FilterDataUpdateProps {
    filterData: FilterProps;
    setFilterData: React.Dispatch<React.SetStateAction<FilterProps>>;
    filterOptionSelect: () => void;
}
