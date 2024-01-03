import NavigationBar from '../reuse/navigation-bar/NavigationBar';

import Category from './Category';

export default function CategoryForm() {
    return (
        <>
            <Category />
            <NavigationBar currentScreen="Category" />
        </>
    );
}
