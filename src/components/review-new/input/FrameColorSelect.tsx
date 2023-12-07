import React from 'react';
import {
  EtcFrameColorButton,
  EtcFrameColorCheckIcon,
  FrameColorButton,
  FrameColorCheckIcon,
  FrameColorSelectContainer,
  FrameColorSelectWrapper,
} from '../../../styles/layout/review-new/input/FrameColorSelect.style';
import {ReviewInputTitleContainer} from '../../../styles/layout/review-new/ReviewNew.style';
import {
  FontRedSmallerThickWithLineHeight,
  FontWhiteSmallerThick,
} from '../../../styles/layout/reuse/text/Text.style';
import {frameColors} from '../../../styles/base/Variable';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux/store';
import WhiteCheckImage from '../../../assets/image/filter/white-check.png';
import BlackCheckImage from '../../../assets/image/filter/black-check.png';
import EtcImage from '../../../assets/image/filter/etc-color.png';
import EtcCheckImage from '../../../assets/image/filter/etc-check-color.png';
import {setFrameColor} from '../../../hooks/redux/ReviewData';

export default function FrameColorSelect() {
  const availableColors = Object.values(frameColors);
  const dispatch = useAppDispatch();
  const frameColor = useAppSelector(state => state.reviewData).frameColor;

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
        <FontWhiteSmallerThick>프레임 색상</FontWhiteSmallerThick>
        <FontRedSmallerThickWithLineHeight>*</FontRedSmallerThickWithLineHeight>
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
