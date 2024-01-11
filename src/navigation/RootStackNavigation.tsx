import { createStackNavigator } from '@react-navigation/stack';

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
        </Stack.Navigator>
    );
}
