import { useRoute } from '@react-navigation/native';

import NavigationBar from 'components/reuse/navigation-bar/NavigationBar';
import { ScreenName } from 'interfaces/NavigationBar';

import Login from './Login';

export default function LoginForm() {
    const route = useRoute();
    const currentScreen = (route.params as { screen: ScreenName }).screen;

    return (
        <>
            <Login />
            <NavigationBar currentScreen={currentScreen} />
        </>
    );
}
