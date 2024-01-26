import { createStackNavigator } from '@react-navigation/stack';

import Login from 'screens/Login';
import MyPage from 'screens/MyPage';
import PhotoBoothDetail from 'screens/PhotoBoothDetail';
import ReviewDetail from 'screens/ReviewDetail';
import { colors } from 'styles/base/Variable';

const Stack = createStackNavigator();

export default function MyPageStackNavigation() {
    return (
        <Stack.Navigator
            id="MyPageStack"
            screenOptions={{
                headerShown: true,
                title: '',
                headerStyle: {
                    backgroundColor: colors.blackgrey,
                },
                headerShadowVisible: false,
            }}>
            <Stack.Screen name="MyPage" component={MyPage} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="PhotoBoothDetail" component={PhotoBoothDetail} initialParams={{ PhotoBoothID: 0 }} />
            <Stack.Screen name="ReviewDetail" component={ReviewDetail} initialParams={{ reviewID: null }} />
        </Stack.Navigator>
    );
}
