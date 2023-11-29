export interface MapInputProps {
  location: string;
}

export interface SearchBranchListProps {
  data: BranchData[];
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
  branchID: number;
}

export interface MyLocation {
  latitude: number;
  longitude: number;
}
