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

export interface ResetLocationButtonProps {
    myPosition: MyLocation;
    setPinPosition: React.Dispatch<React.SetStateAction<MyLocation>>;
    setZoom: React.Dispatch<React.SetStateAction<number>>;
}

export interface BranchCardData {
    branchID: number;
    imageLogo: string;
    photoBoothName: string;
    branchName: string;
    hashtag: string[];
    myBranch: boolean;
    distance: number;
    elapsedTime: string;
}

export interface BranchCarouselProps {
    showNearBranch: boolean;
}

export interface BranchCardProps {
    branchID: number;
    imageLogo: string;
    photoBoothName: string;
    branchName: string;
    hashtag: string[];
    myBranch: boolean;
    distance: number;
    elapsedTime: string;
}
