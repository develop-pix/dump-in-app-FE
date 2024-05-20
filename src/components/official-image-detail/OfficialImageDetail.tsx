import { useEffect, useState } from 'react';
import { Dimensions, NativeScrollEvent } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import NextIcon from 'assets/image/icon/btn_next.svg';
import PrevIcon from 'assets/image/icon/btn_prev.svg';
import GoBackButton from 'components/reuse/button/GoBackButton';
import { RootStackScreenProps } from 'interfaces/Navigation.interface';
import {
    ButtonContainer,
    DotActive,
    DotContainer,
    NextButtonContainer,
    OfficialImageDetailContainer,
    OfficialImageDetailForm,
    OfficialImageDetailFormContainer,
    OfficialImageDetailImage,
    PrevButtonContainer,
} from 'styles/layout/official-image-detail/OfficialImageDetail.style';
import { HeaderLeftContainer } from 'styles/layout/reuse/header/Header.style';
import {
    FontWhiteGreySmallerMedium,
    FontWhiteNormalMedium,
    FontWhiteSmallerMedium,
} from 'styles/layout/reuse/text/Text.style';

export default function OfficialImageDetail() {
    const navigation = useNavigation<RootStackScreenProps<'OfficialImageDetail'>['navigation']>();
    const route = useRoute<RootStackScreenProps<'OfficialImageDetail'>['route']>();

    const [carouselActive, setCarouselActive] = useState(0);

    /** Carousel 좌우 스크롤시 페이지 이동 */
    const onScrollCarousel = (nativeEvent: NativeScrollEvent) => {
        let slide = 0;
        if (nativeEvent) {
            if (nativeEvent.contentOffset.x > carouselActive * nativeEvent.layoutMeasurement.width) {
                slide = Math.floor(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            } else if (nativeEvent.contentOffset.x < carouselActive * nativeEvent.layoutMeasurement.width) {
                slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            }

            if (slide !== carouselActive) {
                setCarouselActive(slide);
            }
        }
    };
    /** < 버튼 클릭 */
    const onPressPrevButton = () => {
        setCarouselActive(prev => prev - 1);
    };

    /** > 버튼 클릭 */
    const onPressNextButton = () => {
        setCarouselActive(prev => prev + 1);
    };

    // 페이지 진입 시 index로 캐러셀 페이지 이동
    useEffect(() => {
        setCarouselActive(route.params.index);
    }, [route.params.index]);

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => {
                return (
                    <HeaderLeftContainer>
                        <GoBackButton />
                    </HeaderLeftContainer>
                );
            },
            headerTitle: () => {
                return <FontWhiteNormalMedium>{route.params.photoBoothName}</FontWhiteNormalMedium>;
            },
        });
    }, [navigation, route.params.photoBoothName]);

    return (
        <OfficialImageDetailFormContainer>
            <OfficialImageDetailForm>
                <OfficialImageDetailContainer
                    scrollEnabled={true}
                    onScroll={({ nativeEvent }) => onScrollCarousel(nativeEvent)}
                    contentOffset={{
                        x: Dimensions.get('screen').width * carouselActive,
                        y: 0,
                    }}
                    horizontal
                    pagingEnabled
                    pinchGestureEnabled={false}
                    scrollEventThrottle={0}
                    showsHorizontalScrollIndicator={false}
                    snapToAlignment="start"
                    decelerationRate="fast">
                    {route.params.image.map((url, keyIndex) => {
                        return <OfficialImageDetailImage source={{ uri: url }} key={keyIndex} />;
                    })}
                </OfficialImageDetailContainer>
                <DotContainer>
                    {route.params.image.map((_, index) => (
                        <DotActive key={index}>
                            {index === carouselActive ? (
                                <FontWhiteSmallerMedium>●</FontWhiteSmallerMedium>
                            ) : (
                                <FontWhiteGreySmallerMedium>●</FontWhiteGreySmallerMedium>
                            )}
                        </DotActive>
                    ))}
                </DotContainer>
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
