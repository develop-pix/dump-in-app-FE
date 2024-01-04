import NavigationBar from 'components/reuse/navigation-bar/NavigationBar';

import HomeDataCollection from './HomeDataCollection';

export default function HomeForm() {
    return (
        <>
            <HomeDataCollection />
            <NavigationBar currentScreen="Home" />
        </>
    );
}
