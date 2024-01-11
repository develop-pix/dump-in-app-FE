import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import BackIcon from 'assets/image/icon/arrow_back_white.svg';
import {
    setBranchID,
    setCameraShot,
    setDate,
    setDescription,
    setFrameColor,
    setHairIron,
    setHashtag,
    setParty,
    setPublicOpen,
    setRepresentativeImage,
    setTools,
} from 'hooks/redux/ReviewData';
import { useAppDispatch } from 'hooks/redux/store';
import { RootStackParam } from 'interfaces/NavigationBar';
import { BackButton } from 'styles/layout/reuse/button/GoBackButton.style';

export default function GoBackButtonReview() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
    const dispatch = useAppDispatch();

    // BackButton 클릭시 redux 내용 초기화
    const onPressGoHome = () => {
        dispatch(setRepresentativeImage(null));
        dispatch(setDescription(null));
        dispatch(setBranchID(null));
        dispatch(setDate(null));
        dispatch(setFrameColor(null));
        dispatch(setParty(null));
        dispatch(setCameraShot(null));
        dispatch(setHashtag([]));
        dispatch(setTools(null));
        dispatch(setHairIron(null));
        dispatch(setPublicOpen(true));
        navigation.goBack();
    };

    return (
        <BackButton onPress={onPressGoHome}>
            <BackIcon width={16} height={16} />
        </BackButton>
    );
}
