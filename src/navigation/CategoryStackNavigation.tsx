import { createStackNavigator } from '@react-navigation/stack';

import Category from 'screens/Category';
import EventDetail from 'screens/EventDetail';
import PhotoBoothDetail from 'screens/PhotoBoothDetail';
import ReviewDetail from 'screens/ReviewDetail';

const Stack = createStackNavigator();

export default function CategoryStackNavigation() {
    return (
        <Stack.Navigator id="CategoryStack" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="PhotoBoothDetail" component={PhotoBoothDetail} initialParams={{ PhotoBoothID: 0 }} />
            <Stack.Screen name="ReviewDetail" component={ReviewDetail} initialParams={{ reviewID: null }} />
            <Stack.Screen name="EventDetail" component={EventDetail} initialParams={{ EventID: 0 }} />
        </Stack.Navigator>
    );
}
