export type ActivityComponentProps =
  | 'MyReviewList'
  | 'MyPostList'
  | 'MyPhotoBoothList'
  | 'MyEventList'
  | 'Login';

export interface MyActiveProps {
  activeComponent: ActivityComponentProps;
  setActiveComponent: (activeComponent: ActivityComponentProps) => void;
}

export interface ActivityComponentItemProps {
  key: string;
  image: string;
  activeImage: string;
  text: string;
  component: ActivityComponentProps;
}

export interface MyPhotoBoothFrameProps {
  photoBoothData: {
    photoBoothID: number;
    photoboothName: string;
    branch: string;
    representativeImage: string;
    hashtag: string[];
    myPhotoBooth: boolean;
  };
}

export interface MyPageMenuProps {
  visible: boolean;
  setMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
