export interface SearchProps {
  placeholder: string;
  search: string; // 검색어 상태 추가
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  SubmitSearch: () => void;
}
