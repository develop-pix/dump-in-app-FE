export interface MenuProps {
  visible: boolean;
  handleCloseMenu: () => void;
}

export type ActivityComponentProps =
  | 'MyReviewList'
  | 'MyPostList'
  | 'MyPhotoBoothList'
  | 'MyEventList';

export interface MyActiveProps {
  setActiveComponent: (activeComponent: ActivityComponentProps) => void;
}

export interface ActivityComponentItemProps {
  key: string;
  image: string;
  activeImage: string;
  text: string;
  component: ActivityComponentProps;
}
