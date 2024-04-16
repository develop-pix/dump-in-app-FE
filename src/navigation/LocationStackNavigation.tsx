import { createStackNavigator } from '@react-navigation/stack';

import Branch from 'screens/Branch';
import Location from 'screens/Location';
import LocationSearch from 'screens/LocationSearch';
import ReviewDetail from 'screens/ReviewDetail';
import { colors } from 'styles/base/Variable';

const Stack = createStackNavigator();

export default function LocationStackNavigation() {
    return (
        <Stack.Navigator id="LocationStack" screenOptions={{ headerShown: false, headerTitleAlign: 'center' }}>
            <Stack.Screen name="Location" component={Location} initialParams={{ PhotoBoothID: null }} />
            <Stack.Screen name="Branch" component={Branch} initialParams={{ branchID: 0 }} />
            <Stack.Screen
                name="LocationSearch"
                component={LocationSearch}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: colors.blackgrey,
                    },
                    headerShadowVisible: false,
                    headerTitleAlign: 'center',
                    headerTitle: '',
                }}
            />
            <Stack.Screen
                name="ReviewDetail"
                component={ReviewDetail}
                initialParams={{
                    reviewID: null,
                    prevReviewID: null,
                    reviewType: 'photo_booth',
                    frameColor: null,
                    participants: null,
                    cameraShot: null,
                    concept: [],
                }}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: colors.lightblack,
                    },
                    headerShadowVisible: false,
                    headerTitleAlign: 'center',
                }}
            />
        </Stack.Navigator>
    );
}
