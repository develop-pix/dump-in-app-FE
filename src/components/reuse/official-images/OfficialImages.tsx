import { useIsFocused, useNavigation } from '@react-navigation/native';

import SearchNoData from 'components/reuse/alert/SearchNoData';
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
    const navigation = useNavigation();

    const onPressOfficialImage = (index: number) => {
        const images = image.map(url => {
            return url.imageUrl;
        });

        if (isFocused) {
            navigation.navigate('OfficialImageDetail', {
                photoBoothName,
                image: images,
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
                                <OfficialImage source={{ uri: url.imageUrl }} />
                            </OfficialImageWrapper>
                        );
                    })}
                </OfficialImagesContainer>
            )}
        </OfficialContainer>
    );
}
