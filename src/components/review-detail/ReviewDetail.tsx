import { useEffect, useState } from 'react';
import { Dimensions, Platform } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import SeeMoreIcon from 'assets/image/icon/btn_more.svg';
import NextIcon from 'assets/image/icon/btn_next.svg';
import PrevIcon from 'assets/image/icon/btn_prev.svg';
import LocationIcon from 'assets/image/icon/location_white.svg';
import GoBackButton from 'components/reuse/button/GoBackButton';
import {
    HomeStackScreenProps,
    LocationStackScreenProps,
    MyPageStackScreenProps,
} from 'interfaces/Navigation.interface';
import { ReviewData } from 'interfaces/ReviewDetail.interface';
import { colors } from 'styles/base/Variable';
import {
    HeaderIconContainer,
    HeaderLeftContainer,
    HeaderRightContainer,
    RowContainer,
} from 'styles/layout/reuse/header/Header.style';
import { FontWhiteNormalMedium } from 'styles/layout/reuse/text/Text.style';
import {
    ButtonContainer,
    NextButtonContainer,
    PrevButtonContainer,
    ReviewDetailCarousel,
    ReviewDetailForm,
    ReviewDetailFormContainer,
    ReviewDetailFormWrapper,
    ReviewImage,
    ReviewImageContainer,
} from 'styles/layout/review-detail/ReviewDetail.style';

