import React from 'react';
import {
  ImageFileInputContainer,
  ImageUploadButton,
  ImageUploadButtonContainer,
  NoDataImageContainer,
  PreviewImage,
  PreviewImageContainer,
  PreviewNoImage,
  ReviewErrorContainerFileInput,
} from '../../../styles/layout/review-form/input/ImageFileInput.style';
import {
  FontRedNormalMedium,
  FontWhiteGreySmallestMediumWithLineHeight,
  FontYellowSmallestMedium,
} from '../../../styles/layout/reuse/text/Text.style';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../styles/base/Variable';
import ButtonAddImage from '../../../assets/image/icon/btn_add.svg';
import {ImageFileInputProps} from '../../../interfaces/ReviewEdit.interface';

export default function ImageFileInput({
  representaiveImage,
  setOpenModal,
  errorData,
}: ImageFileInputProps) {
  const onPressImageUpload = () => {
    setOpenModal(true);
  };

  return (
    <ImageFileInputContainer>
      {representaiveImage === null ? (
        <NoDataImageContainer onPress={onPressImageUpload} activeOpacity={0.8}>
          <PreviewNoImage>
            <ButtonAddImage width={17} height={17} />
          </PreviewNoImage>
        </NoDataImageContainer>
      ) : (
        <PreviewImageContainer>
          <PreviewImage source={{uri: representaiveImage}} />
        </PreviewImageContainer>
      )}

      <LinearGradient
        colors={['transparent', colors.lightblack]}
        locations={[0, 1]}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 150,
        }}
      />
      {errorData.map(data => {
        return data.InputName === 'representaiveImage' ? (
          <ReviewErrorContainerFileInput key={data.InputName}>
            <FontRedNormalMedium>*</FontRedNormalMedium>
            <FontYellowSmallestMedium>
              필수 등록 항목입니다.
            </FontYellowSmallestMedium>
          </ReviewErrorContainerFileInput>
        ) : null;
      })}
      <ImageUploadButtonContainer>
        <ImageUploadButton activeOpacity={0.7} onPress={onPressImageUpload}>
          <FontWhiteGreySmallestMediumWithLineHeight>
            {representaiveImage === null
              ? '사진을 등록해주세요.'
              : '사진 수정하기'}
          </FontWhiteGreySmallestMediumWithLineHeight>
        </ImageUploadButton>
      </ImageUploadButtonContainer>
    </ImageFileInputContainer>
  );
}
