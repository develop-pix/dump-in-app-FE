import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from 'components/reuse/navigation-bar/TabBar';
import Category from 'screens/Category';
import Home from 'screens/Home';
import Location from 'screens/Location';
import MyPage from 'screens/MyPage';
import ReviewNew from 'screens/ReviewNew';

const Tab = createBottomTabNavigator();

export default function MainTabNavigation() {
    const tabBar = (props: BottomTabBarProps) => {
        return <TabBar {...props} />;
    };

    return (
        // TODO: 모든 스크린의 헤더 코드 재작성
        <Tab.Navigator tabBar={tabBar} screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Location" component={Location} initialParams={{ PhotoBoothID: null }} />
            <Tab.Screen name="AddReview" component={ReviewNew} initialParams={{ branchID: null }} />
            <Tab.Screen name="Category" component={Category} />
            <Tab.Screen name="MyPage" component={MyPage} />
        </Tab.Navigator>
    );
}
