import { useNavigation } from '@react-navigation/native';

import BackBlackIcon from 'assets/image/icon/arrow_back_black.svg';
import { BackButton } from 'styles/layout/reuse/button/GoBackButton.style';

export default function GoBackButtonBlack() {
    const navigation = useNavigation();
    const onPressGoBack = () => {
        navigation.goBack();
    };
    return (
        <BackButton onPress={onPressGoBack}>
            <BackBlackIcon />
        </BackButton>
    );
}
