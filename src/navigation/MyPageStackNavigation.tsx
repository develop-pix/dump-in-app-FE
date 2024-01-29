import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

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
                title: '',
                headerStyle: {
                    backgroundColor: colors.blackgrey,
                },
                headerShadowVisible: false,
            }}>
            <Stack.Screen name="MyPage" component={MyPage} options={{ headerLeft: () => null }} />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    ...TransitionPresets.SlideFromRightIOS,
                    headerStyle: {
                        backgroundColor: colors.lightblack,
                    },
                }}
            />
            <Stack.Screen
                name="PhotoBoothDetail"
                component={PhotoBoothDetail}
                initialParams={{ PhotoBoothID: 0 }}
                options={{ headerTransparent: true }}
            />
            <Stack.Screen name="ReviewDetail" component={ReviewDetail} initialParams={{ reviewID: null }} />
        </Stack.Navigator>
    );
}
