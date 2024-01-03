import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';

import { setDescription } from '../../../hooks/redux/ReviewData';
import { useAppDispatch } from '../../../hooks/redux/store';
import { ReviewDescriptionProps } from '../../../interfaces/ReviewNew.interface';
import { colors } from '../../../styles/base/Variable';
import {
    FontLightGreySmallestMedium,
    FontRedNormalMedium,
    FontWhiteNormalMedium,
    FontYellowSmallestMedium,
} from '../../../styles/layout/reuse/text/Text.style';
import {
    ReviewDescriptionCount,
    ReviewDescriptionInputContainer,
    ReviewDescriptionTextInput,
    ReviewDescriptionTextInputContainer,
} from '../../../styles/layout/review-form/input/ReviewDescriptionInput.style';
import { ReviewErrorContainer, ReviewInputTitleContainer } from '../../../styles/layout/review-form/ReviewForm.style';

export default function ReviewDescriptionInput({ description, errorData }: ReviewDescriptionProps) {
    // 위치 선택 후 돌아왔을때 게시글 길이를 유지하기 위함
    const [inputCount, setInputCount] = useState<number>(0);
    const platform = Platform.OS;
    const dispatch = useAppDispatch();

    // 게시글이 변경 될때 글자길이 count 및 문자열 dispatch
    const onChangeText = (e: string) => {
        dispatch(setDescription(e));
    };

    useEffect(() => {
        if (description) {
            setInputCount(description.length);
        }
    }, [description]);

    return (
        <ReviewDescriptionInputContainer>
            <ReviewInputTitleContainer>
                <FontWhiteNormalMedium>게시글</FontWhiteNormalMedium>
                <FontRedNormalMedium>*</FontRedNormalMedium>
                {errorData.map(data => {
                    return data.InputName === 'description' ? (
                        <ReviewErrorContainer key={data.InputName}>
                            <FontYellowSmallestMedium>필수 입력 항목입니다.</FontYellowSmallestMedium>
                        </ReviewErrorContainer>
                    ) : null;
                })}
            </ReviewInputTitleContainer>
            <ReviewDescriptionTextInputContainer>
                <ReviewDescriptionTextInput
                    platform={platform}
                    multiline={true}
                    placeholder="이 사진에 어떤 추억이 있었나요?"
                    placeholderTextColor={colors.lightgrey}
                    onChangeText={onChangeText}
                    maxLength={100}
                    value={description ? description : undefined}
                    textAlignVertical="top"
                />
                <ReviewDescriptionCount>
                    <FontLightGreySmallestMedium>{inputCount} / 100</FontLightGreySmallestMedium>
                </ReviewDescriptionCount>
            </ReviewDescriptionTextInputContainer>
        </ReviewDescriptionInputContainer>
    );
}
