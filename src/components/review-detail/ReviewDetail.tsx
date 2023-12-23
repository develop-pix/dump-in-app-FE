import React, {useState} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ReviewDetailParamList} from '../../interfaces/NavigationBar';
import {
  ReviewDetailForm,
  ReviewDetailFormContainer,
  ReviewDetailFormWrapper,
  ReviewImage,
  ReviewImageContainer,
  TitleContainer,
} from '../../styles/layout/review-detail/ReviewDetail.style';
import ReviewDetailHeader from '../reuse/header/ReviewDetailHeader';
import {ReviewData} from '../../interfaces/ReviewDetail.interface';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../styles/base/Variable';
import {Platform} from 'react-native';
import ReviewDescription from './ReviewDescription';
import ReviewManageModal from './ReviewManageModal';

export default function ReviewDetail() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const route =
    useRoute<RouteProp<ReviewDetailParamList, 'reviewDetailType'>>();
  const platform = Platform.OS;
  console.log(route.params);

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
            <ReviewDetailForm key={data.reviewID}>
              <ReviewDetailFormWrapper>
                <TitleContainer>
                  <ReviewDetailHeader
                    photoboothName={data.photoboothName}
                    branchName={data.branchName}
                    mine={data.mine}
                    setOpenModal={setOpenModal}
                  />
                </TitleContainer>
                <ReviewImageContainer>
                  <ReviewImage source={{uri: data.representativeImage}} />
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
                        bottom: 130,
                        height: 300,
                      }}
                    />
                  ) : null}
                  <ReviewDescription
                    date={data.date}
                    description={data.description}
                    hashtag={data.hashtag}
                  />
                </ReviewImageContainer>
              </ReviewDetailFormWrapper>
              {openModal ? (
                <ReviewManageModal
                  setOpenModal={setOpenModal}
                  reviewID={route.params.reviewID}
                />
              ) : null}
            </ReviewDetailForm>
          );
        }
      })}
    </ReviewDetailFormContainer>
  );
}
