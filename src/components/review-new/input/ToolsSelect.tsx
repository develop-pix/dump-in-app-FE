import React from 'react';
import {
  ToolsButtonLeft,
  ToolsButtonRight,
  ToolsInputContainer,
  ToolsSelectContainer,
} from '../../../styles/layout/review-new/input/ToolsSelect.style';
import {ReviewInputTitleContainer} from '../../../styles/layout/review-new/ReviewNew.style';
import {
  FontBlackSmallerThick,
  FontLightGreySmallerThin,
  FontWhiteSmallerThick,
} from '../../../styles/layout/reuse/text/Text.style';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux/store';
import {setTools} from '../../../hooks/redux/ReviewData';

export default function ToolsSelect() {
  const dispatch = useAppDispatch();
  const tools = useAppSelector(state => state.reviewData).tools;

  const onPressTools = () => {
    if (tools === true) {
      dispatch(setTools(null));
    } else {
      dispatch(setTools(true));
    }
  };
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
        <FontWhiteSmallerThick>소품</FontWhiteSmallerThick>
      </ReviewInputTitleContainer>
      <ToolsInputContainer>
        {tools === true ? (
          <ToolsButtonLeft onPress={onPressTools} toolsOption={tools}>
            <FontBlackSmallerThick>있음</FontBlackSmallerThick>
          </ToolsButtonLeft>
        ) : (
          <ToolsButtonLeft onPress={onPressTools} toolsOption={tools}>
            <FontLightGreySmallerThin>있음</FontLightGreySmallerThin>
          </ToolsButtonLeft>
        )}
        {tools === false ? (
          <ToolsButtonRight onPress={onPressNoTools} toolsOption={tools}>
            <FontBlackSmallerThick>없음</FontBlackSmallerThick>
          </ToolsButtonRight>
        ) : (
          <ToolsButtonRight onPress={onPressNoTools} toolsOption={tools}>
            <FontLightGreySmallerThin>없음</FontLightGreySmallerThin>
          </ToolsButtonRight>
        )}
      </ToolsInputContainer>
    </ToolsSelectContainer>
  );
}
