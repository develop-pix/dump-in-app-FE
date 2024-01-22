import { createStackNavigator } from '@react-navigation/stack';

import Branch from 'screens/Branch';
import Location from 'screens/Location';
import ReviewDetail from 'screens/ReviewDetail';

const Stack = createStackNavigator();

export default function LocationStackNavigation() {
    return (
        <Stack.Navigator id="LocationStack" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Location" component={Location} initialParams={{ PhotoBoothID: null }} />
            <Stack.Screen name="Branch" component={Branch} initialParams={{ branchID: 0 }} />
            <Stack.Screen name="ReviewDetail" component={ReviewDetail} initialParams={{ reviewID: null }} />
        </Stack.Navigator>
    );
}
