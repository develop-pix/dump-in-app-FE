import React from 'react';
import {
  EtcFrameColorButton,
  EtcFrameColorCheckIcon,
  FrameColorButton,
  FrameColorCheckIcon,
  FrameColorSelectContainer,
  FrameColorSelectWrapper,
} from '../../../styles/layout/review-new/input/FrameColorSelect.style';
import {
  ReviewErrorContainer,
  ReviewInputTitleContainer,
} from '../../../styles/layout/review-new/ReviewNew.style';
import {
  FontRedNormalMedium,
  FontWhiteNormalMedium,
  FontYellowSmallestMedium,
} from '../../../styles/layout/reuse/text/Text.style';
import {frameColors} from '../../../styles/base/Variable';
import {useAppDispatch} from '../../../hooks/redux/store';
import WhiteCheckImage from '../../../assets/image/filter/white-check.png';
import BlackCheckImage from '../../../assets/image/filter/black-check.png';
import EtcImage from '../../../assets/image/filter/etc-color.png';
import EtcCheckImage from '../../../assets/image/filter/etc-check-color.png';
import {setFrameColor} from '../../../hooks/redux/ReviewData';
import {FrameColorSelectProps} from '../../../interfaces/ReviewNew.interface';

export default function FrameColorSelect({
  frameColor,
  errorData,
}: FrameColorSelectProps) {
  const availableColors = Object.values(frameColors);
  const dispatch = useAppDispatch();

  // 프레임색상 선택시 dispatch
  const onPressColor = (color: string) => {
    if (frameColor === color) {
      dispatch(setFrameColor(null));
    } else {
      dispatch(setFrameColor(color));
    }
  };

  return (
    <FrameColorSelectContainer>
      <ReviewInputTitleContainer>
        <FontWhiteNormalMedium>프레임 색상</FontWhiteNormalMedium>
        <FontRedNormalMedium>*</FontRedNormalMedium>
        {errorData.map(data => {
          return data.InputName === 'frameColor' ? (
            <ReviewErrorContainer key={data.InputName}>
              <FontYellowSmallestMedium>
                필수 입력 항목입니다.
              </FontYellowSmallestMedium>
            </ReviewErrorContainer>
          ) : null;
        })}
      </ReviewInputTitleContainer>
      <FrameColorSelectWrapper>
        {availableColors.map(colors => {
          return (
            <FrameColorButton
              key={colors}
              colorOption={colors}
              isSelected={frameColor}
              onPress={() => onPressColor(colors)}>
              {frameColor === colors ? (
                <FrameColorCheckIcon
                  source={
                    frameColor === '#FFFFFF' ? BlackCheckImage : WhiteCheckImage
                  }
                />
              ) : null}
            </FrameColorButton>
          );
        })}
        {
          <EtcFrameColorButton
            isSelected={frameColor}
            onPress={() => onPressColor('etc')}>
            <EtcFrameColorCheckIcon
              source={frameColor === 'etc' ? EtcCheckImage : EtcImage}
            />
          </EtcFrameColorButton>
        }
      </FrameColorSelectWrapper>
    </FrameColorSelectContainer>
  );
}
