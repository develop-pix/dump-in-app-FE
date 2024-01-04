import { useRoute } from '@react-navigation/native';

import NavigationBar from 'components/reuse/navigation-bar/NavigationBar';
import { ScreenName } from 'interfaces/NavigationBar';

import ReviewDetail from './ReviewDetail';

export default function ReviewDetailForm() {
    const route = useRoute();
    const currentScreen = (route.params as { screen: ScreenName }).screen;

    return (
        <>
            <ReviewDetail />
            <NavigationBar currentScreen={currentScreen} />
        </>
    );
}
