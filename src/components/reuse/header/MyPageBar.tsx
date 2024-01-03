import { Platform } from 'react-native';

import MenuIcon from '../../../assets/image/icon/menu.svg';
import { MyPageBarProps } from '../../../interfaces/reuse/header/MyPageBar.interface';
import {
    ButtonContainer,
    MenuIconContainer,
    MyPageGoBackButtonContainerWithSafeArea,
    MyPageMenuButtonContainerWithSafeArea,
} from '../../../styles/layout/reuse/header/MyPageBar.style';
import GoBackButton from '../button/GoBackButton';

export default function MyPageBar({ setMenuVisible }: MyPageBarProps) {
    const platform = Platform.OS;

    const handleOpenMenu = () => {
        setMenuVisible(true);
    };

    return (
        <ButtonContainer>
            <MyPageGoBackButtonContainerWithSafeArea platform={platform}>
                <GoBackButton />
            </MyPageGoBackButtonContainerWithSafeArea>

            <MyPageMenuButtonContainerWithSafeArea platform={platform} onPress={handleOpenMenu}>
                <MenuIconContainer>
                    <MenuIcon width={18} height={12} />
                </MenuIconContainer>
            </MyPageMenuButtonContainerWithSafeArea>
        </ButtonContainer>
    );
}
