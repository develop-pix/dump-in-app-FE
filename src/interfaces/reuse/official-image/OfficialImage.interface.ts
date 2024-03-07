export interface OfficialImageProps {
    photoBoothName: string;
    image: PhotoBoothImageData[];
}

export interface PhotoBoothImageData {
    id: number;
    imageUrl: string;
}
