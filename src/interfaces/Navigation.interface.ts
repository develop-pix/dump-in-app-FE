import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
    MainTab: NavigatorScreenParams<MainTabParamList>;
    AddReviewModal: { branchID: number | undefined };
    HomeSearch: { photoBoothName: string | null };
    Notification: undefined;
    LocationSearch: undefined;
    OfficialImageDetail: {
        photoBoothName: string;
        image: string[];
        index: number;
    };
    ReviewEdit: { reviewID: number | null };
};

export type RootStackScreenProps<RouteName extends keyof RootStackParamList> = StackScreenProps<
    RootStackParamList,
    RouteName
>;

export type MainTabParamList = {
    HomeTab: NavigatorScreenParams<HomeStackParamList>;
    LocationTab: NavigatorScreenParams<LocationStackParamList>;
    AddReview: undefined;
    CategoryTab: NavigatorScreenParams<CategoryStackParamList>;
    MyPageTab: NavigatorScreenParams<MyPageStackParamList>;
};

export type MainTabScreenProps<RouteName extends keyof MainTabParamList> = CompositeScreenProps<
    BottomTabScreenProps<MainTabParamList, RouteName>,
    RootStackScreenProps<keyof RootStackParamList>
>;

export type HomeStackParamList = {
    Home: undefined;
    PhotoBoothDetail: { photoBoothID: number };
    ReviewDetail: { reviewID: number };
    EventDetail: { eventID: number };
};

export type HomeStackScreenProps<RouteName extends keyof HomeStackParamList> = CompositeScreenProps<
    StackScreenProps<HomeStackParamList, RouteName>,
    RootStackScreenProps<keyof RootStackParamList>
>;

export type LocationStackParamList = {
    Location: undefined | { photoBoothID: number | null };
    Branch: { branchID: number };
    ReviewDetail: { reviewID: number };
};

export type LocationStackScreenProps<RouteName extends keyof LocationStackParamList> = CompositeScreenProps<
    StackScreenProps<LocationStackParamList, RouteName>,
    RootStackScreenProps<keyof RootStackParamList>
>;

export type CategoryStackParamList = {
    Category: undefined;
    PhotoBoothDetail: { photoBoothID: number };
    ReviewDetail: { reviewID: number };
    EventDetail: { eventID: number };
};

export type CategoryStackScreenProps<RouteName extends keyof CategoryStackParamList> = CompositeScreenProps<
    StackScreenProps<CategoryStackParamList, RouteName>,
    RootStackScreenProps<keyof RootStackParamList>
>;

export type MyPageStackParamList = {
    MyPage: undefined;
    Login: undefined;
    PhotoBoothDetail: { photoBoothID: number };
    ReviewDetail: { reviewID: number };
};

export type MyPageStackScreenProps<RouteName extends keyof MyPageStackParamList> = CompositeScreenProps<
    StackScreenProps<MyPageStackParamList, RouteName>,
    RootStackScreenProps<keyof RootStackParamList>
>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}
