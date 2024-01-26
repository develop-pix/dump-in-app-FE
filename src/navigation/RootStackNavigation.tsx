import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import HomeSearch from 'screens/HomeSearch';
import LocationSearch from 'screens/LocationSearch';
import Notification from 'screens/Notification';
import OfficialImageDetail from 'screens/OfficialImageDetail';
import ReviewEdit from 'screens/ReviewEdit';
import ReviewNew from 'screens/ReviewNew';
import { colors } from 'styles/base/Variable';

import MainTabNavigation from './MainTabNavigation';

const Stack = createStackNavigator();

export default function RootStackNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                title: '',
                headerStyle: {
                    backgroundColor: colors.lightblack,
                },
                headerShadowVisible: false,
            }}>
            <Stack.Screen name="MainTab" component={MainTabNavigation} />
            <Stack.Screen
                name="AddReviewModal"
                component={ReviewNew}
                initialParams={{ branchID: undefined }}
                options={{ presentation: 'modal' }}
            />
            <Stack.Screen
                name="HomeSearch"
                component={HomeSearch}
                initialParams={{ photoBoothName: null }}
                options={{
                    ...TransitionPresets.FadeFromBottomAndroid,
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="Notification"
                component={Notification}
                options={{
                    ...TransitionPresets.FadeFromBottomAndroid,
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="LocationSearch"
                component={LocationSearch}
                options={{
                    ...TransitionPresets.FadeFromBottomAndroid,
                }}
            />
            <Stack.Screen
                name="OfficialImageDetail"
                component={OfficialImageDetail}
                initialParams={{
                    photoBoothName: null,
                    image: '',
                    index: 0,
                }}
            />
            <Stack.Screen
                name="ReviewEdit"
                component={ReviewEdit}
                initialParams={{ reviewID: null }}
                options={{ presentation: 'modal' }}
            />
        </Stack.Navigator>
    );
}
