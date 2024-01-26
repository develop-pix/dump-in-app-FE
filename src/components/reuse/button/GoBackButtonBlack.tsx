import { useNavigation } from '@react-navigation/native';

import BackBlackIcon from 'assets/image/icon/arrow_back_black.svg';
import { HeaderIconContainer } from 'styles/layout/reuse/header/Header.style';

export default function GoBackButtonBlack() {
    const navigation = useNavigation();
    const onPressGoBack = () => {
        navigation.goBack();
    };

    return (
        <HeaderIconContainer onPress={onPressGoBack}>
            <BackBlackIcon />
        </HeaderIconContainer>
    );
}
