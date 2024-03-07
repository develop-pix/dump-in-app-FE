import { ConceptData } from './redux/Store.interface';

export interface MapInputProps {
    location: string;
}

export interface SearchBranchListProps {
    data: BranchData[];
}

export interface BranchData {
    id: string;
    branchName: string;
    distance: string | null;
}

export interface BranchListProps {
    branchName: string;
    distance: string | null;
    branchID: string;
}

export interface LocationData {
    latitude: number;
    longitude: number;
}

export interface BranchLocationData {
    branchLocation: LocationData[];
}

export interface ResetLocationButtonProps {
    GetCurrentLocation: () => number;
    setMyPosition: React.Dispatch<React.SetStateAction<LocationData>>;
    setZoom: React.Dispatch<React.SetStateAction<number>>;
}

export interface BranchCardData {
    branchID: string;
    branchName: string;
    latitude: number;
    longitude: number;
    isLiked: boolean;
    distance: string;
    photoBoothBrand: BranchCardPhotoBoothData;
}

interface BranchCardPhotoBoothData {
    photoBoothName: string;
    logoImageURL: string;
    hashtag: ConceptData[];
}

export interface BranchCarouselProps {
    branchData: BranchCardData[];
}

export interface BranchCardProps {
    branchID: string;
    imageLogo: string;
    photoBoothName: string;
    branchName: string;
    id: ConceptData[];
    isLiked: boolean;
    distance: string;
}
