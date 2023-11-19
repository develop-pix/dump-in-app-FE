import {FilterProps} from './reuse/Filter.interface';

export interface HomeMenuBarProps {
  filterData: FilterProps;
  setFilterData: React.Dispatch<React.SetStateAction<FilterProps>>;
  onFilterSubmit: (newFilterData: FilterProps) => void;
}

export interface HomeSelectedFilterOptionProps {
  filterData: FilterProps;
}
