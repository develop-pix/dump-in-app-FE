import { useEffect, useState } from 'react';
import { Dimensions, NativeScrollEvent } from 'react-native';

import { BranchCardData, BranchCarouselProps } from '../../../interfaces/Location.interface';
import { BranchCardContainer, Card, CarouselContainer } from '../../../styles/layout/location/BranchCarousel.style';

import BranchCard from './BranchCard';

export default function BranchCarousel({ showNearBranch }: BranchCarouselProps) {
    const pageWidth = Dimensions.get('window').width * 0.9;
    const gap = Dimensions.get('window').width * 0.02;
    const offset = Dimensions.get('window').width * 0.03;
    const [branchData, setBranchData] = useState<BranchCardData[]>([]);
    const [carouselActive, setCarouselActive] = useState<number>(0);

    // 지도 zoom 레벨에따라 tempData 호출 막아야함
    const tempData: BranchCardData[] = [
        {
            branchID: 1,
            imageLogo: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            photoboothName: '포토그레이',
            branchName: '연희중앙점',
            hashtag: ['레드프레임', '컨셉사진진', '레드레드레', '레드컨셉트'],
            myBranch: true,
            distance: 1010,
            elapsedTime: '20분',
        },
        {
            branchID: 2,
            imageLogo: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            photoboothName: '포토그레이',
            branchName: '연희중앙점',
            hashtag: ['레드프레임', '컨셉사진진', '연예인', '레드컨셉트'],
            myBranch: false,
            distance: 999,
            elapsedTime: '13분',
        },
        {
            branchID: 3,
            imageLogo: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            photoboothName: '포토그레이',
            branchName: '연희중앙점',
            hashtag: ['레드프레임', '컨셉사진진', '연예인', '레드컨셉트'],
            myBranch: true,
            distance: 500,
            elapsedTime: '10분',
        },
        {
            branchID: 4,
            imageLogo: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            photoboothName: '포토그레이',
            branchName: '연희중앙점',
            hashtag: ['레드프레임', '컨셉사진진', '연예인', '레드컨셉트'],
            myBranch: false,
            distance: 4000,
            elapsedTime: '160분',
        },
        {
            branchID: 5,
            imageLogo: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            photoboothName: '포토그레이',
            branchName: '연희중앙점',
            hashtag: ['레드프레임', '컨셉사진진', '연예인', '레드컨셉트'],
            myBranch: true,
            distance: 3200,
            elapsedTime: '120분',
        },
    ];

    const onCarouselScroll = (nativeEvent: NativeScrollEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            slide !== carouselActive ? setCarouselActive(slide) : null;
        }
    };

    useEffect(() => {
        setBranchData(tempData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BranchCardContainer>
            {showNearBranch ? (
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
                    {branchData.map(data => {
                        return (
                            <Card key={data.branchID}>
                                <BranchCard
                                    branchID={data.branchID}
                                    imageLogo={data.imageLogo}
                                    photoboothName={data.photoboothName}
                                    branchName={data.branchName}
                                    hashtag={data.hashtag}
                                    myBranch={data.myBranch}
                                    distance={data.distance}
                                    elapsedTime={data.elapsedTime}
                                />
                            </Card>
                        );
                    })}
                </CarouselContainer>
            ) : null}
        </BranchCardContainer>
    );
}
