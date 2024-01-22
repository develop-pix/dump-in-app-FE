import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';

import NextIcon from 'assets/image/icon/btn_next.svg';
import PrevIcon from 'assets/image/icon/btn_prev.svg';
import OfficialImageDetailHeader from 'components/reuse/header/OfficialImageDetailHeader';
import { RootStackScreenProps } from 'interfaces/Navigation.interface';
import {
    ButtonContainer,
    NextButtonContainer,
    OfficialImageDetailContainer,
    OfficialImageDetailForm,
    OfficialImageDetailFormContainer,
    OfficialImageDetailImage,
    PrevButtonContainer,
    TitleContainer,
} from 'styles/layout/official-image-detail/OfficialImageDetail.style';

export default function OfficialImageDetail() {
    const route = useRoute<RootStackScreenProps<'OfficialImageDetail'>['route']>();
    const [carouselActive, setCarouselActive] = useState<number>(0);

    const onPressPrevButton = () => {
        setCarouselActive(prev => prev - 1);
    };

    const onPressNextButton = () => {
        setCarouselActive(prev => prev + 1);
    };

    useEffect(() => {
        setCarouselActive(route.params.index);
    }, [route.params.index]);

    return (
        <OfficialImageDetailFormContainer>
            <TitleContainer>
                <OfficialImageDetailHeader photoBoothName={route.params.photoBoothName} />
            </TitleContainer>
            <OfficialImageDetailForm>
                <OfficialImageDetailContainer
                    scrollEnabled={false}
                    contentOffset={{
                        x: Dimensions.get('screen').width * carouselActive,
                        y: 0,
                    }}
                    horizontal
                    pagingEnabled
                    pinchGestureEnabled={false}
                    scrollEventThrottle={50}
                    showsHorizontalScrollIndicator={true}
                    snapToAlignment="start"
                    decelerationRate="fast">
                    {route.params.image.map((url, keyIndex) => {
                        return <OfficialImageDetailImage source={{ uri: url }} key={keyIndex} />;
                    })}
                </OfficialImageDetailContainer>
                <ButtonContainer>
                    {carouselActive !== 0 ? (
                        <PrevButtonContainer onPress={onPressPrevButton}>
                            <PrevIcon width={40} height={40} />
                        </PrevButtonContainer>
                    ) : null}
                    {carouselActive !== route.params.image.length - 1 ? (
                        <NextButtonContainer onPress={onPressNextButton}>
                            <NextIcon width={40} height={40} />
                        </NextButtonContainer>
                    ) : null}
                </ButtonContainer>
            </OfficialImageDetailForm>
        </OfficialImageDetailFormContainer>
    );
}
