import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from 'components/reuse/navigation-bar/TabBar';
import ReviewNew from 'screens/ReviewNew';

import CategoryStackNavigation from './CategoryStackNavigation';
import HomeStackNavigation from './HomeStackNavigation';
import LocationStackNavigation from './LocationStackNavigation';
import MyPageStackNavigation from './MyPageStackNavigation';

const Tab = createBottomTabNavigator();

export default function MainTabNavigation() {
    const tabBar = (props: BottomTabBarProps) => {
        return <TabBar {...props} />;
    };

    return (
        // TODO: 모든 스크린의 헤더 코드 재작성
        <Tab.Navigator tabBar={tabBar} screenOptions={{ headerShown: false }}>
            <Tab.Screen name="HomeTab" component={HomeStackNavigation} />
            <Tab.Screen name="LocationTab" component={LocationStackNavigation} />
            <Tab.Screen name="AddReview" component={ReviewNew} initialParams={{ branchID: null }} />
            <Tab.Screen name="CategoryTab" component={CategoryStackNavigation} />
            <Tab.Screen name="MyPageTab" component={MyPageStackNavigation} />
        </Tab.Navigator>
    );
}
