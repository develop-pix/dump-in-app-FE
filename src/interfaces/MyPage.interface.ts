import React from 'react';

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
  image: React.JSX.Element;
  activeImage: React.JSX.Element;
  text: string;
  component: ActivityComponentProps;
}

export interface MyPhotoBoothFrameProps {
  photoBoothData: MyPhotoBoothFrameType;
}

export interface MyPhotoBoothFrameType {
  photoBoothID: number;
  photoBoothName: string;
  branch: string;
  representativeImage: string;
  hashtag: string[];
  myPhotoBooth: boolean;
}

export interface MyPageMenuProps {
  visible: boolean;
  setMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
