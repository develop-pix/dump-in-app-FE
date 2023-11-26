export interface CategoryEventFilterProps {
  hashtags: string[];
  setHashtags: React.Dispatch<React.SetStateAction<string[]>>;
  filterOptionSelect: () => void;
}
