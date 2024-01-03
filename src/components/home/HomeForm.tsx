import NavigationBar from '../reuse/navigation-bar/NavigationBar';

import HomeDataCollection from './HomeDataCollection';

export default function HomeForm() {
    return (
        <>
            <HomeDataCollection />
            <NavigationBar currentScreen="Home" />
        </>
    );
}
