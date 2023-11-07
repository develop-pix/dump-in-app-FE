export interface FilterProps {
  geolocation: string;
  frameColor: string;
  party: number;
  cameraShot: string;
  concept: string[];
}

export interface HomeMenuBarProps {
  filterData: FilterProps;
  setFilterData: React.Dispatch<React.SetStateAction<FilterProps>>;
  onFilterSubmit: (newFilterData: FilterProps) => void;
}

export interface FilterModalProps {
  filterData: FilterProps;
  setFilterData: React.Dispatch<React.SetStateAction<FilterProps>>;
  handleFilterModal: () => void;
  onFilterSubmit: (newFilterData: FilterProps) => void;
}
