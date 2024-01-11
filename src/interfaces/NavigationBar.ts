import { ReactNode } from 'react';

export type RootStackParam = {
    Home: { screen: ScreenName };
    HomeSearch: { screen: ScreenName; PhotoBoothName: string | null };
    Location: { screen: ScreenName } | { PhotoBoothID: number | null; screen: ScreenName };
    LocationSearch: { NextPage: 'BranchDetail' | 'ReviewNew'; screen: ScreenName };
    Category: { screen: ScreenName };
    MyPage: { screen: ScreenName };
    Branch: { branchID: number; screen: ScreenName };
    ReviewDetail: { reviewID: number; screen: ScreenName };
    PhotoBoothDetail: { PhotoBoothID: number; screen: ScreenName };
    EventDetail: { eventID: number; screen: ScreenName };
    ReviewNew: { branchID: number | undefined; screen: ScreenName };
    ReviewEdit: { ReviewID: number | null; screen: ScreenName };
    Login: { screen: ScreenName };
    Notification: { screen: ScreenName };
    OfficialImageDetail: {
        screen: ScreenName;
        photoBoothName: string;
        image: string[];
        index: number;
    };
};

export interface NavigationScreenParam {
    screen: ScreenName;
}

export interface NavigationBarListItemProps {
    label: ScreenName;
    isFocused: boolean;
}

export interface NavigationBarProps {
    currentScreen: ScreenName;
}

export type ScreenName = 'Home' | 'Location' | 'Category' | 'MyPage';

export type BranchParamList = {
    branchType: {
        branchID: number;
    };
};

export type ReviewDetailParamList = {
    reviewDetailType: {
        reviewID: number;
    };
};

export type ReviewEditParamList = {
    reviewType: {
        reviewID: number;
    };
};

export type LocationSearchParamList = {
    locationSearchType: {
        NextPage: 'BranchDetail' | 'ReviewNew';
        screen: ScreenName;
    };
};

export type PhotoBoothParamList = {
    photoBoothType: {
        PhotoBoothID: number | null;
    };
};

export type ScreenContextType = {
    screen: string;
    setScreen: React.Dispatch<React.SetStateAction<string>>;
};

export interface ScreenProviderProps {
    children: ReactNode;
}

export type NewReviewParamList = {
    branchType: {
        branchID: number | undefined;
    };
};

export type OfficialImageDetailParamList = {
    imageData: {
        photoBoothName: string | null;
        image: string[];
        index: number;
    };
};
