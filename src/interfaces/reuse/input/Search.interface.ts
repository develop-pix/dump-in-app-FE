export interface SearchProps {
  placeholder: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  SubmitSearch: () => void;
}
