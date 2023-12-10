import React from 'react';
import {
  CameraShotButton,
  CameraShotImage,
  CameraShotSelectContainer,
  CameraShotSelectWrapper,
  CameraShotTextContainer,
} from '../../../styles/layout/review-new/input/CameraShot.style';
import {
  ReviewErrorContainer,
  ReviewInputTitleContainer,
} from '../../../styles/layout/review-new/ReviewNew.style';
import {
  FontRedNormalThin,
  FontWhiteGreySmallerThin,
  FontWhiteSmallerThick,
  FontWhiteNormalThin,
  FontYellowSmallestThin,
} from '../../../styles/layout/reuse/text/Text.style';
import {useAppDispatch} from '../../../hooks/redux/store';
import {setCameraShot} from '../../../hooks/redux/ReviewData';
import {cameraShotSelectProps} from '../../../interfaces/ReviewNew.interface';

export default function CameraShotSelect({
  cameraShot,
  errorData,
}: cameraShotSelectProps) {
  const dispatch = useAppDispatch();
  const availableCameraShot = [
    {
      name: '클로즈업',
      image: require('../../../assets/image/filter/filter-close-up.png'),
    },
    {
      name: '상반신',
      image: require('../../../assets/image/filter/filter-bust.png'),
    },
    {
      name: '무릎',
      image: require('../../../assets/image/filter/filter-knee.png'),
    },
    {
      name: '전신',
      image: require('../../../assets/image/filter/filter-whole-body.png'),
    },
  ];

  // 카메라샷 선택시 dispatch
  const onPressCameraShotImage = (cameraShotName: string) => {
    if (cameraShotName === cameraShot) {
      dispatch(setCameraShot(null));
    } else {
      dispatch(setCameraShot(cameraShotName));
    }
  };
  return (
    <CameraShotSelectContainer>
      <ReviewInputTitleContainer>
        <FontWhiteNormalThin>카메라 샷</FontWhiteNormalThin>
        <FontRedNormalThin>*</FontRedNormalThin>
        {errorData.map(data => {
          return data.InputName === 'cameraShot' ? (
            <ReviewErrorContainer key={data.InputName}>
              <FontYellowSmallestThin>
                필수 입력 항목입니다.
              </FontYellowSmallestThin>
            </ReviewErrorContainer>
          ) : null;
        })}
      </ReviewInputTitleContainer>
      <CameraShotSelectWrapper>
        {availableCameraShot.map(cameraShotData => {
          return (
            <CameraShotButton
              key={cameraShotData.name}
              currentImage={cameraShotData.name}
              SelectedImage={cameraShot}
              onPress={() => onPressCameraShotImage(cameraShotData.name)}>
              <CameraShotImage
                currentImage={cameraShotData.name}
                SelectedImage={cameraShot}
                source={cameraShotData.image}
              />
              <CameraShotTextContainer>
                {cameraShot === cameraShotData.name ? (
                  <FontWhiteSmallerThick>
                    {cameraShotData.name}
                  </FontWhiteSmallerThick>
                ) : (
                  <FontWhiteGreySmallerThin>
                    {cameraShotData.name}
                  </FontWhiteGreySmallerThin>
                )}
              </CameraShotTextContainer>
            </CameraShotButton>
          );
        })}
      </CameraShotSelectWrapper>
    </CameraShotSelectContainer>
  );
}
