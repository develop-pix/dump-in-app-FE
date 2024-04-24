import { createStackNavigator } from '@react-navigation/stack';

import Category from 'screens/Category';
import EventDetail from 'screens/EventDetail';
import PhotoBoothDetail from 'screens/PhotoBoothDetail';
import ReviewDetail from 'screens/ReviewDetail';
import { colors } from 'styles/base/Variable';

const Stack = createStackNavigator();

export default function CategoryStackNavigation() {
    return (
        <Stack.Navigator
            id="CategoryStack"
            screenOptions={{
                headerShown: false,
                title: '',
                headerStyle: {
                    backgroundColor: colors.lightblack,
                },
                headerShadowVisible: false,
                headerTitleAlign: 'center',
            }}>
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen
                name="PhotoBoothDetail"
                component={PhotoBoothDetail}
                initialParams={{ PhotoBoothID: 0 }}
                options={{ headerShown: true, headerTransparent: true }}
            />
            <Stack.Screen
                name="ReviewDetail"
                component={ReviewDetail}
                initialParams={{ reviewID: null }}
                options={{ headerShown: true }}
            />
            <Stack.Screen
                name="EventDetail"
                component={EventDetail}
                initialParams={{ EventID: 0 }}
                options={{ headerShown: true, headerTransparent: true }}
            />
        </Stack.Navigator>
    );
}
