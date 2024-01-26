import { createStackNavigator } from '@react-navigation/stack';

import EventDetail from 'screens/EventDetail';
import Home from 'screens/Home';
import PhotoBoothDetail from 'screens/PhotoBoothDetail';
import ReviewDetail from 'screens/ReviewDetail';
import { colors } from 'styles/base/Variable';

const Stack = createStackNavigator();

export default function HomeStackNavigation() {
    return (
        <Stack.Navigator
            id="HomeStack"
            screenOptions={{
                headerTitle: '',
                headerStyle: {
                    backgroundColor: colors.lightblack,
                },
                headerShadowVisible: false,
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="PhotoBoothDetail" component={PhotoBoothDetail} initialParams={{ PhotoBoothID: 0 }} />
            <Stack.Screen name="ReviewDetail" component={ReviewDetail} initialParams={{ reviewID: null }} />
            <Stack.Screen name="EventDetail" component={EventDetail} initialParams={{ EventID: 0 }} />
        </Stack.Navigator>
    );
}
