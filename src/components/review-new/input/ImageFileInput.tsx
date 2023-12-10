import React from 'react';
import {
  ImageFileInputContainer,
  ImageUploadButton,
  ImageUploadButtonContainer,
  NoDataImageContainer,
  PreviewImage,
  PreviewImageContainer,
} from '../../../styles/layout/review-new/input/ImageFileInput.style';
import {FontWhiteGreySmallestThinWithLineHeight} from '../../../styles/layout/reuse/text/Text.style';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../styles/base/Variable';
import {useAppDispatch} from '../../../hooks/redux/store';
import {setRepresentativeImage} from '../../../hooks/redux/ReviewData';
import ButtonAddImage from '../../../assets/image/fileInput/ButtonAdd.png';
import {ImageFileInputProps} from '../../../interfaces/ReviewNew.interface';
import {launchImageLibrary} from 'react-native-image-picker';

export default function ImageFileInput({
  representaiveImage,
}: ImageFileInputProps) {
  const dispatch = useAppDispatch();

  const onPressImageUpload = async () => {
    //아래 maxWidth,maxHeight,quality 조절하여 용량 조절
    await launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 450,
        maxHeight: 600,
        quality: 1,
        includeBase64: false,
      },
      response => {
        if (response.didCancel) {
          return null;
        } else if (response.assets) {
          dispatch(setRepresentativeImage(response.assets[0].uri));
        }
      },
    );
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
