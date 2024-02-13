export interface ReviewDataState {
    representativeImage: ImageData;
    image: ImageData[];
    enlargedImage: ImageData;
    description: string | null;
    branchID: string | undefined;
    date: Date | string | null;
    frameColor: string | null;
    party: number | null;
    cameraShot: string | null;
    concept: string[];
    tools: boolean | null;
    hairIron: boolean | null;
    publicOpen: boolean;
}

export interface ImageData {
    imageURL: string | undefined;
    imageName: string | undefined;
}
