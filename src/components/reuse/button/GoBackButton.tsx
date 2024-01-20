import { useNavigation } from '@react-navigation/native';

import BackIcon from 'assets/image/icon/arrow_back_white.svg';
import { BackButton } from 'styles/layout/reuse/button/GoBackButton.style';

export default function GoBackButton() {
    const navigation = useNavigation();
    const onPressGoBack = () => {
        navigation.goBack();
    };
    return (
        <BackButton onPress={onPressGoBack}>
            <BackIcon width={16} height={16} />
        </BackButton>
    );
}
