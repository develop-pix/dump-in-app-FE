import React from 'react';
import {
  ImageFileInputContainer,
  ImageUploadButton,
  ImageUploadButtonContainer,
} from '../../../styles/layout/review-new/input/ImageFileInput.style';
import {FontWhiteGreySmallestThinWithLineHeight} from '../../../styles/layout/reuse/text/Text.style';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../styles/base/Variable';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux/store';
import {setRepresentativeImage} from '../../../hooks/redux/ReviewData';

export default function ImageFileInput() {
  const dispatch = useAppDispatch();
  const representaiveImage = useAppSelector(
    state => state.reviewData,
  ).representativeImage;
  const onPressImageUpload = () => {
    //이미지 업로드
    dispatch(setRepresentativeImage('CDN 이미지 올려놓고 나온 링크'));
  };

  return (
    <ImageFileInputContainer>
      <LinearGradient
        colors={['transparent', colors.lightblack]}
        locations={[0, 0.5]}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 100,
        }}
      />
      <ImageUploadButtonContainer>
        <ImageUploadButton activeOpacity={0.7} onPress={onPressImageUpload}>
          <FontWhiteGreySmallestThinWithLineHeight>
            {representaiveImage === null
              ? '사진을 등록해주세요.'
              : '사진 수정하기'}
          </FontWhiteGreySmallestThinWithLineHeight>
        </ImageUploadButton>
      </ImageUploadButtonContainer>
    </ImageFileInputContainer>
  );
}
