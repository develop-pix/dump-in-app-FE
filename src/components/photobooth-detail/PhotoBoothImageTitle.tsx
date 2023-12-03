import React, {useState} from 'react';
import GoBackButton from '../reuse/button/GoBackButton';
import FavoirteButton from '../reuse/button/FavoritetButton';
import {TagsArrayToHashTagArrayForm} from '../../utils/FormChange';
import {HashtagsText} from '../../styles/layout/reuse/text/Text.style';
import {ReviewDescBottom} from '../../styles/layout/review-detail/ReviewDetail.style';
import {PhotoBoothImageTitleProps} from '../../interfaces/PhotoBoothDetail.interface';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../styles/base/Variable';
import {
  PhotoBoothImageTitleContainer,
  PhotoBoothImageContentContainer,
  ButtonContainer,
  PhotoBoothImage,
  ContentsContainer,
  TitleContainer,
  NomalButtonContainer,
} from '../../styles/layout/photobooth-detail/PhotoBoothImageTitle.style';
import {Title} from '../../styles/layout/reuse/text/Text.style';
import {NormalButton} from '../reuse/button/NormalButton';

export default function PhotoBoothImageTitle({
  photoboothData,
}: PhotoBoothImageTitleProps) {
  const onPressButton = () => {
    // 지도 페이지로 이동
  };

  const [favorite, setFavorite] = useState<boolean>(
    photoboothData.myPhotobooth,
  );

  return (
    <PhotoBoothImageTitleContainer>
      <PhotoBoothImage source={{uri: photoboothData.representativeImage}}>
        <LinearGradient
          colors={['transparent', colors.black]}
          locations={[0.1, 1]}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 200,
          }}
        />
      </PhotoBoothImage>

      <PhotoBoothImageContentContainer>
        <ButtonContainer>
          <GoBackButton />
        </ButtonContainer>

        <ContentsContainer>
          <TitleContainer>
            <Title>{photoboothData.photoboothName}</Title>
            <FavoirteButton favorite={favorite} setFavorite={setFavorite} />
          </TitleContainer>

          <ReviewDescBottom>
            {TagsArrayToHashTagArrayForm(photoboothData.hashtag).map(tag => (
              <HashtagsText key={tag}>{tag}</HashtagsText>
            ))}
          </ReviewDescBottom>
        </ContentsContainer>

        <NomalButtonContainer>
          <NormalButton
            text="내 주변 포토부스 보러가기"
            onPress={onPressButton}
          />
        </NomalButtonContainer>
      </PhotoBoothImageContentContainer>
    </PhotoBoothImageTitleContainer>
  );
}