import ReviewDescription from './ReviewDescription';
import ReviewManageModal from './ReviewManageModal';
// FIXME: style이 이상하게 적용되어 있음 재구성 필요
export default function ReviewDetail() {
    const navigation = useNavigation<
        | HomeStackScreenProps<'ReviewDetail'>['navigation']
        | LocationStackScreenProps<'ReviewDetail'>['navigation']
        | MyPageStackScreenProps<'ReviewDetail'>['navigation']
    >();
    const route = useRoute<
        | HomeStackScreenProps<'ReviewDetail'>['route']
        | LocationStackScreenProps<'ReviewDetail'>['route']
        | MyPageStackScreenProps<'ReviewDetail'>['route']
    >();
    const headerHeight = useHeaderHeight();

    const [openModal, setOpenModal] = useState(false);
    const [carouselActive, setCarouselActive] = useState(0);

    const platform = Platform.OS;
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const onPressPrevButton = () => {
        setCarouselActive(prev => prev - 1);
    };

    const onPressNextButton = () => {
        setCarouselActive(prev => prev + 1);
    };

    /** 임시 데이터 */
    const tempData: ReviewData[] = [
        {
            photoBoothName: '포토그레이',
            branchName: '연희중앙점',
            reviewID: 1,
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            image: [
                {
                    imageID: 1,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 2,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
            ],
            hashtag: ['무릎', '생일', '고데기 있음'],
            description: '처음 본 이벤트 프레임! 간만에 홍대왔다가 술톤으로 픽닷 찍기 ㅎㅎ',
            date: new Date(),
            mine: true,
            my_review: true,
        },
        {
            photoBoothName: '포토그레이',
            branchName: '연희중앙점',
            reviewID: 2,
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            image: [
                {
                    imageID: 1,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
            ],
            hashtag: ['무릎', '생일', '고데기 있음', '소품 많음'],
            description: '처음 본 이벤트 프레임! 간만에 홍대왔다가 술톤으로 픽닷 찍기 ㅎㅎ',
            date: new Date(),
            mine: true,
            my_review: true,
        },
        {
            photoBoothName: '포토그레이',
            branchName: '연희중앙점',
            reviewID: 3,
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            image: [
                {
                    imageID: 1,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 2,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 3,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
            ],
            hashtag: ['일상', '연예인', '크리스마스'],
            description:
                '테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 55글자임',
            date: new Date(),
            mine: true,
            my_review: true,
        },
        {
            photoBoothName: '포토그레이',
            branchName: '연희중앙점',
            reviewID: 4,
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            image: [
                {
                    imageID: 1,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 2,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 3,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 4,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
            ],
            hashtag: ['무릎', '소품 많음', '고데기 있음'],
            description: '처음 본 이벤트 프레임! 간만에 홍대왔다가 술톤으로 픽닷 찍기 ㅎㅎ',
            date: new Date(),
            mine: true,
            my_review: true,
        },
        {
            photoBoothName: '포토그레이',
            branchName: '연희중앙점',
            reviewID: 5,
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            image: [
                {
                    imageID: 1,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 2,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 3,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 4,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
            ],
            hashtag: ['이달의 프레임', '생일', '고데기 있음'],
            description: '처음 본 이벤트 프레임! 간만에 홍대왔다가 술톤으로 픽닷 찍기 ㅎㅎ',
            date: new Date(),
            mine: true,
            my_review: true,
        },
        {
            photoBoothName: '포토그레이',
            branchName: '연희중앙점',
            reviewID: 6,
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            image: [
                {
                    imageID: 1,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 2,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 3,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 4,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
            ],
            hashtag: ['콜라보', '커플', '고데기 있음', '앵글'],
            description: '처음 본 이벤트 프레임! 간만에 홍대왔다가 술톤으로 픽닷 찍기 ㅎㅎ',
            date: new Date(),
            mine: true,
            my_review: true,
        },
        {
            photoBoothName: '인생네컷',
            branchName: '광교중앙점',
            reviewID: 7,
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            image: [
                {
                    imageID: 1,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 2,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 3,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 4,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
            ],
            hashtag: ['무릎', '생일', '고데기 있음'],
            description:
                '처음 본 이벤트 프레임! 간만에 홍대왔다가 술톤으로 픽닷 찍기 ㅎㅎ 처음 본 이벤트 프레임! 간만에 홍대왔다가 술톤으로 픽닷 찍기 ㅎㅎ 처음 본 이벤트 프레임! 간만에 홍대왔다가 술톤으로 픽닷 찍기 ㅎㅎ',
            date: new Date(),
            mine: false,
            my_review: false,
        },
        {
            photoBoothName: '포토그레이',
            branchName: '연희중앙점',
            reviewID: 8,
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            image: [
                {
                    imageID: 1,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 2,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 3,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 4,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
            ],
            hashtag: ['무릎', '생일', '고데기 있음'],
            description: '테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 35글자임',
            date: new Date(),
            mine: true,
            my_review: true,
        },
        {
            photoBoothName: '포토그레이',
            branchName: '연희중앙점',
            reviewID: 9,
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            image: [
                {
                    imageID: 1,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 2,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 3,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 4,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
            ],
            hashtag: ['무릎', '생일', '고데기 있음'],
            description: '테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 40글자임',
            date: new Date(),
            mine: true,
            my_review: true,
        },
        {
            photoBoothName: '포토그레이',
            branchName: '연희중앙점',
            reviewID: 10,
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            image: [
                {
                    imageID: 1,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 2,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 3,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 4,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
            ],
            hashtag: ['무릎', '생일', '고데기 있음'],
            description: '테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 45글자임',
            date: new Date(),
            mine: true,
            my_review: true,
        },
        {
            photoBoothName: '포토그레이',
            branchName: '연희중앙점',
            reviewID: 11,
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            image: [
                {
                    imageID: 1,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 2,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 3,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 4,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
            ],
            hashtag: ['무릎', '생일', '고데기 있음'],
            description: '테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 50글자임',
            date: new Date(),
            mine: true,
            my_review: true,
        },
        {
            photoBoothName: '포토그레이',
            branchName: '연희중앙점',
            reviewID: 12,
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            image: [
                {
                    imageID: 1,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 2,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 3,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 4,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
            ],
            hashtag: ['무릎', '생일', '고데기 있음', '소품 많음'],
            description: '테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 35글자임',
            date: new Date(),
            mine: true,
            my_review: true,
        },
        {
            photoBoothName: '포토그레이',
            branchName: '연희중앙점',
            reviewID: 13,
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            image: [
                {
                    imageID: 1,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 2,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 3,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 4,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
            ],
            hashtag: ['일상', '연예인', '크리스마스'],
            description:
                '테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 55글자임',
            date: new Date(),
            mine: true,
            my_review: true,
        },
        {
            photoBoothName: '포토그레이',
            branchName: '연희중앙점',
            reviewID: 14,
            representativeImage: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
            image: [
                {
                    imageID: 1,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 2,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 3,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
                {
                    imageID: 4,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
                },
            ],
            hashtag: ['일상', '연예인', '크리스마스'],
            description:
                '테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 55글자임',
            date: new Date(),
            mine: true,
            my_review: true,
        },
    ];

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => {
                return (
                    <HeaderLeftContainer>
                        <GoBackButton />
                    </HeaderLeftContainer>
                );
            },
            // FIXME: isMine 관련 변경 필요
            headerRight: () => {
                return (
                    <HeaderRightContainer>
                        <HeaderIconContainer onPress={() => {}}>
                            <SeeMoreIcon width={4} height={16} />
                        </HeaderIconContainer>
                    </HeaderRightContainer>
                );
            },
            headerTitle: () => {
                return (
                    <RowContainer>
                        <LocationIcon width={20} height={24} style={{ marginRight: 4 }} />
                        <FontWhiteNormalMedium>PhotoBooth명</FontWhiteNormalMedium>
                    </RowContainer>
                );
            },
            headerTitleAlign: 'center',
        });
    }, [navigation]);

    return (
        <ReviewDetailFormContainer>
            {tempData.map(data => {
                if (data.reviewID === route.params.reviewID) {
                    return (
                        <ReviewDetailForm key={data.reviewID}>
                            <ReviewDetailFormWrapper>
                                {/* <TitleContainer>
                                    <ReviewDetailHeader
                                        photoBoothName={data.photoBoothName}
                                        branchName={data.branchName}
                                        mine={data.mine}
                                        setOpenModal={setOpenModal}
                                    />
                                </TitleContainer> */}
                                <ReviewDetailCarousel
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
                                    <ReviewImageContainer>
                                        <ReviewImage source={{ uri: data.representativeImage }} />
                                        {platform === 'ios' ? (
                                            <LinearGradient
                                                colors={['transparent', colors.lightblack]}
                                                locations={[0, 1]}
                                                style={{
                                                    position: 'absolute',
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 150,
                                                    height: 300,
                                                }}
                                            />
                                        ) : platform === 'android' ? (
                                            <LinearGradient
                                                colors={['transparent', colors.lightblack]}
                                                locations={[0.1, 1]}
                                                style={{
                                                    position: 'absolute',
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 120,
                                                    height: 300,
                                                }}
                                            />
                                        ) : null}
                                    </ReviewImageContainer>
                                    {data.image.map(imageData => {
                                        return (
                                            <ReviewImageContainer key={imageData.imageID}>
                                                <ReviewImage source={{ uri: imageData.imageUrl }} />
                                                {platform === 'ios' ? (
                                                    <LinearGradient
                                                        colors={['transparent', colors.lightblack]}
                                                        locations={[0, 1]}
                                                        style={{
                                                            position: 'absolute',
                                                            left: 0,
                                                            right: 0,
                                                            bottom: 150,
                                                            height: 300,
                                                        }}
                                                    />
                                                ) : platform === 'android' ? (
                                                    <LinearGradient
                                                        colors={['transparent', colors.lightblack]}
                                                        locations={[0.1, 1]}
                                                        style={{
                                                            position: 'absolute',
                                                            left: 0,
                                                            right: 0,
                                                            bottom: 120,
                                                            height: 300,
                                                        }}
                                                    />
                                                ) : null}
                                            </ReviewImageContainer>
                                        );
                                    })}
                                </ReviewDetailCarousel>
                                <ButtonContainer>
                                    {carouselActive !== 0 ? (
                                        <PrevButtonContainer onPress={onPressPrevButton}>
                                            <PrevIcon width={40} height={40} />
                                        </PrevButtonContainer>
                                    ) : null}
                                    {carouselActive !== data.image.length ? (
                                        <NextButtonContainer onPress={onPressNextButton}>
                                            <NextIcon width={40} height={40} />
                                        </NextButtonContainer>
                                    ) : null}
                                </ButtonContainer>
                                <ReviewDescription
                                    date={data.date}
                                    description={data.description}
                                    hashtag={data.hashtag}
                                />
                            </ReviewDetailFormWrapper>
                            {openModal ? (
                                <ReviewManageModal setOpenModal={setOpenModal} reviewID={route.params.reviewID} />
                            ) : null}
                        </ReviewDetailForm>
                    );
                }
            })}
        </ReviewDetailFormContainer>
    );
}
