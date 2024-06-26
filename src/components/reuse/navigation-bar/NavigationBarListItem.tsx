import CategoryImage from 'assets/image/icon/navigation-icon/category.svg';
import ClickCategoryImage from 'assets/image/icon/navigation-icon/click_category.svg';
import ClickHomeImage from 'assets/image/icon/navigation-icon/click_home.svg';
import ClickLocationImage from 'assets/image/icon/navigation-icon/click_location.svg';
import ClickMyPageImage from 'assets/image/icon/navigation-icon/click_mypage.svg';
import HomeImage from 'assets/image/icon/navigation-icon/home.svg';
import LocationImage from 'assets/image/icon/navigation-icon/location.svg';
import MyPageImage from 'assets/image/icon/navigation-icon/mypage.svg';
import { NavigationBarListItemProps } from 'interfaces/NavigationBar.interface';
import {
    NavigationBarListItemContainer,
    NavigationImageContainer,
} from 'styles/layout/navigation-bar/NavigationBarItem.style';

const imageMap: Record<string, React.JSX.Element> = {
    HomeTab: <HomeImage />,
    LocationTab: <LocationImage />,
    CategoryTab: <CategoryImage />,
    MyPageTab: <MyPageImage />,
};

const clickImageMap: Record<string, React.JSX.Element> = {
    HomeTab: <ClickHomeImage />,
    LocationTab: <ClickLocationImage />,
    CategoryTab: <ClickCategoryImage />,
    MyPageTab: <ClickMyPageImage />,
};

export default function NavigationBarListItem({ label, isFocused }: NavigationBarListItemProps) {
    const imageSource = isFocused ? clickImageMap[label] : imageMap[label];

    return (
        <NavigationBarListItemContainer>
            <NavigationImageContainer>{imageSource}</NavigationImageContainer>
        </NavigationBarListItemContainer>
    );
}
