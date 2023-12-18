import React from 'react';
import {
  ImageFileInputContainer,
  ImageUploadButton,
  ImageUploadButtonContainer,
  NoDataImageContainer,
  PreviewImage,
  PreviewImageContainer,
} from '../../../styles/layout/review-new/input/ImageFileInput.style';
import {FontWhiteGreySmallestMediumWithLineHeight} from '../../../styles/layout/reuse/text/Text.style';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../styles/base/Variable';
import ButtonAddImage from '../../../assets/image/fileInput/ButtonAdd.png';
import {ImageFileInputProps} from '../../../interfaces/ReviewNew.interface';

export default function ImageFileInput({
  representaiveImage,
  setOpenModal,
}: ImageFileInputProps) {
  const onPressImageUpload = () => {
    setOpenModal(true);
  };

  return (
    <ImageFileInputContainer>
      {representaiveImage === null ? (
        <NoDataImageContainer onPress={onPressImageUpload} activeOpacity={0.8}>
          <PreviewImage source={ButtonAddImage} />
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
