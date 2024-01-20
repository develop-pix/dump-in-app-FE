export interface OfficialImageProps {
    photoBoothName: string;
    image: PhotoBoothImageData[];
}

interface PhotoBoothImageData {
    id: number;
    imageUrl: string;
}
