import { useNavigation } from '@react-navigation/native';

import BackIcon from 'assets/image/icon/arrow_back_white.svg';
import { HeaderIconContainer } from 'styles/layout/reuse/header/Header.style';

export default function GoBackButton() {
    const navigation = useNavigation();
    const onPressGoBack = () => {
        navigation.goBack();
    };

    return (
        <HeaderIconContainer onPress={onPressGoBack}>
            <BackIcon width={16} height={16} />
        </HeaderIconContainer>
    );
}
