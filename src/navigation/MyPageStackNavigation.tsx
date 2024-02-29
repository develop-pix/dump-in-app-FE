import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import MyPageMenu from 'components/my-page/MyPageMenu';
import Branch from 'screens/Branch';
import Login from 'screens/Login';
import MyPage from 'screens/MyPage';
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
                headerTitleAlign: 'center',
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
                    headerMode: 'screen',
                }}
            />
            <Stack.Screen
                name="Menu"
                component={MyPageMenu}
                options={{
                    ...TransitionPresets.SlideFromRightIOS,
                    headerStyle: {
                        backgroundColor: colors.lightblack,
                    },
                    headerMode: 'screen',
                }}
            />
            <Stack.Screen
                name="Branch"
                component={Branch}
                initialParams={{ branchID: null }}
                options={{ headerTransparent: true }}
            />
            <Stack.Screen
                name="ReviewDetail"
                component={ReviewDetail}
                initialParams={{ reviewID: null }}
                options={{
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
