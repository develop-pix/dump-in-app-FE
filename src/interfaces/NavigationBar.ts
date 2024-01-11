import { ReactNode } from 'react';

export type RootStackParam = {
    Home: undefined;
    HomeSearch: { PhotoBoothName: string | null };
    Location: undefined | { PhotoBoothID: number | null };
    LocationSearch: { NextPage: 'BranchDetail' | 'ReviewNew' };
    Category: undefined;
    MyPage: undefined;
    Branch: { branchID: number };
    ReviewDetail: { reviewID: number };
    PhotoBoothDetail: { PhotoBoothID: number };
    EventDetail: { eventID: number };
    ReviewNew: { branchID: number | undefined };
    ReviewEdit: { ReviewID: number | null };
    Login: undefined;
    Notification: undefined;
    OfficialImageDetail: {
        photoBoothName: string;
        image: string[];
        index: number;
    };
};

export interface NavigationBarListItemProps {
    label: ScreenName;
    isFocused: boolean;
}

export type ScreenName = 'HomeTab' | 'LocationTab' | 'CategoryTab' | 'MyPageTab';

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
