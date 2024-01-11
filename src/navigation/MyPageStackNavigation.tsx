import { createStackNavigator } from '@react-navigation/stack';

import Login from 'screens/Login';
import MyPage from 'screens/MyPage';

const Stack = createStackNavigator();

export default function MyPageStackNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MyPage" component={MyPage} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}
