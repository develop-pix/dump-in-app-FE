import { useRoute } from '@react-navigation/native';

import NavigationBar from 'components/reuse/navigation-bar/NavigationBar';
import { ScreenName } from 'interfaces/NavigationBar';

import PhotoBoothDetail from './PhotoBoothDetail';

export default function PhotoBoothDetailForm() {
    const route = useRoute();
    const currentScreen = (route.params as { screen: ScreenName }).screen;

    return (
        <>
            <PhotoBoothDetail />
            <NavigationBar currentScreen={currentScreen} />
        </>
    );
}
