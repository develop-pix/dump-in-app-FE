export interface BranchData {
    branchID: number;
    branchName: string;
    branchHashtag: string[];
    photoBoothName: string;
    geolocation: Geolocation;
    open: string;
    distance: number;
    address: string;
    officialImage: string[];
    myBranch: boolean;
    review: ReviewData[];
}

interface ReviewData {
    reviewID: number;
    representativeImage: string;
    hashtag: string[];
    description: string;
}

export interface BranchLocationProps {
    geolocation: Geolocation;
    distance: number;
}

export interface BranchInfoProps {
    photoBoothName: string;
    branchName: string;
    branchHashtag: string[];
    address: string;
    open: string;
    myBranch: boolean;
}

export interface BranchTitleProps {
    photoBoothName: string;
    branchName: string;
    branchHashtag: string[];
    myBranch: boolean;
}

export interface BranchDescriptionProps {
    address: string;
    open: string;
}

export interface Geolocation {
    latitude: number;
    longitude: number;
}

export interface BranchDistanceProps {
    distance: number;
}
