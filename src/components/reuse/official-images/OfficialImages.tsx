import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import SearchNoData from 'components/reuse/alert/SearchNoData';
import { RootStackParam, ScreenName } from 'interfaces/NavigationBar';
import { OfficialImageProps } from 'interfaces/reuse/official-image/OfficialImage.interface';
import {
    OfficialContainer,
    OfficialImage,
    OfficialImagesContainer,
    OfficialImageWrapper,
    SubTitleContainer,
} from 'styles/layout/reuse/official-images/OfficialImages.style';
import { FontWhiteSmallerSemiboldWithLineSpacing } from 'styles/layout/reuse/text/Text.style';

export default function OfficialImages({ photoBoothName, image }: OfficialImageProps) {
    const isFocused = useIsFocused();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
    const route = useRoute();

    const onPressOfficialImage = (index: number) => {
        const currentScreen = (route.params as { screen: ScreenName }).screen;
        if (isFocused) {
            navigation.push('OfficialImageDetail', {
                screen: currentScreen,
                photoBoothName,
                image,
                index,
            });
        }
    };

    return (
        <OfficialContainer>
            <SubTitleContainer>
                <FontWhiteSmallerSemiboldWithLineSpacing>OFFICIAL</FontWhiteSmallerSemiboldWithLineSpacing>
            </SubTitleContainer>
            {image.length === 0 ? (
                <SearchNoData alertText="등록된 이미지가 없습니다." recommendText="" />
            ) : (
                <OfficialImagesContainer>
                    {image.map((url, index) => {
                        return (
                            <OfficialImageWrapper key={index} onPress={() => onPressOfficialImage(index)}>
                                <OfficialImage source={{ uri: url }} />
                            </OfficialImageWrapper>
                        );
                    })}
                </OfficialImagesContainer>
            )}
        </OfficialContainer>
    );
}
