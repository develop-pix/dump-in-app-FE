import { useState } from 'react';
import { Dimensions, NativeScrollEvent } from 'react-native';

import { BranchCarouselProps } from 'interfaces/Location.interface';
import { BranchCardContainer, Card, CarouselContainer } from 'styles/layout/location/BranchCarousel.style';

import BranchCard from './BranchCard';

export default function BranchCarousel({ branchData }: BranchCarouselProps) {
    const pageWidth = Dimensions.get('window').width * 0.9;
    const gap = Dimensions.get('window').width * 0.02;
    const offset = Dimensions.get('window').width * 0.03;
    const [carouselActive, setCarouselActive] = useState<number>(0);

    //TODO: 추후 필요 없을 시 제거
    const onCarouselScroll = (nativeEvent: NativeScrollEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            slide !== carouselActive ? setCarouselActive(slide) : null;
        }
    };

    return (
        <BranchCardContainer>
            <CarouselContainer
                onScroll={({ nativeEvent }) => onCarouselScroll(nativeEvent)}
                horizontal
                pagingEnabled
                snapToInterval={pageWidth + gap}
                contentContainerStyle={{ paddingHorizontal: offset + gap / 2 }}
                scrollEventThrottle={0}
                showsHorizontalScrollIndicator={false}
                snapToAlignment="start"
                decelerationRate="fast">
                {branchData.map((data, index) => {
                    return (
                        <Card key={index}>
                            <BranchCard
                                branchID={data.branchID}
                                imageLogo={data.photoBoothBrand.logoImageURL}
                                photoBoothName={data.photoBoothBrand.photoBoothName}
                                branchName={data.branchName}
                                hashtag={data.photoBoothBrand.hashtag}
                                myBranch={data.isLiked}
                                distance={data.distance}
                            />
                        </Card>
                    );
                })}
            </CarouselContainer>
        </BranchCardContainer>
    );
}
