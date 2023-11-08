import {FilterProps} from './Filter.interface';

export interface HomeMenuBarProps {
  filterData: FilterProps;
  setFilterData: React.Dispatch<React.SetStateAction<FilterProps>>;
  onFilterSubmit: (newFilterData: FilterProps) => void;
}
