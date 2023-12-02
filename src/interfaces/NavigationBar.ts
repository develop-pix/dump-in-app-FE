import {ReactNode} from 'react';

export type RootStackParam = {
  Home: undefined;
  HomeSearch: undefined;
  Location: undefined | {photoboothID: number | null};
  LocationSearch: undefined;
  Category: undefined;
  MyPage: undefined;
  Branch: {branchID: number};
  ReviewDetail: {reviewID: number};
};

export interface NavigationBarListItemProps {
  screen: ScreenName;
  selectedScreen: string;
  handleListClick: (screen: ScreenName) => void;
}

export type ScreenName = 'Home' | 'Location' | 'Category' | 'MyPage';

export type BranchParamList = {
  branchType: {
    branchID: number;
  };
};

export type ReviewDetailParamList = {
  reviewType: {
    reviewID: number;
  };
};

export type PhotoBoothParamList = {
  photoboothType: {
    photoBoothID: number | null;
  };
};

export type ScreenContextType = {
  screen: string;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
};

export interface ScreenProviderProps {
  children: ReactNode;
}
