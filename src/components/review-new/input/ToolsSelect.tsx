import React from 'react';
import {
  ToolsButtonLeft,
  ToolsButtonRight,
  ToolsInputContainer,
  ToolsSelectContainer,
} from '../../../styles/layout/review-new/input/ToolsSelect.style';
import {ReviewInputTitleContainer} from '../../../styles/layout/review-new/ReviewNew.style';
import {
  FontBlackSmallerSemibold,
  FontLightGreySmallerMedium,
  FontWhiteNormalMedium,
} from '../../../styles/layout/reuse/text/Text.style';
import {useAppDispatch} from '../../../hooks/redux/store';
import {setTools} from '../../../hooks/redux/ReviewData';
import {ToolsSelectProps} from '../../../interfaces/ReviewNew.interface';

export default function ToolsSelect({tools}: ToolsSelectProps) {
  const dispatch = useAppDispatch();

  // 있음 버튼 선택시 dispatch
  const onPressTools = () => {
    if (tools === true) {
      dispatch(setTools(null));
    } else {
      dispatch(setTools(true));
    }
  };

  // 없음 버튼 선택시 dispatch
  const onPressNoTools = () => {
    if (tools === false) {
      dispatch(setTools(null));
    } else {
      dispatch(setTools(false));
    }
  };

  return (
    <ToolsSelectContainer>
      <ReviewInputTitleContainer>
        <FontWhiteNormalMedium>소품</FontWhiteNormalMedium>
      </ReviewInputTitleContainer>
      <ToolsInputContainer>
        {tools === true ? (
          <ToolsButtonLeft onPress={onPressTools} toolsOption={tools}>
            <FontBlackSmallerSemibold>있음</FontBlackSmallerSemibold>
          </ToolsButtonLeft>
        ) : (
          <ToolsButtonLeft onPress={onPressTools} toolsOption={tools}>
            <FontLightGreySmallerMedium>있음</FontLightGreySmallerMedium>
          </ToolsButtonLeft>
        )}
        {tools === false ? (
          <ToolsButtonRight onPress={onPressNoTools} toolsOption={tools}>
            <FontBlackSmallerSemibold>없음</FontBlackSmallerSemibold>
          </ToolsButtonRight>
        ) : (
          <ToolsButtonRight onPress={onPressNoTools} toolsOption={tools}>
            <FontLightGreySmallerMedium>없음</FontLightGreySmallerMedium>
          </ToolsButtonRight>
        )}
      </ToolsInputContainer>
    </ToolsSelectContainer>
  );
}
