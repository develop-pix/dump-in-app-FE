export interface MapInputProps {
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

export interface LocationSearchProps {
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SearchBranchListProps {
  data: BranchData[];
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface BranchData {
  branchID: number;
  branchName: string;
  distance: string;
  address: string;
}

export interface BranchListProps {
  branchName: string;
  distance: string;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  branchID: number;
}
