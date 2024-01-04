import { useRoute } from '@react-navigation/native';

import NavigationBar from 'components/reuse/navigation-bar/NavigationBar';
import { ScreenName } from 'interfaces/NavigationBar';

import Branch from './Branch';

export default function BranchForm() {
    const route = useRoute();
    const currentScreen = (route.params as { screen: ScreenName }).screen;

    return (
        <>
            <Branch />
            <NavigationBar currentScreen={currentScreen} />
        </>
    );
}
