import { createStackNavigator } from '@react-navigation/stack';

import Branch from 'screens/Branch';
import Location from 'screens/Location';
import ReviewDetail from 'screens/ReviewDetail';
import { colors } from 'styles/base/Variable';

const Stack = createStackNavigator();

export default function LocationStackNavigation() {
    return (
        <Stack.Navigator id="LocationStack" screenOptions={{ headerShown: false, headerTitleAlign: 'center' }}>
            <Stack.Screen name="Location" component={Location} initialParams={{ PhotoBoothID: null }} />
            <Stack.Screen name="Branch" component={Branch} initialParams={{ branchID: 0 }} />
            <Stack.Screen
                name="ReviewDetail"
                component={ReviewDetail}
                initialParams={{ reviewID: null }}
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
