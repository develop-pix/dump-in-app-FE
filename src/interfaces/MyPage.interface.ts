export type ActivityComponentProps = 'MyReviewList' | 'MyPostList' | 'MyPhotoBoothList' | 'MyEventList' | 'Login';

export interface MyActiveProps {
    activeComponent: ActivityComponentProps;
    updateActiveComponent: (activeComponent: ActivityComponentProps) => void;
}

export interface ActivityComponentItemProps {
    key: string;
    image: React.JSX.Element;
    activeImage: React.JSX.Element;
    text: string;
    component: ActivityComponentProps;
}

export interface MyPhotoBoothFrameProps {
    photoBoothData: MyPhotoBoothFrameType;
}

export interface MyPhotoBoothFrameType {
    id: string;
    location: string;
    photoBoothBrandName: string;
    photoBoothBrandLogoImageUrl: string;
    hashtag: HashtagType[];
    isLiked: boolean;
}

interface HashtagType {
    id: number;
    name: string;
}

export interface MyPageUserDataProps {
    activeComponent: ActivityComponentProps;
    updateActiveComponent: (newComponent: ActivityComponentProps) => void;
}

export interface OpenSourceLicenseType {
    libraryName?: string;
    _license?: string;
    homepage?: string;
    _licenseContent?: string;
}
