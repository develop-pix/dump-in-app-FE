import { useRoute } from '@react-navigation/native';

import NavigationBar from 'components/reuse/navigation-bar/NavigationBar';
import { ScreenName } from 'interfaces/NavigationBar';

import MyPage from './MyPage';

export default function MyPageForm() {
    const route = useRoute();
    const currentScreen = (route.params as { screen: ScreenName }).screen;

    return (
        <>
            <MyPage />
            <NavigationBar currentScreen={currentScreen} />
        </>
    );
}
