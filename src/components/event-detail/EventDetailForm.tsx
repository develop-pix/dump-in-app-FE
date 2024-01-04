import { useRoute } from '@react-navigation/native';

import NavigationBar from 'components/reuse/navigation-bar/NavigationBar';
import { ScreenName } from 'interfaces/NavigationBar';

import EventDetail from './EventDetail';

export default function EventDetailForm() {
    const route = useRoute();
    const currentScreen = (route.params as { screen: ScreenName }).screen;

    return (
        <>
            <EventDetail />
            <NavigationBar currentScreen={currentScreen} />
        </>
    );
}
