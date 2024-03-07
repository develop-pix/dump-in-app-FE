export interface BranchSearchData {
    id: string;
    name: string;
}

export interface ReviewSearchBranchListProps {
    search: string;
    resultData: BranchSearchData[];
    setResultData: React.Dispatch<React.SetStateAction<BranchSearchData[]>>;
}

export interface BranchListProps {
    name: string;
    branchID: string;
}
