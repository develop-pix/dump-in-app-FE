import React, {useCallback, useEffect, useState} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ReviewDetailParamList} from '../../interfaces/NavigationBar';
import {
  ReviewDescBottom,
  ReviewDescMiddle,
  ReviewDescTop,
  ReviewDescriptionContainer,
  ReviewDetailFormContainer,
  ReviewDetailFormWrapper,
  ReviewImage,
  ReviewImageContainer,
  SeeMoreContainer,
  TitleContainer,
} from '../../styles/layout/review-detail/ReviewDetail.style';
import CloseButtonWithBranchName from '../reuse/button/CloseButtonWithBranchName';
import {ReviewData} from '../../interfaces/ReviewDetail.interface';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../styles/base/Variable';
import {
  DateText,
  HashtagsText,
  ReviewDescText,
  SeeMoreText,
} from '../../styles/layout/reuse/text/Text.style';
import {
  DateToReviewDateForm,
  TagsArrayToHashTagArrayForm,
} from '../../utils/FormChange';
import {
  NativeSyntheticEvent,
  Platform,
  TextLayoutEventData,
} from 'react-native';
import FavoirteButton from '../reuse/button/FavoritetButton';

export default function ReviewDetail() {
  const [favorite, setFavorite] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [textShown, setTextShown] = useState<boolean>(false);
  const [numLines, setNumLines] = useState<number | undefined>(undefined);

  const route = useRoute<RouteProp<ReviewDetailParamList, 'reviewType'>>();
  const platform = Platform.OS;

  useEffect(() => {
    setNumLines(textShown ? undefined : 2);
  }, [textShown]);

  /* Press 함수를 2개이상 넣어줄수 없어서 토글 형식으로 구현 */
  const onPressSeeMore = () => {
    setTextShown(!textShown);
  };

  /* Description이 2줄 초과 했을때 최대 라인수 2로 지정 , 더 보기 버튼 출력 */
  const onCheckTextLayout = useCallback(
    (e: NativeSyntheticEvent<TextLayoutEventData>) => {
      if (e.nativeEvent.lines.length > 2 && !textShown) {
        setShowMore(true);
        setNumLines(2);
      }
    },
    [textShown],
  );

  /* 임시 데이터 */
  const tempData: ReviewData[] = [
    {
      photoboothName: '포토그레이',
      branchName: '연희중앙점',
      reviewID: 1,
      representativeImage:
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      hashtag: ['무릎', '생일', '고데기 있음'],
      description:
        '처음 본 이벤트 프레임! 간만에 홍대왔다가 술톤으로 픽닷 찍기 ㅎㅎ',
      date: new Date(),
      mine: true,
      my_review: true,
    },
    {
      photoboothName: '포토그레이',
      branchName: '연희중앙점',
      reviewID: 2,
      representativeImage:
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      hashtag: ['무릎', '생일', '고데기 있음', '소품 많음'],
      description:
        '처음 본 이벤트 프레임! 간만에 홍대왔다가 술톤으로 픽닷 찍기 ㅎㅎ',
      date: new Date(),
      mine: true,
      my_review: true,
    },
    {
      photoboothName: '포토그레이',
      branchName: '연희중앙점',
      reviewID: 3,
      representativeImage:
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      hashtag: ['일상', '연예인', '크리스마스'],
      description:
        '테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 55글자임',
      date: new Date(),
      mine: true,
      my_review: true,
    },
    {
      photoboothName: '포토그레이',
      branchName: '연희중앙점',
      reviewID: 4,
      representativeImage:
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      hashtag: ['무릎', '소품 많음', '고데기 있음'],
      description:
        '처음 본 이벤트 프레임! 간만에 홍대왔다가 술톤으로 픽닷 찍기 ㅎㅎ',
      date: new Date(),
      mine: true,
      my_review: true,
    },
    {
      photoboothName: '포토그레이',
      branchName: '연희중앙점',
      reviewID: 5,
      representativeImage:
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      hashtag: ['이달의 프레임', '생일', '고데기 있음'],
      description:
        '처음 본 이벤트 프레임! 간만에 홍대왔다가 술톤으로 픽닷 찍기 ㅎㅎ',
      date: new Date(),
      mine: true,
      my_review: true,
    },
    {
      photoboothName: '포토그레이',
      branchName: '연희중앙점',
      reviewID: 6,
      representativeImage:
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      hashtag: ['콜라보', '커플', '고데기 있음', '앵글'],
      description:
        '처음 본 이벤트 프레임! 간만에 홍대왔다가 술톤으로 픽닷 찍기 ㅎㅎ',
      date: new Date(),
      mine: true,
      my_review: true,
    },
    {
      photoboothName: '인생네컷',
      branchName: '광교중앙점',
      reviewID: 7,
      representativeImage:
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      hashtag: ['무릎', '생일', '고데기 있음'],
      description:
        '처음 본 이벤트 프레임! 간만에 홍대왔다가 술톤으로 픽닷 찍기 ㅎㅎ 처음 본 이벤트 프레임! 간만에 홍대왔다가 술톤으로 픽닷 찍기 ㅎㅎ 처음 본 이벤트 프레임! 간만에 홍대왔다가 술톤으로 픽닷 찍기 ㅎㅎ',
      date: new Date(),
      mine: false,
      my_review: false,
    },
    {
      photoboothName: '포토그레이',
      branchName: '연희중앙점',
      reviewID: 8,
      representativeImage:
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      hashtag: ['무릎', '생일', '고데기 있음'],
      description:
        '테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 35글자임',
      date: new Date(),
      mine: true,
      my_review: true,
    },
    {
      photoboothName: '포토그레이',
      branchName: '연희중앙점',
      reviewID: 9,
      representativeImage:
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      hashtag: ['무릎', '생일', '고데기 있음'],
      description:
        '테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 40글자임',
      date: new Date(),
      mine: true,
      my_review: true,
    },
    {
      photoboothName: '포토그레이',
      branchName: '연희중앙점',
      reviewID: 10,
      representativeImage:
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      hashtag: ['무릎', '생일', '고데기 있음'],
      description:
        '테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 45글자임',
      date: new Date(),
      mine: true,
      my_review: true,
    },
    {
      photoboothName: '포토그레이',
      branchName: '연희중앙점',
      reviewID: 11,
      representativeImage:
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      hashtag: ['무릎', '생일', '고데기 있음'],
      description:
        '테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 50글자임',
      date: new Date(),
      mine: true,
      my_review: true,
    },
    {
      photoboothName: '포토그레이',
      branchName: '연희중앙점',
      reviewID: 12,
      representativeImage:
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      hashtag: ['무릎', '생일', '고데기 있음', '소품 많음'],
      description:
        '테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 35글자임',
      date: new Date(),
      mine: true,
      my_review: true,
    },
    {
      photoboothName: '포토그레이',
      branchName: '연희중앙점',
      reviewID: 13,
      representativeImage:
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      hashtag: ['일상', '연예인', '크리스마스'],
      description:
        '테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 55글자임',
      date: new Date(),
      mine: true,
      my_review: true,
    },
    {
      photoboothName: '포토그레이',
      branchName: '연희중앙점',
      reviewID: 14,
      representativeImage:
        'https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png',
      hashtag: ['일상', '연예인', '크리스마스'],
      description:
        '테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 테스트용 55글자임',
      date: new Date(),
      mine: true,
      my_review: true,
    },
  ];
  return (
    <ReviewDetailFormContainer>
      {tempData.map(data => {
        if (data.reviewID === route.params.reviewID) {
          return (
            <ReviewDetailFormWrapper key={data.reviewID}>
              <TitleContainer>
                <CloseButtonWithBranchName
                  photoboothName={data.photoboothName}
                  branchName={data.branchName}
                  mine={data.mine}
                />
              </TitleContainer>
              <ReviewImageContainer>
                <ReviewImage source={{uri: data.representativeImage}} />
                {platform === 'ios' ? (
                  <LinearGradient
                    colors={['transparent', colors.black]}
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
                    colors={['transparent', colors.black]}
                    locations={[0.1, 1]}
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: 130,
                      height: 300,
                    }}
                  />
                ) : null}
                <ReviewDescriptionContainer platform={platform}>
                  <ReviewDescTop>
                    <DateText>{DateToReviewDateForm(data.date)}</DateText>
                    <FavoirteButton
                      favorite={favorite}
                      setFavorite={setFavorite}
                    />
                  </ReviewDescTop>
                  <ReviewDescMiddle>
                    <ReviewDescText
                      onTextLayout={onCheckTextLayout}
                      numberOfLines={numLines}>
                      {data.description}
                    </ReviewDescText>
                    {showMore ? (
                      <SeeMoreContainer>
                        <SeeMoreText onPress={onPressSeeMore}>
                          {textShown ? '줄이기' : '더보기'}
                        </SeeMoreText>
                      </SeeMoreContainer>
                    ) : null}
                  </ReviewDescMiddle>
                  <ReviewDescBottom>
                    {TagsArrayToHashTagArrayForm(data.hashtag).map(tag => (
                      <HashtagsText key={tag}>{tag}</HashtagsText>
                    ))}
                  </ReviewDescBottom>
                </ReviewDescriptionContainer>
              </ReviewImageContainer>
            </ReviewDetailFormWrapper>
          );
        }
      })}
    </ReviewDetailFormContainer>
  );
}
