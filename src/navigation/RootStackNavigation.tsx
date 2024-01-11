import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import HomeSearch from 'screens/HomeSearch';
import Notification from 'screens/Notification';
import ReviewNew from 'screens/ReviewNew';

import MainTabNavigation from './MainTabNavigation';

const Stack = createStackNavigator();

export default function RootStackNavigation() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainTab" component={MainTabNavigation} />
            <Stack.Screen
                name="AddReviewModal"
                component={ReviewNew}
                initialParams={{ branchID: null }}
                options={{ presentation: 'modal' }}
            />
            <Stack.Screen
                name="HomeSearch"
                component={HomeSearch}
                initialParams={{ PhotoBoothName: null }}
                options={{
                    ...TransitionPresets.FadeFromBottomAndroid,
                }}
            />
            <Stack.Screen
                name="Notification"
                component={Notification}
                options={{
                    ...TransitionPresets.FadeFromBottomAndroid,
                }}
            />
        </Stack.Navigator>
    );
}
